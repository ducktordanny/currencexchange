import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { fadeIn } from 'src/app/animations';
import { CurrencyResult } from 'src/app/CurrencyResult';

@Component({
	selector: 'app-exchange-form',
	templateUrl: './exchange-form.component.html',
	styleUrls: ['./exchange-form.component.scss'],
	animations: [fadeIn('1s')],
})
export class ExchangeFormComponent implements OnInit {
	amount: number | undefined;
	currencyOptions: string[] = [];
	from: string = 'HUF';
	to: string = 'EUR';

	errorMessage: string = '';

	showResult: boolean = false;
	result: CurrencyResult | undefined;

	constructor(private apiService: ApiService) {}

	ngOnInit(): void {
		this.apiService
			.getLatest()
			.subscribe(
				(result) => (this.currencyOptions = Object.keys(result.rates))
			);
	}

	/** Handling the change of the selected currency what the user wants to exchange from. */
	fromChange(from: string): void {
		this.from = from;
	}

	/** Handling the change of the selected currency what the user wants to exchange to. */
	toChange(to: string): void {
		this.to = to;
	}

	/** Switch the two selected currency. */
	switchBetweenCurrencies(): void {
		const newFrom = this.to;
		this.to = this.from;
		this.from = newFrom;
	}

	/** Handling exchange and shows a popup if there is a result. */
	getExchange(): void {
		try {
			if (this.amount === undefined)
				throw new Error('Value for exchange is not defined.');

			// reset error
			this.errorMessage = '';

			this.apiService
				.getExchangeInfo(this.from, this.to)
				.subscribe((res) => {
					const { rates } = res;
					let exchange: number =
						(rates[this.to] * this.amount!) / rates[this.from];

					// set and show result
					this.result = {
						from: {
							key: this.from,
							rate: rates[this.from],
						},
						to: {
							key: this.to,
							rate: rates[this.to],
						},
						exchange,
						date: new Date().toLocaleString(),
					};
					this.showResult = true;

					// reset input
					this.amount = undefined;
				});
		} catch (err: any) {
			this.errorMessage = err.message || 'Something went wrong.';
			console.error(err);
		}
	}

	hideResult(): void {
		this.showResult = false;
	}
}
