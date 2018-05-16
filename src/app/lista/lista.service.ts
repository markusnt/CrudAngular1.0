import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Option } from './../models/Option';
import { Observable } from 'rxjs/Observable';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json'})
};


@Injectable()

export class ListaService {

  webApiUrl: string = 'http://localhost:3000/option';

  constructor(private http: HttpClient) { }

  getAllOptions(){
    return this.http.get<Option[]>(this.webApiUrl);
  }

}
