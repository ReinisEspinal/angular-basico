import { Component } from "@angular/core";

@Component(
    {
        selector:'app-heroe',
        templateUrl:'heroe.component.html'
    }
)
export class HeroeComponent
{
    public nombre : string ='Reinis';
    public edad: number = 25;
    
    get nombreCapitalizado(): string{
        return this.nombre.toUpperCase();
    }

    public obtenerNombre():string{
        return `${this.nombre} - ${this.edad}`;
    }

    public cambiarNombre():string{
        return this.nombre="SpiderMan";
    }

    public cambiarEdad(): number{
        return this.edad=35;
    }
}