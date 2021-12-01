const height = window.innerHeight;
window.addEventListener("load", () => {
  document.querySelector("body").style.height = height + `px`;
});

const btnFlag = (f, btn, cls) => {
  if (!f.includes(false)) {
    btn.classList.add(cls);
  } else {
    btn.classList.remove(cls);
  }
};

const pass = (el) => {
  el.addEventListener("click", () => {
    let result = window.confirm(
      `このギフトをパスしますか？（ギフトは受け取らず、別のユーザーに届きます）`
    );
    if (result) {
      history.back();
    }
  });
};
const pass2 = (el) => {
  el.addEventListener("click", () => {
    let result = window.confirm(
      `このギフトをパスしますか？（ギフトは受け取らず、別のユーザーに届きます）`
    );
    if (result) {
      window.location.href = "notice.html";
    }
  });
};

const back = (el) => {
  document.querySelector(el).addEventListener("click", () => {
    history.back();
  });
};

const nav = (num) => {
  // アイコン変更
  const img = document.querySelector(`.nav__link:nth-child(` + num + `) img`);
  const beforeData = img.getAttribute("src").split(".");
  const afterData = beforeData[0] + `_on.` + beforeData[1];
  img.removeAttribute("src");
  img.setAttribute("src", afterData);
  // 文字変更
  const txt = document.querySelector(`.nav__link:nth-child(` + num + `) span`);
  txt.style.fontWeight = "bold";
  txt.style.color = "#707070";
};

const bodyHeight = (h, wrap) => {
  let topHeight = document.querySelector(".app__header").offsetHeight;
  let inner = height - topHeight - h;
  document.querySelector(wrap).style.minHeight = inner + `px`;
};

