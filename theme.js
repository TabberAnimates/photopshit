var e = document.getElementsByTagName('html')[0];
const att = document.createAttribute("style");
att.value = "--leftSidebarColor:#300d20; --pageColor:#ffffff00; --contentColor:#290b1b; --contentColor2:#2e0c1e; --contentColor3:#380f25; --borderColor:#42122c; --fontColor:#ffffff; --themeColor:#FF42A7;";
var d = document.createElement('html');

d.innerHTML = e.innerHTML;
d.setAttributeNode(att);
e.parentNode.replaceChild(d, e);

function add(tag, str) {
// Create element:
const para = document.createElement(tag);
para.innerHTML = str;

// Append to body:
document.body.appendChild(para);
alert('Added element. TagName: ' + tag + "innerHTML: " + str + "");
}

let p = add("style", `body { background-color: #95234a; animation-name: example; animation-duration: 4s; animation-iteration-count: 1.7976931348623157e+309; } @keyframes example { 0%   {background-color: #95234a;} 25%  {background-color: #4b87bc;} 50%  {background-color: #1e183b;} 75% {background-color: #3f7ca9;} 100%   {background-color: #95234a;} }`);
