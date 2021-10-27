import { DataPoint, PortfolioInformationMap, PortfolioItem } from "../../../types";

export const getAllDataPointsForMonth = (allData: DataPoint[], monthValue: RegExp) => {
    return allData.filter((data) => data?.label?.match(monthValue));
}

export const getDataForFirstDayOfMonth = (monthData: DataPoint[]) => {
    return monthData[monthData.length - 1];
}

export const getPortfolioInformationForMonth = (portfolioDataMap: PortfolioInformationMap[], dataPoint: DataPoint, portfolioWeightValue: number, totalMonthlyIncomeToInvest: number): PortfolioInformationMap | null => {
    if (!dataPoint) {
        return null;
    }

    const amountAvailableToInvestInStock = portfolioWeightValue * totalMonthlyIncomeToInvest;
    const previousNumberOfSharesOwned = portfolioDataMap[portfolioDataMap?.length - 1]?.totalNumberOfShares ? portfolioDataMap[portfolioDataMap?.length - 1]?.totalNumberOfShares : 0;

    const closingValue = dataPoint?.close;
    const numOfSharesPurchased = amountAvailableToInvestInStock / closingValue;
    const totalNumberOfShares = previousNumberOfSharesOwned + numOfSharesPurchased;
    const valueOfSharesOwned = totalNumberOfShares * closingValue;

    const mapEntryForMonth: PortfolioInformationMap = {
        month: dataPoint?.label,
        valueOfShare: closingValue,
        numOfSharesPurchased,
        totalNumberOfShares,
        valueOfSharesOwned
    }

    return mapEntryForMonth;
}