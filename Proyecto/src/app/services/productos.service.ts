import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UrlApi } from './apiserver.service';

@Injectable()
export class ProductosService {
  private url: string;
  /**
   *
   */
  constructor(private http: HttpClient) {
    this.url = UrlApi.Api.url;
  }

  getProductos(categoria:number) {
    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.get(this.url + 'producto/'+categoria, { headers: headers });
  }

}
