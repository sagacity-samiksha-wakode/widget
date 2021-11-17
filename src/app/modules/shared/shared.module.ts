import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DialogModule } from 'primeng/dialog';
import { MaterialModule } from 'src/app/materials/material.module';
import { PlaceHolderComponent } from '../shared/place-holder/place-holder.component';
import { DialogComponent } from './dialog/dialog.component';

@NgModule({
  declarations: [
    PlaceHolderComponent,
    DialogComponent
  ],
  imports: [
    CommonModule,
    DialogModule,
    MaterialModule,
    // SharedAppModule
  ],
  exports:[
    PlaceHolderComponent,
    DialogComponent
  ]
})
export class SharedAppModule { }
