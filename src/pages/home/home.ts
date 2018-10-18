import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { GaleriaPage } from '../galeria/galeria';
import { ModalPage } from '../modal/modal';
import { AngularFireAuth } from '@angular/fire/auth'


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {

  public user={
    email:'',
    pass:''
  };

  constructor(public navCtrl: NavController, 
              public modalCtrl: ModalController,
              public autFire:AngularFireAuth) {

  };

  acceso(){
    this.autFire.auth.signInWithEmailAndPassword(this.user.email,this.user.pass).then(() => {
      this.navCtrl.setRoot(GaleriaPage);
    }).catch(error=>{
      alert(error);
      console.log('error');
    });
  }

  registro(){
    alert(this.user.pass);
    alert(this.user.email);
    this.autFire.auth.createUserWithEmailAndPassword(this.user.email,this.user.pass).then(()=>{
      alert('usuario dado de alta');
    }).catch(error => {
      alert(error);
    })
  }

  



  primeraFuncion(){
    console.log('accedo');
    this.navCtrl.push(GaleriaPage);
  };

  presentModal(){
    const modal = this.modalCtrl.create(ModalPage);
    modal.present();
  };

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
