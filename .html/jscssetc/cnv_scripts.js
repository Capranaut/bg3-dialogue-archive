function openParent(obj) {
    var parent = jQuery(obj).parent();
    if (jQuery(parent).is('ul')) {
        if (jQuery(parent).is(':visible'))
            return;
        if (jQuery(parent).hasClass('collapsibleList'))
            jQuery(parent).show();
    }
    openParent(parent);
}
function toggleLists() {
    if (jQuery('.toggleall').hasClass('collapse')) {
        var Elem = jQuery('.toggleall');
        Elem.removeClass('collapse');
        Elem.addClass('expand');
        jQuery(Elem).html('Expand All');
        //jQuery('ul.collapsibleList:visible').hide();
        jQuery('ul.collapsibleList:visible').not('.rootList').css({ 'display': 'none' });
        jQuery('li.collapsibleListOpen').removeClass('collapsibleListOpen').addClass('collapsibleListClosed');
    } else {
        var Elem = jQuery('.toggleall');
        Elem.removeClass('expand');
        Elem.addClass('collapse');
        jQuery(Elem).html('Collapse All');
        //jQuery('ul.collapsibleList:hidden').show();
        jQuery('ul.collapsibleList:hidden').css({ 'display': 'block' });
        jQuery('li.collapsibleListClosed').removeClass('collapsibleListClosed').addClass('collapsibleListOpen');
    }
}


function toggleflags() {
    if (jQuery('.showall').hasClass('showing-all')) {
        var elem = jQuery('.showall');
        elem.removeClass('showing-all');
        elem.addClass('hiding-all');
        jQuery(elem).html('Show all flags');
        jQuery('.tags, .context, .checkflag, .setflag, .rolls, .approval, .ruletag').hide();
    } else {
        var elem = jQuery('.showall');
        elem.removeClass('hiding-all');
        elem.addClass('showing-all');
        jQuery(elem).html('Hide all flags');
        jQuery('.tags, .context, .checkflag, .setflag, .rolls, .approval, .ruletag').show();
    }
}

function togglecontext() {
    if (jQuery('.showcontext').hasClass('showing-context')) {
        var elem = jQuery('.showcontext');
        elem.removeClass('showing-context');
        elem.addClass('hiding-context');
        jQuery(elem).html('Show context');
        jQuery('.context').hide();
    } else {
        var elem = jQuery('.showcontext');
        elem.removeClass('hiding-context');
        elem.addClass('showing-context');
        jQuery(elem).html('Hide context');
        jQuery('.context').show();
    }
}


function toggletags() {
    if (jQuery('.showtags').hasClass('showing-tags')) {
        var elem = jQuery('.showtags');
        elem.removeClass('showing-tags');
        elem.addClass('hiding-tags');
        jQuery(elem).html('Show tags');
        jQuery('.tags').hide();
    } else {
        var elem = jQuery('.showtags');
        elem.removeClass('hiding-tags');
        elem.addClass('showing-tags');
        jQuery(elem).html('Hide tags');
        jQuery('.tags').show();
    }
}


function togglecheckflag() {
    if (jQuery('.showcheckflag').hasClass('showing-checkflag')) {
        var elem = jQuery('.showcheckflag');
        elem.removeClass('showing-checkflag');
        elem.addClass('hiding-checkflag');
        jQuery(elem).html('Show checkflag');
        jQuery('.checkflag').hide();
    } else {
        var elem = jQuery('.showcheckflag');
        elem.removeClass('hiding-checkflag');
        elem.addClass('showing-checkflag');
        jQuery(elem).html('Hide checkflag');
        jQuery('.checkflag').show();
    }
}
function togglesetflag() {
    if (jQuery('.showsetflag').hasClass('showing-setflag')) {
        var elem = jQuery('.showsetflag');
        elem.removeClass('showing-setflag');
        elem.addClass('hiding-setflag');
        jQuery(elem).html('Show setflag');
        jQuery('.setflag').hide();
    } else {
        var elem = jQuery('.showsetflag');
        elem.removeClass('hiding-setflag');
        elem.addClass('showing-setflag');
        jQuery(elem).html('Hide setflag');
        jQuery('.setflag').show();
    }
}

function toggleroll() {
    if (jQuery('.showroll').hasClass('showing-roll')) {
        var elem = jQuery('.showroll');
        elem.removeClass('showing-roll');
        elem.addClass('hiding-roll');
        jQuery(elem).html('Show roll');
        jQuery('.rolls').hide();
    } else {
        var elem = jQuery('.showroll');
        elem.removeClass('hiding-roll');
        elem.addClass('showing-roll');
        jQuery(elem).html('Hide roll');
        jQuery('.rolls').show();
    }
}

function toggleapprov() {
    if (jQuery('.showapprov').hasClass('showing-approv')) {
        var elem = jQuery('.showapprov');
        elem.removeClass('showing-approv');
        elem.addClass('hiding-approv');
        jQuery(elem).html('Show approv');
        jQuery('.approval').hide();
    } else {
        var elem = jQuery('.showapprov');
        elem.removeClass('hiding-approv');
        elem.addClass('showing-approv');
        jQuery(elem).html('Hide approv');
        jQuery('.approval').show();
    }
}
function togglerules() {
    if (jQuery('.showrules').hasClass('showing-rules')) {
        var elem = jQuery('.showrules');
        elem.removeClass('showing-rules');
        elem.addClass('hiding-rules');
        jQuery(elem).html('Show ruletag');
        jQuery('.ruletag').hide();
    } else {
        var elem = jQuery('.showrules');
        elem.removeClass('hiding-rules');
        elem.addClass('showing-rules');
        jQuery(elem).html('Hide ruletag');
        jQuery('.ruletag').show();
    }
}


function showNodeNums() {
    var Elem = jQuery('.shownode');
    if (Elem.hasClass("collapse")) {
        Elem.removeClass('collapse');
        jQuery(Elem).html('Show Node Numbers');
        jQuery('.nlink').hide();
    } else {
        Elem.addClass('collapse');
        jQuery(Elem).html('Hide Node Numbers');
        jQuery('.nlink').show();
    }
}
jQuery(document).ready(function () {
    var shifted = false;

    jQuery(function () {
        jQuery(document).keydown(function (e) {
            shifted = e.ctrlKey;
        });

        jQuery(document).keyup(function (e) {
            shifted = false;
        });
    });
    CollapsibleLists.apply();
    jQuery('.collapsibleList').find('a').click(function (e) {
        if (e.which == 1 && !shifted) {
            e.preventDefault();
        }
    });
    jQuery('span.nodelink').click(function (e) {
        var id = jQuery(this).attr('data-id');
        if (id === undefined) {
            return;
        }
        var link = jQuery('#n' + id);
        if (jQuery(link).length == 0) {
            alert("Node " + id + " not found.")
        }
        jQuery(link).parentsUntil('.rootList').find('ul:hidden').show();
        jQuery(".nTarget").removeClass('highlighted-node');
        jQuery(".n" + id).addClass('highlighted-node');
        jQuery(this).show();
        jQuery('html, body').animate({
            scrollTop: jQuery(link).offset().top
        }, 2000);
        jQuery(link).parent().delay(1500).fadeIn(100).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
        jQuery(link).closest('.collapsibleListClosed').addClass('collapsibleListOpen').removeClass('collapsibleListClosed');
    });
});

