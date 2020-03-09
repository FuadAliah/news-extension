document.addEventListener('DOMContentLoaded', function () {

}, false);

var link = document.createElement("link");
link.href = chrome.extension.getURL("./css/normalize.css");
link.type = "text/css";
link.rel = "stylesheet";
document.getElementsByTagName("head")[0].appendChild(link);