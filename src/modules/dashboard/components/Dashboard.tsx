import React, { useEffect, useState } from 'react';
import Chart from 'react-apexcharts';

import './Dashboard.css';

import { DataPoint, PortfolioInformationMap } from '../../../types';
import { cakeStockData, months, portfolios, years } from '../../../constants';
import { getAllDataPointsForMonth, getDataForFirstDayOfMonth, getPortfolioInformationForMonth } from '../utils';


export const Dashboard = () => {
    const [monthSeries, setMonthSeries] = useState<string[]>([]);
    const [valueOfPortfolio, setValueOfPortfolio] = useState<string[]>([]);

    useEffect(() => {
        const monthlySalary = 2000;
        const fifteenPercentOfSalary = 0.15 * monthlySalary;
        const toleranceLevel = 1;

        const stockName = 'CAKE';

        const closestPortfolioValue = toleranceLevel + 1;
        const portfolioSelected = !!portfolios[toleranceLevel] ? portfolios[toleranceLevel] : portfolios[closestPortfolioValue];
        const portfolioWeightValue = portfolioSelected?.find((portfolioObject) => portfolioObject?.ticker === stockName)?.weight;

        const historicalDataForCake: DataPoint[] = cakeStockData.historical;
        const cakePortfolioInformationMap: PortfolioInformationMap[] = [];

        const monthArray: string[] = [];
        const valueOfPortfolioArray: string[] = [];

        years.forEach((year) => {
            months.forEach((month) => {
                const regex = new RegExp(`${month} [0-9]{2}, ${year}`);
                const dataPointForFirstDayOfMonth = getDataForFirstDayOfMonth(getAllDataPointsForMonth(historicalDataForCake, regex));
                const portfolioInfoForMonth = getPortfolioInformationForMonth(cakePortfolioInformationMap, dataPointForFirstDayOfMonth, portfolioWeightValue as number, fifteenPercentOfSalary);

                if (portfolioInfoForMonth) {
                    monthArray.push(`${month} ${year}`)
                    valueOfPortfolioArray.push(portfolioInfoForMonth?.valueOfSharesOwned?.toFixed(2));

                    cakePortfolioInformationMap.push(portfolioInfoForMonth);
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
