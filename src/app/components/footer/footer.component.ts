import { Component, OnInit } from '@angular/core';
import { fadeUp } from '../../animations';

@Component({
	selector: 'app-footer',
	templateUrl: './footer.component.html',
	styleUrls: ['./footer.component.scss'],
	animations: [fadeUp],
})
export class FooterComponent implements OnInit {
	constructor() {}

	ngOnInit(): void {}
}
