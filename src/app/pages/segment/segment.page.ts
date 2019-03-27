import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSegment } from '@ionic/angular';
import { DataService } from '../../services/data.service';
import { Observable } from 'rxjs';

@Component({
	selector: 'app-segment',
	templateUrl: './segment.page.html',
	styleUrls: [ './segment.page.scss' ]
})
export class SegmentPage implements OnInit {
	@ViewChild('segment') segment: IonSegment;

	heroes: Observable<any>;
	publisher: string = '';

	constructor(private dataService: DataService) {}

	ngOnInit() {
		this.segment.value = '';
		//this.segment.value = 'todos';
		this.heroes = this.dataService.getHeroes();
	}

	segmentChanged(ev) {
		// const select = ev.detail.value;
		// if (select === 'todos') {
		// 	this.publisher = '';
		// 	return;
		// }
		// this.publisher = select;
	}
}
