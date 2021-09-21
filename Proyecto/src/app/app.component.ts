import { Component } from '@angular/core';
import { CategoriaService } from './services/categoria.service';
import { ProductosService } from './services/productos.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[CategoriaService,ProductosService]

})
export class AppComponent {

  categorias :any;
  productos: any;

  constructor(
    private _categoriaService:CategoriaService,
    private _productoService:ProductosService) {

      this.getCategoria()
  }

getCategoria(){
  this._categoriaService.getCategoria().subscribe(
    respuesta=>{
      this.categorias = JSON.parse(JSON.stringify(respuesta));
      console.log(this.categorias);

    },
    error=>{
      console.error(error)
    });
}

getProductos(){
  this._productoService.getProductos(5).subscribe(
    respuesta=>{
      this.productos = JSON.parse(JSON.stringify(respuesta));
      console.log(this.productos);

    },
    error=>{
      console.error(error)
    });
}


}


