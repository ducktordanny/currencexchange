import {
	animate,
	state,
	style,
	transition,
	trigger,
} from '@angular/animations';

export const fadeDown = trigger('fadeDown', [
	transition(':enter, :leave', [
		style({
			transform: 'translateY(-50px)',
			opacity: 0,
		}),
		animate('0.5s'),
	]),
]);

export const fadeIn = (timing: string | number) =>
	trigger('fadeIn', [
		transition(':enter', [
			style({
				opacity: 0,
			}),
			animate(timing, style({ opacity: 1 })),
		]),
		transition(':leave', [
			style({
				opacity: 1,
			}),
			animate(timing, style({ opacity: 0 })),
		]),
	]);

export const fadeUp = trigger('fadeUp', [
	transition(':enter, :leave', [
		style({
			transform: 'translateY(50px)',
			opacity: 0,
		}),
		animate('0.5s'),
	]),
]);
