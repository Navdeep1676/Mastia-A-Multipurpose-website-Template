if ($(".head").load("./include/header.html"), $(".footer").load("./include/footer.html"), $(window).load((function () {
        $(".se-pre-con").fadeOut("slow")
    })), $((function () {
        $(".gototop").click((function () {
            $("body,html").animate({
                scrollTop: "0px"
            })
        })), $(window).scroll((function () {
            $(this).scrollTop() >= 100 ? $(".gototop").fadeIn() : $(".gototop").fadeOut()
        }))
    })),


    
     $("body#aboutpage").length > 0 && $((function () {
        $(".acc a").click((function (t) {
            t.preventDefault(), 0 == $(this).hasClass("active") && ($(".acc p").slideUp(), $(this).next("p").slideDown(), $(".acc a").removeClass("active"), $(this).addClass("active"))
        })), $(".box-slider").bxSlider({
            auto: !0,
            controls: !1
        }), $(".lazy").Lazy(), $(".about-btn1").mousedown((function () {
            $(this).css({
                "box-shadow": "0px 1px 0px 0px rgba(255,255,255,0.8)",
                top: "5px"
            })
        })), $(".about-btn1").mouseup((function () {
            $(this).css({
                "box-shadow": "0px 7px 0px 0px rgba(255,255,255,0.8)",
                top: "0px"
            })
        })), $(".teamcards").hover((function () {
            $(this).css({
                "margin-top": "-10px"
            })
        }), (function () {
            $(this).css({
                "margin-top": "0px"
            })
        })), $(".circleiconanim").hover((function () {
            $(this).addClass("animate__animated animate__wobble animate__infinite infinite")
        }), (function () {
            $(this).removeClass("animate__animated animate__wobble animate__infinite infinite")
        }))
    })),




    $("body#news").length > 0 && $((function () {
        $(".page-change ul li a").click((function (t) {
            t.preventDefault();
            var n = $(this).parent("li").index();
            $(".page-change ul li a").removeClass("active"), $(this).addClass("active"), $(".section").fadeOut(200), $(".section:eq(" + n + ")").fadeIn(200), $("body,html").animate({
                scrollTop: 140
            })
        })), $(".lazy").Lazy(), $(".news-btn").mousedown((function () {
            $(this).css({
                "box-shadow": "0px 1px 0px 0px rgba(0,0,0,0.8)",
                top: "5px"
            })
        })), $(".news-btn").mouseup((function () {
            $(this).css({
                "box-shadow": "0px 7px 0px 0px rgba(0,0,0,0.8)",
                top: "0px"
            })
        }))
    })), $("body#project").length > 0 && $((function () {
        $(".pro-wrap-1 nav ul li a").click((function (t) {
            t.preventDefault();
            var n = $(this).parent("li").index();
            $(".pro-wrap-1 nav ul li a").removeClass("active"), $(this).addClass("active"), $(".project-box").css({
                display: "none"
            }), $(".project-box:eq(" + n + ")").fadeIn(100)
        })), $(".lazy").Lazy()
    })), $("body#fullnews").length > 0 && ($(".lazy").Lazy(), $(".sharebtn").mousedown((function () {
        $(this).css({
            "box-shadow": "0px 1px 0px 0px rgba(0,0,0,0.8)",
            top: "5px"
        })
    })), $(".sharebtn").mouseup((function () {
        $(this).css({
            "box-shadow": "0px 7px 0px 0px rgba(0,0,0,0.8)",
            top: "0px"
        })
    })), $(".submitbtn").mousedown((function () {
        $(this).css({
            "box-shadow": "0px 1px 0px 0px rgba(0,0,0,0.8)",
            top: "5px"
        })
    })), $(".submitbtn").mouseup((function () {
        $(this).css({
            "box-shadow": "0px 7px 0px 0px rgba(0,0,0,0.8)",
            top: "0px"
        })
    })), $(".submitbtn").click((function () {
        "" == $("#name").val() && $("body,html").animate({
            scrollTop: $(".fullnewswrap-1 h2").offset().top - 140
        })
    }))), $("body#contactpage").length > 0 && ($(".contactsubbtn").mousedown((function () {
        $(this).css({
            "box-shadow": "0px 1px 0px 0px rgba(0,0,0,0.8)",
            top: "5px"
        })
    })), $(".contactsubbtn").mouseup((function () {
        $(this).css({
            "box-shadow": "0px 7px 0px 0px rgba(0,0,0,0.8)",
            top: "0px"
        })
    })), $(".contactsubbtn").click((function () {
        "" == $("#FirstName").val() && $("body,html").animate({
            scrollTop: $(".form-wrap h2").offset().top - 90
        })
    }))), 
    $("body#index").length > 0) {
    $((function () {
        $(".box-slider").bxSlider({
            auto: !0,
            controls: !1
        }), $(".lazy").Lazy(), $(".animate").mousedown((function () {
            $(this).css({
                "box-shadow": "0px 1px 0px 0px rgba(255,255,255,0.8)",
                "margin-top": "5px"
            })
        })), $(".animate").mouseup((function () {
            $(this).css({
                "box-shadow": "0px 7px 0px 0px rgba(255,255,255,0.8)",
                "margin-top": "0px"
            })
        })), $(".services").hover((function () {
            $(this).addClass("animate__animated animate__pulse animate__infinite infinite")
        }), (function () {
            $(this).removeClass("animate__animated animate__pulse animate__infinite infinite")
        })), $(".projpic").hover((function () {
            $(this).css({
                "margin-top": "-5px"
            })
        }), (function () {
            $(this).css({
                "margin-top": "0px"
            })
        })), $(".perform").hover((function () {
            $(this).addClass("animate__animated animate__heartBeat")
        }), (function () {
            $(this).removeClass("animate__animated animate__heartBeat")
        })), $(".blogbox").hover((function () {
            $(this).addClass("active")
        }), (function () {
            $(this).removeClass("active")
        })), $(".projprevbtn").mousedown((function () {
            $(this).css({
                "border-radius": "50%"
            }), $(".projnextbtn").css({
                "border-radius": "0%"
            })
        })), $(".projnextbtn").mousedown((function () {
            $(this).css({
                "border-radius": "50%"
            }), $(".projprevbtn").css({
                "border-radius": "0%"
            })
        }))
    }));
    var slideindex3 = 1;
    showslide(slideindex3);
    var btnclick = document.querySelector(".wrap-7 .prev").onclick = function () {
        showslide(slideindex3 += -1)
    };
    btnclick = document.querySelector(".wrap-7 .next").onclick = function () {
        showslide(slideindex3 += 1)
    };

    function showslide(t) {
        var n, e = document.getElementsByClassName("otherblog");
        for (t > e.length && (slideindex3 = 1), t < 1 && (slideindex3 = e.length), n = 0; n < e.length; n++) e[n].style.display = "none";
        e[slideindex3 - 1].style.display = "block"
    }
    var slideIndex = 0;

    function showSlides() {
        var t, n = document.getElementsByClassName("otherprojects");
        for (t = 0; t < n.length; t++) n[t].style.display = "none";
        ++slideIndex > n.length && (slideIndex = 1), n[slideIndex - 1].style.display = "block", setTimeout(showSlides, 4e3)
    }
    showSlides()
}