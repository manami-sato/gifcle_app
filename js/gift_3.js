{
  const checkBtn = document.querySelector(".gift__value--checkbox");
  const checkForm = document.querySelector(".gift__value--point");
  const checkBox = document.querySelector(".gift__value--point input");
  checkBtn.addEventListener("click", () => {
    if (checkBtn.checked) {
      checkForm.style.background = "#fff";
      checkBox.style.pointerEvents = "auto";
    } else {
      checkForm.style.background = "#FAFAFA";
      checkBox.style.pointerEvents = "none";
    }
  });
  back(".app__header--back");
  bodyHeight(0, ".gift__wrap--3");
}
