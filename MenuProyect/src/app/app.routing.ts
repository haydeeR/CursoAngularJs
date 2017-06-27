import {Routes, RouterModule} from '@angular/router';

import {InicioComponent} from './app.inicio.component';
import {NosotrosComponent} from './app.nosotros.component';
import {TiendaComponent} from './app.tienda.component';
import {EmpleadoComponent} from  './empleado/empleado.component';
import {ContactoComponent} from './contacto/contacto.component';

const APP_ROUTE:Routes = [
    {path:'inicio', component: InicioComponent},
    {path:'nosotros', component: NosotrosComponent},
    {path:'tienda', component: TiendaComponent},
    {path:'empleado/:id', component: EmpleadoComponent},
    {path:'contacto', component: ContactoComponent}
];

export const routing = RouterModule.forRoot(APP_ROUTE);