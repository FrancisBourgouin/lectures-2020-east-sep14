const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const posts = {
  1: {
    id: 1,
    title: "I AM TITLE",
    content: "I AM CONTENT",
    comments: [
      "Wow!",
      "So much content"
    ]
  },
  2: {
    id: 2,
    title: "I AM ALSO TITLE",
    content: "I AM SUPER CONTENT",
    comments: [
      "Vraiment joyeux!",
      "Pouet pouet!"
    ]
  }
}



const app = express();


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

const createPost = postObj => {
  let output = ""
  output += "<article>"
  output += `<h1>${postObj.title}</h1>`
  output += `<p>${postObj.content}</p>`
  output += `<h2>author name</h2>`
  output += `<ul>`
  for (const comment of postObj.comments) {
    output += `<li>${comment}</li>`
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



app.get('/posts', (req, res) => {
  // const post = createPost(posts[1])
  // res.send(post)

  res.json(posts)
})

app.delete('/posts/:id', (req, res) => {
  console.log(req.body, req.params)

  const newComments = posts[req.params.id].comments.filter(comment => comment !== req.body.comment)
  posts[req.params.id].comments = newComments
  res.send('OK')
})


module.exports = app;
