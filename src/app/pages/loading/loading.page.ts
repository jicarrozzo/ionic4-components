import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Component({
	selector: 'app-loading',
	templateUrl: './loading.page.html',
	styleUrls: [ './loading.page.scss' ]
})
export class LoadingPage implements OnInit {
	loading: HTMLIonLoadingElement;

	constructor(private loadingCtrl: LoadingController) {}

	async ngOnInit() {
		this.presentLoading('cargando...');
		setTimeout(() => {
			this.loading.dismiss();
		}, 1500);
	}

	async presentLoading(message: string) {
		this.loading = await this.loadingCtrl.create({
			message
		});
		this.loading.onDidDismiss().then(({ role, data }) => {
			console.log(role, data);
		});

		return await this.loading.present();
	}
}
