    import { HttpClient } from '@angular/common/http';
    import { Injectable } from '@angular/core';
    import { Storage } from '@ionic/storage';
    import { TareaModelo } from './TareaModelo';
    import { ModalPage } from '../pages/modal/modal';
    import { ModalController } from 'ionic-angular'


    @Injectable()
    
    export class ServiciotareaProvider {

     
    public tareas:TareaModelo[] = [];

    constructor(public http: HttpClient,  private storage: Storage, public modCtrl: ModalController) {
        this.dameLista();
    }

    private dameLista()
    {
    // cuando el almacenaje esté listo, ejecuta algo...
    this.storage.ready().then(() => {
      // ¿Hay alguna tarea ya?
      this.storage.get('tareas').then(data => {
        let tareaLocal:TareaModelo[] = [];
        if(data)
        {
          for(let tarea of data)
          {
            tareaLocal.push(new TareaModelo(
              tarea.descripcion, 
              tarea.responsable, 
              tarea.realizada
              ));
          }
        }
        this.tareas = tareaLocal;
      });
    });
  }

  public salvarLocal()
  {
    this.storage.ready().then(() => {
      // añade a tareas las nuevas tareas
      this.storage.set('tareas', this.tareas);
    });
  }

  public addTarea(tarea:TareaModelo)
  {
    this.tareas.push(tarea);
  }

}