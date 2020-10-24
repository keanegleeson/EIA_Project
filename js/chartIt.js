chartIt();

                    async function chartIt() {
                        const ctx = document.getElementById('chart').getContext('2d');
                        const data = await getEIA();


                        const myChart = new Chart(ctx, {
                            type: 'line',
                            data: {
                                labels: data.xlabels,
                                datasets: [{
                                    label: 'Net Interchange (MWh)',
                                    data: data.yValues,
                                    backgroundColor: 'rgba(255, 99, 132, 0.2)',
                                    borderColor: 'rgba(255, 99, 132, 1)',
                                    borderWidth: 1,
                                    fill: false
                                }]
                            },
                            options: {
                                scales: {
                                    yAxes: [{
                                        ticks: {
                                            beginAtZero: true
                                        }
                                    }]
                                }
                            }
                        });
                    }