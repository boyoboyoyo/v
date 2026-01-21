/**
 * cute-cnblogs SIMPLE VERSION
 * Only essential features + APlayer working
 */

// ===== CONFIGURATION =====
var c = {
    Youself: "https://boyoboyoyo.github.io/v/",
    custom: [{
        name: 'Home',
        link: 'https://boyoboyoyo.github.io/v/',
        istarget: false
    }],
    resume: {
        "name": "barker",
        "link": "https://boyoboyoyo.github.io/v/",
        "headurl": "https://pic.cnblogs.com/avatar/default.jpg",
        "introduction": "Blood Creation Platform"
    },
    unionbox: [],
    details: [{
        field: 'name',
        literal: 'Name',
    }, {
        field: 'introduction',
        literal: 'Description',
    }, {
        field: 'url',
        literal: 'URL',
    }],
    logoimg: 'https://pic.cnblogs.com/avatar/default.jpg',
    cuteicon: ['icon-caomei', 'icon-boluo', 'icon-huolongguo', 'icon-chengzi', 'icon-hamigua', 'icon-lizhi', 'icon-mangguo', 'icon-liulian', 'icon-lizi', 'icon-lanmei', 'icon-longyan', 'icon-shanzhu', 'icon-pingguo', 'icon-mihoutao', 'icon-niyouguo', 'icon-xigua', 'icon-putao', 'icon-xiangjiao', 'icon-ningmeng', 'icon-yingtao', 'icon-taozi', 'icon-shiliu', 'icon-ximei', 'icon-shizi'],
    isGratuity: false,
    gratuity: ''
};

// ===== miluframe FUNCTION =====
function miluframe(setting) {
    $.extend(c, setting);
    allpage(c);
}

// ===== allpage FUNCTION =====
function allpage(c) {
    console.log("miluframe: allpage() called");

    // Custom navigation
    var custom = "";
    for (var i = 0; i < c.custom.length; i++) {
        if (c.custom[i].istarget == true) {
            custom = custom + '<li><a href="' + c.custom[i].link + '" target="_blank">' + c.custom[i].name + "</a></li>";
        } else {
            custom = custom + '<li><a href="' + c.custom[i].link + '">' + c.custom[i].name + "</a></li>";
        }
    }
    $("#navList").html(custom);

    // Article title icons
    var le = $(".postTitle2").length;
    for (var i = 0; i < le; i++) {
        var num = Math.floor(Math.random() * c.cuteicon.length);
        $(".postTitle2").eq(i).before('<svg class="icon" aria-hidden="true"><use xlink:href="#' + c.cuteicon[num] + '"></use></svg>');
    }

    // Skin selection UI
    var skin = '<div class="select_skin"><ul><li class="light_white">Light</li><li class="furvous">Dark</li><li class="reading">Reading Mode</li></ul></div>';
    tippy(".skin_btn", {
        content: skin,
        theme: "tomato",
        allowHTML: true,
        animation: "scale",
        duration: 500,
        arrow: true,
        hideOnClick: "false",
        interactive: true
    });

    // Logo
    var le = $("link").length;
    for (var i = 0; i < le; i++) {
        var rel = $("link").eq(i).attr("rel");
        if (rel == "shortcut icon") {
            $("link").eq(i).attr("href", c.logoimg);
        }
    }

    // Gratuity button (hidden as per isGratuity: false)
    if (c.isGratuity != false) {
        tippy(".gratuity", {
            content: c.gratuity,
            theme: "tomato",
            allowHTML: true,
            animation: "scale",
            duration: 500,
            arrow: true,
            hideOnClick: "false",
            interactive: true
        });
    } else {
        $(".gratuity").hide();
    }

    console.log("miluframe: allpage() completed");
}

// ===== SKIN MODE FUNCTIONS =====
function light_white() {
    console.log("Switching to Light mode");
    $("#reading").remove();
    $("#darkly").remove();
    $("#fish_script").remove();
    $("#jsi-flying-fish-container").html("");
}

function furvous() {
    console.log("Switching to Dark mode");
    $("#reading").remove();
    var link = document.createElement("link");
    link.rel = "stylesheet";
    link.id = "darkly";
    link.href = "https://blog-static.cnblogs.com/files/miluluyo/darkly.css";
    document.body.appendChild(link);
    $("#fish_script").remove();
    $("#jsi-flying-fish-container").html("");
}

function reading() {
    console.log("Switching to Reading mode");
    $("#darkly").remove();
    var link = document.createElement("link");
    link.rel = "stylesheet";
    link.id = "reading";
    link.href = "https://blog-static.cnblogs.com/files/miluluyo/reading.css";
    document.body.appendChild(link);
    $("#fish_script").remove();
    $("#jsi-flying-fish-container").html("");
}

// Load saved skin preference
var skins = localStorage.getItem("skin");
console.log("Saved skin:", skins);
if (skins == null || skins == undefined) {
    light_white();
} else {
    if (skins == "light_white") {
        light_white();
    } else if (skins == "furvous") {
        furvous();
    } else if (skins == "reading") {
        reading();
    }
}

// ===== SIDEBAR TOGGLE FUNCTIONS =====
function showSide(cla) {
    console.log("showSide called with:", cla);
    if (cla == "sideBar") {
        var w = $(window).width();
        if ($("#sideBar").css("visibility") == "hidden") {
            $("#sideBar").css("display", "inline-block");
            $("#sideBar").attr("style", "visibility: visible; clip-path: circle(100% at 50% 50%); transition: all 0.3s ease-in-out 0s;");
        } else {
            $("#sideBar").attr("style", "visibility: hidden; clip-path: circle(30px at calc(100%) 100%); transition: all 0.5s ease-in-out 0s;");
            setTimeout(function() {
                $("#sideBar").css("display", "none");
            }, 500);
        }
        $("#catalogue").attr("style", "visibility: hidden; clip-path: circle(30px at calc(100%) 100%); transition: all 0.5s ease-in-out 0s;");
        setTimeout(function() {
            $("#catalogue").css("display", "none");
        }, 500);
    } else if (cla == "catalogue") {
        if ($("#catalogue").css("visibility") == "hidden") {
            $("#catalogue").css("display", "inline-block");
            $("#catalogue").attr("style", "visibility: visible; clip-path: circle(100% at 50% 50%); transition: all 0.3s ease-in-out 0s;");
        } else {
            $("#catalogue").attr("style", "visibility: hidden; clip-path: circle(30px at calc(100%) 100%); transition: all 0.5s ease-in-out 0s;");
            setTimeout(function() {
                $("#catalogue").css("display", "none");
            }, 500);
        }
        $("#sideBar").attr("style", "visibility: hidden; clip-path: circle(30px at calc(100%) 100%); transition: all 0.5s ease-in-out 0s;");
        setTimeout(function() {
            $("#sideBar").css("display", "none");
        }, 500);
    }
}

// ===== CONTENT LIST GENERATION (Table of Contents) =====
function GenerateContentList() {
    console.log("GenerateContentList called");
    var jquery_h1_list = $("#cnblogs_post_body h1");
    if (jquery_h1_list.length == 0) {
        $(".catalogueMain").prepend('<p style="font-size:18px;text-align: center;padding-bottom: 10px;"><b>Table of Contents(Content)</b></p><p>Table of contents is empty</p>');
        return;
    }
    if ($("#cnblogs_post_body").length == 0) {
        return;
    }

    var content = '<a name="_labelTop"></a>';
    content += '<div id="navCategory">';
    content += '<p style="font-size:18px;text-align: center;padding-bottom: 10px;"><b>Table of Contents(Content)</b></p>';
    content += '<ul class="first_class_ul">';

    for (var i = 0; i < jquery_h1_list.length; i++) {
        var go_to_top = '<div style="text-align: right" class="_labBox"><a name="_label' + i + '" id="_label' + i + '"></a></div>';
        $(jquery_h1_list[i]).before(go_to_top);
        var li_content = '<li><a href="#_label' + i + '" class="_label' + i + '">' + $(jquery_h1_list[i]).text() + "</a></li>";

        var nextH1Index = i + 1;
        if (nextH1Index == jquery_h1_list.length) {
            nextH1Index = 0;
        }

        var jquery_h2_list = $(jquery_h1_list[i]).nextUntil(jquery_h1_list[nextH1Index], "h2");
        if (jquery_h2_list.length > 0) {
            li_content += '<ul class="second_class_ul">';
        }

        for (var j = 0; j < jquery_h2_list.length; j++) {
            var go_to_top2 = '<div style="text-align: right" class="_labBox"><a name="_lab2_' + i + "_" + j + '" id="_lab2_' + i + "_" + j + '"></a></div>';
            $(jquery_h2_list[j]).before(go_to_top2);
            li_content += '<li><a href="#_lab2_' + i + "_" + j + '" class="_lab2_' + i + "_" + j + '">' + $(jquery_h2_list[j]).text() + "</a></li>";

            var nextH2Index = j + 1;
            var next;
            if (nextH2Index == jquery_h2_list.length) {
                if (i + 1 == jquery_h1_list.length) {
                    next = jquery_h1_list[0];
                } else {
                    next = jquery_h1_list[i + 1];
                }
            } else {
                next = jquery_h2_list[nextH2Index];
            }

            var jquery_h3_list = $(jquery_h2_list[j]).nextUntil(next, "h3");
            if (jquery_h3_list.length > 0) {
                li_content += '<ul class="third_class_ul">';
            }

            for (var k = 0; k < jquery_h3_list.length; k++) {
                var go_to_third_Content = '<div style="text-align: right" class="_labBox"><a name="_label3_' + i + "_" + j + "_" + k + '"  id="_label3_' + i + "_" + j + "_" + k + '"></a></div>';
                $(jquery_h3_list[k]).before(go_to_third_Content);
                li_content += '<li><a href="#_label3_' + i + "_" + j + "_" + k + '" class="_label3_' + i + "_" + j + "_" + k + '">' + $(jquery_h3_list[k]).text() + "</a></li>";
            }

            if (jquery_h3_list.length > 0) {
                li_content += "</ul>";
            }
            li_content += "</li>";
        }

        if (jquery_h2_list.length > 0) {
            li_content += "</ul>";
        }
        li_content += "</li>";
        content += li_content;
    }

    content += "</ul>";
    content += "</div>";
    $(".catalogueMain").prepend(content);
    console.log("GenerateContentList completed");
}

// ===== SCROLL EVENT HANDLER - FIXED VERSION =====
$(window).scroll(function() {
    var scroHei = $(window).scrollTop();

    // ONLY handle sidebar/catalogue fixed positioning - NO navigator/blogTitle changes
    if (scroHei > 500) {
        // Fix sidebar/catalogue position
        $(".catalogueMain").attr("style", "position:fixed;top:10px;width:230px;height:calc(100% - 100px);overflow:auto");
        $("#sideBarMain").attr("style", "position:fixed;top:10px;width:230px;height:calc(100% - 100px);overflow:auto");
    } else {
        // Remove fixed positioning
        $(".catalogueMain").attr("style", "");
        $("#sideBarMain").attr("style", "");
    }
});

// ===== CATALOGUE HIGHLIGHT ON SCROLL =====
$(window).scroll(function() {
    var le = $("._labBox").length;
    var scrollTop = $(window).scrollTop() + 80;
    for (var i = 0; i < le; i++) {
        var oftop = $("._labBox").eq(i).offset().top;
        if ($(document).scrollTop() >= oftop) {
            var name = $("._labBox").eq(i).find("a").attr("name");
            $("#catalogue").find("li").attr("style", "");
            $("#catalogue").find("a").attr("style", "");
            $("." + name).parent().attr("style", "background:#2daebf;");
            $("." + name).parent().find("a").attr("style", "color:#fff");
        }
    }
});

// ===== SIDEBAR RESTORATION FROM LOCAL STORAGE =====
var catalogue = localStorage.getItem("catalogue");
var catalog = localStorage.getItem("catalog");
var w = $(window).width();

if (catalogue == null) {
    // Do nothing
} else {
    if (catalogue == "show") {
        if (w > 767) {
            $("#sideBar").css("display", "inline-block");
            $("#sideBar").attr("style", "visibility: visible; clip-path: circle(100% at 50% 50%); transition: all 0.3s ease-in-out 0s;display:inline-block");
            $("#catalogue").attr("style", "visibility: hidden; clip-path: circle(100% at 50% 50%); transition: all 0.3s ease-in-out 0s;display:none");
        }
    } else {
        if (catalogue == "none") {
            $("#sideBar").attr("style", "visibility: hidden; clip-path: circle(30px at calc(100%) 100%); transition: all 0.5s ease-in-out 0s;");
            setTimeout(function() {
                $("#sideBar").css("display", "none");
            }, 500);
        }
    }
}

if (catalog == null) {
    // Do nothing
} else {
    if (catalog == "show") {
        if (w > 767) {
            $("#catalogue").css("display", "inline-block");
            $("#catalogue").attr("style", "visibility: visible; clip-path: circle(100% at 50% 50%); transition: all 0.3s ease-in-out 0s;");
            $("#sideBar").attr("style", "visibility: hidden; clip-path: circle(30px at calc(100%) 100%); transition: all 0.5s ease-in-out 0s;display:none");
        }
    } else {
        if (catalog == "none") {
            $("#catalogue").attr("style", "visibility: hidden; clip-path: circle(30px at calc(100%) 100%); transition: all 0.5s ease-in-out 0s;");
            setTimeout(function() {
                $("#catalogue").css("display", "none");
            }, 500);
        }
    }
}

// ===== SKIN BUTTON EVENT HANDLERS =====
$(document).on("click", ".light_white", function() {
    console.log("Light mode clicked");
    localStorage.setItem("skin", "light_white");
    light_white();
});

$(document).on("click", ".furvous", function() {
    console.log("Dark mode clicked");
    localStorage.setItem("skin", "furvous");
    furvous();
});

$(document).on("click", ".reading", function() {
    console.log("Reading mode clicked");
    localStorage.setItem("skin", "reading");
    reading();
});

// ===== CATALOGUE BUTTON CLICK =====
$(".catalogue_btn").click(function() {
    console.log("Catalogue button clicked");
    var w = $(window).width();
    if ($("#catalogue").css("visibility") == "hidden") {
        $("#catalogue").css("display", "inline-block");
        $("#catalogue").attr("style", "visibility: visible; clip-path: circle(100% at 50% 50%); transition: all 0.3s ease-in-out 0s;");
        $("#sideBar").attr("style", "visibility: hidden; clip-path: circle(30px at calc(100%) 100%); transition: all 0.5s ease-in-out 0s;display:none");
        localStorage.setItem("catalog", "show");
        localStorage.setItem("catalogue", "none");
    } else {
        $("#catalogue").attr("style", "visibility: hidden; clip-path: circle(30px at calc(100%) 100%); transition: all 0.5s ease-in-out 0s;");
        localStorage.setItem("catalogue", "none");
        setTimeout(function() {
            $("#catalogue").css("display", "none");
        }, 500);
    }
    if (w <= 1300) {
        $("#mainContent").css("width", "90%");
    } else {
        $("#mainContent").css("width", "calc(100% - 250px)");
        $("#sideBar").css("display", "none");
    }
    return false;
});

// ===== CATALOGUE LINK CLICK ON MOBILE =====
$("#catalogue #navCategory ul li a").click(function() {
    var w = $(window).width();
    if (w < 767) {
        $("#catalogue").attr("style", "visibility: hidden; clip-path: circle(30px at calc(100%) 100%); transition: all 0.5s ease-in-out 0s;");
        setTimeout(function() {
            $("#catalogue").css("display", "none");
        }, 500);
    }
});

console.log("cute-cnblogs SIMPLE VERSION loaded");
