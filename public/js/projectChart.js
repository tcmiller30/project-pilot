const ctxHour = document.getElementById("hoursChart");

fetch("/api/projects")
  .then(response => response.json())
  .then(allProjects => {
    const hourData = [];
    allProjects.forEach(project => {
      hourData.push({
        name: project.title,
        hours: project.hours,
      });
    });

    // render chart
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
  });
