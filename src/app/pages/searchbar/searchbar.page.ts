import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Observable } from 'rxjs';

@Component({
	selector: 'app-searchbar',
	templateUrl: './searchbar.page.html',
	styleUrls: [ './searchbar.page.scss' ]
})
export class SearchbarPage implements OnInit {
	//albums: any[] = [];
	albums: Observable<any>;

	textoBuscar: string = '';

	constructor(private dataService: DataService) {}

	ngOnInit() {
		// this.dataService.getAlbums().subscribe((data) => {
		// 	this.albums = data;
		// 	//console.log(this.albums);
		// });
		this.albums = this.dataService.getAlbums();
	}

	buscar(ev) {
		this.textoBuscar = ev.detail.value;
	}
}
