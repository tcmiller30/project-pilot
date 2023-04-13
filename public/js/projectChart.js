// const { Project } = require("../models");
const ctxHour = document.getElementById("hoursChart");

const hourData = [
  { name: "Project 1", hours: 14 },
  { name: "Project 2", hours: 23 },
  { name: "Project 3", hours: 30 },
  { name: "Project 4", hours: 43 },
  { name: "Project 5", hours: 75 },
];

new Chart(ctxHour, {
  type: "pie",
  options: {
    responsive: true,
    animation: false,
    layout: {
      padding: {
        x: 50,
        y: 10,
      },
    },
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Hours Worked",
      },
      scales: {
        y: {
          beginAtZero: true,
          ticks: {
            display: false,
          },
        },
      },
    },
  },
  data: {
    labels: hourData.map((row) => row.name),
    datasets: [
      {
        label: "Hours Worked",
        data: hourData.map((row) => row.hours),
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
