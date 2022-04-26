import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from '../layout/layout.component';
import { ServicoContratadoListaComponent } from './servico-contratado-lista/servico-contratado-lista.component';
import { AuthGuard } from '../auth.guard';

const routes: Routes = [
  { path: 'servicos-contratados', canActivate: [AuthGuard], component: LayoutComponent, children: [
    { path: 'lista', component: ServicoContratadoListaComponent },
    { path: '', redirectTo: '/servicos-contratados/lista', pathMatch: 'full' }

  ] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServicoContratadoRoutingModule { }
