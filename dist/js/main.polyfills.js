/*! website v0.0.1 | (c) 2020 Sarah Matthies | MIT License |  */
/**
 * Element.matches() polyfill (simple version)
 * https://developer.mozilla.org/en-US/docs/Web/API/Element/matches#Polyfill
 */
if (!Element.prototype.matches) {
	Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector;
}
(function(a,c,b){if(typeof module!=="undefined"&&module.exports){module.exports=b()}else{if(typeof define==="function"&&define.amd){define(b)}else{c[a]=b()}}})("Fingerprint",this,(function(){var a=function(b){var c,d;c=Array.prototype.forEach;d=Array.prototype.map;this.each=function(k,j,h){if(k===null){return}if(c&&k.forEach===c){k.forEach(j,h)}else{if(k.length===+k.length){for(var g=0,e=k.length;g<e;g++){if(j.call(h,k[g],g,k)==={}){return}}}else{for(var f in k){if(k.hasOwnProperty(f)){if(j.call(h,k[f],f,k)==={}){return}}}}}};this.map=function(h,g,f){var e=[];if(h==null){return e}if(d&&h.map===d){return h.map(g,f)}this.each(h,(function(k,i,j){e[e.length]=g.call(f,k,i,j)}));return e};if(typeof b=="object"){this.hasher=b.hasher;this.screen_resolution=b.screen_resolution;this.screen_orientation=b.screen_orientation;this.canvas=b.canvas;this.ie_activex=b.ie_activex}else{if(typeof b=="function"){this.hasher=b}}};a.prototype={get:function(){var c=[];c.push(navigator.userAgent);c.push(navigator.language);c.push(screen.colorDepth);if(this.screen_resolution){var b=this.getScreenResolution();if(typeof b!=="undefined"){c.push(b.join("x"))}}c.push(new Date().getTimezoneOffset());c.push(this.hasSessionStorage());c.push(this.hasLocalStorage());c.push(this.hasIndexDb());if(document.body){c.push(typeof(document.body.addBehavior))}else{c.push(typeof undefined)}c.push(typeof(window.openDatabase));c.push(navigator.cpuClass);c.push(navigator.platform);c.push(navigator.doNotTrack);c.push(this.getPluginsString());if(this.canvas&&this.isCanvasSupported()){c.push(this.getCanvasFingerprint())}if(this.hasher){return this.hasher(c.join("###"),31)}else{return this.murmurhash3_32_gc(c.join("###"),31)}},murmurhash3_32_gc:function(j,f){var k,l,h,b,e,c,g,d;k=j.length&3;l=j.length-k;h=f;e=3432918353;c=461845907;d=0;while(d<l){g=((j.charCodeAt(d)&255))|((j.charCodeAt(++d)&255)<<8)|((j.charCodeAt(++d)&255)<<16)|((j.charCodeAt(++d)&255)<<24);++d;g=((((g&65535)*e)+((((g>>>16)*e)&65535)<<16)))&4294967295;g=(g<<15)|(g>>>17);g=((((g&65535)*c)+((((g>>>16)*c)&65535)<<16)))&4294967295;h^=g;h=(h<<13)|(h>>>19);b=((((h&65535)*5)+((((h>>>16)*5)&65535)<<16)))&4294967295;h=(((b&65535)+27492)+((((b>>>16)+58964)&65535)<<16))}g=0;switch(k){case 3:g^=(j.charCodeAt(d+2)&255)<<16;case 2:g^=(j.charCodeAt(d+1)&255)<<8;case 1:g^=(j.charCodeAt(d)&255);g=(((g&65535)*e)+((((g>>>16)*e)&65535)<<16))&4294967295;g=(g<<15)|(g>>>17);g=(((g&65535)*c)+((((g>>>16)*c)&65535)<<16))&4294967295;h^=g}h^=j.length;h^=h>>>16;h=(((h&65535)*2246822507)+((((h>>>16)*2246822507)&65535)<<16))&4294967295;h^=h>>>13;h=((((h&65535)*3266489909)+((((h>>>16)*3266489909)&65535)<<16)))&4294967295;h^=h>>>16;return h>>>0},hasLocalStorage:function(){try{return !!window.localStorage}catch(b){return true}},hasSessionStorage:function(){try{return !!window.sessionStorage}catch(b){return true}},hasIndexDb:function(){try{return !!window.indexedDB}catch(b){return true}},isCanvasSupported:function(){var b=document.createElement("canvas");return !!(b.getContext&&b.getContext("2d"))},isIE:function(){if(navigator.appName==="Microsoft Internet Explorer"){return true}else{if(navigator.appName==="Netscape"&&/Trident/.test(navigator.userAgent)){return true}}return false},getPluginsString:function(){if(this.isIE()&&this.ie_activex){return this.getIEPluginsString()}else{return this.getRegularPluginsString()}},getRegularPluginsString:function(){return this.map(navigator.plugins,(function(c){var b=this.map(c,(function(d){return[d.type,d.suffixes].join("~")})).join(",");return[c.name,c.description,b].join("::")}),this).join(";")},getIEPluginsString:function(){if(window.ActiveXObject){var b=["ShockwaveFlash.ShockwaveFlash","AcroPDF.PDF","PDF.PdfCtrl","QuickTime.QuickTime","rmocx.RealPlayer G2 Control","rmocx.RealPlayer G2 Control.1","RealPlayer.RealPlayer(tm) ActiveX Control (32-bit)","RealVideo.RealVideo(tm) ActiveX Control (32-bit)","RealPlayer","SWCtl.SWCtl","WMPlayer.OCX","AgControl.AgControl","Skype.Detection"];return this.map(b,(function(c){try{new ActiveXObject(c);return c}catch(d){return null}})).join(";")}else{return""}},getScreenResolution:function(){var b;if(this.screen_orientation){b=(screen.height>screen.width)?[screen.height,screen.width]:[screen.width,screen.height]}else{b=[screen.height,screen.width]}return b},getCanvasFingerprint:function(){var d=document.createElement("canvas");var c=d.getContext("2d");var b="http://valve.github.io";c.textBaseline="top";c.font="14px 'Arial'";c.textBaseline="alphabetic";c.fillStyle="#f60";c.fillRect(125,1,62,20);c.fillStyle="#069";c.fillText(b,2,15);c.fillStyle="rgba(102, 204, 0, 0.7)";c.fillText(b,4,17);return d.toDataURL()}};return a}));
function switchMode() {
  (function (i, s, o, g, r, a, m) {
    i["GoogleAnalyticsObject"] = r;
    (i[r] =
      i[r] ||
      function () {
        (i[r].q = i[r].q || []).push(arguments);
      }),
      (i[r].l = 1 * new Date());
    (a = s.createElement(o)), (m = s.getElementsByTagName(o)[0]);
    a.async = 1;
    a.src = g;
    m.parentNode.insertBefore(a, m);
  })(
    window,
    document,
    "script",
    "//www.google-analytics.com/analytics.js",
    "ga"
  );
  ga("send", "event", {
    eventCategory: "click",
    eventAction: "switchMode",
  });

  var privateMode = document.getElementById("privateMode");
  var body = document.getElementsByTagName("body");
  var header = document.getElementsByTagName("header");
  var slider = document.getElementById("slider");
  var profilePicture = document.getElementById("profilePicture");
  var hi = document.getElementById("hi");
  var IAm = document.getElementById("IAm");
  var private = document.getElementsByClassName("private");
  var block = document.getElementsByClassName("block");
  var cardContainer = document.getElementById("cardContainer");
  var hiContainer = document.getElementById("hiContainer");
  var whereToFind = document.getElementById("whereToFind");
  var footerImg = document.getElementById("footerImg");

  if (privateMode.checked == true) {
    //change background and font colors
    body[0].classList.remove("white");
    body[0].classList.add("black");
    header[0].classList.remove("black");
    header[0].classList.add("white");

    //change image and position
    profilePicture.src = "./img/sarah_privat.png";
    profilePicture.classList.remove("left");
    profilePicture.classList.add("right");

    hiContainer.classList.remove("right");
    hiContainer.classList.add("left");
    cardContainer.classList.remove("right");
    cardContainer.classList.add("left");

    //change text and text position
    hi.innerHTML = "Halo!";
    IAm.innerHTML = "I bims Sarah!";
    whereToFind.innerHTML = "Dinge, die ich sonst nutze";

    for (elem of block) {
      elem.style.display = "none";
    }
    for (elem of private) {
      elem.style.display = "unset";
    }

    //show footer image
    footerImg.style.display = "unset";
  } else {
    body[0].classList.remove("black");
    body[0].classList.add("white");
    header[0].classList.remove("white");
    header[0].classList.add("black");

    //change image and position
    profilePicture.src = "./img/sarah_business.png";
    profilePicture.classList.remove("right");
    profilePicture.classList.add("left");

    hiContainer.classList.remove("left");
    hiContainer.classList.add("right");
    cardContainer.classList.remove("left");
    cardContainer.classList.add("right");

    //change text and text position
    hi.innerHTML = "Hi!";
    IAm.innerHTML = "Ich bin Sarah.";
    whereToFind.innerHTML = "Wo ich sonst zu finden bin";

    for (elem of block) {
      elem.style.display = "unset";
    }
    for (elem of private) {
      elem.style.display = "none";
    }

    //show footer image
    footerImg.style.display = "none";
  }
}
