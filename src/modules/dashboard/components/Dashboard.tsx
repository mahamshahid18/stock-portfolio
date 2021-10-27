import React, { useEffect, useState } from 'react';
import Chart from 'react-apexcharts';

import { cakeStockData, portfolios } from '../../../constants';
import { getAllDataPointsForMonth, getDataForFirstDayOfMonth, getDataToPopulateForMonth } from '../utils';
import { DataPoint } from '../../../types';

export const Dashboard = () => {
    const [monthSeries, setMonthSeries] = useState<string[]>([]);
    const [valueOfPortfolio, setValueOfPortfolio] = useState<string[]>([]);

    useEffect(() => {
        const monthlySalary = 3000;
        const fifteenPercentOfSalary = 0.15 * monthlySalary;
        const toleranceLevel = 5;
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
            <Chart
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
                width="1500"
            />
        </React.Fragment>
    );
}
