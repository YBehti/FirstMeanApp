const Post = require('../models/post');

exports.createPost = (req,res,next)=>{
  const url = req.protocol + '://' + req.get('host');
  const imageDir = url + '/image/';
  const post = new Post({
    title:req.body.title,
    content:req.body.content,
    imagePath:imageDir + req.file.filename,
    creator: req.userData.userId

  });

  post.save()
  .then((createdPost) => {
    res.status(201).json({
      message:'post added successfuly',
      post:{
        ...createdPost,
        postId:createdPost._id
      }

    });
  })
  .catch(error => {
    res.status(500).json({
      message:"unauthorised action".toUpperCase()
    });
  });



}


exports.getAllPosts = (req,res,next)=>{
  const postsPerPage = +req.query.postsPerPage;
  const currentPage = +req.query.currentPage;
  const query = Post.find();
  let fetchedPosts;


  if(postsPerPage && currentPage){
    query
    .skip(postsPerPage * (currentPage -1))
    .limit(postsPerPage);
  }

  query
  .then(documents=>{
    fetchedPosts = documents;
    return Post.countDocuments();
  })
  .then(count=>{
    res.status(200).json({
      message:'Posts fetched successfuly',
      posts:fetchedPosts,
      postsCount:count
    });
  }

  )
  .catch(error => {
    res.status(500).json({
      message:"not able to fetch posts".toUpperCase()
    });
  });


}

exports.getOnePost = (req,res,next) => {
  Post.findById(req.params.id)
  .then(document => {
    if(document){
      res.status(200).json(document);
    }else{
      res.status(404).send({message: "Post not found"})
    }

  })
  .catch(error => {
    res.status(500).json({
      message: "not able to fetch post".toUpperCase()
    });
  });
}

exports.delete = (req,res,next) => {
  Post.deleteOne({"_id":req.params.id, "creator":req.userData.userId})
  .then(result => {
    if(result.deletedCount>0){
      console.log(result);
      res.status(200).json({message:"post deleted"});
    }else{
      res.status(500).json({message:"unauthorised action"});
    }


  })
  .catch(error => {
    res.status(500).json({
      message:"unauthorised action".toUpperCase()
    });
  })
}

exports.update = (req,res,next) => {
  let imagePath = req.body.imagePath;
  if(req.file){
    const url = req.protocol + '://' + req.get('host');
    const imageDir = url + '/image/';
    imagePath = imageDir + req.file.filename;
  }
  const post = new Post({
    _id: req.body.id,
    title: req.body.title,
    content: req.body.content,
    imagePath: imagePath,



  });
  Post.updateOne({_id: req.params.id, creator: req.userData.userId},post)
  .then(result => {
    if(result.n>0){
      console.log(result);
      res.status(200).send({
        message: "Updated successfuly",
        imagePath: imagePath
      });
    }else{
      res.status(500).json({
        message:"unauthorised action"
      });
    }


  })
  .catch(error => {
    res.status(500).json({
      message:"Unauthorised action".toUpperCase()
    });
  });

}
