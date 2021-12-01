{
  const signup = document.querySelector(".index__account--signup");
  const modal = document.querySelector(".index__modal");
  const bg = document.querySelector(".index__modal--bg");
  const modalImg = document.querySelector(".index__modal--img img");
  const modalTxt = document.querySelector(".index__modal--txt");
  const txt = [
    "お祝いや励まし、寄り添いが欲しい<br>イベントをカレンダーに登録！",
    "イベント付近で他のユーザーから<br>ギフトが届く！",
    "同額分の割引ギフトを<br>異なるユーザーに送信！",
    "ギフトゲット！<br>クーポンに交換して使おう！",
  ];
	const imgs = ["img/app_howto_1.svg","img/app_howto_2.svg","img/app_howto_3.svg","img/app_howto_4.svg"];
  const modalPage = document.querySelectorAll(".index__modal--page div");
  const modalLink = document.querySelector(".index__modal--link");
  const linkTxt = ["つぎへ", "登録にすすむ"];
  let count = 0;
  const howto = () => {
    if (count > 0) {
      modalImg.removeAttribute("src");
      modalPage[count-1].removeAttribute("id", "index__modal--page--view");
      modalTxt.innerHTML = "";
    }
    // let imgNum = count + 1;
		modalImg.setAttribute("src",imgs[count]);
    // modalImg.setAttribute("src", `img/app_howto_` + imgNum + `.svg`);
    modalTxt.innerHTML = txt[count];
    modalPage[count].setAttribute("id", "index__modal--page--view");
		console.log(count,modalPage.length);
    if (count == modalPage.length-1) {
      modalLink.innerHTML = linkTxt[1];
			modalLink.addEventListener("click",()=>{
				window.location.href = "signup.html";
			})
    } else {
      modalLink.innerHTML = linkTxt[0];
    }
  };
  signup.addEventListener("click", () => {
    modal.classList.add("index__modal--view");
    bg.classList.add("index__modal--view");
    howto();
  });
  modalLink.addEventListener("click", () => {
    count++;
    howto();
  });
}
