import { Component, OnInit } from '@angular/core';
import { fadeIn } from 'src/app/animations';

@Component({
	selector: 'app-about',
	templateUrl: './about.component.html',
	styleUrls: ['./about.component.scss'],
	animations: [fadeIn('1s')],
})
export class AboutComponent implements OnInit {
	constructor() {}

	ngOnInit(): void {}
}
