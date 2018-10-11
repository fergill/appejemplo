import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { GaleriaPage } from '../galeria/galeria';
import { ModalPage } from '../modal/modal';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public modalCtrl: ModalController) {

  }

  primeraFuncion(){
    console.log('accedo');
    this.navCtrl.push(GaleriaPage);
  }

  presentModal(){
    const modal = this.modalCtrl.create(ModalPage);
    modal.present();
  }

  tareas:Array<any>=[
    {titulo: 'Compras',
     color: 'blue',
     logo: 'apple'
    },
    {titulo: 'Hospital',
     color: 'red',
     logo: 'angular'
    }
  ];

}
