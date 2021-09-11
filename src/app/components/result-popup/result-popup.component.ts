import { Component, EventEmitter, OnInit, Input, Output } from '@angular/core';
import { fadeIn } from 'src/app/animations';
import { CurrencyResult } from 'src/app/CurrencyResult';

@Component({
	selector: 'app-result-popup',
	templateUrl: './result-popup.component.html',
	styleUrls: ['./result-popup.component.scss'],
	animations: [fadeIn('0.25s')],
})
export class ResultPopupComponent implements OnInit {
	@Input() result: CurrencyResult | undefined;
	/** To show the popup the result should be set as well. */
	@Input() show: boolean = false;
	@Output() onHide: EventEmitter<boolean> = new EventEmitter();

	constructor() {}

	ngOnInit(): void {}

	hidePopup(event: any): void {
		// whit this it's not gonna be applied on children elements
		if (event.target !== event.currentTarget) return;
		this.onHide.emit(false);
	}
}
