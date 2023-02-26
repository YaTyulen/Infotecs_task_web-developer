import { Component } from '@angular/core';
import {Node} from '../models';
import {NodesService} from '../nodesService/nodes.service';

@Component({
  selector: 'app-changer',
  templateUrl: './changer.component.html',
  styleUrls: ['./changer.component.css']
})
export class ChangerComponent {
  node: Node = {id: -1, text: "", time: ""}; //создание пустой записи

  constructor(private nodesService: NodesService){
    this.node = nodesService.getOneNode(); //получение записи для редактирования из сервиса
  }

}
