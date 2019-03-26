import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-inicio',
	templateUrl: './inicio.page.html',
	styleUrls: [ './inicio.page.scss' ]
})
export class InicioPage implements OnInit {
	componentes: Componente[] = [
		{
			icon: 'american-football',
			name: 'Action sheet',
			redirecTo: '/action-sheet'
		},
		{
			icon: 'appstore',
			name: 'Alert',
			redirecTo: '/alert'
		}
	];
	constructor() {}

	ngOnInit() {}
}

interface Componente {
	icon: string;
	name: string;
	redirecTo: string;
}
