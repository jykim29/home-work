const checkBox = document.getElementById("rememberEmail");
const checkBoxIcon = document.querySelector("#checkboxIcon img");
const loginForm = document.querySelector(".login-form");
const loginInputs = document.querySelectorAll(".login-input");
const eyeIcon = document.querySelector(".eye-button");
const loginButton = document.querySelector(".button.sign-in");
const emailRegex = new RegExp("^[0-9a-zA-Z]+@[0-9a-zA-Z]+\\.[a-z]{2,}$"); // 이메일 주소 정규식
let validationFlag = [false, false]; // 유효성 검사 플래그

checkBox.addEventListener("change", checkBoxChangeHandler);
loginInputs.forEach((input) => {
  const inputHandler = input.id === "userEmail" ? inputEmailHandler : inputPwdHandler;
  input.addEventListener("input", inputHandler);
  input.addEventListener("focusin", inputFocusInHandler);
  input.addEventListener("focusout", inputFocusOutHandler);
  eyeIcon.addEventListener("mousedown", eyeIconClickHandler);
  loginForm.addEventListener("submit", submitHandler);
});

// 체크박스 이벤트 핸들러
function checkBoxChangeHandler() {
  if (this.checked) {
    checkBoxIcon.setAttribute("src", "./images/svg/checked.svg");
  } else {
    checkBoxIcon.setAttribute("src", "./images/svg/un-check.svg");
  }
}

// 폼 입력창 포커스인/아웃 이벤트 핸들러
function inputFocusInHandler(e) {
  const { value, id } = e.target;
  const label = e.target.parentElement.querySelector("label");
  if (id === "userPwd") {
    eyeIcon.classList.remove("hidden");
  }
  if (value.length === 0) {
    label.style.transform = "translate(-8px, -18px)";
    label.style.fontSize = "1.3rem";
  }
}
function inputFocusOutHandler(e) {
  const { value, id } = e.target;
  const label = e.target.parentElement.querySelector("label");
  if (id === "userPwd") {
    eyeIcon.classList.add("hidden");
  }
  if (value.length === 0) {
    label.removeAttribute("style");
  }
}

// 이메일 입력 이벤트 핸들러
function inputEmailHandler(e) {
  const { value } = e.target;
  const errorMsg = e.target.parentElement.querySelector("span.error-msg");
  const statusIconContainer = e.target.parentElement.querySelector("span.status-icon-container");
  const statusIcon = statusIconContainer.querySelector("img");
  const isValid = emailRegex.test(value);
  statusIconContainer.classList.remove("hidden");
  if (isValid) {
    statusIcon.setAttribute("src", "./images/svg/check-icon.svg");
    errorMsg.innerText = "";
    validationFlag[0] = true;
  } else {
    statusIcon.setAttribute("src", "./images/svg/warning-icon.svg");
    errorMsg.innerText = "이메일 입력 방법이 잘못되었습니다. (예: user@domain.io)";
    validationFlag[0] = false;
  }
  validationCheck(); // 유효성 검사
}

// 패스워드 입력 이벤트 핸들러
function inputPwdHandler(e) {
  const { value } = e.target;
  const errorMsg = e.target.parentElement.querySelector("span.error-msg");
  const statusIconContainer = e.target.parentElement.querySelector("span.status-icon-container");
  const statusIcon = statusIconContainer.querySelector(".status-icon");
  const isValid = !!(value.length >= 6);
  if (isValid) {
    statusIcon.setAttribute("src", "./images/svg/check-icon.svg");
    errorMsg.innerText = "";
    validationFlag[1] = true;
  } else {
    statusIcon.setAttribute("src", "./images/svg/warning-icon.svg");
    errorMsg.innerText = "패스워드는 숫자, 영어 조합 6자 이상 입력해야 합니다.";
    validationFlag[1] = false;
  }
  validationCheck(); // 유효성 검사
}

// 비밀번호 보이기/숨김 변경 핸들러
function eyeIconClickHandler(e) {
  e.preventDefault();
  const pwdInput = document.getElementById("userPwd");
  const type = pwdInput.type;
  if (type === "password") {
    e.target.setAttribute("src", "./images/svg/close-eye-icon.svg");
    pwdInput.setAttribute("type", "text");
  } else {
    e.target.setAttribute("src", "./images/svg/eye-icon.svg");
    pwdInput.setAttribute("type", "password");
  }
}

// 폼 제출 핸들러
function submitHandler(e) {
  const loginButtonImage = document.querySelector(".sign-in>img");
  e.preventDefault();
  loginButtonImage.setAttribute("src", "./images/svg/loading-spinner.svg");
  loginButtonImage.classList.add("spin");
}

// 유효성 검사 함수
function validationCheck() {
  if (validationFlag.every((flag) => flag)) {
    loginButton.removeAttribute("disabled");
  } else {
    loginButton.setAttribute("disabled", true);
  }
}
