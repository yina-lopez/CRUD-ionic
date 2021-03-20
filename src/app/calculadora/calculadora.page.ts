import { Component, OnInit } from '@angular/core';
import { NavController, AlertController } from '@ionic/angular'

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.page.html',
  styleUrls: ['./calculadora.page.scss'],
})
export class CalculadoraPage implements OnInit {


  constructor(public alertController: AlertController) { }

 
  ngOnInit() {
  }

}
