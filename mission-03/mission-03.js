const selectBox = document.querySelector(".custom-selectbox.select-language");
const optionList = document.querySelector(".option-list");
const optionItems = document.querySelectorAll(".option-item");
const emailInput = document.querySelector(".input");
const emailRegex = new RegExp("^[0-9a-zA-Z]+@[0-9a-zA-Z]+\\.[a-z]{2,}$");

const selectBoxClickHandler = () => {
  if (optionList.classList.contains("is--active")) {
    optionList.classList.remove("is--active");
  } else {
    optionList.classList.add("is--active");
  }
};
const optionItemClickHandler = (e) => {
  const Item_1_Value = optionItems[0].innerText;
  const Item_2_Value = optionItems[1].innerText;
  if (e.target.parentElement.id === "first-item") {
    optionItems[0].classList.add("is--select");
    optionItems[1].classList.remove("is--select");
    selectBox.innerText = Item_1_Value;
  } else {
    optionItems[0].classList.remove("is--select");
    optionItems[1].classList.add("is--select");
    selectBox.innerText = Item_2_Value;
  }
  optionList.classList.remove("is--active");
};

selectBox.addEventListener("click", selectBoxClickHandler);
optionItems.forEach((item) => {
  item.querySelector("a").addEventListener("click", optionItemClickHandler);
});

emailInput.addEventListener("focus", (e) => {
  e.target.classList.add("is--focus");
});
emailInput.addEventListener("blur", (e) => {
  const { value } = e.target;
  if (value.length > 0) return;
  e.target.classList.remove("is--focus");
});
emailInput.addEventListener("input", (e) => {
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
});
