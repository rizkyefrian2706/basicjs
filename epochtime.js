//epochtime
let getDateEpoch = Math.floor(new Date().getTime() / 1000.0);
var dateToday = new Date(getDateEpoch * 1000);
let date = dateToday.toLocaleString("en-US", {
  timeZone: "Asia/Jakarta"
});;
console.log(date);
