// xử lý bất đồng bộ
function LoadScript(src, callback) {
    const script = document.createElement("script");// tạo ra thẻ script
    script.src = src;//gán đường dẫn cho thẻ script
    script.onload = function () {
        callback(script);
    };
    document.head.append(script)// tạo ra thẻ head chứa thẻ script
};
LoadScript("https://developer.mozilla.org", function (script) {
    console.log("script loader :", script);
});