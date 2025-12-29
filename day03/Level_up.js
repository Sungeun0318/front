let s = Number(prompt("초 : "));

  let h = ~~(s / 3600);
  let m = ~~((s % 3600) / 60);
  let sec = s % 60;

  let hh = (h < 10 ? "0" : "") + h;
  let mm = (m < 10 ? "0" : "") + m;
  let ss = (sec < 10 ? "0" : "") + sec;

  let result = `${hh}:${mm}:${ss}`;
  console.log(result);