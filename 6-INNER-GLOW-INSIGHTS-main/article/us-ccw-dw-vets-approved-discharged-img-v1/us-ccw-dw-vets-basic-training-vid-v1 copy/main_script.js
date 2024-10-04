function typingEffect(e) {
    return string = '<div class="temp-typing bg-gray-200 p-3 rounded-lg shadow-xs mt-2 inline-block">',
        string += '<div class="typing-animation">',
        string += '<div class="typing-dot"></div>',
        string += '<div class="typing-dot"></div>',
        string += '<div class="typing-dot"></div>',
        string += "</div>",
        string += "</div>",
        string
}

let primaryPhoneNumber = "+18663972311";
let weblink = "https://afflat3a2.com/lnk.asp?o=24547&c=918277&a=242281&k=918D0DE71C1976586617469F370B89AC&l=27413&s2=[cmc_vid]";
let primaryPhoneNumberText = "Register Now";
let downsellPhoneNumber = "+18338891410";
let downsellPhoneNumberText = "Register Now";

$(document).ready((function () {
    var e, t;
    setTimeout((function () {
            $("#initTyping").remove(),
                $("#msg1").removeClass("hidden").after(typingEffect()),
                setTimeout((function () {
                        $(".temp-typing").remove(),
                            $("#msg2").removeClass("hidden").after(typingEffect()),
                            n(),
                            setTimeout((function () {
                                    $(".temp-typing").remove(),
                                        $("#msg3").removeClass("hidden").after(typingEffect()),
                                        n(),
                                        setTimeout((function () {
                                                $(".temp-typing").remove(),
                                                    $("#msg4").removeClass("hidden")
                                            }),
                                            0)
                                }),
                                1750)
                    }),
                    1250)
        }),
        750);
    var r = "";

    function n(e) {
        var t = $("main");
        $("html, body").animate({
            scrollTop: t.offset().top + t.outerHeight() - $(window).height()
        }, "fast")
    }
    $("button.chat-button").on("click",
        (function () {
            if (t = $(this).attr("data-form-step"),
                e = $(this).attr("data-form-value"),
                1 == t && ($("#agentBlock2 .agent-chat").prepend(typingEffect()),
                    $("#msg4").addClass("hidden"),
                    $("#userBlock1").removeClass("hidden"),
                    n(),
                    setTimeout((function () {
                            $("#agentBlock2").removeClass("hidden"),
                                n(),
                                setTimeout((function () {
                                        $(".temp-typing").remove(),
                                            $("#msg6").removeClass("hidden").after(typingEffect()),
                                            n(),
                                            setTimeout((function () {
                                                    $(".temp-typing").remove(),
                                                        $("#msg7").removeClass("hidden").after(typingEffect()),
                                                        n(),
                                                        setTimeout((function () {
                                                                $(".temp-typing").remove(),
                                                                    $("#msg8").removeClass("hidden"),
                                                                    n()
                                                            }),
                                                            0)
                                                }),
                                                1750)
                                    }),
                                    2250)
                        }),
                        50)),
                2 == t) {
                if ($("#agentBlock4 .agent-chat").prepend(typingEffect()),
    $("#msg8").addClass("hidden"),
    $("#userBlock3").removeClass("hidden"),
    "No" == e) {
    $("#PrimaryNumber").attr("href", "tel:" + weblink),
    $("#PrimaryNumber").text(primaryPhoneNumberText),
    $("#DownsellNumber").attr("href", weblink),
    $("#DownsellNumber").text(downsellPhoneNumberText);
    $("#msg12no").removeClass("hidden");
} else if ("AirForce" == e) {
    $("#PrimaryNumber").attr("href", "tel:" + primaryPhoneNumber),
    $("#PrimaryNumber").text(primaryPhoneNumberText),
    $("#DownsellNumber").attr("href", weblink),
    $("#DownsellNumber").text(downsellPhoneNumberText);
    $("#msg12airforce").removeClass("hidden");
    $("#hdnApprovalStatus").val("no");
}else if ("Navy" == e) {
    $("#PrimaryNumber").attr("href", "tel:" + primaryPhoneNumber),
    $("#PrimaryNumber").text(primaryPhoneNumberText),
    $("#DownsellNumber").attr("href", weblink),
    $("#DownsellNumber").text(downsellPhoneNumberText);
    $("#msg12navy").removeClass("hidden");
    $("#hdnApprovalStatus").val("no");
}else if ("Army" == e) {
    $("#PrimaryNumber").attr("href", "tel:" + primaryPhoneNumber),
    $("#PrimaryNumber").text(primaryPhoneNumberText),
    $("#DownsellNumber").attr("href", weblink),
    $("#DownsellNumber").text(downsellPhoneNumberText);
    $("#msg12army").removeClass("hidden");
    $("#hdnApprovalStatus").val("no");
}else if ("Marines" == e) {
    $("#PrimaryNumber").attr("href", "tel:" + primaryPhoneNumber),
    $("#PrimaryNumber").text(primaryPhoneNumberText),
    $("#DownsellNumber").attr("href", weblink),
    $("#DownsellNumber").text(downsellPhoneNumberText);
    $("#msg12marines").removeClass("hidden");
    $("#hdnApprovalStatus").val("no");
}else if ("SpaceForce" == e) {
    $("#PrimaryNumber").attr("href", "tel:" + primaryPhoneNumber),
    $("#PrimaryNumber").text(primaryPhoneNumberText),
    $("#DownsellNumber").attr("href", weblink),
    $("#DownsellNumber").text(downsellPhoneNumberText);
    $("#msg12spaceforce").removeClass("hidden");
    $("#hdnApprovalStatus").val("no");
}else if ("CoastGuard" == e) {
    $("#PrimaryNumber").attr("href", "tel:" + primaryPhoneNumber),
    $("#PrimaryNumber").text(primaryPhoneNumberText),
    $("#DownsellNumber").attr("href", weblink),
    $("#DownsellNumber").text(downsellPhoneNumberText);
    $("#msg12coastguard").removeClass("hidden");
    $("#hdnApprovalStatus").val("no");
}else if ("Medicaid" == e) {
    $("#PrimaryNumber").attr("href", "tel:" + primaryPhoneNumber),
    $("#PrimaryNumber").text(primaryPhoneNumberText),
    $("#DownsellNumber").attr("href", weblink),
    $("#DownsellNumber").text(downsellPhoneNumberText);
    $("#msg12medicaid").removeClass("hidden");
    $("#hdnApprovalStatus").val("no");
} else {
    $("#msg12airforce").removeClass("hidden");
    $("#msg12navy").removeClass("hidden");
    $("#msg12army").removeClass("hidden");
    $("#msg12marines").removeClass("hidden");
    $("#msg12spaceforce").removeClass("hidden");
    $("#msg12coastguard").removeClass("hidden");
    $("#msg12medicare").removeClass("hidden");
    $("#agentBlock4 .agent-chat .temp-typing").css({
        display: "inline-block"
    });
    setTimeout(() => {
        $("#agentBlock4 .agent-chat .temp-typing").css({
            display: "none"
        });
        setTimeout(() => {
            $("#hdnApprovalStatus").val("no");
            $("#agentBlock4, #msg18, #msg19").removeClass("hidden");
            $("#disconnected").removeClass("hidden");
        }, 100);
    }, 1500);
    return;
}
n();
                    "no" == $("#hdnApprovalStatus").val() ? ($("#DownsellNumber").removeClass("hidden"),
                        $("#msg14disapproved").removeClass("hidden"),
                        $("#msg16disapproved").removeClass("hidden")) : ($("#PrimaryNumber").removeClass("hidden"),
                        $("#msg14approved").removeClass("hidden"),
                        $("#msg16approved").removeClass("hidden")),
                    n(),
                    setTimeout((function () {
                            $("#agentBlock4").removeClass("hidden"),
                                n(),
                                setTimeout((function () {
                                        $(".temp-typing").remove(),
                                            $("#msg13").removeClass("hidden").after(typingEffect()),
                                            n(),
                                            setTimeout((function () {
                                                    $(".temp-typing").remove(),
                                                        $("#msg14").removeClass("hidden").after(typingEffect()),
                                                        n(),
                                                        setTimeout((function () {
                                                                $(".temp-typing").remove(),
                                                                    $("#msg15").removeClass("hidden").after(typingEffect()),
                                                                    n(),
                                                                    setTimeout((function () {
                                                                            $(".temp-typing").remove(),
                                                                                $("#msg16").removeClass("hidden").after(typingEffect()),
                                                                                n(),
                                                                                setTimeout((function () {
                                                                                        $(".temp-typing").remove(),
                                                                                            $("#msg17").removeClass("hidden"),
                                                                                            n()
																							setTimeout((function () {
																									$(".temp-typing").remove(),
																									$("#tcpa").removeClass("hidden"),
																									n()
																								}),
																								0)
                                                                                    }),
                                                                                    0)
                                                                        }),
                                                                        2250)
                                                            }),
                                                            1250)
                                                }),
                                                1750)
                                    }),
                                    1250)
                        }),
                        250)
            }
        }))
}));
var daysOfWeek = ["Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
    ],
    months = ["January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
    ],
    currentDate = new Date,
    currentDayOfWeek = daysOfWeek[currentDate.getDay()],
    currentMonth = months[currentDate.getMonth()],
    currentDay = currentDate.getDate(),
    currentYear = currentDate.getFullYear(),
    formattedDate = currentDayOfWeek + ", " + ("0" + (currentDate.getMonth() + 1)).slice(-2) + " / " + ("0" + currentDay).slice(-2) + " / " + currentYear;
document.getElementById("currentDate").textContent = formattedDate;