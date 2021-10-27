import { getAllDataPointsForMonth, getDataForFirstDayOfMonth, getPortfolioInformationForMonth } from "..";
import { DataPoint, PortfolioInformationMap } from "../../../../types";

const dataPoints: DataPoint[] = [
    {
        "date": "2021-06-01",
        "open": 58.73,
        "high": 58.92,
        "low": 56.59,
        "close": 57.23,
        "adjClose": 57.23,
        "volume": 969213.0,
        "unadjustedVolume": 969213.0,
        "change": -1.5,
        "changePercent": -2.554,
        "vwap": 57.58,
        "label": "June 01, 21",
        "changeOverTime": -0.02554
    },
    {
        "date": "2021-05-28",
        "open": 58.85,
        "high": 59.39,
        "low": 57.24,
        "close": 58.82,
        "adjClose": 58.82,
        "volume": 631896.0,
        "unadjustedVolume": 631896.0,
        "change": -0.03,
        "changePercent": -0.051,
        "vwap": 58.48333,
        "label": "May 28, 21",
        "changeOverTime": -5.1E-4
    },
    {
        "date": "2021-05-27",
        "open": 58.1,
        "high": 58.99,
        "low": 57.36,
        "close": 58.73,
        "adjClose": 58.73,
        "volume": 507133.0,
        "unadjustedVolume": 507133.0,
        "change": 0.63,
        "changePercent": 1.084,
        "vwap": 58.36,
        "label": "May 27, 21",
        "changeOverTime": 0.01084
    },
    {
        "date": "2021-05-26",
        "open": 56.1,
        "high": 58.03,
        "low": 55.93,
        "close": 57.96,
        "adjClose": 57.96,
        "volume": 620736.0,
        "unadjustedVolume": 620736.0,
        "change": 1.86,
        "changePercent": 3.316,
        "vwap": 57.30667,
        "label": "May 26, 21",
        "changeOverTime": 0.03316
    },
    {
        "date": "2021-05-25",
        "open": 57.12,
        "high": 57.85,
        "low": 55.41,
        "close": 55.77,
        "adjClose": 55.77,
        "volume": 1152488.0,
        "unadjustedVolume": 1152488.0,
        "change": -1.35,
        "changePercent": -2.363,
        "vwap": 56.34333,
        "label": "May 25, 21",
        "changeOverTime": -0.02363
    },
    {
        "date": "2021-05-24",
        "open": 56.12,
        "high": 57.07,
        "low": 55.19,
        "close": 56.74,
        "adjClose": 56.74,
        "volume": 604887.0,
        "unadjustedVolume": 604887.0,
        "change": 0.62,
        "changePercent": 1.105,
        "vwap": 56.33333,
        "label": "May 24, 21",
        "changeOverTime": 0.01105
    },
    {
        "date": "2021-05-21",
        "open": 56.75,
        "high": 57.63,
        "low": 55.74,
        "close": 55.77,
        "adjClose": 55.77,
        "volume": 541147.0,
        "unadjustedVolume": 541147.0,
        "change": -0.98,
        "changePercent": -1.727,
        "vwap": 56.38,
        "label": "May 21, 21",
        "changeOverTime": -0.01727
    },
    {
        "date": "2021-05-20",
        "open": 57.32,
        "high": 57.6,
        "low": 54.85,
        "close": 56.05,
        "adjClose": 56.05,
        "volume": 931024.0,
        "unadjustedVolume": 931024.0,
        "change": -1.27,
        "changePercent": -2.216,
        "vwap": 56.16667,
        "label": "May 20, 21",
        "changeOverTime": -0.02216
    },
    {
        "date": "2021-05-19",
        "open": 57.0,
        "high": 57.77,
        "low": 55.96,
        "close": 57.6,
        "adjClose": 57.6,
        "volume": 579847.0,
        "unadjustedVolume": 579847.0,
        "change": 0.6,
        "changePercent": 1.053,
        "vwap": 57.11,
        "label": "May 19, 21",
        "changeOverTime": 0.01053
    },
    {
        "date": "2021-05-18",
        "open": 59.24,
        "high": 59.7,
        "low": 58.03,
        "close": 58.1,
        "adjClose": 58.1,
        "volume": 448126.0,
        "unadjustedVolume": 448126.0,
        "change": -1.14,
        "changePercent": -1.924,
        "vwap": 58.61,
        "label": "May 18, 21",
        "changeOverTime": -0.01924
    },
    {
        "date": "2021-05-17",
        "open": 59.08,
        "high": 59.2,
        "low": 57.54,
        "close": 58.91,
        "adjClose": 58.91,
        "volume": 481592.0,
        "unadjustedVolume": 481592.0,
        "change": -0.17,
        "changePercent": -0.288,
        "vwap": 58.55,
        "label": "May 17, 21",
        "changeOverTime": -0.00288
    },
    {
        "date": "2021-05-14",
        "open": 58.51,
        "high": 59.7,
        "low": 58.02,
        "close": 59.3,
        "adjClose": 59.3,
        "volume": 462828.0,
        "unadjustedVolume": 462828.0,
        "change": 0.79,
        "changePercent": 1.35,
        "vwap": 59.00667,
        "label": "May 14, 21",
        "changeOverTime": 0.0135
    },
    {
        "date": "2021-05-13",
        "open": 57.37,
        "high": 58.79,
        "low": 55.62,
        "close": 57.7,
        "adjClose": 57.7,
        "volume": 939652.0,
        "unadjustedVolume": 939652.0,
        "change": 0.33,
        "changePercent": 0.575,
        "vwap": 57.37,
        "label": "May 13, 21",
        "changeOverTime": 0.00575
    },
    {
        "date": "2021-05-12",
        "open": 60.8,
        "high": 61.11,
        "low": 56.67,
        "close": 57.31,
        "adjClose": 57.31,
        "volume": 1306372.0,
        "unadjustedVolume": 1306372.0,
        "change": -3.49,
        "changePercent": -5.74,
        "vwap": 58.36333,
        "label": "May 12, 21",
        "changeOverTime": -0.0574
    },
    {
        "date": "2021-05-11",
        "open": 60.0,
        "high": 61.56,
        "low": 58.31,
        "close": 61.3,
        "adjClose": 61.3,
        "volume": 536903.0,
        "unadjustedVolume": 536903.0,
        "change": 1.3,
        "changePercent": 2.167,
        "vwap": 60.39,
        "label": "May 11, 21",
        "changeOverTime": 0.02167
    },
    {
        "date": "2021-05-10",
        "open": 63.72,
        "high": 63.77,
        "low": 61.54,
        "close": 61.71,
        "adjClose": 61.71,
        "volume": 567487.0,
        "unadjustedVolume": 567487.0,
        "change": -2.01,
        "changePercent": -3.154,
        "vwap": 62.34,
        "label": "May 10, 21",
        "changeOverTime": -0.03154
    },
    {
        "date": "2021-05-07",
        "open": 61.61,
        "high": 64.84,
        "low": 61.61,
        "close": 63.78,
        "adjClose": 63.78,
        "volume": 797987.0,
        "unadjustedVolume": 797987.0,
        "change": 2.17,
        "changePercent": 3.522,
        "vwap": 63.41,
        "label": "May 07, 21",
        "changeOverTime": 0.03522
    },
    {
        "date": "2021-05-06",
        "open": 62.74,
        "high": 62.9,
        "low": 60.55,
        "close": 62.26,
        "adjClose": 62.26,
        "volume": 688096.0,
        "unadjustedVolume": 688096.0,
        "change": -0.48,
        "changePercent": -0.765,
        "vwap": 61.90333,
        "label": "May 06, 21",
        "changeOverTime": -0.00765
    },
    {
        "date": "2021-05-05",
        "open": 62.16,
        "high": 62.99,
        "low": 60.11,
        "close": 62.46,
        "adjClose": 62.46,
        "volume": 745754.0,
        "unadjustedVolume": 745754.0,
        "change": 0.3,
        "changePercent": 0.483,
        "vwap": 61.85333,
        "label": "May 05, 21",
        "changeOverTime": 0.00483
    },
    {
        "date": "2021-05-04",
        "open": 62.1,
        "high": 62.76,
        "low": 60.52,
        "close": 62.21,
        "adjClose": 62.21,
        "volume": 782737.0,
        "unadjustedVolume": 782737.0,
        "change": 0.11,
        "changePercent": 0.177,
        "vwap": 61.83,
        "label": "May 04, 21",
        "changeOverTime": 0.00177
    },
    {
        "date": "2021-05-03",
        "open": 63.2,
        "high": 63.35,
        "low": 61.03,
        "close": 61.89,
        "adjClose": 61.89,
        "volume": 818663.0,
        "unadjustedVolume": 818663.0,
        "change": -1.31,
        "changePercent": -2.073,
        "vwap": 62.09,
        "label": "May 03, 21",
        "changeOverTime": -0.02073
    },
    {
        "date": "2021-04-30",
        "open": 63.05,
        "high": 64.14,
        "low": 61.48,
        "close": 62.59,
        "adjClose": 62.59,
        "volume": 833160.0,
        "unadjustedVolume": 833160.0,
        "change": -0.46,
        "changePercent": -0.73,
        "vwap": 62.73667,
        "label": "April 30, 21",
        "changeOverTime": -0.0073
    },
    {
        "date": "2021-04-29",
        "open": 62.31,
        "high": 65.0,
        "low": 60.49,
        "close": 63.2,
        "adjClose": 63.2,
        "volume": 1571462.0,
        "unadjustedVolume": 1571462.0,
        "change": 0.89,
        "changePercent": 1.428,
        "vwap": 62.89667,
        "label": "April 29, 21",
        "changeOverTime": 0.01428
    },
    {
        "date": "2021-04-28",
        "open": 58.51,
        "high": 59.19,
        "low": 56.85,
        "close": 59.02,
        "adjClose": 59.02,
        "volume": 658122.0,
        "unadjustedVolume": 658122.0,
        "change": 0.51,
        "changePercent": 0.872,
        "vwap": 58.35333,
        "label": "April 28, 21",
        "changeOverTime": 0.00872
    }
];

describe('getAllDataPointsForMonth', () => {
    it('should return empty array if no value matches with month specified', () => {
        expect(getAllDataPointsForMonth(dataPoints, new RegExp(`March [0-9]{2}, 19`))).toHaveLength(0);
    });
    it('should return all data points for the specified month', () => {
        expect(getAllDataPointsForMonth(dataPoints, new RegExp(`April [0-9]{2}, 21`))).toHaveLength(3);
        expect(getAllDataPointsForMonth(dataPoints, new RegExp(`May [0-9]{2}, 21`))).toHaveLength(20);
        expect(getAllDataPointsForMonth(dataPoints, new RegExp(`June [0-9]{2}, 21`))).toHaveLength(1);
    });
});

describe('getDataForFirstDayOfMonth', () => {
    it('should return the data point for first day of the month', () => {
        const dataPointsForApril = getAllDataPointsForMonth(dataPoints, new RegExp(`April [0-9]{2}, 21`));
        const dataPointsForMay = getAllDataPointsForMonth(dataPoints, new RegExp(`May [0-9]{2}, 21`));
        const dataPointsForJune = getAllDataPointsForMonth(dataPoints, new RegExp(`June [0-9]{2}, 21`));

        expect(getDataForFirstDayOfMonth(dataPointsForApril).label).toBe('April 28, 21')
        expect(getDataForFirstDayOfMonth(dataPointsForMay).label).toBe('May 03, 21');
        expect(getDataForFirstDayOfMonth(dataPointsForJune).label).toBe('June 01, 21');
    });
});

describe('getPortfolioInformationForMonth', () => {
    it('should return null if no data point value is provided', () => {
        const portfolioInfoMap: PortfolioInformationMap[] = [];

        expect(getPortfolioInformationForMonth(portfolioInfoMap, undefined as any, 0.2, 300)).toBe(null);
    });
    it('should return the value for the month (April) which can be populated in the info map', () => {
        const portfolioInfoMap: PortfolioInformationMap[] = [];
        const allDataPointsForApril = getAllDataPointsForMonth(dataPoints, new RegExp(`April [0-9]{2}, 21`));
        const monthDataForApril = getDataForFirstDayOfMonth(allDataPointsForApril);

        expect(getPortfolioInformationForMonth(portfolioInfoMap, monthDataForApril, 0.2, 300)).toEqual({
            month: 'April 28, 21',
            valueOfShare: 59.02,
            numOfSharesPurchased: 1.0166045408336157,
            totalNumberOfShares: 1.0166045408336157,
            valueOfSharesOwned: 60.00000000000001
        });
    });
    it('should return the value for the month (May) which can be populated in the info map', () => {
        const portfolioInfoMap: PortfolioInformationMap[] = [
            {
                month: 'April 28, 21',
                valueOfShare: 59.02,
                numOfSharesPurchased: 1.0166045408336157,
                totalNumberOfShares: 1.0166045408336157,
                valueOfSharesOwned: 60.00000000000001
            }
        ];
        const allDataPointsForMay = getAllDataPointsForMonth(dataPoints, new RegExp(`May [0-9]{2}, 21`));
        const monthDataForMay = getDataForFirstDayOfMonth(allDataPointsForMay);

        expect(getPortfolioInformationForMonth(portfolioInfoMap, monthDataForMay, 0.2, 300)).toEqual({
            month: 'May 03, 21',
            valueOfShare: 61.89,
            numOfSharesPurchased: 0.9694619486185168,
            totalNumberOfShares: 1.9860664894521325,
            valueOfSharesOwned: 122.91765503219249
        });
    });
    it('should return the value for the month (June) which can be populated in the info map', () => {
        const portfolioInfoMap: PortfolioInformationMap[] = [
            {
                month: 'April 28, 21',
                valueOfShare: 59.02,
                numOfSharesPurchased: 1.0166045408336157,
                totalNumberOfShares: 1.0166045408336157,
                valueOfSharesOwned: 60.00000000000001
            },
            {
                month: 'May 03, 21',
                valueOfShare: 61.89,
                numOfSharesPurchased: 0.9694619486185168,
                totalNumberOfShares: 1.9860664894521325,
                valueOfSharesOwned: 122.91765503219249
            }
        ];
        const allDataPointsForJune = getAllDataPointsForMonth(dataPoints, new RegExp(`June [0-9]{2}, 21`));
        const monthDataForJune = getDataForFirstDayOfMonth(allDataPointsForJune);

        expect(getPortfolioInformationForMonth(portfolioInfoMap, monthDataForJune, 0.2, 300)).toEqual({
            month: 'June 01, 21',
            valueOfShare: 57.23,
            numOfSharesPurchased: 1.0484011881880133,
            totalNumberOfShares: 3.034467677640146,
            valueOfSharesOwned: 173.66258519134556
        });
    });
});