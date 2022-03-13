var preClick = document.getElementsByTagName("pre");
for (var i = 0; i < preClick.length; i++) {
  preClick[i].addEventListener(
    "dblclick",
    function () {
      var e = getSelection(),
        o = document.createRange();
      o.selectNodeContents(this), e.removeAllRanges(), e.addRange(o), document.execCommand("copy"), e.removeAllRanges(), (document.querySelector("#bottom-toast").innerHTML = "<span><i class='clipboard'></i>Copied to clipboard!</span>");
    },
    !1
  );
}
