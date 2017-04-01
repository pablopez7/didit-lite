import { Component, OnInit } from '@angular/core';
import { LogrosService } from '../services/logros.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  logros: Logro[]
  title: string = 'Bienvenido'

  constructor(private logrosService : LogrosService) { }

  ngOnInit() {
    this.logros = this.logrosService.all()
  }

}

export interface Logro {
  id: number
  title: string
  description?: string
} 