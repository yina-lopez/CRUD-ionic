import { Component } from '@angular/core';
import { NavController, AlertController } from '@ionic/angular'
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {

  nombre = null;
  apellido = null;
  celular = null;
  email = null;

  usuarios = [];

  constructor(public alertController: AlertController){}


  guardarDatos(){
    //agregando datos en memoria
    this.usuarios.push({
      nombre: this.nombre,
      apellido: this.apellido,
      celular: this.celular,
      email: this.email
    })
    //limpiardatos
    this.nombre = "",
    this.apellido = "",
    this.celular = "",
    this.email = ""
  }
  
  borrar(usuario){
    var dato = this.usuarios.indexOf(usuario)
    this.usuarios.splice(dato,1);  

    
  }
// editar datos
  async editar(datos) {
    //crear una ventana alert, para pedir los nuevos registros de la persona que se ha seleccionado
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'editar',
      inputs: [
        {
          name: 'nombre',
          type: 'text',
          placeholder: 'nombre',
          value: this.usuarios[datos].nombre
        },
        {
          name: 'apellido',
          type: 'text',
          placeholder: 'apellido',
          value: this.usuarios[datos].apellido
        },
        {
          name: 'celular',
          type: 'text',
          placeholder: 'celular',
          value: this.usuarios[datos].celular
        },
        {
          name: 'email',
          type: 'text',
          placeholder: 'email',
          value: this.usuarios[datos].email
        },
      ],
      buttons: [
        {
          text: 'cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, 
        { text: 'editar', handler: data => {
          //console.log(this.usuarios[i]);
          
          this.usuarios[datos].nombre = data.nombre;
          this.usuarios[datos].apellido = data.apellido;
          this.usuarios[datos].celular = data.celular;
          this.usuarios[datos].email = data.email;  
          
        }
        }
        
      ]
    });

    await alert.present();
  }



}