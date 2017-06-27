import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { Empleado} from '../empleado';
import { EmpleadoService} from '../empleado.service';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.css']
})
export class EmpleadoComponent implements OnInit {
  empleado: Empleado;

  constructor(private empleadoService: EmpleadoService,
    private route:ActivatedRoute) { }

  ngOnInit() {
    let id:number = this.route.snapshot.params["id"];
    console.log("empleado"+id);
    this.empleadoService.getUser(id).then(respuesta => this.empleado = respuesta);
  }

}
