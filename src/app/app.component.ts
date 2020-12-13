import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'xiaomi-camera-web-client';
  showText: boolean = false;
  links = [
    { title: 'Dashboard', path: 'dashboard', icon: 'mdi-view-dashboard-outline' },
    { title: 'Streaming', path: 'streaming', icon: 'mdi-video-wireless-outline' },
    { title: 'SSH/SFTP Server', path: 'sshserver', icon: 'mdi-lan-connect' },
    { title: 'Xiaomi Services', path: 'xiaomi', icon: 'mdi-server' }
  ]

}
