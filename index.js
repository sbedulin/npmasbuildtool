'use strict';

let app = module.exports = require('koa')();
let fs = require('fs');
let path = require('path');

let readFileThunk = function(src) {
    return new Promise(function (resolve, reject) {
        fs.readFile(src, { 'encoding': 'utf8' }, function (err, data) {
            if(err) return reject(err);
            resolve(data);
        });
    });
};

app.use(function* () {
    if(this.request.path === '/client') {
        this.body = yield readFileThunk(path.join(__dirname, 'public/index.html'));
    } else {
        this.body = 'Koa says HI!';
    }
});

let port = process.env.PORT || process.argv[2] || 3000;

if(!module.parent) {
    app.listen(port, () => {
        console.log('Application started. Listening on port:' + port);
    });
}
