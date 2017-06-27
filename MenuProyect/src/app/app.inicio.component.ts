import {Component} from '@angular/core';

@Component({
    selector: 'inicio',
    templateUrl: './app.inicio.component.html'
})
export class InicioComponent{
    temp:number = 20;
    constructor(){}

    guardaTemp(){
        localStorage.setItem("temperatura",this.temp.toString());
    }

    obtenTemp(){
        let temp = localStorage.getItem("temperatura");
        console.log(temp);
    }
}
