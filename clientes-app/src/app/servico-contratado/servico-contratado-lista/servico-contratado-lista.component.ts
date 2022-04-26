import { Component, OnInit } from '@angular/core';
import { ServicoContratadoService } from 'src/app/servico-contratado.service';
import { ServicoContratadoBusca } from './servicoContratadoBusca';

@Component({
  selector: 'app-servico-contratado-lista',
  templateUrl: './servico-contratado-lista.component.html',
  styleUrls: ['./servico-contratado-lista.component.css']
})
export class ServicoContratadoListaComponent implements OnInit {

  nome: string;
  mes: number;
  meses: number[];
  lista: ServicoContratadoBusca[];
  message: string;

  constructor(
    private service: ServicoContratadoService
  ) {
    this.meses = [1,2,3,4,5,6,7,8,9,10,11,12];
  }

  ngOnInit(): void {
  }

  consultar(){
    this.service
      .buscar(this.nome, this.mes)
      .subscribe(response => {
        this.lista = response;
        if(this.lista.length <= 0 ){
          this.message = "Nenhum Registro encontrado"
        }else{
          this.message = null;
        }

      })
  }

}
