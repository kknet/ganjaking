(function($,window,document,undefined){$.fn.wc_wishlists_form=function(){var $form=this;if($form.hasClass('variations_form')){$form.find('.wl-add-to').addClass('disabled')}
$form.on('hide_variation',function(){$form.find('.wl-add-to').addClass('disabled')}).on('show_variation',function(){$form.find('.wl-add-to').removeClass('disabled')});setTimeout(function(){$form.trigger('check_variations')},50)};$(document).on('wc_variation_form',function(e){var $form=$(e.target);$form.wc_wishlists_form()})})(jQuery,window,document);(function($){var WCWL={current_product_form:0};jQuery(document).ready(function($){var composite_class=$('.composite_wrap').length?'.composite_wrap':!1;if(!composite_class){composite_class=$('.bundle_wrap').length===1?'.bundle_wrap':($('.composite_wrap').length?'.composite_wrap':!1)}
var bundles=$(composite_class);if(bundles.length){$('.wl-button-wrap').appendTo($(composite_class)).removeClass('hide')}else{var variations=$('.variations_button');if(variations.length){$('.wl-button-wrap').removeClass('hide')}}
$(".wl-panel").hide();$("ul.wl-tabs li:first").addClass("active").show();$(".wl-panel:first").show();$("ul.wl-tabs li").click(function(){$("ul.wl-tabs li").removeClass("active");$(this).addClass("active");$(".wl-panel").hide();var activeTab=$(this).find("a").attr("href");$(activeTab).fadeIn();return!1});$('#wl-list-pop-wrap').hide();$('.wl-list-pop').hide();$('#wl-list-pop-wrap').click(function(){WCWL.current_product_form=null;WCWL.current_product_id=0;$('.wl-list-pop').hide();$('#wl-list-pop-wrap').hide();$(window).unbind('scroll',adjust_scroll)});_productlink=null;$('body').on('click','.wl-add-to',function(e){if($(this).hasClass('disabled')){e.preventDefault();return!1}
WCWL.current_product_form=$(this).closest('form.cart').eq(0);if(!WCWL.current_product_form||WCWL.current_product_form.length===0){if($(this).closest('form.composite_form').length){console.log('composite_form');WCWL.current_product_form=$(this).closest('form.composite_form').eq(0)}else if($(this).closest('form.bundle_form').length){console.log('bundle_form');WCWL.current_product_form=$(this).closest('form.bundle_form').eq(0)}}
WCWL.current_product_id=$(this).data('productid');_productlink=$(this);if($(this).hasClass('wl-add-to-single')){return}
$('#wl-list-pop-wrap').show();$('.wl-list-pop').show();var wlx=$(this).offset().left;var wly=$(this).offset().top;if($('#wpadminbar ').length){$(".wl-list-pop").css({top:wly-28,left:wlx}).show()}else{$(".wl-list-pop").css({top:wly,left:wlx}).show()}
$(window).bind('scroll',adjust_scroll);return!1});function adjust_scroll(){var buttontop=_productlink.offset().top;if($('#wpadminbar ').length){buttontop=buttontop-28}
$(".wl-list-pop").css({top:buttontop})}
$(document).keyup(function(e){if(e.keyCode==27){$('.wl-list-pop-wrap').hide()}});$('body').on('click','.wl-add-to-single',function(event){event.preventDefault();var wlid=$(this).data('listid');var $form=WCWL.current_product_form;$form.find("input#wlid").val(wlid);var sep=wishlist_params.current_url.indexOf('?')>=0?'&':'?';const form_action=wishlist_params.current_url+sep+'add-to-wishlist-itemid='+WCWL.current_product_id;$form.attr('action',form_action);$form.attr('method','post');$form.submit();return!1});$('.wl-shop-add-to-single').click(function(event){event.preventDefault();window.location.href=_productlink.attr('href')+"&wlid="+$(this).data('listid');return!1});$('.wlconfirm').click(function(){var message=$(this).data('message');var answer=confirm(message?message:wishlist_params.are_you_sure);return answer});$('input[type=checkbox]','.wl-table thead tr th').click(function(){$(this).closest('table').find(':checkbox').attr('checked',this.checked)});$('.share-via-email-button').click(function(event){var form_id=$(this).data('form');$('#'+form_id).trigger('submit',[]);return!0});$('.move-list-sel').change(function(event){$('.move-list-sel').val($(this).val())});$('.btn-apply').click(function(event){event.preventDefault();$("#wlupdateaction").val('bulk');$('#wl-items-form').submit();return!1});$('#wleditaction1').change(function(){$('#wleditaction2').val($(this).val())});$('#wleditaction2').change(function(){$('#wleditaction1').val($(this).val())});$('.wishlist-add-to-cart-button').click(function(e){e.preventDefault();var href=($(this).attr('href'));var qty=$(this).closest('tr').find('input.qty').val();var url=href+'&quantity='+qty;window.location=url;return!1});$('.wishlist-add-to-cart-button-view').click(function(e){e.preventDefault();var href=($(this).attr('href'));var qty=prompt(wishlist_params.quantity_prompt,$(this).data('qty'));if(qty==null||qty==""){return!1}else{var url=href+'&quantity='+qty;window.location=url;return!1}})})})(jQuery)