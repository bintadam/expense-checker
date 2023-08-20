import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarController, BarElement } from 'chart.js';

ChartJS.register(BarElement, CategoryScale, LinearScale, BarController);


function ExpenseChart({expenses = []}){
    
    const monthlyTotals = expenses.reduce((acc, expense) => {
        const monthYear = new Date(expense.date).toISOString().slice(0, 7);
        if (!acc[monthYear]) {
          acc[monthYear] = 0;
        }
        acc[monthYear] += expense.Amount;
        return acc;
      }, {});

    const labels = Object.keys(monthlyTotals);
    const data = Object.values(monthlyTotals);
    
    const chartData = {
        labels: labels,
        datasets: [{
        label: 'Monthly Expenses',
        data: data,
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
        }]
    };

    const chartOptions = {
        scales: {
          x: {
            type:'category',
            beginAtZero: true
          },
          y: {
            beginAtZero: true
          }
        }
      };
      
    return <Bar data={chartData} options={chartOptions} />      

}

export default ExpenseChart;