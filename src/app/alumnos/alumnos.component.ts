import { Component, OnInit } from '@angular/core';
import { ApiclienteService } from '../services/apicliente.service';
import { Response } from '../models/response';
//import { DialogClienteComponent } from './dialog/dialogcliente.component';
import { MatDialog } from '@angular/material/dialog';
import { DialogAlumnosComponent } from './dialogAlm/dialogalumnos.component';
import { Alumnos } from '../models/alumnos';
import { DialogBorrarComponent } from './dialogBorrar/dialogBorrar.component';

@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrls: ['./alumnos.component.scss']
})
export class AlumnosComponent implements OnInit {
  public lst: any[];
  public columnas: string[] = ['codigoAlumno', "Nombre", "actions"];
  width: '400';

  constructor(
    private apiCliente: ApiclienteService,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.getAlumnos();
  }
  /*
    getAlumnos() {
      this.apiCliente.getClientes().subscribe(response => {
        this.lst = response.data;
  
        console.log(response);
      });
  
    }
  
    */
  getAlumnos() {
    this.apiCliente.getAlmnos().subscribe(response => {
      this.lst = response.data;

      console.log(response);
    });

  }

  openAddAlumno() {
    const dialogRef = this.dialog.open(DialogAlumnosComponent, {
      width: this.width
    });
  }

  openEdit(alumno: Alumnos) {
    alumno.tiposolicitud=1;
    this.apiCliente.editA(alumno).subscribe(response => {
      this.lst = response.data;
      console.log(response);
    });


  }

  borrarAlumno(alumno: Alumnos) {
    var Alumno: Alumnos = {
      tiposolicitud: 2,
      codigoAlumno:alumno.codigoAlumno,
      nombres: alumno.nombres,
      apellidos: alumno.apellidos,

      fechaIngreso: `${alumno.fechaIngreso}T00:00:00` ,
      carrera:alumno.carrera,
      estadoAlumno: alumno.estadoAlumno,
                  
  };
    
    const dialogRef = this.dialog.open(DialogBorrarComponent, {
      width: this.width
    });
    
    
    dialogRef.afterClosed().subscribe(result => {
     // alumno.tiposolicitud=2;
      this.apiCliente.borrarA(Alumno).subscribe((response => {
        this.lst = response.data;
  
        console.log(response); 
      }));

      this.getAlumnos();
    })


  }


}
