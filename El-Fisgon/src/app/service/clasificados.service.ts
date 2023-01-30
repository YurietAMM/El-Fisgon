import { Injectable, Input } from '@angular/core';
import { Clasificado } from '../interface/clasificado.interface';

@Injectable({
  providedIn: 'root'
})
export class ClasificadosService {

  @Input() clasificadoBasic: Clasificado = {
    id: 0,
    fecha: '',
    tipo: '',
    descripcion: '',
    telefonos: '',
    nombreContacto: '',
    precio: 0,
    ciudad: '',
    direccion: '',
    condicion: '',
    categoria: ''
  }

  @Input() buscar: Clasificado[] = [];

  @Input() clasiBuscado: Clasificado = {
    id: 0,
    fecha: '',
    tipo: '',
    descripcion: '',
    telefonos: '',
    nombreContacto: '',
    precio: 0,
    ciudad: '',
    direccion: '',
    condicion: '',
    categoria: ''
  }

  private _clasificados: Clasificado[] = [
    {id: 1, fecha: '12 de noviembre', tipo: 'venta',
    descripcion: 'Se vende auto deportivo azul',
    telefonos: '603300223456', nombreContacto: 'Pedro Pechuga',
    precio: 3000000, ciudad: 'Cali', direccion: 'Calle 4 # 9',
    condicion: 'usado', categoria: 'vehiculo'}
  ];

  registrarEditarClasificado( clas: Clasificado ) {
    this._clasificados.push( clas );
  }

  get clasificados(): Clasificado[] {
    if(this.buscar.length == 0){
    return [...this._clasificados];
    } else {
      return this.buscar;
    }
  }

  set SetSelected( select: Clasificado ){
    select = this.clasificadoBasic;
  }

  get GetSelected(){
    return this.clasificadoBasic;
  }

  borrar(baja: Clasificado){
    this._clasificados = this._clasificados.filter(x => x != baja);
  }

  buscarClasificadoCategoria(termino: string = ''){
// busca si esta vacio el contenido de busqueda
    if(termino.trim().length === 0){return;}
    termino = termino.trim().toLocaleLowerCase();

    this.buscar = this._clasificados.filter(x => x.categoria == termino);
  }

  constructor() { }
}
