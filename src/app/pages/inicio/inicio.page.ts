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
		},
		{
			icon: 'beaker',
			name: 'Avatar',
			redirecTo: '/avatar'
		},
		{
			icon: 'radio-button-on',
			name: 'Botones - routers',
			redirecTo: '/botones'
		},
		{
			icon: 'card',
			name: 'Cards',
			redirecTo: '/card'
		},
		{
			icon: 'checkmark-circle-outline',
			name: 'Checkbox',
			redirecTo: '/check'
		},
		{
			icon: 'calendar',
			name: 'Datetime',
			redirecTo: '/date-time'
		},
		{
			icon: 'car',
			name: 'Fabs',
			redirecTo: '/fab'
		},
		{
			icon: 'grid',
			name: 'Grids - Rows',
			redirecTo: '/grid'
		},
		{
			icon: 'infinite',
			name: 'Infinite Scroll',
			redirecTo: '/infinite-scroll'
		},
		{
			icon: 'hammer',
			name: 'Input y Forms',
			redirecTo: '/input'
		},
		{
			icon: 'list',
			name: 'Lista  - sliding',
			redirecTo: '/list'
		},
		{
			icon: 'reorder',
			name: 'Lista  - Reordenar',
			redirecTo: '/list-reorder'
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
