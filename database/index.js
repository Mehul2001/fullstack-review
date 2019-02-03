const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher');

let repoSchema = mongoose.Schema({ //Describes how the models in our connection looks like
  id: Number,
  reponame: String,
  full_name: String,
  fileDescription: String,
  star: Number,
  watchers: Number,
  forks: Number,
});
// tell mongoose on collection 'Repo' validate using repSchema
let Repo = mongoose.model('Repo', repoSchema);

const repo = new Repo({
  id: 123,
  reponame: "practice",
  full_name: "mehul/practice",
  fileDescription: "Server Client interaction",
  star: 1,
  watchers: 2,
  forks: 4,


})
let save = (err, repo) => {
  // class instantiation using .save() method
  var repo = newRepo({

  })
  if (err) {
    console.log(err);
  }
  console.log(repo);
  // TODO: Your code here
  // This function should save a repo or repos to
  // the MongoDB
}

module.exports.save = save;