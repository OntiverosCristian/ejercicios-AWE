import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent {
  public counter: number = 100;

  constructor(){
    console.log('consturyendo el componente counter');
    this.incrementBy();
    this.incrementBy(2);
    this.incrementBy(3);
  }

  incrementBy(value : number = 1):void{
    this.counter+= value;
  }
}
