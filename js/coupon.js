{
  nav(1);
  const navHeight = document.querySelector("nav").offsetHeight;
  bodyHeight(navHeight, "main");

  const tab = document.querySelectorAll(".coupon__tab--btn>div");
  const wrap = document.querySelectorAll(".coupon__tab--wrap>div");
  for (let i = 0; i < tab.length; i++) {
    tab[i].addEventListener("click", () => {
      for (let i2 = 0; i2 < tab.length; i2++) {
        if (tab[i2].hasAttribute("id")) {
          tab[i2].removeAttribute("id");
        }
        if (wrap[i2].hasAttribute("id")) {
          wrap[i2].removeAttribute("id");
        }
      }
      tab[i].setAttribute("id", "coupon__tab--choiced");
      wrap[i].setAttribute("id", "coupon__wrap--choiced");
    });
  }

  const btn = document.querySelector(".coupon__search--btn");
  const conditions = document.querySelector(".coupon__search--conditions");
  btn.addEventListener("click", () => {
    if (!conditions.hasAttribute("id")) {
      conditions.setAttribute("id", "displayAdd");
    } else {
      conditions.removeAttribute("id");
    }
  });

  const fav = document.querySelectorAll(".favorite");
  for (let i = 0; i < fav.length; i++) {
    fav[i].addEventListener("click", () => {
      if (!fav[i].hasAttribute("id")) {
        fav[i].setAttribute("id", "favAdd");
      } else {
        fav[i].removeAttribute("id");
      }
    });
  }

  let conditionsItem = document.querySelectorAll(".coupon__search--conditions>ul>li>ul>li");
  for (let i = 0; i < conditionsItem.length; i++) {
    conditionsItem[i].addEventListener("click",()=>{
      conditionsItem[i].classList.toggle("conditionsAdd");
      if(conditionsItem[i].classList.contains("conditionsAdd")){
        conditionsItem[i].style.background = "rgba(255, 157, 0,0.6)";
      }else{
        conditionsItem[i].style.background = "rgba(255,255,255,0.9)";
      };
    });
  }
}
