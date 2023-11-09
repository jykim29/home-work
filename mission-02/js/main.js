const checkBox = document.getElementById("rememberEmail");
const checkBoxIcon = document.querySelector("#checkboxIcon img");

// 체크박스 핸들러
function checkBoxChangeHandler() {
  if (this.checked) {
    checkBoxIcon.setAttribute("src", "./images/checked.svg");
  } else {
    checkBoxIcon.setAttribute("src", "./images/un-check.svg");
  }
}
window.addEventListener("load", () => {
  checkBox.addEventListener("change", checkBoxChangeHandler);
});
