$(document).ready(() => {
  $("#refresh").click(fetchPosts)

  $("li button").click(deleteComment)
})