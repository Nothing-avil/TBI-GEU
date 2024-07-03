function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

function cheack() {
  var cname = document.getElementById("name").value;
  var mail = document.getElementById("email").value;
  var error = document.getElementById('error');

  if (cname === "") {
      error.innerHTML = "Please enter your name.";
      return false;
  }

  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(mail)) {
      error.innerHTML = "Please enter a valid email address.";
      return false;
  }

  var bye = document.getElementById('thank');
  bye.innerHTML = "Thank you. Your message is send to Sandarbh.";

  document.getElementById("_forms").reset();

  setTimeout(function () {
      window.location.href = "first.html";
  }, 1000);
  return true;
}

const displayTime = document.querySelector(".display-time");
function showTime() {
  let time = new Date();
  displayTime.innerText = time.toLocaleTimeString("en-US", { hour12: true });
  setTimeout(showTime, 1000);
}

showTime();

function updateDate() {
  let today = new Date();

  let dayName = today.getDay(),
    dayNum = today.getDate(),
    month = today.getMonth(),
    year = today.getFullYear();

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
  const dayWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const IDCollection = ["day", "daynum", "month", "year"];
  const val = [dayWeek[dayName], dayNum, months[month], year];
  for (let i = 0; i < IDCollection.length; i++) {
    document.getElementById(IDCollection[i]).firstChild.nodeValue = val[i];
  }
}

updateDate();


