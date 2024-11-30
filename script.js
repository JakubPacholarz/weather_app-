document.getElementById('getWeatherBtn').addEventListener('click', function() {
    const cityName = document.getElementById('cityName').value.trim();

    if (!cityName) {
        alert("Please enter a city name.");
        return;
    }

    const apiKey = 'c8844222c51b1b334dbae8465146d257';  // Replace with your actual OpenWeatherMap API key
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`;

    // Hide previous results or errors
    document.getElementById('weatherResult').classList.add('hidden');
    document.getElementById('error').classList.add('hidden');

    // Fetch weather data from the API
    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.cod === 200) {
                // Update weather info on success
                document.getElementById('city').textContent = data.name;
                document.getElementById('temp').textContent = data.main.temp;
                document.getElementById('humidity').textContent = data.main.humidity;
                document.getElementById('weather').textContent = data.weather[0].description;

                // Show the weather result
                document.getElementById('weatherResult').classList.remove('hidden');
            } else {
                // Show error message if city is not found
                document.getElementById('error').classList.remove('hidden');
            }
        })
        .catch(() => {
            document.getElementById('error').classList.remove('hidden');
        });
});
