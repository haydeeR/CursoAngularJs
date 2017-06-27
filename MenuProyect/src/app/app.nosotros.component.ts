import {Component, OnInit } from '@angular/core';
import {EmpleadoService} from './empleado.service';
import {Empleado} from './empleado';
import {Router} from '@angular/router';

@Component({
    selector: 'nosotros',
    templateUrl: './app.nosotros.component.html'
})
export class NosotrosComponent{
    empleados : Empleado[];
    constructor(private empleadoService:EmpleadoService,
                private router:Router){}

    ngOnInit(){
        this.empleadoService.getList()
        .then(respuesta => this.empleados = respuesta)
    }

    clickEmpleado(id:number){
        console.log(id);
        this.router.navigate(['empleado',id]);
    }
}