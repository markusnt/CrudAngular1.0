import { Component, OnInit } from '@angular/core';

import { Option } from './../models/option';
import { ListaService } from './lista.service';


@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  optionList: Option[];
  option: Option[];

  constructor(private listaService: ListaService) { }

  ngOnInit() {
    this.getAllOptions();
  }

  getAllOptions(){
    this.listaService.getAllOptions().subscribe(
      data => {
        this.optionList = data;
      }
    )

  }
}
