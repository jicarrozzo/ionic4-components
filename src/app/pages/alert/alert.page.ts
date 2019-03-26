import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
	selector: 'app-alert',
	templateUrl: './alert.page.html',
	styleUrls: [ './alert.page.scss' ]
})
export class AlertPage implements OnInit {
	miTitulo: string;
	constructor(private alertCtrl: AlertController) {}

	ngOnInit() {}

	async presentAlert() {
		const alert = await this.alertCtrl.create({
			header: 'Confirm!',
			message: 'Message <strong>text</strong>!!!',
			buttons: [
				{
					text: 'Cancel',
					role: 'cancel',
					cssClass: 'secondary',
					handler: (blah) => {
						console.log('Confirm Cancel: blah');
					}
				},
				{
					text: 'Okay',
					handler: () => {
						console.log('Confirm Okay');
					}
				}
			]
		});

		await alert.present();
	}

	async presentPrompt() {
		const alert = await this.alertCtrl.create({
			header: 'Nuevo titulo de pagina',
			message: 'Ingrese el nuevo titulo.',
			inputs: [
				{
					name: 'titulo',
					type: 'text',
					placeholder: this.miTitulo
				}
			],
			buttons: [
				{
					text: 'Cancel',
					role: 'cancel',
					cssClass: 'secondary',
					handler: (blah) => {
						console.log('Confirm Cancel: blah');
					}
				},
				{
					text: 'Okay',
					handler: (data) => {
						this.miTitulo = data.titulo;
						console.log('Confirm Okay');
					}
				}
			]
		});

		await alert.present();
	}
}
