import { Component, OnInit } from '@angular/core';
import { fadeDown } from '../../animations';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.scss'],
	animations: [fadeDown],
})
export class HeaderComponent implements OnInit {
	constructor() {}

	ngOnInit(): void {}
}
