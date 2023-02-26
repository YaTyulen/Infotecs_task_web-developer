import { Injectable } from '@angular/core';
import {Node} from '../models'

@Injectable({
  providedIn: 'root'
})
export class NodesService {

  constructor() { }

  nodes: Node[] = []; //создаем пустой массив записей
  count: number = 0;
  node: Node;

  /*Добавляет новую запись в массив записей*/
  addNode(text: string){
    this.nodes.push({
      text: text,
      id: this.count + 1,
      time: "Дата создания: " + new Date().toLocaleDateString() + " " + new Date().toLocaleTimeString(),
    });
    this.count++;
  }

  /*Возвращает массив записей*/
  getNodes(): Node[] {
    return [...this.nodes]
  }

  //Получаем запись для редактирования и записываем в переменную
  editNode(node: Node){
    this.node = node;
  }

  /*Возвращает запись для редактирования*/
  getOneNode():Node{
    return this.node;
  }

  /*Удаляет запись по id*/
  deleteNode(id: number){
    this.nodes = this.nodes.filter(node => node.id !== id);
  }

}
