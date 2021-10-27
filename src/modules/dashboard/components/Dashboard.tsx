import React, { useEffect, useState } from 'react';
import Chart from 'react-apexcharts';

import './Dashboard.css';

import { DataPoint } from '../../../types';
import { cakeStockData, portfolios } from '../../../constants';
import { getAllDataPointsForMonth, getDataForFirstDayOfMonth, getDataToPopulateForMonth } from '../utils';


export const Dashboard = () => {
    const [monthSeries, setMonthSeries] = useState<string[]>([]);
    const [valueOfPortfolio, setValueOfPortfolio] = useState<string[]>([]);

    useEffect(() => {
        const monthlySalary = 2000;
        const fifteenPercentOfSalary = 0.15 * monthlySalary;
        const toleranceLevel = 1;
        const closestPortfolioValue = toleranceLevel + 1;
        const portfolioSelected = !!portfolios[toleranceLevel] ? portfolios[toleranceLevel] : portfolios[closestPortfolioValue];

        const historicalDataForCake: DataPoint[] = cakeStockData.historical;
        const mapForDataOfCakeStock: any[] = [];

        const monthArray: string[] = [];
        const valueOfPortfolioArray: string[] = [];

        ['17', '18', '19', '20', '21'].forEach((year) => {
            ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'].forEach((month) => {
                const regex = new RegExp(`${month} [0-9]{2}, ${year}`);
                const dataPointForFirstDayOfMonth = getDataForFirstDayOfMonth(getAllDataPointsForMonth(historicalDataForCake, regex));
                const dataReturned = getDataToPopulateForMonth(mapForDataOfCakeStock, dataPointForFirstDayOfMonth, portfolioSelected, 'CAKE', fifteenPercentOfSalary);


                if (dataReturned) {
                    monthArray.push(`${month} ${year}`)
                    valueOfPortfolioArray.push(dataReturned?.valueOfSharesOwned?.toFixed(2));

                    mapForDataOfCakeStock.push(dataReturned);
                }
            });
        });

        setMonthSeries(monthArray);
        setValueOfPortfolio(valueOfPortfolioArray);
    }, []);

    return (
        <React.Fragment>
            <div className="dashboard-container">
                <h2 className="chart-title">CAKE portfolio trend (in $)</h2>
                <Chart
                    className="chart"
                    options={
                        {
                            chart: {
                                id: "basic-bar"
                            },
                            xaxis: {
                                categories: monthSeries
                            },
                            dataLabels: {
                                enabled: false
                            }
                        }
                    }
                    series={[{ name: 'value of portfolio', data: valueOfPortfolio }]}
                    type="bar"
                />
            </div>
        </React.Fragment>
    );
}
