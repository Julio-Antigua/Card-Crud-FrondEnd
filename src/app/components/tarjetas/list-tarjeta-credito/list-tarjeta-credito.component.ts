import { Component, OnInit } from '@angular/core';
import { TarjetaService } from '../../../services/tarjeta.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-list-tarjeta-credito',
  templateUrl: './list-tarjeta-credito.component.html',
  styleUrls: ['./list-tarjeta-credito.component.css']
})
export class ListTarjetaCreditoComponent implements OnInit {

  constructor(public tarjetaService: TarjetaService, public toast: ToastrService) { }

  ngOnInit(): void {
      this.tarjetaService.obtenerTarjeta();
  }

  eliminar(id: number){
    if(confirm('Esta seguro de eliminar este usuario?')){
      this.tarjetaService.eliminarTarjeta(id).subscribe(data=>{
        this.toast.error('Resgistro Eliminado','La tarjeta fue eliminada');
        this.tarjetaService.obtenerTarjeta();
      });
    }
  }

  editar(tarjeta: any){
    this.tarjetaService.actualizar(tarjeta);
  }

}
