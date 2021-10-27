import React, { useEffect, useState } from 'react';
import Chart from 'react-apexcharts';

import { cakeStockData, portfolios } from '../../../constants';
import { getAllDataPointsForMonth, getDataForFirstDayOfMonth, getDataToPopulateForMonth } from '../utils';
import { DataPoint } from '../../../types';

export const Dashboard = () => {
    const [monthSeries, setMonthSeries] = useState<string[]>([]);
    const [valueOfPortfolio, setValueOfPortfolio] = useState<number[]>([]);

    useEffect(() => {
        const monthlySalary = 3000;
        const fifteenPercentOfSalary = 0.15 * monthlySalary;
        const toleranceLevel = 5;
        const closestPortfolioValue = toleranceLevel + 1;
        const portfolioSelected = !!portfolios[toleranceLevel] ? portfolios[toleranceLevel] : portfolios[closestPortfolioValue];

        const historicalDataForCake: DataPoint[] = cakeStockData.historical;
        const mapForDataOfCakeStock: any[] = [];

        ['17', '18', '19', '20', '21'].forEach((year) => {
            ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'].forEach((month) => {
                const regex = new RegExp(`${month} [0-9]{2}, ${year}`);
                const dataPointForFirstDayOfMonth = getDataForFirstDayOfMonth(getAllDataPointsForMonth(historicalDataForCake, regex));
                const dataReturned = getDataToPopulateForMonth(mapForDataOfCakeStock, dataPointForFirstDayOfMonth, portfolioSelected, 'CAKE', fifteenPercentOfSalary);

                if (dataReturned) {
                    setMonthSeries([
                        ...monthSeries,
                        `${month} ${year}`
                    ]);

                    setValueOfPortfolio([
                        ...valueOfPortfolio,
                        dataReturned?.valueOfSharesOwned
                    ]);

                    mapForDataOfCakeStock.push(dataReturned);
                }
            });
        });

        console.log(mapForDataOfCakeStock);
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
                        }
                    }
                }
                series={[{ name: 'value of portfolio', data: valueOfPortfolio }]}
                type="bar"
            // width="1500"
            />
        </React.Fragment>
    );
}
