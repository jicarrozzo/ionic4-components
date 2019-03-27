import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PopoverPage } from './popover.page';
import { PopInfoComponent } from '../../components/pop-info/pop-info.component';
import { ComponentsModule } from '../../components/components.module';

const routes: Routes = [
	{
		path: '',
		component: PopoverPage
	}
];

@NgModule({
	entryComponents: [ PopInfoComponent ],
	imports: [ CommonModule, FormsModule, IonicModule, ComponentsModule, RouterModule.forChild(routes) ],
	declarations: [ PopoverPage ]
})
export class PopoverPageModule {}
