const calendar = document.querySelector(".calendar"),
    date = document.querySelector(".date"),
    dayContainer = document.querySelector(".days"),
    prev = document.querySelector(".prev"),
    next = document.querySelector(".next");

let today = new Date();
let activeDay;
let month = today.getMonth();
let year = today.getFullYear();

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

function initCalendar() {
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const prevLastDay = new Date(year, month, 0);
    const prevDays = prevLastDay.getDate();
    const lastDate = lastDay.getDate();
    const day = firstDay.getDay();
    const nextDays = 7 - lastDay.getDay() - 1;

    date.innerHTML = months[month] + " " + year;

    let days = "";

    for (let x = prevDays - day + 1; x <= prevDays; x++) {
        days += `<div class="day prev-date">${x}</div>`;
    }

    for (let i = 1; i <= lastDate; i++) {
        days += `<div class="day">${i}</div>`;
    }

    for (let x = 1; x <= nextDays; x++) {
        days += `<div class="day next-date">${x}</div>`;
    }
    

    dayContainer.innerHTML = days;
}

initCalendar();

function prevMonth(){
    month--;
    if(month<0)
    {
        month=11;
        year--;
    }
    initCalendar();
}

function nextMonth(){
    month++;
    if(month>11)
    {
        month=0;
        year++;
    }
    initCalendar();
}

prev.addEventListener("click", prevMonth);
next.addEventListener("click", nextMonth);
