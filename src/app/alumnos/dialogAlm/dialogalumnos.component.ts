import {Component} from '@angular/core'
import { MatDialogRef } from '@angular/material/dialog';
import { ApiclienteService } from 'src/app/services/apicliente.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Alumnos } from 'src/app/models/alumnos';


@Component({
    templateUrl:'dialogalumnos.component.html'
})

export class DialogAlumnosComponent{
    
    public nombres:string;
    public apellidos:string;
    
    public codAlumno:number;

    
    public fechaIngreso:Date;
    public outputtest: string;

        



    constructor(
        public dialogRef:MatDialogRef<DialogAlumnosComponent>,
        public apiAlumnos: ApiclienteService,
        public snackBar: MatSnackBar,
    ) {}
    close(){
        this.dialogRef.close();
    }
    addAlumno(){
        
        const Alumno: Alumnos = {
            tiposolicitud: 3,
            codigoAlumno:this.codAlumno,
            nombres: this.nombres,
            apellidos: this.apellidos,
            fechaIngreso: `${this.fechaIngreso}T00:00:00`, //'2011-07-25T00:00:00',
            carrera:1,
            estadoAlumno:'Activo'
                        
        };
        
        
        
            this.apiAlumnos.addA(Alumno).subscribe(response => {
            if(response.exito == 1){
                this.dialogRef.close();
                this.snackBar.open('Alumno insertado con éxito','',{duration:2000})
            }else{
                this.dialogRef.close();
                this.snackBar.open('Alumno no pudo ser cargado','',{duration:2000})
            }
            console.log(response);
        });
    }
    
   
}
