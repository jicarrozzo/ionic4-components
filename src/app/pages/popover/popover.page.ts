import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { PopInfoComponent } from '../../components/pop-info/pop-info.component';

@Component({
	selector: 'app-popover',
	templateUrl: './popover.page.html',
	styleUrls: [ './popover.page.scss' ]
})
export class PopoverPage implements OnInit {
	constructor(private popoverCtrl: PopoverController) {}

	ngOnInit() {}

	async showPop(ev) {
		const popover = await this.popoverCtrl.create({
			component: PopInfoComponent,
			event: ev,
			mode: 'ios',
			backdropDismiss: false
			//translucent: true
		});
		await popover.present();

		//const { data } = await popover.onWillDismiss();
		const { data } = await popover.onDidDismiss();

		console.log(data);
	}
}
