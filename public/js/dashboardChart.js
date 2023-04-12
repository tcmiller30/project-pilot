const ctxEarn = document.getElementById("earningsChart");

const earningsData = [
  { name: "Calc App", wage: 15, hours: 10 },
  { name: "Weather App", wage: 20, hours: 20 },
  { name: "Todo App", wage: 30, hours: 45 },
  { name: "Blog App", wage: 25, hours: 25 },
];

new Chart(ctxEarn, {
  type: "bar",
  options: {
    responsive: true,
    animation: false,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: true,
        text: "Money Earned ($)",
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          callback: function (value) {
            return "$" + value;
          },
        },
      },
    },
  },
  data: {
    labels: earningsData.map((row) => row.name),
    datasets: [
      {
        label: "$",
        data: earningsData.map((row) => row.wage * row.hours),
        borderWidth: 1,
        backgroundColor: [
          "#c6beb5",
          "#6aa2b8",
          "#555759",
          "#f78d2d",
          "#1b3d6d",
          "#7ab800",
        ],
      },
    ],
  },
  
});
