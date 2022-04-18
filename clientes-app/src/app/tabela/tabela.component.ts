import { Component, OnInit } from '@angular/core';
import { ColumnMode } from '@swimlane/ngx-datatable';

@Component({
  selector: 'app-tabela',
  templateUrl: './tabela.component.html',
  styleUrls: ['./tabela.component.css']
})
export class TabelaComponent implements OnInit {

  constructor() {}
  reorderble = true;
  loadingIndicator = true;
  ColumnMode = ColumnMode;

  rows = [
    { nome: 'Nome1', idade: 'Idade1', descricao: 'descricao1' },
    { nome: 'Nome2', idade: 'Idade2', descricao: 'descricao2' },
    { nome: 'Nome3', idade: 'Idade3', descricao: 'descricao3' },
    { nome: 'Nome5', idade: 'Idade5', descricao: 'descricao5' },
    { nome: 'Nome4', idade: 'Idade4', descricao: 'descricao4' }
  ]

  columns = [
    { prop: 'nome' }, { prop: 'idade' }, { prop: 'descricao' }
  ]


  ngOnInit(): void {
  }

}

