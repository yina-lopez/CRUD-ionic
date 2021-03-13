import { Component, OnInit } from '@angular/core';

import { NavController, AlertController } from '@ionic/angular'

@Component({
  selector: 'app-saludo',
  templateUrl: './saludo.page.html',
  styleUrls: ['./saludo.page.scss'],
})
export class SaludoPage implements OnInit {

  saludo = null;

 
  constructor(public alertController: AlertController) { }
  
 async saludar(){
    if (this.saludo == "" || this.saludo == null) {
      const alerta = await this.alertController.create({
        cssClass: 'my-custom-class',
        header: 'ERROR',
        message: "Ingrese un nombre ",
        buttons: [
          {
            text: 'OK',
            role: 'cancel',
            cssClass: 'secondary',
            handler: () => {
              console.log('OK');
            }
          }        
        ]
      });
      this.saludo="",

      await alerta.present();
    } else {
      const alert = await this.alertController.create({
        cssClass: 'my-custom-class',
        header: 'SALUDO',
        message: "Saludos " + this.saludo,
        buttons: [
          {
            text: 'Bienvenido',
            role: 'cancel',
            cssClass: 'secondary',
            handler: () => {
              console.log('Confirm Cancel');
            }
          }        
        ]
      });
      this.saludo="",

      await alert.present();
    }


  }

  ngOnInit() {
  }

}
