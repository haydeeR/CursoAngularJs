import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { Router} from '@angular/router';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})

export class ContactoComponent implements OnInit {

  formulario:FormGroup;
  nombre:string;
  email:string;

  constructor(private route:Router) {
    this.formulario = new FormGroup({
      nombre:  new FormControl('',[
        Validators.required
       // Validators.pattern("^,{4,}$")
      ]),
      email: new FormControl('',[
        Validators.required
      ])
    })
   }

   enviarSubmit(form:FormGroup)
   {
     this.nombre = form.controls['nombre'].value;
     this.email = form.controls['email'].value;
   }

  ngOnInit() {
  }

}
