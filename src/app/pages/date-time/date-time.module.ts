import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { DateTimePage } from './date-time.page';
import { ComponentsModule } from 'src/app/components/components.module';

const routes: Routes = [
	{
		path: '',
		component: DateTimePage
	}
];

@NgModule({
	imports: [ CommonModule, FormsModule, IonicModule, ComponentsModule, RouterModule.forChild(routes) ],
	declarations: [ DateTimePage ]
})
export class DateTimePageModule {}
