type Rate = {
	key: string;
	rate: number;
};

export interface CurrencyResult {
	from: Rate;
	to: Rate;
	exchange: number;
	date: string;
}
