function updateTime() {
  //los angeles
  let losAngelesTime = moment().tz("America/Los_Angeles");
  let losAngelesElement = document.querySelector("#los-angeles");
  let losAngelesDateElement = losAngelesElement.querySelector(".date");
  let losAngelesTimeElement = losAngelesElement.querySelector(".time");

  losAngelesDateElement.innerHTML = losAngelesTime.format("MMMM Do YYYY");
  losAngelesTimeElement.innerHTML = `${losAngelesTime.format(
    "h:mm:ss [<small>]A[</small>]"
  )}`;
  let parisTime = moment.tz("Europe/Paris");
  let parisElement = document.querySelector("#paris");
  let parisTimeElement = parisElement.querySelector(".time");
  let parisDateElement = parisElement.querySelector(".date");
  parisDateElement.innerHTML = parisTime.format("MMMM Do YYYY");
  parisTimeElement.innerHTML = `${parisTime.format(
    "h:mm:ss [<small>]A[</small>]"
  )}`;
}
updateTime();
setInterval(updateTime, 1000);
