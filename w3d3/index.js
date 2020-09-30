const express = require("express");
const cookieParser = require('cookie-parser');
const cookieSession = require('cookie-session')
const bodyParser = require("body-parser");
const bcrypt = require('bcrypt');
const { validateUser, checkEmail } = require('./helpers')
const app = express();
const salt = bcrypt.genSaltSync(10);
const port = 3000;

// for (key in obj)
//   for (key of Object.keys(obj))
const hashedChickenPW = bcrypt.hashSync("scrambled", salt)
const hashedDimitriPW = bcrypt.hashSync("solvent", salt)
const userDatabaseIsh = {
  chicken: {
    nicename: "chicken",
    fullname: "Pequeño Pollo de la Pampa",
    email: "pock@pock.com",
    password: hashedChickenPW
  },
  dimitri: {
    nicename: "dimitri",
    fullname: "Dimitri Ivanovich Mendeleiv",
    email: "he@co2.com",
    password: hashedDimitriPW
  },
  "🐔": {

  }
}
console.log(userDatabaseIsh)

app.use(cookieParser())
app.use(cookieSession({
  name: 'session',
  keys: ['Ithinkthatchickensintheprairiesareverygreat', 'Ithinkthatamandascatisgettingalotofattentioninthebackground']
}))
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: false }));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  const currentDate = new Date()
  console.log(req.session.nicename)
  const fullname = userDatabaseIsh[req.session.nicename] ? userDatabaseIsh[req.session.nicename].fullname : null;
  const templateVars = { date: currentDate.toLocaleString(), fullname }
  res.render("index", templateVars);
});

app.get('/funky', (req, res) => {
  res.cookie("test", "test")
  req.session.nicename = "chicken"
  res.redirect('/')
})

app.get("/login", (req, res) => {
  const templateVars = { error: null }
  res.render("login", templateVars);
});

app.post("/login", (req, res) => {
  console.log(req.body)
  const userObject = validateUser(bcrypt, userDatabaseIsh, req.body.email, req.body.password)
  if (userObject) {
    req.session.nicename = userObject.nicename
    res.redirect('/')
  } else {
    console.log('Failed login attempt')
    res.render('login', { error: "Failed login attempt" })
  }
})

app.post('/logout', (req, res) => {
  delete req.session.nicename
  res.redirect('/')
})
// chicken: {
//   nicename: "chicken",
//   fullname: "Pequeño Pollo de la Pampa",
//   email: "pock@pock.com",
//   password: hashedChickenPW
// },
app.post('/register', (req, res) => {
  const { nicename, fullname, email, password } = req.body

  // const nicename = req.body.nicename
  // const fullname = req.body.fullname
  // const email = req.body.email
  // const password = req.body.password

  if (checkEmail(userDatabaseIsh, email)) {
    res.send('EMAIL ALREADY IN USE')
  } else {
    const newUser = {
      nicename,
      fullname,
      email,
      password: bcrypt.hashSync(password, salt)
    }
    userDatabaseIsh[nicename] = newUser
    req.session.nicename = nicename
    res.redirect('/')
  }

})
app.listen(port, () => console.log(`Express server running on port ${port}`));
