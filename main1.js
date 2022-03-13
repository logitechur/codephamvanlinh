var read = localStorage.getItem("read");
read = read ? read : 0;
var totalNtf = document.querySelector(".ntf-ul").childElementCount;
if (read < totalNtf) {
  document.querySelector(".popup-ntf").dataset.text = totalNtf - read;
} else if (read > totalNtf || read < 0) {
  localStorage.setItem("read", totalNtf);
}

var notifBtn = document.querySelector(".popup-ntf");
notifBtn.addEventListener("click", function () {
  var newNtf = parseInt(notifBtn.dataset.text);
  var read = parseInt(localStorage.getItem("read"));
  read = read ? read : 0;
  if (newNtf) {
    localStorage.setItem("read", newNtf + read);
    delete notifBtn.dataset.text;
  }
});
