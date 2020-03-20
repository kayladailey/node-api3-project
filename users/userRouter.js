const express = require('express');
const router = express.Router();
const users = require("../data/")


router.post('/', (req, res) => {
  users
  .find() 
  //Looking for posts 
  .then(arr => {
       // If found YES!
      res.status(200).json(arr);
  })
  .catch(err => {
      //If not found
      res.status(500).json({
          success: false,
          errorMessage: "Error retrieving posts"
      });
  });
});

router.post('/:id/posts', validateUser, (req, res) => {
  // do your magic!
});

router.get('/', (req, res) => {
  // do your magic!
});

router.get('/:id', validateUserId, (req, res) => {
  // do your magic!
});

router.get('/:id/posts', validateUserId, (req, res) => {
  // do your magic!
});

router.delete('/:id',validateUserId, (req, res) => {
  // do your magic!
});

router.put('/:id', validateUserId, (req, res) => {
 
});

//custom middleware

function validateUserId (req, res, next) {
  const { id } = req.user
  if (req.url === '/:id' || '/:id/posts' ) {
    next(id);
  } else {
    res.status(404).json({
      success: false,
      message: "invalid user id" 
  })
  }
}

function validateUser(req, res, next) {
    const body = req.body;
    !body || body === {} ?
      res.status(400).json({ message: 'Please include request body' })
      :
      next();
  }


function validatePost(req, res, next) {
  const body = req.body;
  !body || body === {} ?
    res.status(400).json({ message: "missing user data"})
    :
    next();
}

module.exports = router;