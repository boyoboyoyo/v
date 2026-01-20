/**
 * cute-cnblogs FIXED VERSION
 * All features working WITHOUT forced scroll issues
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

    // Fish container
    if (!mobile_flag) {
        $("#footer").before('<div id="jsi-flying-fish-container" class="container"></div>');
    }

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

    // Friend links (unionbox)
    var newarray = shuffle(c.unionbox);
    var listfriends = "";
    for (var i = 0; i < newarray.length; i++) {
        listfriends = listfriends + '<div class="unionbox"><div class="info"><div class="headimg"><img src="' + newarray[i].headurl + '" alt=""></div><div class="content"><h3 class="title">' + newarray[i].name + '</h3><p class="desc">' + newarray[i].introduction + '</p><a class="btn" target="_blank" href="' + newarray[i].url + '">Jump to</a></div></div></div>';
    }
    $(".unionbox-box").html(listfriends);

    // Friend table
    var detailsfriends = "";
    for (var i = 0; i < c.details.length; i++) {
        detailsfriends = detailsfriends + "<tr><td>" + c.details[i].field + "</td><td>" + c.details[i].literal + "</td></tr>";
    }
    $(".friendstable").append(detailsfriends);

    // Gratuity button
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

    // Comment avatars
    var le = $(".feedbackItem").length;
    for (var i = 0; i < le; i++) {
        var src = $(".feedbackItem").eq(i).find(".feedbackCon").find("span").text();
        $(".feedbackCon").eq(i).prepend('<img class="comment-avatar" src="' + $.trim(src) + '">');
    }

    // Comment placeholder
    $("#tbCommentBody").attr("placeholder", "Please fill in properly！ ...");

    // OwO emoji picker
    $("#tbCommentBody").after('<div class="OwO" onclick="load_face(this)"><div class="OwO-logo"><span>OωO<space><space>Emoji</span></div></div>');
    window.load_face = function(a) {
        var OwO_demo = new OwO({
            logo: "OωOEmoji",
            container: document.getElementsByClassName("OwO")[0],
            target: document.getElementById("tbCommentBody"),
            api: "https://miluluyo.github.io/OwO.json",
            position: "down",
            width: "70%",
            maxHeight: "250px"
        });
        a.classList.add("OwO-open");
        a.onclick = null;
    };

    $("#commentbox_opt").nextAll().remove();
    $("#btn_comment_submit").val("Submit Comment (Ctrl + Enter)");

    $(document).on("click", "#btn_edit_comment", function() {
        $(".OwO").show();
    });

    $(document).on("click", "#btn_preview_comment", function() {
        $(".OwO").hide();
    });

    // Window resize handler
    $(window).resize(function() {
        var w = document.body.clientWidth;
        if (w > 1300) {
            // Do nothing
        } else {
            if (960 < w) {
                if ($("#mainContent").css("width") != "90%") {
                    $("#mainContent").css("width", "90%");
                }
            } else {
                if (0 < w) {
                    if ($("#mainContent").css("width") != "90%") {
                        $("#mainContent").css("width", "90%");
                    }
                }
            }
        }
    });

    // NO navigator scroll direction detection - this was causing the forced scroll issue!
    // REMOVED: The code that detects scroll direction and sets navigator to position:fixed
    // This was the root cause of the forced downward scroll when scrolling up
}

// Shuffle function for randomizing array
function shuffle(unionbox) {
    var array = unionbox;
    var m = array.length,
        t, i;
    while (m) {
        i = Math.floor(Math.random() * m--);
        t = array[m];
        array[m] = array[i];
        array[i] = t;
    }
    return array;
}

// Mobile detection
function isMobile() {
    var userAgentInfo = navigator.userAgent;
    var mobileAgents = ["Android", "iPhone", "SymbianOS", "Windows Phone", "iPad", "iPod"];
    var mobile_flag = false;
    for (var v = 0; v < mobileAgents.length; v++) {
        if (userAgentInfo.indexOf(mobileAgents[v]) > 0) {
            mobile_flag = true;
            break;
        }
    }
    var screen_width = window.screen.width;
    var screen_height = window.screen.height;
    if (screen_width < 500 && screen_height < 800) {
        mobile_flag = true;
    }
    return mobile_flag;
}

var mobile_flag = isMobile();

// Add vertical wrapper to blog title
var blogTitle = $("#blogTitle").html();
$("#blogTitle").html("<div class='vertical'>" + blogTitle + "</div>");

// ===== SKIN MODE FUNCTIONS (Dark mode, Reading mode) =====
function light_white() {
    $("#reading").remove();
    $("#darkly").remove();
    $("#fish_script").remove();
    $("#jsi-flying-fish-container").html("");
    if (!mobile_flag) {
        var script = document.createElement("script");
        script.type = "text/javascript";
        script.id = "fish_type";
        script.src = "js/fish.js";
        document.body.appendChild(script);
    }
}

function furvous() {
    $("#reading").remove();
    var link = document.createElement("link");
    link.rel = "stylesheet";
    link.id = "darkly";
    link.href = "https://blog-static.cnblogs.com/files/miluluyo/darkly.css";
    document.body.appendChild(link);
    $("#fish_script").remove();
    if (!mobile_flag) {
        $("#jsi-flying-fish-container").html("");
        var script = document.createElement("script");
        script.type = "text/javascript";
        script.id = "fish_type";
        script.src = "js/fish2.js";
        document.body.appendChild(script);
    }
}

function reading() {
    $("#darkly").remove();
    var link = document.createElement("link");
    link.rel = "stylesheet";
    link.id = "reading";
    link.href = "https://blog-static.cnblogs.com/files/miluluyo/reading.css";
    document.body.appendChild(link);
    $("#fish_script").remove();
    $("#jsi-flying-fish-container").html("");
    if (!mobile_flag) {
        var script = document.createElement("script");
        script.type = "text/javascript";
        script.id = "fish_type";
        script.src = "js/fish3.js";
        document.body.appendChild(script);
    }
}

// Load saved skin preference
var skins = localStorage.getItem("skin");
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

// ===== SKIN SELECTION UI (tippy) =====
$(document).ready(function() {
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
});

// ===== SIDEBAR TOGGLE FUNCTIONS =====
function showSide(cla) {
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
}

// ===== SCROLL EVENT HANDLER - FIXED VERSION =====
// This version keeps sidebar/catalogue fixed positioning BUT does NOT force scroll
$(window).scroll(function() {
    var scroHei = $(window).scrollTop();

    // ONLY handle sidebar/catalogue fixed positioning - NO navigator/blogTitle changes
    if (scroHei > 500) {
        // Keep fly_top hidden (we removed it anyway)
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
    localStorage.setItem("skin", "light_white");
    light_white();
});

$(document).on("click", ".furvous", function() {
    localStorage.setItem("skin", "furvous");
    furvous();
});

$(document).on("click", ".reading", function() {
    localStorage.setItem("skin", "reading");
    reading();
});

// ===== CATALOGUE BUTTON CLICK =====
$(".catalogue_btn").click(function() {
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

console.log("cute-cnblogs FIXED VERSION loaded - scroll issues resolved");
