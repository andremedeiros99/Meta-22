import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ServicoContratadoRoutingModule } from './servico-contratado-routing.module';
import { ServicoContratadoListaComponent } from './servico-contratado-lista/servico-contratado-lista.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    ServicoContratadoListaComponent
  ],
  imports: [

    CommonModule,
    ServicoContratadoRoutingModule,
    FormsModule,
    RouterModule

  ], exports : [
    ServicoContratadoListaComponent
  ]
})
export class ServicoContratadoModule { }
