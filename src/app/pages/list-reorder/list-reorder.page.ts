import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-list-reorder',
	templateUrl: './list-reorder.page.html',
	styleUrls: [ './list-reorder.page.scss' ]
})
export class ListReorderPage implements OnInit {
	personajes: string[] = [ 'Aquaman', 'Superman', 'Batman', 'Flash', 'Mujer maravilla' ];

	constructor() {}

	ngOnInit() {}

	reorder(ev) {
		const iMover = this.personajes.splice(ev.detail.from, 1)[0];
		this.personajes.splice(ev.detail.to, 0, iMover);
		ev.detail.complete();
	}

	onClick() {
		console.log(this.personajes);
	}
}
