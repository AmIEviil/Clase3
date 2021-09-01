import { Component } from '@angular/core';
//Importar el componente de manejo formularios
import { FormControl,FormGroup } from '@angular/forms';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  valor :String="Hola Mundo";
  //Permite crear objetos que se pueden utilizar en nuestra pagina TypeScript
  constructor() {}
    //Para definir una variable se ocupa 
    //nombre :Tipo="HolaMundo";
    //Pueden ser String, Boolean, Any , Array
    //rut:String="20280074-2";
    //nombreCompleto: String;
    //edad:Number;
//Controles de formularios asociados a la etiqueta <ion-input>
// <ion-input [formControl]="elRut"> </ion-input>
persona = new FormGroup({
  elRut : new FormControl(''),
  elNombreCompleto : new FormControl(''),
  elEdad : new FormControl('')
})
//Creacion de arreglo
lista_persona = new Array ();
perso:any;
//creacion de un metodo
grabar(){
    //alert(this.persona.controls.elRut.value);
    //console.log(this.persona.value);
    this.perso = {
        rut:this.persona.controls.elRut.value,
        nombre:this.persona.controls.elNombreCompleto.value,
        edad:this.persona.controls.elEdad.value
    };
    //console.log(this.perso);
    this.lista_persona.push(this.perso);
    var datos = this.lista_persona;
    localStorage.setItem('misdatos',JSON.stringify(datos));
    alert("Grabo");
}
eliminar(){}

listar(){}

}
