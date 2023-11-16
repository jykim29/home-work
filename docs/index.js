const selectBoxContainer = document.querySelectorAll(".custom-selectbox-container");
const emailInput = document.querySelector(".input");
const emailRegex = new RegExp("^[0-9a-zA-Z]+@[0-9a-zA-Z]+\\.[a-z]{2,}$");

selectBoxContainer.forEach((container) => {
  const selectBox = container.querySelector(".custom-selectbox.select-language");
  const optionList = container.querySelector(".option-list");
  const optionItems = optionList.querySelectorAll(".option-item");
  const selectBoxClickHandler = () => {
    if (optionList.classList.contains("is--active")) {
      optionList.classList.remove("is--active");
    } else {
      optionList.classList.add("is--active");
    }
  };
  const optionItemClickHandler = (e) => {
    const value_1 = optionItems[0].innerText;
    const value_2 = optionItems[1].innerText;
    if (e.target.parentElement.classList.contains("first-item")) {
      optionItems[0].classList.add("is--select");
      optionItems[1].classList.remove("is--select");
      selectBox.innerText = value_1;
    } else {
      optionItems[0].classList.remove("is--select");
      optionItems[1].classList.add("is--select");
      selectBox.innerText = value_2;
    }
    optionList.classList.remove("is--active");
  };
  selectBox.addEventListener("click", selectBoxClickHandler);
  optionItems.forEach((item) => {
    item.querySelector("a").addEventListener("click", optionItemClickHandler);
  });
});

const inputFocusHandler = (e) => {
  e.target.classList.add("is--focus");
};
const inputBlurHandler = (e) => {
  const { value } = e.target;
  if (value.length > 0) return;
  e.target.classList.remove("is--focus");
};
const inputHandler = (e) => {
  const { value } = e.target;
  const isValid = emailRegex.test(value);
  if (value.length > 0) {
    if (isValid) {
      e.target.classList.add("is--valid");
      e.target.classList.remove("is--invalid");
    } else {
      e.target.classList.remove("is--valid");
      e.target.classList.add("is--invalid");
    }
  } else {
    e.target.classList.remove("is--valid");
    e.target.classList.remove("is--invalid");
  }
};
emailInput.addEventListener("focus", inputFocusHandler);
emailInput.addEventListener("blur", inputBlurHandler);
emailInput.addEventListener("input", inputHandler);

/* 배포용 스크립트 */
const form = document.querySelector(".form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
});
