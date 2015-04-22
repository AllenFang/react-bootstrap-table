var babel = require("babel");
module.exports = {
    process: function(src, filename) {
        if (!babel.canCompile(filename)) {
          return '';
        }
        // Ignore all files within node_modules
        if (filename.indexOf('node_modules') === -1) {
          return babel.transform(src, {filename: filename}).code;;
        }
        return src;
    }
};
