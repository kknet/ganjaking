<?php

/**
 * .ics Exporter
 */
class WC_Bookings_ICS_Exporter {

	/**
	 * Bookings list to export
	 *
	 * @var array
	 */
	protected $bookings = array();

	/**
	 * File path
	 *
	 * @var string
	 */
	protected $file_path = '';

	/**
	 * UID prefix.
	 *
	 * @var string
	 */
	protected $uid_prefix = 'wc_bookings_';

	/**
	 * End of line.
	 *
	 * @var string
	 */
	protected $eol = "\r\n";

	/**
	 * Get booking .ics
	 *
	 * @param  WC_Booking $booking Booking data
	 *
	 * @return string .ics path
	 */
	public function get_booking_ics( $booking ) {
		$product          = $booking->get_product();
		$this->file_path  = $this->get_file_path( $booking->get_id() . '-' . $product->get_title() );
		$this->bookings[] = $booking;

		// Create the .ics
		$this->create();

		return $this->file_path;
	}

	/**
	 * Get .ics for bookings.
	 *
	 * @param  array  $bookings Array with WC_Booking objects
	 * @param  string $filename .ics filename
	 *
	 * @return string .ics path
	 */
	public function get_ics( $bookings, $filename = '' ) {
		// Create a generic filename.
		if ( '' == $filename ) {
			$filename = 'bookings-' . date_i18n( 'Ymd-His', current_time( 'timestamp' ) );
		}

		$this->file_path = $this->get_file_path( $filename );
		$this->bookings  = $bookings;

		// Create the .ics
		$this->create();

		return $this->file_path;
	}

	/**
	 * Get file path
	 *
	 * @param  string $filename Filename
	 *
	 * @return string
	 */
	protected function get_file_path( $filename ) {
		$upload_data = wp_upload_dir();

		return $upload_data['path'] . '/' . sanitize_title( $filename ) . '.ics';
	}

	/**
	 * Create the .ics file
	 *
	 * @return void
	 */
	protected function create() {
		// @codingStandardIgnoreStart
		$handle = @fopen( $this->file_path, 'w' );
		$ics = $this->generate();
		@fwrite( $handle, $ics );
		@fclose( $handle );
		// @codingStandardIgnoreEnd
	}

	/**
	 * Format the date
	 *
	 * @version 1.10.0
	 *
	 * @param int        $timestamp Timestamp to format.
	 * @param WC_Booking $booking   Booking object.
	 *
	 * @return string Formatted date for ICS.
	 */
	protected function format_date( $timestamp, $booking = null ) {
		$pattern = 'Ymd\THis';
		$old_ts  = $timestamp;

		if ( $booking ) {
			$pattern = ( $booking->is_all_day() ) ? 'Ymd' : $pattern;

			// If we're working on the end timestamp
			if ( $booking->get_end() === $timestamp ) {
				// If bookings are more than 1 day, ics format for the end date should be the day after the booking ends
				if ( strtotime( 'midnight', $booking->get_start() ) !== strtotime( 'midnight', $booking->get_end() ) ) {
					$timestamp += 86400;
				}
			}
		}

		return apply_filters( 'woocommerce_bookings_ics_format_date', date( $pattern, $timestamp ), $timestamp, $old_ts, $booking );
	}

	/**
	 * Sanitize strings for .ics
	 *
	 * @param  string $string
	 *
	 * @return string
	 */
	protected function sanitize_string( $string ) {
		$string = preg_replace( '/([\,;])/', '\\\$1', $string );
		$string = str_replace( "\n", '\n', $string );
		$string = sanitize_text_field( $string );

		return $string;
	}

	/**
	 * Generate the .ics content
	 *
	 * @return string
	 */
	protected function generate() {
		$sitename = get_option( 'blogname' );

		// Set the ics data.
		$ics = 'BEGIN:VCALENDAR' . $this->eol;
		$ics .= 'VERSION:2.0' . $this->eol;
		$ics .= 'PRODID:-//WooThemes//WooCommerce Bookings ' . WC_BOOKINGS_VERSION . '//EN' . $this->eol;
		$ics .= 'CALSCALE:GREGORIAN' . $this->eol;
		$ics .= 'X-WR-CALNAME:' . $this->sanitize_string( $sitename ) . $this->eol;
		$ics .= 'X-ORIGINAL-URL:' . $this->sanitize_string( get_site_url( get_current_blog_id(), '/' ) ) . $this->eol;
		/* translators: 1: site name */
		$ics .= 'X-WR-CALDESC:' . $this->sanitize_string( sprintf( __( 'Bookings from %s', 'woocommerce-bookings' ), $sitename ) ) . $this->eol;
		$ics .= 'X-WR-TIMEZONE:' . wc_booking_get_timezone_string() . $this->eol;

		foreach ( $this->bookings as $booking ) {
			$product     = $booking->get_product();
			$url         = ( $booking->get_order() ) ? $booking->get_order()->get_view_order_url() : '';
			$summary     = '#' . $booking->get_id() . ' - ' . $product->get_title();
			$description = '';
			$date_prefix = ( $booking->is_all_day() ) ? ';VALUE=DATE:' : ':';
			$resource    = $booking->get_resource();

			if ( $resource ) {
				$description .= __( 'Resource #', 'woocommerce-bookings' ) . $resource->ID . ' - ' . $resource->post_title . '\n\n';
			}

			if ( $booking->has_persons() ) {
				foreach ( $booking->get_persons() as $id => $qty ) {
					if ( 0 === $qty ) {
						continue;
					}

					$person_type = ( 0 < $id ) ? get_the_title( $id ) : __( 'Person(s)', 'woocommerce-bookings' );
					/* translators: 1: person type 2: quantity */
					$description .= sprintf( __( '%1$s: %2$d', 'woocommerce-bookings' ), $person_type, $qty ) . '\n';
				}

				$description .= '\n';
			}

			$post_excerpt = get_post( $product->get_id() )->post_excerpt;

			if ( '' !== $post_excerpt ) {
				$description .= __( 'Booking description:', 'woocommerce-bookings' ) . '\n';
				$description .= wp_kses( $post_excerpt, array() );
			}

			$ics .= 'BEGIN:VEVENT' . $this->eol;
			$ics .= 'DTEND' . $date_prefix . $this->format_date( $booking->get_end(), $booking ) . $this->eol;
			$ics .= 'UID:' . $this->uid_prefix . $booking->get_id() . $this->eol;
			$ics .= 'DTSTAMP:' . $this->format_date( current_time( 'timestamp' ) ) . $this->eol;
			$ics .= 'LOCATION:' . $this->eol;
			$ics .= 'DESCRIPTION:' . $this->sanitize_string( $description ) . $this->eol;
			$ics .= 'URL;VALUE=URI:' . $this->sanitize_string( $url ) . $this->eol;
			$ics .= 'SUMMARY:' . $this->sanitize_string( $summary ) . $this->eol;
			$ics .= 'DTSTART' . $date_prefix . $this->format_date( $booking->get_start(), $booking ) . $this->eol;
			$ics .= 'END:VEVENT' . $this->eol;
		}

		$ics .= 'END:VCALENDAR';

		return $ics;
	}
}
