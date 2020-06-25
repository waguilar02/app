import {Component} from '@angular/core'
import { MatDialogRef } from '@angular/material/dialog';
import { ApiclienteService } from 'src/app/services/apicliente.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Alumnos } from 'src/app/models/alumnos';

@Component({
    templateUrl:'dialogBorrar.component.html'
})

export class DialogBorrarComponent{



    constructor(
        public dialogRef:MatDialogRef<DialogBorrarComponent>,
        public apiAlumnos: ApiclienteService,
        public snackBar: MatSnackBar,
    ) {}
    close(){
        this.dialogRef.close();
    }
    borrar(){
        
       //borrarAlumno();

       
    }
    
    



}