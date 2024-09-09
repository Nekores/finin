$(window).on("load", function() {
  subscribe();
});

function subscribe() {
  $(".subscribe-form").on("submit", function(e) {
    e.preventDefault();
    e.stopImmediatePropagation();
    $("#exampleModalCenter").modal("show");
    $(".st-btn").css("display", "inline-block");
    $(".st-btn > span").css("display", "inline-block");
    $("#st-1 .st-btn > span").css("min-width", "20px;");
    $("#st-1 .st-btn:hover").css("top", "4px !important;");
    form = $(this);
    data = $(this).serialize() + "&ajax=true";
    $.post("subscribe.php", data, function(response) {
      form.trigger("reset");
    });
  });
}
