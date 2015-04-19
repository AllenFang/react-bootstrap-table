// var ReactTools = require('react-tools');
var babel = require("babel");
module.exports = {
    process: function(src) {
        return babel.transform(src, { blacklist: ["react"] }).code;
    }
};
