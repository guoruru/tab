var fs = require('fs');
var url = require('url');
var path = require('path');
var gulp = require('gulp');
var webServer = require('gulp-webserver');
gulp.task('webServer', function () {
    gulp.src('./')
        .pipe(webServer({
            port: 8050,
            host: 'localhost',
            livereload: true,
            directoryListing: {
                path: './',
                enable: true
            },
            open: true,
            middleware: function (req, res, next) {
                var urlObj = url.parse(req.url).query;
                var urlFile = path.join(__dirname, 'Data', urlObj + '.json');
                // 判断文件是否存在
                fs.exists(urlFile, function (exists) {
                    if (!exists) {
                        var data = {
                            isSuccess: false,
                            err: 'can not find this file' + urlObj + '.json'
                        };
                        res.writeHead(404,{
                            'Content-Type': 'text/json;charset=utf-8'
                        });
                        res.end(JSON.stringify(data));
                    } else {
                        // 读取文件
                        fs.readFile(urlFile, function (err, data) {
                            var data = {
                                isSuccess: true,
                                err: '',
                                data: data.toString()
                            }
                            res.writeHead(200,{
                                'Content-Type': 'text/json;charset=utf-8',
                                'Access-Control-Allow-Origin':'http://localhost:63342'
                            });
                            res.end(JSON.stringify(data));
                        });
                    }
                });
            }
        }))
});