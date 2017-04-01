import { Component, OnInit } from '@angular/core'
import { ActivatedRoute, Params } from '@angular/router'
import { LogrosService } from '../services/logros.service'
import { Logro } from '../home/home.component'

@Component({
  selector: 'app-logro',
  templateUrl: './logro.component.html',
  styleUrls: ['./logro.component.css']
})
export class LogroComponent implements OnInit {

  logro : Logro

  constructor(private logrosService : LogrosService, private route : ActivatedRoute) { }

  ngOnInit() {
    //console.log(this.route.params)
    this.route.params.forEach((params : Params) => {
      console.log(params)

      let id = params['id']

      this.logro = this.logrosService.find(parseInt(id))

      console.log(this.logro)
    })
  }

}
