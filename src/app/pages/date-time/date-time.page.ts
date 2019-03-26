import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-date-time',
	templateUrl: './date-time.page.html',
	styleUrls: [ './date-time.page.scss' ]
})
export class DateTimePage implements OnInit {
	fechaNac: Date = new Date();
	customPickerOptions;
	customDate;

	constructor() {}

	ngOnInit() {
		this.customPickerOptions = {
			buttons: [
				{
					text: 'Save',
					handler: (ev) => {
						console.log(ev);
						console.log(new Date(ev.year.value, ev.month.value, ev.day.value));
					}
				},
				{
					text: 'Log',
					handler: () => {
						console.log('Clicked Log. Do not Dismiss.');
						return false;
					}
				}
			]
		};
	}

	cambioFecha(f) {
		console.log(new Date(f.detail.value));
	}
}
