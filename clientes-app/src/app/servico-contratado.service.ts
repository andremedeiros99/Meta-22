import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ServicoContratado} from './servico-contratado/servicoContratado';
import { environment } from 'src/environments/environment';
import { ServicoContratadoBusca } from './servico-contratado/servico-contratado-lista/servicoContratadoBusca';

@Injectable({
  providedIn: 'root'
})
export class ServicoContratadoService {

  apiURL: string = environment.apiURLBase + "/api/servicos-contratados"

  constructor( private http: HttpClient) { }

  salvar(ServicoContratado : ServicoContratado) : Observable<ServicoContratado>{
    return this.http.post<ServicoContratado>(this.apiURL, ServicoContratado);
  }

  buscar(nome: string, mes: number) : Observable<ServicoContratadoBusca[]>{
    const httpParams = new HttpParams()
      .set("nome", nome)
      .set("mes", mes ? mes.toString() : '');

    const url = this.apiURL + "?" + httpParams.toString();
    return this.http.get<any>(url);
  }

}
