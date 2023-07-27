const detectSo = () => {
  if (/Android|webOS|iPhone|iPod|iPad|BlackBerry/i.test(navigator.userAgent)) {
    if (navigator.userAgent.toLowerCase().search("android") > -1) {
      return "android";
    } else {
      return "ios";
    }
  }

  return "ios";
};

let name = detectSo();
let windowWidth = window.screen.availWidth;
let windowHeight = window.screen.availHeight;

document.getElementById(
  "deviceId"
).innerText = `${name}, ${windowWidth}x${windowHeight}`;
