import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { TarjetaCredito } from '../models/tarjetaCredito';

@Injectable({
  providedIn: 'root'
})
export class TarjetaService {

  myAppUrl='https://localhost:5001/';
  myApiUrl='api/TarjetaCredito/';
  list?: TarjetaCredito[];
  private actualizarFormulario = new BehaviorSubject<TarjetaCredito>({} as any);

  constructor(private http: HttpClient) { }

  guardarTarjeta(tarjeta: TarjetaCredito): Observable<string>{
    // const encryptedCard = btoa(JSON.stringify(tarjeta));
    console.warn(`${this.myAppUrl}${this.myApiUrl}`, tarjeta)
   return this.http.post<string>(`${this.myAppUrl}${this.myApiUrl}`, tarjeta);
  }

  eliminarTarjeta(id: number): Observable<TarjetaCredito>{
    return this.http.delete<TarjetaCredito>(this.myAppUrl + this.myApiUrl + id);
  }

  obtenerTarjeta(){
    this.http.get(this.myAppUrl+this.myApiUrl).toPromise().then(data=>{
      this.list = data as TarjetaCredito[];
    });
  }

  actualizar(tarjeta: any){
    this.actualizarFormulario.next(tarjeta);
  }

  actualizarTarjeta(id: number,tarjeta: TarjetaCredito): Observable<TarjetaCredito>{
    console.warn(this.myApiUrl, id);
    return this.http.put<TarjetaCredito>(this.myAppUrl + this.myApiUrl + id, tarjeta);
  }

  obtenerTarjeta$(): Observable<TarjetaCredito>{
    return this.actualizarFormulario.asObservable();
  }

}
