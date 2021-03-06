const mongoose = require("mongoose")
const Article = mongoose.model("Article")

let sendJSONresponse = function(res, status, content) {
  res.status(status);
  res.json(content);
};

module.exports.addArticle = (req, res) => {
  let newArticle = {
    title: req.body.title,
    description: req.body.description,
    urlToImage: req.body.urlToImage,
    url: req.body.url
  };

  Article.create(newArticle, (err, article) => {
    if(err){
      console.log(err)
      sendJSONresponse(res, 400, err)
    }
    else {
      sendJSONresponse(res, 201, article)
    }
  })
}


module.exports.getArticles = (req, res) => {
  Article.find({}).exec((err, data) =>{
    if(err){
       sendJSONresponse(res, 400, err)
    }
    sendJSONresponse(res, 200, data)
  })
}

module.exports.removeArticle = (req, res) => {
  Article.findOneAndDelete({_id: req.params.articleid }, (err, article) => {
    if(err){
      sendJSONresponse(res, 400, err)
    }
    else {
      sendJSONresponse(res, 200, article)
    }
  })
}
