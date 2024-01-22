export default function ResultTable({data}){
    return(
        <table id="result">
            <thead>
                <tr>
                    <th>Year</th>
                    <th>Investment Value</th>
                    <th>Interest (Year)</th>
                    <th>Total Interest</th>
                    <th>Invested Capital</th>
                </tr>
            </thead>
            <tbody>
                {data.map((item) => (
                    <tr>
                        <td>{item.year}</td>
                        <td>{item.interest.toFixed(2)}</td>
                        <td>{item.valueEndOfYear.toFixed(2)}</td>
                        <td>{item.annualInvestment.toFixed(2)}</td>
                        <td>{item.year.toFixed(2)}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}