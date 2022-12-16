import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor(private httpClient: HttpClient) { }

  url = 'https://servicodados.ibge.gov.br/api/v1/produtos/estatisticas';

  loadData(){
    return this.httpClient.get(this.url);
  }
}
