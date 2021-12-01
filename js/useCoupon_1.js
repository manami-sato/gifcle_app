{
  const passBtn = document.querySelector(".detail__apply--2");
  passBtn.addEventListener("click", () => {
    let result = window.confirm(
      `このクーポンを使用しますか？（操作は必ず従業員が行ってください）`
    );
    if (result) {
      window.location.href = "coupon_detail_3.html";
    }
  });
  back(".app__header--back");
  bodyHeight(110,".favorite__wrap");
}
