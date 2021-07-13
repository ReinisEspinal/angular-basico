import { Component } from '@angular/core'


@Component({
    selector: 'app-contador',
    template: `
    <h1>{{ titulo }}</h1>
    <h3>  La base es: <strong>{{ base }}</strong></h3>

    <!--Los eventos son en paréntesis-->
    <button (click)="numero = numero + base">+{{base}}</button>
    <span>{{ numero }}</span>
    <button (click)="acumular(-base)">-{{base}}</button>
    `
})
export class ContadorComponent {
    public titulo: string = 'Contador App';
    public numero: number = 10;
    public base  : number = 5;
  
    acumular(valor: number,): number {
      return this.numero += valor;
    }
}