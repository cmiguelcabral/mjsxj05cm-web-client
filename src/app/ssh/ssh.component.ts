import { Component, OnInit } from '@angular/core';
import { SshService } from "./ssh.service";

@Component({
  selector: 'app-ssh',
  templateUrl: './ssh.component.html',
  styleUrls: ['./ssh.component.scss']
})
export class SshComponent implements OnInit {
  enabled = false;
  constructor(private service: SshService) { }

  start() {

  }

  stop() {

  }

  restart() {

  }

  ngOnInit(): void {
    this.service.getConfigs()
      .subscribe(configs => console.log(configs))
    this.service.getStatus()
      .subscribe(configs => console.log(configs))
  }
}
