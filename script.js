
$(document).ready(function () {
    $("#dark").click(function (e) {
        e.preventDefault();
        const $html = $("html");
        const $btn = $(this);
        const $i = $("i");

        if ($html.attr("data-bs-theme") === "dark") {
            // Light Theme
            $html.removeAttr("data-bs-theme");
            $btn.removeClass("btn-dark").addClass("btn-secondary").text("Switch to Dark Theme");
            $i.css("color", "black");
        } else {
            // Dark Theme
            $html.attr("data-bs-theme", "dark");
            $btn.removeClass("btn-light").addClass("btn-dark").text("Switch to Light Theme");
            $i.css("color", "white");
        }
    });
});
