{
  const passBtn = document.querySelector(".detail__apply--2");
  passBtn.addEventListener("click", () => {
    let result = window.confirm(`このクーポンと交換しますか？`);
    if (result) {
      window.location.href = "coupon_detail_1.html";
    }
  });
  back(".app__header--back");
  bodyHeight(110, ".favorite__wrap");
}
