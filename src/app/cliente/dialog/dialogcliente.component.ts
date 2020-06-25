import {Component} from '@angular/core'
import { MatDialogRef } from '@angular/material/dialog';
import { ApiclienteService } from 'src/app/services/apicliente.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Cliente } from 'src/app/models/cliente';
import { Alumnos } from 'src/app/models/alumnos';


@Component({
    templateUrl:'dialogcliente.component.html'
})

export class DialogClienteComponent{
    constructor(
        public dialogRef:MatDialogRef<DialogClienteComponent>,
        public apiCliente: ApiclienteService,
        public snackBar: MatSnackBar,
    ) {}
    close(){
        this.dialogRef.close();
    }
    addCliente(){
        
        const cliente: Cliente = {nombre:'patito'};
        this.apiCliente.add(cliente).subscribe(response => {
            if(response.exito == 1){
                this.dialogRef.close();
                this.snackBar.open('cliente insertado con éxito','',{duration:2000})
            }else{
                this.dialogRef.close();
                this.snackBar.open('cliente no pudo ser cargado','',{duration:2000})
            }
        });
    }
    
   
}

