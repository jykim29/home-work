const hamburgerMenuOpen = document.querySelector(".menu-open");
const hamburgerMenuClose = document.querySelector(".menu-close");
const navigation = document.querySelector(".navigation");
const togglePasswordView = document.querySelector(".toggle-password-view");

// 내비게이션 메뉴 열기 & 닫기
hamburgerMenuOpen.addEventListener("click", () => {
  navigation.classList.add("is--active");
});
hamburgerMenuClose.addEventListener("click", () => {
  navigation.classList.remove("is--active");
});

// 비밀번호 표시 & 숨기기
togglePasswordView.addEventListener("mousedown", (e) => {
  const passwordInput = document.querySelector("#userPwd");
  e.preventDefault();
  if (togglePasswordView.classList.contains("is-hidden")) {
    togglePasswordView.classList.replace("is-hidden", "is-show");
    togglePasswordView.ariaLabel = "비밀번호 숨기기";
    passwordInput.type = "text";
  } else {
    togglePasswordView.classList.replace("is-show", "is-hidden");
    togglePasswordView.ariaLabel = "비밀번호 표시하기";
    passwordInput.type = "password";
  }
});
