var pjson = require('../package.json');

exports.default = function (req, res) {
    res.send({
        version: pjson.version,
        status: 'running',
        path:  '/renovation_obj',
        methods: 'get, post, put, delete',
        methods_paths: {
            get: [
                '/all', 
                '/id/:id'
            ],
            post: '/create',
            put: '/update/:id',
            delete: '/delete/:id'
        }
    });
};

