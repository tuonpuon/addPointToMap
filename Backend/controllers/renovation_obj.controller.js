const renovation_obj = require('../models/renovation_obj.model');

exports.renovation_obj_create = function (req, res, next) {
    let renovationObj = new renovation_obj(
        {
            title: req.body.title,
            description: req.body.description,
            geo_location: req.body.geo_location,
            created: Date.now(),
            last_edited: Date.now(),
        }
    );

    renovationObj.save(function (err) {
        if (err) return next(err);
        res.send('renovation_obj Created successfully')
    })
};

exports.renovation_obj_details = function (req, res) {
    renovation_obj.findById(req.params.id, function (err, obj) {
        if (err) return next(err);
        res.send(obj);
    })
};

exports.renovation_objs = function (req, res) {
    renovation_obj.find(function (err, renovation_objs) {
        if (err) return next(err);
        res.send(renovation_objs);
    })
};

exports.renovation_obj_update = function (req, res) {
    renovation_obj.findByIdAndUpdate(req.params.id, {$set:req.body},
        function (err, renovation) {
            if (err) return next(err);
            res.send('renovation ' + req.params.id + ' updated!');
        })
}

exports.renovation_obj_delete = function (req, res) {
    renovation_obj.findByIdAndRemove(req.params.id,
        function (err) {
            if (err) return next(err);
            res.send('renovation ' + req.params.id + ' deleted!');
        })
}