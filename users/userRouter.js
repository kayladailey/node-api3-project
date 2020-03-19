const express = require('express');
const router = express.Router();





router.post('/', (req, res) => {
  // do your magic!
});

router.post('/:id/posts', validateUserId, (req, res) => {
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
  // do your magic!
});

//custom middleware

function validateUserId (req, res, next) {
  const { id } = req.user
  if (req.url === '/:id' || '/:id/posts' ) {
    next();
  } else {
    res.status(404).json({
      success: false,
      message: "invalid user id" 
  })
  }
}

function validateUser(req, res, next) {

}

function validatePost(req, res, next) {
  // do your magic!
}

module.exports = router;