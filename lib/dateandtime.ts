let today = new Date();
export let time = new Date().toLocaleTimeString();
const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];

function ordinal(n) {
  var s = ["th", "st", "nd", "rd"];
  var v = n % 100;
  return n + (s[(v - 20) % 10] || s[v] || s[0]);
}

export let date =
  ordinal(today.getDate()) +
  " " +
  monthNames[today.getMonth()] +
  " " +
  today.getFullYear();
