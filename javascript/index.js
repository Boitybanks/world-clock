function updateTime() {
  const johannesburgTimeElement = document.querySelector("#Johannesburg .time");
  johannesburgTimeElement.innerHTML = moment().format(
    "hh:mm:ss [<small>]a[</small>]"
  );

  const mauritiusTimeElement = document.querySelector("#Mauritius .time");
  mauritiusTimeElement.innerHTML = moment()
    .tz("Indian/Mauritius")
    .format("hh:mm:ss [<small>]a[</small>]");
}

setInterval(updateTime, 1000);
updateTime();

function updateCityTime(event) {
  const cityTimezone = event.target.value;
  const citiesBodyElement = document.querySelector("#cities");
  const selectedCity = event.target.options[event.target.selectedIndex].text;
  const cityMoment = moment().tz(cityTimezone);
  const cityTime = cityMoment.format("hh:mm:ss [<small>]a[</small>]");

  citiesBodyElement.innerHTML = `
    <div class="city">
      <h2>${selectedCity}</h2>
      <div class="date">${cityMoment.format("MMMM Do YYYY")}</div>
      <div class="time">${cityTime}</div>
    </div>`;
}

const citiesSelectElement = document.querySelector("#selectedcity");
citiesSelectElement.addEventListener("change", updateCityTime);
// Add event listener to the "Home" button
const homeElement = document.querySelector("#home");
homeElement.addEventListener("click", () => {
  const citiesSelectElement = document.querySelector("#selectedcity");
  citiesSelectElement.value = "";
  const citiesBodyElement = document.querySelector("#cities");

  citiesBodyElement.innerHTML = `
    <div class="city" id="Johannesburg">
      <h2>⏱️Johannesburg </h2>
      <div class="date">${moment()
        .tz("Africa/Johannesburg")
        .format("MMMM Do YYYY")}</div>
      <div class="time">${moment()
        .tz("Africa/Johannesburg")
        .format("hh:mm:ss [<small>]a[</small>]")}</div>
    </div>
    <div class="city" id="Mauritius">
      <h2>⏱️Mauritius </h2>
      <div class="date">${moment()
        .tz("Indian/Mauritius")
        .format("MMMM Do YYYY")}</div>
      <div class="time">${moment()
        .tz("Indian/Mauritius")
        .format("hh:mm:ss [<small>]a[</small>]")}</div>
    </div>
  `;
});
