{

  let flag = [false, false];
  const btn = document.querySelector(".sign__form--btn");

  const form = document.querySelectorAll(".sign__form--value");
  // テキスト入力
  const attentionTxt = (txt, i) => {
    let attention = `<span>` + txt + `</span>`;
    document
      .getElementById(`item${i + 1}`)
      .insertAdjacentHTML("beforeend", attention);
  };
  // テキスト群
  const txt1 = "※無効なメールアドレスです";
  const txt2 = "※メールアドレスを入力してください";
  const txt3 = "※半角英数字で8文字以上で入力してください";
  const txt4 = "※パスワードを入力してください";
  // 正規表現
  const reg =
    /^[A-Za-z0-9]{1}[A-Za-z0-9_.-]*@{1}[A-Za-z0-9_.-]{1,}.[A-Za-z0-9]{1,}$/;

  for (let i = 0; i < form.length; i++) {
    form[i].addEventListener("change", () => {
      const attentionWrap = document.querySelector(`#item${i + 1}>span`);
      attentionWrap != null;
      if (attentionWrap) {
        document.getElementById(`item${i + 1}`).removeChild(attentionWrap);
      }
      if (i == 0) {
        if (form[i].value == 0) {
          attentionTxt(txt2, i);
          flag[i] = false;
        } else {
          if (form[i].value.match(reg)) {
            flag[i] = true;
          } else {
            attentionTxt(txt1, i);
            flag[i] = false;
          }
        }
      }
      if (i == 1) {
        if (form[i].value == 0) {
          attentionTxt(txt4, i);
          flag[i] = false;
        } else {
          if (
            form[i].value.match(/^[A-Za-z0-9]+$/) &&
            form[i].value.length >= 8
          ) {
            flag[i] = true;
          } else {
            attentionTxt(txt3, i);
            flag[i] = false;
          }
        }
      }
      btnFlag(flag,btn,"sign__btn--set");
    });
  }
}
