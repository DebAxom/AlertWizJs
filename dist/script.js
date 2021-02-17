var popUp = {
    close: function (callback, con) {
        if (callback === void 0) { callback = function (res) { }; }
        if (con === void 0) { con = false; }
        document.querySelector('div[popup="container"]').style.display = "none";
        var res;
        if (con) {
            res = document.querySelector('input[popup="textbox"]').value;
        }
        else {
            res = '';
        }
        callback(res);
        document.querySelector('div[popup="container"]').innerHTML = "";
    },
    alert: function (props, callback) {
        document.querySelector('div[popup="container"]').innerHTML = "\n        <div popup=\"alert\">\n            <div>" + props.title + "</div>\n            <div>" + props.msg + "</div>\n            <div>\n                <button popup=\"alert-button\" style=\"background-color:#0099ff;\" onclick=\"popUp.close(" + callback + ")\">" + (props.accept || 'Ok') + "</button>\n            </div>\n        </div>";
        document.querySelector('div[popup="container"]').style.display = "grid";
    },
    confirm: function (props, accept, decline) {
        document.querySelector('div[popup="container"]').innerHTML = "\n        <div popup=\"confirm\">\n            <div>" + props.title + "</div>\n            <div>" + props.msg + "</div>\n            <div>\n                <button popup=\"confirm-decline\" style=\"background-color:red;\" onclick=\"popUp.close(" + decline + ")\">" + (props.decline || 'No') + "</button>\n                <button popup=\"confirm-accept\" style=\"background-color:#0099ff;\" onclick=\"popUp.close(" + accept + ")\">" + (props.accept || 'Yes') + "</button>\n            </div>\n        </div>";
        document.querySelector('div[popup="container"]').style.display = "grid";
    },
    input: function (props, callback) {
        document.querySelector('div[popup="container"]').innerHTML = "\n        <div popup=\"input\">\n            <div>" + props.title + "</div>\n            <div>" + props.msg + "</div>\n            <div>\n                <input type=\"text\" popup=\"textbox\">\n                <button popup=\"input-button\" style=\"background-color:#0099ff;\" onclick=\"popUp.close(" + callback + ",true)\">" + (props.submit || 'Submit') + "</button>\n            </div>\n        </div>";
        document.querySelector('div[popup="container"]').style.display = "grid";
    }
};
