import { Injectable } from '@angular/core';
import AppService from '../app.service';
import { HackID  } from "../helpers/helpers";

interface SshResponse{
  enable: string
}

@Injectable({
  providedIn: 'root'
})
export class SshService extends AppService{
  hackID = HackID.SSHServer;
  endpointSuffix = 'general';
}
