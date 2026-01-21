/**
 * cute-cnblogs MINIMAL VERSION
 * Only essential features:
 * - APlayer music player
 * - Basic navigation
 * - Article icons
 *
 * NO dark mode, NO sidebar, NO catalogue, NO scroll issues
 */

// ===== CONFIGURATION =====
var c = {
    Youself: "https://boyoboyoyo.github.io/v/",
    custom: [{
        name: 'Home',
        link: 'https://boyoboyoyo.github.io/v/',
        istarget: false
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
    console.log("miluframe: allpage() called (minimal version)");

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

    // Article title icons (random fruit icons)
    var le = $(".postTitle2").length;
    for (var i = 0; i < le; i++) {
        var num = Math.floor(Math.random() * c.cuteicon.length);
        $(".postTitle2").eq(i).before('<svg class="icon" aria-hidden="true"><use xlink:href="#' + c.cuteicon[num] + '"></use></svg>');
    }

    // Logo
    var le = $("link").length;
    for (var i = 0; i < le; i++) {
        var rel = $("link").eq(i).attr("rel");
        if (rel == "shortcut icon") {
            $("link").eq(i).attr("href", c.logoimg);
        }
    }

    // Hide gratuity button (not needed)
    $(".gratuity").hide();

    console.log("miluframe: allpage() completed (minimal version)");
}

console.log("cute-cnblogs MINIMAL VERSION loaded - APlayer + basic features only");
