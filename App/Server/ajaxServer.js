app.factory("ajaxServer", function ($http,$q) {
    return {
        ajax: function (type,url) {
            var defer = $q.defer();
            if (type == "jsonp" || type == "JSONP"){
                $.ajax({
                    url: url,
                    dataType: type,
                    success: function (data) {
                        defer.resolve(data);
                    },
                    error: function (err) {
                        defer.reject(err)
                    }
                })
            } else {
                $http({
                    url: url,
                    method: type
                }).then(function (data) {
                    defer.resolve(data);
                }, function (err) {
                    defer.reject(err)
                })
            }
            return defer.promise;
        }
    }
});