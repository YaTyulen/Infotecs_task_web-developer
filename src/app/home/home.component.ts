import { Component } from '@angular/core';
import {Node} from '../models';
import {NodesService} from '../nodesService/nodes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  nodes: Node[]; //создание массива записей

  constructor(private nodesService: NodesService, private router: Router){
    this.nodes = nodesService.getNodes(); //получение массива записей из сервиса
  }

  //функция удаления записи
  deleteNode(node: Node){
    //проверка, действительно ли пользователь хочет удалить запись
    if(confirm('Вы действительно ходите удалить эту запись?')){
      this.nodesService.deleteNode(node.id); //удаление записи по id через функцию сервиса
      this.nodes = this.nodesService.getNodes(); //получение обновленного массива записей
    }
  }

  //функци изменения записи
  changer(node: Node){
    this.nodesService.editNode(node); //"отправка" записи для редактирования
    this.router.navigate(['/changer']); //переход на страницу редактирования
  }

}
