{
  nav(5);
  const navHeight = document.querySelector("nav").offsetHeight;
  bodyHeight(navHeight, "main");

  const guide = document.querySelector(".account__guide");
  const modal = document.querySelector(".account__modal");
  const bg = document.querySelector(".account__modal--bg");
  const modalImg = document.querySelector(".account__modal--img img");
  const modalTxt = document.querySelector(".account__modal--txt");
  const txt = [
    "お祝いや励まし、寄り添いが欲しい<br>イベントをカレンダーに登録！",
    "イベント付近で他のユーザーから<br>ギフトが届く！",
    "同額分の割引ギフトを<br>異なるユーザーに送信！",
    "ギフトゲット！<br>クーポンに交換して使おう！",
  ];
  const imgs = [
    "img/app_howto_1.svg",
    "img/app_howto_2.svg",
    "img/app_howto_3.svg",
    "img/app_howto_4.svg",
  ];
  const modalPage = document.querySelectorAll(".account__modal--page div");
  const modalLink = document.querySelector(".account__modal--link");
  const linkTxt = ["つぎへ", "戻る"];
  let count = 0;
  const howto = () => {
    // console.log(count);
    if (count > 0) {
      modalImg.removeAttribute("src");
      modalPage[count - 1].removeAttribute("id");
      modalTxt.innerHTML = "";
    }
    modalImg.setAttribute("src", imgs[count]);
    modalTxt.innerHTML = txt[count];
    modalPage[count].setAttribute("id", "account__modal--page--view");
    if (count == modalPage.length - 1) {
      modalLink.innerHTML = "";
      modalLink.innerHTML = linkTxt[1];
      modalLink.addEventListener("click", () => {
        modalImg.removeAttribute("src");
        modalPage[count - 1].removeAttribute("id");
        modalTxt.innerHTML = "";
        count = 0;
        modal.classList.remove("account__modal--view");
        bg.classList.remove("account__modal--view");
      });
    } else {
      modalLink.innerHTML = linkTxt[0];
    }
  };
  guide.addEventListener("click", () => {
    modal.classList.add("account__modal--view");
    bg.classList.add("account__modal--view");
    howto();
  });
  modalLink.addEventListener("click", () => {
    count++;
    howto();
  });
}
