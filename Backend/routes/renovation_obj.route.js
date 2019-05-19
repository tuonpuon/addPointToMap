const express = require('express');
const router = express.Router();

const renovation_obj_controller = require('../controllers/renovation_obj.controller');


router.get('/test', renovation_obj_controller.test);
router.get('/all', renovation_obj_controller.renovation_objs);
router.get('/:id', renovation_obj_controller.renovation_obj_details);

router.post('/create', renovation_obj_controller.renovation_obj_create);

module.exports = router;