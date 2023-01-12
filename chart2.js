var ctx2 = document.getElementById('doughnut').getContext('2d');
var doughnut = new Chart(ctx2, {
    type: 'doughnut',
    data: {
        labels: ['Wasted Time', 'I Was Never There', 'Save your Tears', 'After Hours', 'Is There Someone Else'],
        datasets: [{
            label: 'The Weeknd Songs',
            data: [20, 18, 15, 19, 10],
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
            borderWidth: 3
        }]
    },
    options: {
    
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});
