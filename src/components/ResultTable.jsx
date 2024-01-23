import { formatter } from "../util/investment"

export default function ResultTable({data}){

    const initialInvestment = data[0].valueEndOfYear - data[0].interest - data[0].annualInvestment;

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
                {data.map((yearData) => {
                    const totalinterest = yearData.valueEndOfYear - (yearData.annualInvestment * yearData.year) - initialInvestment;
                    const investmentCapital = yearData.valueEndOfYear - totalinterest;
                    
                    return(
                        <tr>
                            <td>{yearData.year}</td>
                            <td>{formatter.format(yearData.valueEndOfYear)}</td>
                            <td>{formatter.format(yearData.interest)}</td>
                            <td>{formatter.format(totalinterest)}</td>
                            <td>{formatter.format(investmentCapital)}</td>
                        </tr>
                    )}
                )}
            </tbody>
        </table>
    )
}