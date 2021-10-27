import { DataPoint } from "../../../types";

export const getAllDataPointsForMonth = (allData: DataPoint[], monthValue: RegExp) => {
    return allData.filter((data) => data?.label?.match(monthValue));
}

export const getDataForFirstDayOfMonth = (monthData: DataPoint[]) => {
    return monthData[monthData.length - 1];
}

export const getDataToPopulateForMonth = (dataMap: any[], dataPoint: DataPoint, portfolio: any, stockName: string, totalMonthlyIncomeToInvest: number) => {
    const portfolioWeightObject = portfolio.find((portfolioObject: any) => portfolioObject.ticker === stockName);
    const amountAvailableToInvestInStock = portfolioWeightObject.weight * totalMonthlyIncomeToInvest;
    const previousNumberOfSharesOwned = dataMap[dataMap?.length - 1]?.totalNumberOfShares ? dataMap[dataMap?.length - 1]?.totalNumberOfShares : 0;

    if (!dataPoint) {
        return null;
    }

    const obj = {
        month: dataPoint?.label,
        valueOfShare: dataPoint?.close,
        numOfSharesPurchased: (amountAvailableToInvestInStock / dataPoint?.close),
        totalNumberOfShares: previousNumberOfSharesOwned + (amountAvailableToInvestInStock / dataPoint?.close),
        valueOfSharesOwned: (previousNumberOfSharesOwned + (amountAvailableToInvestInStock / dataPoint?.close)) * dataPoint?.close
    }

    return obj;
}