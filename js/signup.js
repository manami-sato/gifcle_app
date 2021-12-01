{
  //
  // flag
  //
  let flag1 = [false, false, false];
  let flag2 = [false, false, false];
  const btn = document.querySelector(".sign__form--btn");
  const btnFlag = (f1, f2) => {
    if (!f1.includes(false) && !f2.includes(false)) {
      btn.classList.add("sign__btn--set");
    } else {
      btn.classList.remove("sign__btn--set");
    }
  };

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
  const txt2 = "※既に登録されているメールアドレスです";
  const txt3 = "※メールアドレスを入力してください";
  const txt4 = "※半角英数字で8文字以上で入力してください";
  const txt5 = "※入力されたパスワードが一致しません";
  const txt6 = "※パスワードを入力してください";
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
          attentionTxt(txt3, i);
          flag1[i] = false;
        } else {
          if (form[i].value.match(reg)) {
            flag1[i] = true;
          } else {
            attentionTxt(txt1, i);
            flag1[i] = false;
          }
        }
      }
      if (i == 1) {
        if (form[i].value == 0) {
          attentionTxt(txt6, i);
          flag1[i] = false;
        } else {
          if (
            form[i].value.match(/^[A-Za-z0-9]+$/) &&
            form[i].value.length >= 8
          ) {
            flag1[i] = true;
          } else {
            attentionTxt(txt4, i);
            flag1[i] = false;
          }
        }
      }
      if (i == 2) {
        if (form[i].value == 0) {
          attentionTxt(txt6, i);
          flag[i] = false;
        } else {
          if (form[1].value == form[2].value) {
            flag1[i] = true;
          } else {
            attentionTxt(txt5, i);
            flag1[i] = false;
          }
        }
      }
      if (i == 3) {
        if (form[1].value == form[2].value) {
          flag1[i] = true;
        } else {
          attentionTxt(txt3, i);
          flag1[i] = false;
        }
      }
      btnFlag(flag1, flag2);
    });
  }

  // 閏年出す
  const leapYear = (year) =>
    (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
  const today = new Date();
  const year = today.getFullYear();

  const createOption = (min, max, box) => {
    let option = "";
    for (let i = min; i <= max; i++) {
      let optionData = `<option value="` + i + `">` + i + `</option>`;
      option += optionData;
    }
    box.insertAdjacentHTML("beforeend", option);
  };
  // セレクトボックス初期値
  const yearBox = document.querySelector(".yearBox");
  const monthBox = document.querySelector(".monthBox");
  const dateBox = document.querySelector(".dateBox");
  const minYear = 1900;
  createOption(minYear, year, yearBox);
  createOption(1, 12, monthBox);
  createOption(1, 31, dateBox);

  // 年再選択時
  yearBox.addEventListener("change", (e) => {
    const updatedYear = e.target.value;
    const datesOfFebruary = leapYear(updatedYear) ? 29 : 28;
    const datesOfYear = [
      31,
      datesOfFebruary,
      31,
      30,
      31,
      30,
      31,
      31,
      30,
      31,
      30,
      31,
    ];
    // let monthChildren = monthBox.children;
    while (monthBox.lastChild) {
      monthBox.removeChild(monthBox.lastChild);
    }
    createOption(1, 12, monthBox);
    createOption(1, datesOfYear, dateBox);
    // 月再選択時
    monthBox.addEventListener("change", (e) => {
			while (dateBox.lastChild) {
				dateBox.removeChild(dateBox.lastChild);
			}
      const updatedMonth = e.target.value;
      createOption(1, datesOfYear[updatedMonth - 1], dateBox);
    });
  });

  // ボタン表示
  const select = document.querySelectorAll("select");
  for (let i = 0; i < select.length; i++) {
    select[i].addEventListener("change", (e) => {
      const updatedOption = e.target.value;
      if (updatedOption !== "") {
        flag2[i] = true;
      } else {
        flag2[i] = false;
      }
      btnFlag(flag1, flag2);
    });
  }
}
