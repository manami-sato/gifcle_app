{
  const navHeight = document.querySelector("nav").offsetHeight;
  bodyHeight(navHeight, "main");

  let today = new Date();
  let year = today.getFullYear();
  let month = today.getMonth() + 1;
  let date = today.getDate();
  let datesOfYear = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  const calendar = document.querySelector(".calendar__date");

  //
  // 日付だす
  //
  const calendarData = (d) => {
    // 1日が何曜日から始まるか
    let dObj = new Date(year + `/` + month + `/` + 1);
    let wDay = dObj.getDay();
    const createNull1 = () => {
      //その月の1日の曜日
      let nullBox = "";
      for (let i = 0; i < wDay; i++) {
        let nullData = `<div></div>`;
        nullBox += nullData;
      }
      calendar.insertAdjacentHTML("beforeend", nullBox);
    };
    createNull1();

    // 日付のbox
    let dateBox = "";
    for (let i = 1; i <= d; i++) {
      let dateData =
        `<a href="register.html" class="calendar__date--txt">` + i + `</a>`;
      dateBox += dateData;
    }
    calendar.insertAdjacentHTML("beforeend", dateBox);

    // 余った分のbox
    const dateNum = document.querySelectorAll(".calendar__date--txt").length;
    const createNull2 = () => {
      const boxNum = 7 - ((dateNum + wDay) % 7);
      let nullBox = "";
      if (boxNum !== 7) {
        for (let i = 0; i < boxNum; i++) {
          let nullData = `<div></div>`;
          nullBox += nullData;
        }
      }
      calendar.insertAdjacentHTML("beforeend", nullBox);
    };
    createNull2();
  };
  //
  // hoge年hoge月
  //
  const headline = document.querySelector(".calendar__month h2");
  const headlineData = (y, m) => {
    let yearData =
      `<div class="calendar__headline--year">` +
      y +
      `</div><span class="calendar__headline--txt">年</span>`;
    let monthData =
      `<div class="calendar__headline--month">` +
      m +
      `</div><span class="calendar__headline--txt">月</span>`;
    headline.insertAdjacentHTML("beforeend", yearData);
    headline.insertAdjacentHTML("beforeend", monthData);
  };
  //
  // 再選択時の元データ削除
  //
  const monthSelect = () => {
    if (todayData.classList.contains("calendarAdd")) {
      todayData.classList.remove("calendarAdd");
    }
    while (calendar.lastChild) {
      calendar.removeChild(calendar.lastChild);
    }
    while (headline.lastChild) {
      headline.removeChild(headline.lastChild);
    }
  };
  //
  // 閏年出す
  //
  const leapYear = (lY) => {
    if ((lY % 4 === 0 && lY % 100 !== 0) || lY % 400 === 0) {
      datesOfYear[1] = 29;
    } else {
      datesOfYear[1] = 28;
    }
  };

  //
  // 実行
  //
  headlineData(year, month);
  calendarData(datesOfYear[month - 1]);
  let todayData = document.querySelectorAll(`.calendar__date--txt`)[date - 1];
  todayData.classList.add("calendarAdd");

  //
  // その日を赤くする
  //
  const todayPickUp = () => {
    if (year == today.getFullYear() && month == today.getMonth() + 1) {
      todayData = document.querySelectorAll(`.calendar__date--txt`)[date - 1];
      todayData.classList.add("calendarAdd");
    }
  };
  //
  // 月をもどる、進む
  //
  const prev = document.querySelector(".calendar__month--prev");
  const next = document.querySelector(".calendar__month--next");
  prev.addEventListener("click", () => {
    monthSelect();
    // headline
    if (month == 1) {
      year = year - 1;
      month = 12;
      leapYear(year);
    } else {
      month = month - 1;
    }
    headlineData(year, month);
    calendarData(datesOfYear[month - 1]);
    todayPickUp();
  });
  next.addEventListener("click", () => {
    monthSelect();
    // headline
    if (month == 12) {
      year = year + 1;
      month = 1;
      leapYear(year);
    } else {
      month = month + 1;
    }
    headlineData(year, month);
    calendarData(datesOfYear[month - 1]);
    todayPickUp();
  });

  //
  // nav 文字変更
  //
  const navTxt = document.querySelector(".nav__link--calendar a span");
  navTxt.style.fontWeight = "bold";
}
