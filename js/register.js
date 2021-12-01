{
  let flag = [false, false, false];
  const btn = document.querySelector(".register__btn");
  const form = document.querySelectorAll(".register__value--txt");
  const price = document.querySelectorAll(".register__value--price");
  const category = document.querySelectorAll(".register__value--category");
  form[0].addEventListener("change", () => {
    if (form[0].value == 0) {
      flag[0] = false;
      console.log(flag);
    } else {
      flag[0] = true;
      console.log(flag);
    }
    btnFlag(flag, btn, "register__btn--set");
  });
  const registerValue = (el, id, num) => {
    for (let i2 = 0; i2 < el.length; i2++) {
      el[i2].addEventListener("click", () => {
        for (let i3 = 0; i3 < el.length; i3++) {
          if (el[i3].hasAttribute("id", id) == true) {
            document.getElementById(id).removeAttribute("id");
          }
        }
        el[i2].setAttribute("id", id);
        flag[num] = true;
        btnFlag(flag, btn, "register__btn--set");
        console.log(flag);
      });
    }
  };
  registerValue(price, "register__price--choiced", 1);
  registerValue(category, "register__category--choiced", 2);

  back(".app__header--back");
  bodyHeight(0, "main");
}
