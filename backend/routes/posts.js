const express = require('express');
const router = express.Router();


const authCheck = require('../middleware/check-auth');
const fileExtractor = require('../middleware/file-extractor')
const PostsController = require ('../controller/posts');



router.post('',authCheck,fileExtractor,PostsController.createPost);

/* dd0FoixmxgKFmfEG  User Password */

router.get("",PostsController.getAllPosts);

router.get("/:id",PostsController.getOnePost);

router.delete("/:id",authCheck,PostsController.delete);

router.put("/:id",authCheck,fileExtractor,PostsController.update);


module.exports = router;
