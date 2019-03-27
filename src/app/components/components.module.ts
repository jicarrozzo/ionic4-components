import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { IonicModule } from '@ionic/angular';
import { MenuComponent } from './menu/menu.component';
import { RouterModule } from '@angular/router';
import { PopInfoComponent } from './pop-info/pop-info.component';

@NgModule({
	declarations: [ HeaderComponent, MenuComponent, PopInfoComponent ],
	exports: [ HeaderComponent, MenuComponent, PopInfoComponent ],
	imports: [ CommonModule, IonicModule, RouterModule ]
})
export class ComponentsModule {}
