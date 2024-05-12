const temperature = document.getElementById('temperature');
const wind = document.getElementById('wind');
const condition = document.getElementById('condition');
const windChill = document.getElementById('wind-chill');

const windSpeed = 5.9;
const metricTemperature = 6;
condition.innerText = 'Gusty';
temperature.innerText = `${metricTemperature}\u00b0C`;
wind.innerText = `${windSpeed}Km/hr`;
windChill.innerHTML = calculateWindChill(metricTemperature, windSpeed);


function calculateWindChill(temp, win) {
    return (temp <= 9 && win > 4.9) ? `${(35.74 + (0.6215 * parseFloat(temp)) - (35.75 * Math.pow(parseFloat(win), 0.16)) + 0.4275 * parseFloat(temp) * Math.pow(parseFloat(win), 0.16)).toFixed(2)}\u00b0C` : "N/A";
}
