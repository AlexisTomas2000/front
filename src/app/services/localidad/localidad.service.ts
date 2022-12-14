import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Localidad } from "../../models/localidad";

@Injectable({
  providedIn: 'root'
})
export class LocalidadService {

  URL_API = 'http://localhost:3000/api/v1/localidad';

  selectedLocalidad: Localidad = {
    idLocalidad: '',
    codPostal: '',
    nombre: ''
  };

  localidades: Localidad[];

  constructor(private http: HttpClient) {
  }

  getAllLocalidad() {
    return this.http.get<Localidad[]>(this.URL_API);
  }

  createLocalidad(localidad: Localidad) {
    return this.http.post(this.URL_API, localidad);
  }

  updateLocalidad(localidad: Localidad) {
    return this.http.put(`${this.URL_API}/${localidad._id}`, localidad)
  }

  deletelocalidad(_id:string) {
    return this.http.delete(`${this.URL_API}/${_id}`)
  }
}
