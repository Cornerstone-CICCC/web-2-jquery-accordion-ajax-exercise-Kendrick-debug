$(function () {
  // your code here
  $(".accordion h3").on("click", function () {
    $(".accordion-content").not($(this).next("div")).slideUp();
    $(this).next("div").slideToggle();
  });

  $(function () {
    $(".todos button").on("click", function () {
      $.ajax({
        url: "https://dummyjson.com/todos",
        method: "GET",
        success: function (response) {
          $(".todos ul").empty();
          response.todos.forEach(function (todo) {
            $(".todos ul").append(`<li>${todo.todo}</li>`);
          });
        },
        error: function () {
          alert("An error occurred while loading todos.");
        },
      });
    });
  });
});
