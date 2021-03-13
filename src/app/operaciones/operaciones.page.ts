import { Component, OnInit } from '@angular/core';
import { NavController, AlertController } from '@ionic/angular'

@Component({
  selector: 'app-operaciones',
  templateUrl: './operaciones.page.html',
  styleUrls: ['./operaciones.page.scss'],
})
export class OperacionesPage implements OnInit {

  numero1 = null
  operacion = null
  numero2 = null
  resultado = null
  constructor(public alertController: AlertController) { }

  calcular(){
    if ( this.operacion == "+"){
      this.resultado = parseInt(this.numero1) + parseInt(this.numero2)
    }
    if ( this.operacion == "-"){
      this.resultado = parseInt(this.numero1) - parseInt(this.numero2)
    }
    if ( this.operacion == "*"){
      this.resultado = parseInt(this.numero1) * parseInt(this.numero2)
    }
    if ( this.operacion == "/"){
      this.resultado = parseInt(this.numero1) / parseInt(this.numero2)
    }
  }
  ngOnInit() {
  }

}
