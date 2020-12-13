import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SshComponent } from './ssh/ssh.component';
import { StreamingComponent } from './streaming/streaming.component';
import { XiaomiComponent } from './xiaomi/xiaomi.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'streaming',
    component: StreamingComponent
  },
  {
    path: 'sshserver',
    component: SshComponent
  },
  {
    path: 'xiaomi',
    component: XiaomiComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
