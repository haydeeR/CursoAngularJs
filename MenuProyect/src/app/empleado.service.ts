import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class EmpleadoService {

    constructor(private http:Http){}

    getList(){
        return this.http.get('https://jsonplaceholder.typicode.com/users')
        .toPromise()
        .then(respuesta => respuesta.json())
        .catch(this.error);
    }

    getUser(id:number){
        return this.http.get("https://jsonplaceholder.typicode.com/users/"+id)
        .toPromise()
        .then(respuesta => respuesta.json())
        .catch(this.error);
    }

    error(){
        
    }
}