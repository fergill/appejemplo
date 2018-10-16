import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { Geolocation } from '@ionic-native/geolocation';
 '@ionic-native/geolocation';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  public base64Image:string;
  public latitude:number;
  public longitude: number;
 
  constructor(public navCtrl: NavController, private camera: Camera, private geolocation: Geolocation ) {

  }

  realizaFoto(){
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      saveToPhotoAlbum:true
    }

    this.camera.getPicture(options).then((imageData) => {
      //
      //
      this.base64Image = 'data:image/jpeg;base64,' + imageData;
    }, (err) => {

    });

  }

  dameLocalizacion(){
    this.geolocation.getCurrentPosition().then((resp) => {
      
      this.latitude = resp.coords.latitude;
      this.longitude = resp.coords.longitude ;
     }).catch((error) => {
       console.log('Error getting location', error);
     });
     
     let watch = this.geolocation.watchPosition();
     watch.subscribe((data) => {
      // data can be a set of coordinates, or an error (if an error occurred).
      
     });

  }

}