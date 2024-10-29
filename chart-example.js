// Fetch data from a remote server
fetch('https://avancera.app/cities/')
    .then((response) => response.json()) // Convert the response to JSON
    .then((result) => {
        // Get the canvas element with the ID 'myChart'
        const ctx = document.getElementById('myChart').getContext('2d');

        // Create empty arrays to store data and labels for the chart
        const data = [];
        const labels = [];

        // Iterate over the 'result' array, which contains city data
        for (const city of result) {
            // Extract population and city name and add them to the respective arrays
            data.push(city.population);
            labels.push(city.name);
        }

        // Create a new Chart.js chart
        const myChart = new Chart(ctx, {
            type: 'bar', // Chart type is 'bar'
            data: {
                labels: labels, // Labels for the X-axis
                datasets: [
                    {
                        label: 'City Population', // Label for the dataset
                        data: data, // Data for the Y-axis
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.2)',
                            'rgba(54, 162, 235, 0.2)',
                            'rgba(255, 206, 86, 0.2)',
                            'rgba(75, 192, 192, 0.2)',
                            'rgba(153, 102, 255, 0.2)',
                            'rgba(255, 159, 64, 0.2)'
                        ],
                        borderColor: [
                            'rgba(255, 99, 132, 1)',
                            'rgba(54, 162, 235, 1)',
                            'rgba(255, 206, 86, 1)',
                            'rgba(75, 192, 192, 1)',
                            'rgba(153, 102, 255, 1)',
                            'rgba(255, 159, 64, 1)'
                        ],
                        borderWidth: 1 // Width of the bar borders
                    }
                ]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true // Y-axis starts at zero
                    }
                }
            }
        });
    })
    .catch((error) => {
        // Handle errors during the fetch request and log them to the console
        console.error('Error fetching data:', error);
    });
