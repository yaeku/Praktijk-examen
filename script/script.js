$(document).ready(function () {
  $("#blog-post-1").load("blog-artikelen.html #blog-post-1");
  $("#blog-post-2").load("blog-artikelen.html #blog-post-2");
  $("#blog-post-3").load("blog-artikelen.html #blog-post-3");

  $("#blog-post-1").on("click", function () {
    $("#blog-pagina").load("blog-artikelen.html #blog-post-1");
  });

  $("#blog-post-2").on("click", function () {
    $("#blog-pagina").load("blog-artikelen.html #blog-post-2");
  });

  $("#blog-post-3").on("click", function () {
    $("#blog-pagina").load("blog-artikelen.html #blog-post-3");
  });

  $("form").validin();
  $("button").button();

  $("#dialog").dialog({
    autoOpen: false,
    show: {
      effect: "pulsate",
      duration: 500,
    },
    hide: {
      effect: "explode",
      duration: 500,
    },
  });

  $("#link").on("click", function () {
    $("#dialog").dialog("open");
  });
});
