import { Injectable } from '@angular/core';
import { Logro } from '../home/home.component'

@Injectable()
export class LogrosService {

  logros : Logro[]

  constructor() {
    this.logros = [{
      id: 1, title: 'Titulo 1', description: 'Esta es una 1'
    },{ 
      id: 2, title: 'Titulo 2', description: 'Esta es una description de prueba 2'
    },{
      id: 2, title: 'Titulo 2', description: 'Esta es una description de prueba 3'
    }]
  }

  find(id: number) : Logro{
    return this.logros.find((logro) => logro.id == id )
  }

  all(): Logro[] {
    return this.logros
  }

}