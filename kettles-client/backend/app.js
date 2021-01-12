const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

//temp
const Post = require('./models/post');

const Ringer = require('./models/ringer');

const app = express();

mongoose.connect("mongodb+srv://brenden:SVEpU4faxEEFkFDm@cluster0.8ynaf.mongodb.net/node-angular?retryWrites=true&w=majority")
  .then(()=>{
    console.log("connected")
  })
  .catch((error)=>{
    console.log("connection failed\n", error)
  })

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, PUT, DELETE, OPTIONS");
  next();
});

//temp
app.post('/api/posts', (req, res, next) => {
  const post = new Post({
    title: req.body.title,
    content: req.body.content
  })
  post.save();
  console.log(post);
  res.status(201).json({
    message: "Post added"
  });
})

//temp
app.get('/api/posts' ,(req, res, next) => {
  Post.find()
    .then(documents => {
      console.log(documents);
      res.status(200).json({
        message: "Posts sent successfully",
        posts: documents
      });
    })
    .catch(err => console.log(err));

});

//temp
app.delete('/api/posts/:id', (req, res, next) => {
  res.status(200).json({message: "post deleted"})
})

app.get('/api/ringers', (req, res, next) => {
  Ringer.find()
    .then(documents => {
      res.status(200).json({
        message: "Ringers sent successfully",
        ringers: documents
      })
    })
    .catch(err => console.log(err));
})

app.post('/api/ringers', (req, res, next) => {
  console.log(req.body)
  const ringer = new Ringer({
    _id: req.body.id,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    phoneNumber: req.body.phoneNumber
  });
  console.log(ringer)
  ringer.save().then(result => {
    res.status(201).json(result);
  }
  );
});

app.put('/api/ringers/:id', (req, res, next) => {
  const ringer = new Ringer({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    phoneNumber: req.body.phoneNumber
  })
  Ringer.updateOne({_id: req.params.id}, ringer).then(result => {
    console.log(result);
    res.status(200).json({message: "update successful!"})
  })
})

app.delete('/api/ringers/:id', (req, res, next) => {
  Ringer.deleteOne({_id: req.params.id}).then(result => {
    res.status(200).json({message: "ringer: " + req.params.id + " deleted"})
  })
});

module.exports = app;
