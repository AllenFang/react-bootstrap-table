"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var React = _interopRequire(require("react"));

var Editor = function Editor(editable, attr, format) {

    if (editable === true || typeof editable === "string") {
        //simple declare
        var type = editable === true ? "text" : editable;
        return React.createElement("input", _extends({}, attr, { type: type, className: "form-control editor edit-text" }));
    } else if (editable.type) {
        //standard declare
        //put style if exist
        editable.style && (attr.style = editable.style);

        //put class if exist
        attr.className = "form-control editor edit-" + editable.type + (editable.className ? " " + editable.className : "");

        if (editable.type == "select") {
            //process select input
            var options = [],
                datas = editable.datas;
            if (Array.isArray(datas)) {
                //only can use arrray data for options
                var rowValue;
                options = datas.map(function (d, i) {
                    rowValue = format ? format(d) : d;
                    return React.createElement(
                        "option",
                        { key: "option" + i, value: d },
                        rowValue
                    );
                });
            }
            return React.createElement(
                "select",
                attr,
                options
            );
        } else if (editable.type == "textarea") {
            //process textarea input
            //put  other if exist
            editable.cols && (attr.cols = editable.cols);
            editable.rows && (attr.rows = editable.rows);

            return React.createElement("textarea", attr);
        } else {
            //process other input type. as password,url,email...
            return React.createElement("input", _extends({}, attr, { type: type }));
        }
    }
    //default return for other case of editable
    return React.createElement("input", _extends({}, attr, { type: "text", className: "editor edit-text" }));
};

module.exports = Editor;