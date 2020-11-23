$(document).ready(function () {
    // Start Toggle Nav-bar, Overlay When The Icons is Clicked
    var mobileButton = $("header .top-bar .icons");
    $(mobileButton).click(function () {
        $("nav ul").toggleClass("show-nav");
        $(".overlay").fadeToggle();
        $(".menu-icon , .close-icon").toggle();
    });

    $(".overlay").click(function () {
        $("nav ul").removeClass("show-nav");
        $(".overlay").fadeOut();
        $(".menu-icon").show();
        $(".close-icon").hide();
    });

    $("nav ul li").click(function () {
        if (window.innerWidth < 991) {
            $("nav ul").removeClass("show-nav");
            $(".overlay").fadeOut();
            $(".menu-icon").show();
            $(".close-icon").hide();
        }
    });
    // Finish Toggle Nav-bar, Overlay When The Icons is Clicked

    // Start Hide Nav-bar, Overlay and The Icons When The Website Width More Than 991
    $(window).resize(function () {
        if (window.innerWidth > 991) {
            $("nav ul").removeClass("show-nav");
            $(mobileButton).hide();
            $(".overlay").hide();
        }

        if (window.innerWidth < 992) {
            $(".menu-icon").show();
        }
    });
    // Finish Hide Nav-bar, Overlay and The Icons When The Website Width More Than 991

    // Start Toggle Class Active at The Top of Each Section
    $(".section").each(function () {
        if ($(window).scrollTop() > $(this).offset().top - 1) {
            var sectionId = $(this).attr("id");
            $("header .top-bar nav ul li a").removeClass("active");
            $('header .top-bar nav ul li a[class="' + sectionId + '"]').addClass("active");
        } else if ($(window).scrollTop() < 680) {
            $('header .top-bar nav ul li a[class="home"]').addClass("active");
        }
    });

    $(window).scroll(function () {
        $(".section").each(function () {
            if ($(window).scrollTop() > $(this).offset().top - 1) {
                var sectionId = $(this).attr("id");
                $("header .top-bar nav ul li a").removeClass("active");
                $('header .top-bar nav ul li a[class="' + sectionId + '"]').addClass("active");
            } else if ($(window).scrollTop() < 680) {
                $('header .top-bar nav ul li a[class="home"]').addClass("active");
            }
        });
    });
    // Finish Toggle Class Active at The Top of Each Section

    // Start Show Nav Bar and Go to Top Icon When Scrolling
    if ($(window).scrollTop() > 10) {
        $("header .top-bar-z").addClass("fixed");
        $("header .banner").css("paddingTop", $("header .top-bar").innerHeight());
        $(".go-to-top-icon").fadeIn();
    } else {
        $("header .banner").css("paddingTop", "0");
        $("header .top-bar-container").removeClass("fixed");
        $(".go-to-top-icon").fadeOut();
    }

    $(window).scroll(function () {
        if ($(window).scrollTop() > 10) {
            $("header .top-bar-container").addClass("fixed");
            $("header .banner").css("paddingTop", $("header .top-bar").innerHeight());
            $(".go-to-top-icon").fadeIn();
        } else {
            $("header .top-bar-container").removeClass("fixed");
            $("header .banner").css("paddingTop", "0");
            $(".go-to-top-icon").fadeOut();
        }
    });
    // Finish Show Nav Bar and Go to Top Icon When Scrolling

    // Start Count Numbers
    $(".count").each(function () {
        $(this).prop("Counter", 0).animate({Counter: $(this).text() , } , {
            duration: 1000, easing: "swing" , step: function (now) 
            {$(this).text(Math.ceil(now));},
        });
    });
    // Finish Count Numbers

    // Start Frequently Section
    var menuContext = $(".faq .faq-boxs .faq-left-box ul li");
    var blockContext = $(".faq .faq-boxs .faq-right-box > div");
    var titleContent = $(".faq .faq-boxs .faq-right-box div ul");

    $(menuContext).click(function () {
        $(menuContext).removeClass("active");
        $(this).addClass("active");
        $(blockContext).hide();
        $(titleContent).find(".body").hide();
        $(titleContent).find(".body.first").show();
        $(".plus").show();
        $(".plus.first , .minus").hide();
        $(".minus.first").show();
        $(titleContent).removeClass("change-color");
        $(titleContent).has(".first").addClass("change-color");
        var i = $(this).index();
        $(blockContext).eq(i).show();
    });

    var mainTitle = $(".faq .faq-boxs .faq-right-box div ul li.main-title");
    $(mainTitle).click(function () {
        $(this).parent().find(".body").toggle();
        $(this).parent().toggleClass("change-color");
        $(this).find(".plus , .minus").toggle();
    });
    // Finish Frequently Section
});