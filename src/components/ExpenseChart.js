function ExpenseChart({expenses}){
    
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

    return <Bar data={chartData}/>
}

export default ExpenseChart;