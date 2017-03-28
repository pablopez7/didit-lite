import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  logros: Logro[]
  title: string = 'Bienvenido'

  constructor() { }

  ngOnInit() {
    this.logros = this.getLogros()
  }

  getLogros(): Logro[] {
    return [{ id: 1, title: 'Titulo 1', description: 'Esta es una description de prueba 1' },
    { id: 2, title: 'Titulo 2', description: 'Esta es una description de prueba 2' },
    { id: 2, title: 'Titulo 2', description: 'Esta es una description de prueba 3' }]
  }

}

interface Logro {
  id: number
  title: string
  description?: string
} 