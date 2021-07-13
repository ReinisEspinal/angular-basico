import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContadorComponent } from './Contador/contador.component';

@NgModule({
    declarations:[
        ContadorComponent
    ],
    exports:[ContadorComponent]
})

export class ContadorModule
{
    
}