{
  const passBtn = document.querySelector(".gift__pass");
  pass2(passBtn);
  const searchBtn = document.querySelector(".gift__search--1");
  const checkBtn = document.querySelector(".gift__check--checkBox");
  const categoryBtn = document.querySelectorAll(".gift__category>div");
  let categoryFlag = false;
  for (let i = 0; i < categoryBtn.length; i++) {
    categoryBtn[i].addEventListener("click", () => {
      for (let i2 = 0; i2 < categoryBtn.length; i2++) {
        if (
          categoryBtn[i2].hasAttribute("id", "gift__category--choiced") == true
        ) {
          document
            .getElementById("gift__category--choiced")
            .removeAttribute("id");
        }
      }
      if (checkBtn.checked) {
        checkBtn.checked = false;
      }
      categoryBtn[i].setAttribute("id", "gift__category--choiced");
      categoryFlag = true;
      if (categoryFlag) {
        searchBtn.classList.add("gift__search--set");
      }
    });
  }
  checkBtn.addEventListener("click", () => {
    if (checkBtn.checked) {
      categoryFlag = true;
      for (let i2 = 0; i2 < categoryBtn.length; i2++) {
        if (
          categoryBtn[i2].hasAttribute("id", "gift__category--choiced") == true
        ) {
          document
            .getElementById("gift__category--choiced")
            .removeAttribute("id");
        }
      }
    } else {
      categoryFlag = false;
    }
    if (categoryFlag) {
      searchBtn.classList.add("gift__search--set");
    } else {
      searchBtn.classList.remove("gift__search--set");
    }
  });
  back(".app__header--back");
  bodyHeight(40, ".gift__wrap--2");
}
