import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
	selector: 'app-currency-options',
	templateUrl: './currency-options.component.html',
	styleUrls: ['./currency-options.component.scss'],
})
export class CurrencyOptionsComponent implements OnInit {
	@Input() label: string = '';
	/** Set the selected option for the given string (if it's in the options array). */
	@Input() selected: string = '';
	@Input() currencyOptions: string[] = [];
	/** Runs a function when the selected option is chagning. */
	@Output() onChange: EventEmitter<string> = new EventEmitter();

	constructor() {}

	ngOnInit(): void {}

	/** Emitting the new selected option. */
	onSelect() {
		this.onChange.emit(this.selected);
	}
}
