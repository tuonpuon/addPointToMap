const express = require('express');
const router = express.Router();

const renovation_obj_controller = require('../controllers/renovation_obj.controller');

router.get('/all', renovation_obj_controller.renovation_objs);
router.get('/id/:id', renovation_obj_controller.renovation_obj_details);

router.put('/update/:id', renovation_obj_controller.renovation_obj_update);

router.post('/create', renovation_obj_controller.renovation_obj_create);

router.delete('/delete/:id', renovation_obj_controller.renovation_obj_delete);

module.exports = router;