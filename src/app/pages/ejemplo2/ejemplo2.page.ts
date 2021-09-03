import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-ejemplo2',
  templateUrl: './ejemplo2.page.html',
  styleUrls: ['./ejemplo2.page.scss'],
})
export class Ejemplo2Page implements OnInit {

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    var valor = this.activatedRoute.snapshot.paramMap.get('valor');
    //alert('Recupero parametro: ' + valor);
    this.buscar(valor);
  }
  persona = new FormGroup({
    elRut: new FormControl(''),
    elNombreCompleto: new FormControl(''),
    elEdad: new FormControl('')
  });
  perso:any={
    rut:''
  };

  buscar(rut: String) {
    var datos = localStorage.getItem('misdatos');
    datos = datos.replace('[', '');
    datos = datos.replace(']', '');
    datos = datos.split('},{').join('};{');
    var arreglo_tempo = datos.split(";");
    for (let index = 0; index < arreglo_tempo.length; index++) {
      var registro = arreglo_tempo[index];
      var lapersona = JSON.parse(registro);
      if (lapersona.rut == rut) {
        this.perso={
          rut: lapersona.rut,
          //nombre:lapersona.nombre,
          //edad:lapersona.edad
        };
        this.persona.controls.elNombreCompleto.setValue(lapersona.nombre);
      }
    }

  }
}
