import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Componente } from '../interfaces/interfaces';
import { delay } from 'rxjs/operators';

@Injectable({
	providedIn: 'root'
})
export class DataService {
	constructor(private http: HttpClient) {}

	getMenu() {
		return this.http.get<Componente[]>('/assets/data/menu.json');
	}

	getHeroes() {
		return this.http.get<Componente[]>('/assets/data/superheroes.json').pipe(delay(3000));
	}

	getUsers() {
		return this.http.get('https://jsonplaceholder.typicode.com/users');
	}

	getAlbums() {
		return this.http.get<any[]>('https://jsonplaceholder.typicode.com/albums');
	}
}
