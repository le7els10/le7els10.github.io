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

const deviceType = () => {
  const ua = navigator.userAgent;
  if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua)) {
    return "tablet";
  } else if (
    /Mobile|Android|iP(hone|od)|IEMobile|BlackBerry|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(
      ua
    )
  ) {
    return "mobile";
  }
  return "desktop";
};

let name = detectSo();
let windowWidth = window.screen.availWidth;
let windowHeight = window.screen.availHeight;
let deviceTypeVar = deviceType();

document.getElementById(
  "deviceId"
).innerText = `${name},${deviceTypeVar}, ${windowWidth}x${windowHeight}`;
