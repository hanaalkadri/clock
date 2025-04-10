let parisTime = moment.tz("Europe/Paris").format("dddd Do MMMM H:mm");
let sydneyTime = moment.tz("Australia/Sydney").format("dddd Do MMMM H:mm");
let tokyoTime = moment.tz("Asia/Tokyo").format("dddd Do MMMM H:mm");

function ShowCityTime(event) {
  const city = event.target.value;

  if (!city) {
    alert("Please select a city");
    return;
  }

  if (city === "Paris") {
    alert(parisTime);
  } else if (city === "Sydney") {
    alert(sydneyTime);
  } else if (city === "Tokyo") {
    alert(tokyoTime);
  }
}

let citySelect = document.querySelector("#city");
citySelect.addEventListener("change", ShowCityTime);
