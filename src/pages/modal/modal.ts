import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { TareaModelo } from  '../../servicios/TareaModelo';


/**
 * Generated class for the ModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-modal',
  templateUrl: 'modal.html',
  
})
export class ModalPage {
  viewCtrl: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public fernanda: ViewController) {
    if(this.navParams.get('tarea')){
      this.tarea=this.navParams.get('tarea');
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalPage');
  }

  cierraModal(){
    this.fernanda.dismiss();
  }

  public tarea = new TareaModelo('', '');

  enviar(){
    this.fernanda.dismiss(this.tarea);
  }

}
