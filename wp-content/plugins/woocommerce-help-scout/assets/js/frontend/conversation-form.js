(function ($) {
    "use strict";
    $(function () {
        $("#order-conversation-file-1").plupload({
            runtimes: "html5,flash,silverlight,html4",
            url: woocommerce_help_scout_form_params.ajax_url + "?action=wc_help_scout_upload_attachments",
            max_file_count: 20,
            chunk_size: "1mb",
            filters: {
                max_file_size: "1000mb",
                mime_types: [
                    { title: "Image files", extensions: "jpg,gif,png,jpeg" },
                    { title: "Zip files", extensions: "zip" },
                    { title: "Pdf files", extensions: "pdf" },
                    { title: "Doc files", extensions: "docx,doc,xlsx,csv,txt" },
                ],
            },
            rename: true,
            sortable: true,
            dragdrop: true,
            views: { list: true, thumbs: true, active: "thumbs" },
            init: {
                FileUploaded: function (up, file, info) {
                    var beforeFiles = $("#order_conversation_uploaded_files_1").val();
                    if (beforeFiles != "") {
                        $("#order_conversation_uploaded_files_1").val(beforeFiles + "," + file.name);
                    } else {
                        $("#order_conversation_uploaded_files_1").val(file.name);
                    }
                },
            },
        });
        $("#my-account-conversation-file-1").plupload({
            runtimes: "html5,flash,silverlight,html4",
            url: woocommerce_help_scout_form_params.ajax_url + "?action=wc_help_scout_upload_attachments",
            max_file_count: 20,
            chunk_size: "1mb",
            filters: {
                max_file_size: "1000mb",
                mime_types: [
                    { title: "Image files", extensions: "jpg,gif,png,jpeg" },
                    { title: "Zip files", extensions: "zip" },
                    { title: "Pdf files", extensions: "pdf" },
                    { title: "Doc files", extensions: "docx,doc,xlsx,csv,txt" },
                ],
            },
            rename: true,
            sortable: true,
            dragdrop: true,
            views: { list: true, thumbs: true, active: "thumbs" },
            init: {
                FileUploaded: function (up, file, info) {
                    console.log(file.name);
                    var beforeFiles = $("#my_account_conversation_uploaded_files_1").val();
                    if (beforeFiles != "") {
                        $("#my_account_conversation_uploaded_files_1").val(beforeFiles + "," + file.name);
                    } else {
                        $("#my_account_conversation_uploaded_files_1").val(file.name);
                    }
                },
            },
        });
        $("#file-1").plupload({
            runtimes: "html5,flash,silverlight,html4",
            url: woocommerce_help_scout_form_params.ajax_url + "?action=wc_help_scout_upload_attachments",
            max_file_count: 20,
            chunk_size: "1mb",
            filters: {
                max_file_size: "1000mb",
                mime_types: [
                    { title: "Image files", extensions: "jpg,gif,png,jpeg" },
                    { title: "Zip files", extensions: "zip" },
                    { title: "Pdf files", extensions: "pdf" },
                    { title: "Doc files", extensions: "docx,doc,xlsx,csv,txt" },
                ],
            },
            rename: true,
            sortable: true,
            dragdrop: true,
            views: { list: true, thumbs: true, active: "thumbs" },
            init: {
                FileUploaded: function (up, file, info) {
                    var beforeFiles = $("#uploaded_files_1").val();
                    if (beforeFiles != "") {
                        $("#uploaded_files_1").val(beforeFiles + "," + file.name);
                    } else {
                        $("#uploaded_files_1").val(file.name);
                    }
                },
            },
        });
        $("#file-2").plupload({
            runtimes: "html5,flash,silverlight,html4",
            url: woocommerce_help_scout_form_params.ajax_url + "?action=wc_help_scout_upload_attachments",
            max_file_count: 20,
            chunk_size: "1mb",
            filters: {
                max_file_size: "1000mb",
                mime_types: [
                    { title: "Image files", extensions: "jpg,gif,png,jpeg" },
                    { title: "Zip files", extensions: "zip" },
                    { title: "Pdf files", extensions: "pdf" },
                    { title: "Doc files", extensions: "docx,doc,xlsx,csv,txt" },
                ],
            },
            rename: true,
            sortable: true,
            dragdrop: true,
            views: { list: true, thumbs: true, active: "thumbs" },
            init: {
                FileUploaded: function (up, file, info) {
                    var beforeFiles = $("#uploaded_files_2").val();
                    if (beforeFiles != "") {
                        $("#uploaded_files_2").val(beforeFiles + "," + file.name);
                    } else {
                        $("#uploaded_files_2").val(file.name);
                    }
                },
            },
        });
        $("#file-3").plupload({
            runtimes: "html5,flash,silverlight,html4",
            url: woocommerce_help_scout_form_params.ajax_url + "?action=wc_help_scout_upload_attachments",
            max_file_count: 20,
            chunk_size: "1mb",
            filters: {
                max_file_size: "1000mb",
                mime_types: [
                    { title: "Image files", extensions: "jpg,gif,png,jpeg" },
                    { title: "Zip files", extensions: "zip" },
                    { title: "Pdf files", extensions: "pdf" },
                    { title: "Doc files", extensions: "docx,doc,xlsx,csv,txt" },
                ],
            },
            rename: true,
            sortable: true,
            dragdrop: true,
            views: { list: true, thumbs: true, active: "thumbs" },
            init: {
                FileUploaded: function (up, file, info) {
                    var beforeFiles = $("#uploaded_files_3").val();
                    if (beforeFiles != "") {
                        $("#uploaded_files_3").val(beforeFiles + "," + file.name);
                    } else {
                        $("#uploaded_files_3").val(file.name);
                    }
                },
            },
        });
        $("#file-4").plupload({
            runtimes: "html5,flash,silverlight,html4",
            url: woocommerce_help_scout_form_params.ajax_url + "?action=wc_help_scout_upload_attachments",
            max_file_count: 20,
            chunk_size: "1mb",
            filters: {
                max_file_size: "1000mb",
                mime_types: [
                    { title: "Image files", extensions: "jpg,gif,png,jpeg" },
                    { title: "Zip files", extensions: "zip" },
                    { title: "Pdf files", extensions: "pdf" },
                    { title: "Doc files", extensions: "docx,doc,xlsx,csv,txt" },
                ],
            },
            rename: true,
            sortable: true,
            dragdrop: true,
            views: { list: true, thumbs: true, active: "thumbs" },
            init: {
                FileUploaded: function (up, file, info) {
                    var beforeFiles = $("#uploaded_files_4").val();
                    if (beforeFiles != "") {
                        $("#uploaded_files_4").val(beforeFiles + "," + file.name);
                    } else {
                        $("#uploaded_files_4").val(file.name);
                    }
                },
            },
        });
        $("#file-5").plupload({
            runtimes: "html5,flash,silverlight,html4",
            url: woocommerce_help_scout_form_params.ajax_url + "?action=wc_help_scout_upload_attachments",
            max_file_count: 20,
            chunk_size: "1mb",
            filters: {
                max_file_size: "1000mb",
                mime_types: [
                    { title: "Image files", extensions: "jpg,gif,png,jpeg" },
                    { title: "Zip files", extensions: "zip" },
                    { title: "Pdf files", extensions: "pdf" },
                    { title: "Doc files", extensions: "docx,doc,xlsx,csv,txt" },
                ],
            },
            rename: true,
            sortable: true,
            dragdrop: true,
            views: { list: true, thumbs: true, active: "thumbs" },
            init: {
                FileUploaded: function (up, file, info) {
                    var beforeFiles = $("#uploaded_files_5").val();
                    if (beforeFiles != "") {
                        $("#uploaded_files_5").val(beforeFiles + "," + file.name);
                    } else {
                        $("#uploaded_files_5").val(file.name);
                    }
                },
            },
        });
        $(".wc-help-scout-conversation-form").submit(function (e) {
            var conversation_form = $(".wc-help-scout-conversation-form");
            var inc = $(this).data("inc");
            if ($("#file-" + inc).plupload("getFiles").length > 0) {
                $("#file-" + inc).on("complete", function () {
                    e.preventDefault();
                    var formdata = new FormData();
                    var formdata = new FormData($("#wc-help-scout-conversation-form-" + inc)[0]);
                    $.blockUI({
                        message: woocommerce_help_scout_form_params.processing,
                        baseZ: 99999,
                        overlayCSS: { background: "#fff", opacity: 0.6 },
                        css: { padding: "20px", zindex: "9999999", textAlign: "center", color: "#555", border: "3px solid #aaa", backgroundColor: "#fff", cursor: "wait", lineHeight: "24px" },
                    });
                    var conversation_data = { action: "wc_help_scout_create_conversation", security: woocommerce_help_scout_form_params.security };
                    formdata.append("action", "wc_help_scout_create_conversation");
                    formdata.append("security", woocommerce_help_scout_form_params.security);
                    $(".conversation-field").each(function () {
                        var current = $(this),
                            key = current.attr("name").replace("-", "_").replace("conversation_", ""),
                            value = current.val();
                        conversation_data[key] = value;
                    });
                    $.ajax({
                        type: "POST",
                        url: woocommerce_help_scout_form_params.ajax_url,
                        cache: false,
                        dataType: "json",
                        contentType: "application/json",
                        data: formdata,
                        processData: false,
                        contentType: false,
                        success: function (data) {
                            $.unblockUI();
                            if (null !== data && 1 === data.status) {
                                conversation_form.empty().prepend('<div class="woocommerce-message">' + woocommerce_help_scout_form_params.success + "</div>");
                            } else {
                                var error_message = woocommerce_help_scout_form_params.error;
                                if (data && data.status) {
                                    error_message = data.status;
                                }
                                $(".woocommerce-error", conversation_form).remove();
                                conversation_form.prepend('<div class="woocommerce-error">' + error_message + "</div>");
                            }
                        },
                        error: function () {
                            $.unblockUI();
                            $(".woocommerce-error", conversation_form).remove();
                            conversation_form.prepend('<div class="woocommerce-error">' + woocommerce_help_scout_form_params.error + "</div>");
                        },
                    });
                });
                $("#file-" + inc).plupload("start");
            } else {
                e.preventDefault();
                var formdata = new FormData();
                var formdata = new FormData($("#wc-help-scout-conversation-form-" + inc)[0]);
                $.blockUI({
                    message: woocommerce_help_scout_form_params.processing,
                    baseZ: 99999,
                    overlayCSS: { background: "#fff", opacity: 0.6 },
                    css: { padding: "20px", zindex: "9999999", textAlign: "center", color: "#555", border: "3px solid #aaa", backgroundColor: "#fff", cursor: "wait", lineHeight: "24px" },
                });
                var conversation_data = { action: "wc_help_scout_create_conversation", security: woocommerce_help_scout_form_params.security };
                formdata.append("action", "wc_help_scout_create_conversation");
                formdata.append("security", woocommerce_help_scout_form_params.security);
                $(".conversation-field").each(function () {
                    var current = $(this),
                        key = current.attr("name").replace("-", "_").replace("conversation_", ""),
                        value = current.val();
                    conversation_data[key] = value;
                });
                $.ajax({
                    type: "POST",
                    url: woocommerce_help_scout_form_params.ajax_url,
                    cache: false,
                    dataType: "json",
                    contentType: "application/json",
                    data: formdata,
                    processData: false,
                    contentType: false,
                    success: function (data) {
                        $.unblockUI();
                        if (null !== data && 1 === data.status) {
                            conversation_form.empty().prepend('<div class="woocommerce-message">' + woocommerce_help_scout_form_params.success + "</div>");
                        } else {
                            var error_message = woocommerce_help_scout_form_params.error;
                            if (data && data.status) {
                                error_message = data.status;
                            }
                            $(".woocommerce-error", conversation_form).remove();
                            conversation_form.prepend('<div class="woocommerce-error">' + error_message + "</div>");
                        }
                    },
                    error: function () {
                        $.unblockUI();
                        $(".woocommerce-error", conversation_form).remove();
                        conversation_form.prepend('<div class="woocommerce-error">' + woocommerce_help_scout_form_params.error + "</div>");
                    },
                });
            }
            return false;
        });
        $(".wc-helpscout-order-conversation-form").submit(function (e) {
            var conversation_form = $(".wc-helpscout-order-conversation-form");
            var inc = $(this).data("inc");
            if ($("#order-conversation-file-1").plupload("getFiles").length > 0) {
                $("#order-conversation-file-1").on("complete", function () {
                    e.preventDefault();
                    var formdata = new FormData();
                    var formdata = new FormData($("#order_conversation_form_1")[0]);
                    $.blockUI({
                        message: woocommerce_help_scout_form_params.processing,
                        baseZ: 99999,
                        overlayCSS: { background: "#fff", opacity: 0.6 },
                        css: { padding: "20px", zindex: "9999999", textAlign: "center", color: "#555", border: "3px solid #aaa", backgroundColor: "#fff", cursor: "wait", lineHeight: "24px" },
                    });
                    var conversation_data = { action: "wc_help_scout_create_conversation", security: woocommerce_help_scout_form_params.security };
                    formdata.append("action", "wc_help_scout_create_conversation");
                    formdata.append("security", woocommerce_help_scout_form_params.security);
                    $(".conversation-field").each(function () {
                        var current = $(this),
                            key = current.attr("name").replace("-", "_").replace("conversation_", ""),
                            value = current.val();
                        conversation_data[key] = value;
                    });
                    $.ajax({
                        type: "POST",
                        url: woocommerce_help_scout_form_params.ajax_url,
                        cache: false,
                        dataType: "json",
                        contentType: "application/json",
                        data: formdata,
                        processData: false,
                        contentType: false,
                        success: function (data) {
                            $.unblockUI();
                            if (null !== data && 1 === data.status) {
                                conversation_form.empty().prepend('<div class="woocommerce-message">' + woocommerce_help_scout_form_params.success + "</div>");
                            } else {
                                var error_message = woocommerce_help_scout_form_params.error;
                                if (data && data.status) {
                                    error_message = data.status;
                                }
                                $(".woocommerce-error", conversation_form).remove();
                                conversation_form.prepend('<div class="woocommerce-error">' + error_message + "</div>");
                            }
                        },
                        error: function () {
                            $.unblockUI();
                            $(".woocommerce-error", conversation_form).remove();
                            conversation_form.prepend('<div class="woocommerce-error">' + woocommerce_help_scout_form_params.error + "</div>");
                        },
                    });
                });
                $("#order-conversation-file-1").plupload("start");
            } else {
                e.preventDefault();
                var formdata = new FormData();
                var formdata = new FormData($("#order_conversation_form_1")[0]);
                $.blockUI({
                    message: woocommerce_help_scout_form_params.processing,
                    baseZ: 99999,
                    overlayCSS: { background: "#fff", opacity: 0.6 },
                    css: { padding: "20px", zindex: "9999999", textAlign: "center", color: "#555", border: "3px solid #aaa", backgroundColor: "#fff", cursor: "wait", lineHeight: "24px" },
                });
                var conversation_data = { action: "wc_help_scout_create_conversation", security: woocommerce_help_scout_form_params.security };
                formdata.append("action", "wc_help_scout_create_conversation");
                formdata.append("security", woocommerce_help_scout_form_params.security);
                $(".conversation-field").each(function () {
                    var current = $(this),
                        key = current.attr("name").replace("-", "_").replace("conversation_", ""),
                        value = current.val();
                    conversation_data[key] = value;
                });
                $.ajax({
                    type: "POST",
                    url: woocommerce_help_scout_form_params.ajax_url,
                    cache: false,
                    dataType: "json",
                    contentType: "application/json",
                    data: formdata,
                    processData: false,
                    contentType: false,
                    success: function (data) {
                        $.unblockUI();
                        if (null !== data && 1 === data.status) {
                            conversation_form.empty().prepend('<div class="woocommerce-message">' + woocommerce_help_scout_form_params.success + "</div>");
                        } else {
                            var error_message = woocommerce_help_scout_form_params.error;
                            if (data && data.status) {
                                error_message = data.status;
                            }
                            $(".woocommerce-error", conversation_form).remove();
                            conversation_form.prepend('<div class="woocommerce-error">' + error_message + "</div>");
                        }
                    },
                    error: function () {
                        $.unblockUI();
                        $(".woocommerce-error", conversation_form).remove();
                        conversation_form.prepend('<div class="woocommerce-error">' + woocommerce_help_scout_form_params.error + "</div>");
                    },
                });
            }
            return false;
        });
    });
})(jQuery);
