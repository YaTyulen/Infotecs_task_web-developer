import { Component } from '@angular/core';
import {Node} from '../models'
import {NodesService} from '../nodesService/nodes.service';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent {

  node: Node = {id: -1, text: "", time: ""}; //создание пустого объекта "запись"
  nodes: Node[]; //создание пустого массива записей

  constructor(private nodesService: NodesService){
    this.nodes = nodesService.getNodes(); //получение уже имеющегося массива записей из сервиса и запись в пустой массив
  }

  /*Функция для создания записи*/
  createNode(node : Node){
    //проверка на непустоту записи
    if(node.text != ""){
      this.nodesService.addNode(node.text); //добавление записи в массив на сервисе
      this.nodes = this.nodesService.getNodes(); //получение обновленного массива
    }
  }


}
