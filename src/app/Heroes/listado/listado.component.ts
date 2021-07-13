import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent {

  public heroes: string[] = ['Spidermna', 'IronMan', 'Hulk'];
  public deletedHeroe: string='';
 
  public borrarHeroe() {
    let borrado = false;
    this.deletedHeroe = this.heroes.shift() || '';
  }

}
