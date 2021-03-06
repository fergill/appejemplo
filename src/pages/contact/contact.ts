import { Component } from '@angular/core';
import { NavController, Platform } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { Geolocation } from '@ionic-native/geolocation';
 import {
  GoogleMaps,
  GoogleMap,
  GoogleMapsEvent,
  GoogleMapOptions,
  MarkerOptions,
  Marker,
  Environment,
  LatLng
} from '@ionic-native/google-maps';
import { getPromise } from '@ionic-native/core';


@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  public base64Image:string;
  muestraFoto:any;
  public latitude:number;
  public longitude: number;
  map: GoogleMap;
  constructor(public navCtrl: NavController, private camera: Camera, private geolocation: Geolocation, public plat:Platform, public goMaps:GoogleMaps ) {

  }


  mostrarFoto(){
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
      saveToPhotoAlbum:false
      }

      this.camera.getPicture(options).then((imageData) => {
        //
        //
        this.muestraFoto = 'data:image/jpeg;base64,' + imageData;
      }, (err) => {
  
      });
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

  ionViewDidLoad() {
    this.loadMap();
  }

  loadMap() {

    this.plat.ready().then(()=> {
      this.map = this.goMaps.create('map_canvas');
      this.map.one(GoogleMapsEvent.MAP_READY).then((data:any) => {
        this.geolocation.getCurrentPosition().then(resp=>{
         
          let posicionPropia:LatLng = new LatLng(resp.coords.latitude, resp.coords.longitude);
          this.map.animateCamera({target:posicionPropia, zoom:15})
          this.map.addMarker({
            position:posicionPropia,
            title:'Mis coordenadas'
          });
        });
      });
    })
  }
//     // This code is necessary for browser
//     Environment.setEnv({
//       'API_KEY_FOR_BROWSER_RELEASE': 'AIzaSyBhbtS94cGY2Ihrtb8v_DQt2ivYgear-h4',
//       'API_KEY_FOR_BROWSER_DEBUG': 'AIzaSyBhbtS94cGY2Ihrtb8v_DQt2ivYgear-h4'
//     });


    

//     this.map.one(GoogleMapsEvent.MAP_READY).then(() => {
//       this.getPosition();
//     })
//     .catch(error => {
//       console.log(error);
//     });


//   }

//   getPosition(): void{
//     this.map.getMyLocation()
//     .then(response => {
//       this.map.moveCamera({
//         target: response.latLng
//       });
//       this.map.addMarker({
        
//     title: 'Ionic',
//     icon: 'blue',
//     animation: 'DROP',
//     position: 
//       response.latLng
    
//   });
// })
//     .catch(error => {
//       console.log(error);
//     });
//   }

}


