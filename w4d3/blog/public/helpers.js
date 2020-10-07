// 1: {
//   title: "I AM TITLE",
//   content: "I AM CONTENT",
//   comments: [
//     "Wow!",
//     "So much content"
//   ]
// }

{/* <article>
<h1>I AM TITLE</h1>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, delectus hic, non exercitationem quas libero,
  eius
  fuga quisquam perferendis rem est! Deserunt assumenda culpa illum eveniet quisquam! Alias, aliquam quod.</p>
<ul>
  <li>Wow so much poetry</li>
</ul>
</article> */}

const createPost = postObj => {
  let output = ""
  output += `<article id="${postObj.id}">`
  output += `<h1>${postObj.title}</h1>`
  output += `<p>${postObj.content}</p>`
  output += `<ul>`
  for (const comment of postObj.comments) {
    output += `<li>`
    output += `<span>${comment}</span>`
    output += `<button>delete</button>`
    output += `</li>`
  }
  output += `</ul>`
  output += `</article>`

  return output
  // let newOutput = `<article>
  // <h1>I AM TITLE</h1>
  // <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, delectus hic, non exercitationem quas libero,
  //   eius
  //   fuga quisquam perferendis rem est! Deserunt assumenda culpa illum eveniet quisquam! Alias, aliquam quod.</p>
  // <ul>
  //   <li>Wow so much poetry</li>
  // </ul>
  // </article>`
}

const fetchPosts = () => {
  console.log("YES!")
  $.ajax({
    url: "/posts",
    method: "GET"
  })
    .then((posts) => {
      console.log(posts)
      for (const key in posts) {
        const output = createPost(posts[key])
        $('section').append(output)
      }
      $("li button").click(deleteComment)
    })
    .catch(err => console.log(err))
}

const deleteComment = (event) => {
  // delete property method for object
  // Form: POST, ajax: DELETE

  console.log('DELETE (CYBERMEN)')
  console.log(event)
  const commentToRemove = $(event.currentTarget).siblings('span').text()
  const articleId = event.currentTarget.parentElement.parentElement.parentElement.id
  const articleIdJQ = $(event.currentTarget).closest('article')[0].id
  console.log(articleId, articleIdJQ)
  $.ajax({
    url: `/posts/${articleId}`,
    method: "DELETE",
    data: { comment: commentToRemove }
  }).then(res => {
    $(event.target.parentElement).remove()
  })

}