import express from 'express';

var router = express.Router();

router.use('/member', require('./member'));
router.use('/things', require('./thing'));
router.use('/users', require('./user'));

module.exports = router;