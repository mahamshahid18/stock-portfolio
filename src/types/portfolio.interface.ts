export interface PortfolioItem {
    weight: number;
    ticker: string
};

export interface Portfolio {
    [key: string]: PortfolioItem[];
};
