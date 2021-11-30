const months = [
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
  "December",
];

const weekDays = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

let ptr = 0;

const back = document.getElementById("back");
const next = document.getElementById("next");

back.addEventListener("click", () => {
  ptr--;
  const dates = document.querySelector(".dates");
  dates.remove();
  render();
});

next.addEventListener("click", () => {
  ptr++;
  const dates = document.querySelector(".dates");
  dates.remove();
  render();
});

const render = () => {
  const currentdate = new Date();
  if (ptr != 0) {
    currentdate.setMonth(new Date().getMonth() + ptr);
  }
  const currentYear = currentdate.getFullYear();
  const currentMonth = currentdate.getMonth();
  const TDays = new Date(currentYear, currentMonth + 1, 0).getDate();
  const fday = new Date(currentYear, currentMonth, 1).getDay();
  console.log("tdays", fday);

  const month = document.getElementById("month");
  month.innerText = `${months[currentMonth]} ${currentYear}`;

  const main = document.getElementById("main");

  const dates = document.createElement("div");
  dates.classList.add("dates");
  main.append(dates);

  for (let i = 1; i < fday; i++) {
    const date = document.createElement("div");
    date.classList.add("date");
    dates.append(date);
    console.log("empty");
  }

  for (let i = 1; i <= TDays; i++) {
    console.log("day");
    const date = document.createElement("div");
    date.classList.add("date");
    date.innerText = i;
    dates.append(date);
  }
};

render();
