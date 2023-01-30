import { Component, Input, ViewChild, ElementRef  } from '@angular/core';
import { Clasificado } from './interface/clasificado.interface';
import { ClasificadosService }  from './service/clasificados.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  @ViewChild('txtBuscar') txtBuscar!: ElementRef<HTMLInputElement>;

  @Input() clasi: Clasificado = {
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

  esBusqueda: Boolean = new Boolean(false);

  constructor ( private clasificadoService : ClasificadosService) {}

  mostrar(){
    this.esBusqueda = false;
  }

  ocultar(){
    this.esBusqueda = true;
  }

  get  clasificados(){
    return this.clasificadoService.clasificados;
  }

  registrarOEditar() {
    if (this.clasi.id === 0) {
      this.clasi.id = this.clasificadoService.clasificados.length + 1;
      this.clasificadoService.registrarEditarClasificado( this.clasi );
      console.log(this.clasi);
    };
    this.clasi = {
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
    this.esBusqueda = false;
  }

  Editar( clasificado: Clasificado ){
    this.clasi = clasificado;
  }

  borrar(){
    this.clasificadoService.borrar(this.clasi);
    this.clasi = {
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
  }

  buscar() {
    const valor = this.txtBuscar.nativeElement.value;
    this.txtBuscar.nativeElement.value = '';
    this.clasificadoService.buscarClasificadoCategoria( valor );
  };
}
