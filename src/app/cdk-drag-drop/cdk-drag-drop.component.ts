import { DragDropModule, moveItemInArray,CdkDragDrop } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cdk-drag-drop',
  templateUrl: './cdk-drag-drop.component.html',
  styleUrls: ['./cdk-drag-drop.component.css']
  
})
export class CdkDragDropComponent implements OnInit {
 
  constructor() { }
  
  movies = [
    'Episode I - The Phantom Menace',
    'Episode II - Attack of the Clones',
    'Episode III - Revenge of the Sith',
    'Episode IV - A New Hope',
    'Episode V - The Empire Strikes Back',
    'Episode VI - Return of the Jedi',
    'Episode VII - The Force Awakens'
      
  ];
  ngOnInit(): void {
  }
    drop(event: CdkDragDrop<string[]>) {
      moveItemInArray(this.movies, event.previousIndex, event.currentIndex);
 
}
}