const ctxEarn = document.getElementById("earningsChart");
// this is the earnings chart on the dashboard page

fetch("/api/projects")
  .then((res) => res.json())
  .then((allProjects) => {
    const earningsData = [];
    allProjects.forEach((project) => {
      earningsData.push({
        name: project.title,
        hours: project.hours,
        rate: project.rate,
      });
    });

    // Chart

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
        data: earningsData.map((row) => row.hours * row.rate),
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
  });
