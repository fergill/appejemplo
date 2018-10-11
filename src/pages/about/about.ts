import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import {TareaModelo} from '../../servicios/TareaModelo';
import {ModalPage} from '../modal/modal';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html',
  
})
export class AboutPage {

  public tareas:TareaModelo[];
  initializeTareas: any;

  constructor(public navCtrl: NavController, public modCtrl: ModalController) {

  }
f
  ionViewDidLoad() {
    this.tareas = [
      new TareaModelo('Compras', '', false),
      new TareaModelo('Deporte', '', true),
      new TareaModelo('Trabajo', '', true),
      new TareaModelo('Médico', '', true),
      new TareaModelo('Comida', '', true),
      new TareaModelo('Ejercicio', '', true)
    ]
  }



  nuevaTarea(){
    const modal = this.modCtrl.create(ModalPage);
    modal.present();
    modal.onDidDismiss(tarea => {
      if(tarea){
        this.anadeTarea(tarea)
      }
    })
  }

  anadeTarea(tarea:TareaModelo){
    this.tareas.push(tarea)
  }
 
  getItems(ev: any) {
    // Reset items back to all of the items
    this.ionViewDidLoad();

    // set val to the value of the searchbar
    const val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.tareas = this.tareas.filter((tarea) => {
        return (tarea.descripcion.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }

  estilos(tarea:TareaModelo){
    let estilos;
    if(tarea.realizada){
      estilos={'font-family': 'fontawesome'};
    }

    return estilos;

  }

}
