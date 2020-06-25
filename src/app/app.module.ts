import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { DialogClienteComponent } from './cliente/dialog/dialogcliente.component';
import { DialogAlumnosComponent } from './alumnos/dialogAlm/dialogalumnos.component';
import { HomeComponent } from './home/home.component';
import { ClienteComponent } from './cliente/cliente.component';
import { AlumnosComponent } from './alumnos/alumnos.component';
import { HttpClientModule } from '@angular/common/http';
import { MatTableModule } from '@angular/material/table';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { FormsModule } from '@angular/forms';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {DialogBorrarComponent } from './alumnos/dialogBorrar/dialogBorrar.component';





@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ClienteComponent,
    AlumnosComponent,
    DialogClienteComponent,
    DialogAlumnosComponent,
    DialogBorrarComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatTableModule,
    MatInputModule,
    MatButtonModule,
    MatDialogModule,
    MatSnackBarModule,
    FormsModule,
    MatDatepickerModule,
    

    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
