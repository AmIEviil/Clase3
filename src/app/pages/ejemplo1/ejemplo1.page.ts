import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
@Component({
  selector: 'app-ejemplo1',
  templateUrl: './ejemplo1.page.html',
  styleUrls: ['./ejemplo1.page.scss'],
})
export class Ejemplo1Page implements OnInit {

  constructor(private router:Router, private alertController: AlertController) { }

  ngOnInit() {
    this.listar();
  }
  //Mensaje de alerta de ejemplo

  async presentAlert() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Alert',
      subHeader: 'Subtitle',
      message: 'This is an alert message.',
      buttons: ['OK']
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }
  //Mensaje de alerta para eliminar
  async AlertaConfirmarEliminar(rut: String) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Eliminar!',
      message: 'Desea Eliminar el rut <strong>' + rut + '</strong> ?!',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Eliminar',
          handler: () => {
            console.log('Confirm Okay');
            this.eliminar(rut);
          }
        }
      ]
    });

    await alert.present();
  }

  lista_personas = [
    {
      rut: 1,
      nombre: "Juan",
      edad: 33

    }, {
      rut: 2,
      nombre: "Pepe",
      edad: 21
    }, {
      rut: 3,
      nombre: "Alonso",
      edad: 56
    }];


  //Metodos
  eliminar(rut: String) {
    alert('Selecciono Eliminar: ' + rut);
    var datos = localStorage.getItem('misdatos');

    datos = datos.replace('[', '');
    datos = datos.replace(']', '');
    datos = datos.split('},{').join('};{');
    //alert(datos);
    var per;
    var lista_temporal = new Array();
    var arreglo_tempo = datos.split(";");
    for (let index = 0; index < arreglo_tempo.length; index++) {
      var registro = arreglo_tempo[index];
      var lapersona = JSON.parse(registro);
      per = {
        rut: lapersona.rut,
        nombre: lapersona.nombre,
        edad: lapersona.edad
      };
      if(lapersona.rut != rut){
        lista_temporal.push(per);  
      }
    }
    this.lista_personas = lista_temporal;
    localStorage.setItem('misdatos',JSON.stringify(lista_temporal));
  }

  actualizar(rut: String) {
    alert('Selecciono Actualizar: ' + rut);
    this.router.navigate(['/ejemplo2',rut]);
  }
  listar() {
    var datos = localStorage.getItem('misdatos');

    datos = datos.replace('[', '');
    datos = datos.replace(']', '');
    datos = datos.split('},{').join('};{');
    //alert(datos);
    var per;
    var lista_temporal = new Array();
    var arreglo_tempo = datos.split(";");
    for (let index = 0; index < arreglo_tempo.length; index++) {
      var registro = arreglo_tempo[index];
      var lapersona = JSON.parse(registro);
      per = {
        rut: lapersona.rut,
        nombre: lapersona.nombre
      };
      lista_temporal.push(per);
    }
    this.lista_personas = lista_temporal;
  }

}
