import { Component, Input, OnInit, Output, EventEmitter} from '@angular/core';


@Component({
  selector: 'app-practice',
  templateUrl: './practice.component.html',
  styleUrls: ['./practice.component.css']
})
export class PracticeComponent implements OnInit {
  @Input()parent2
  @Output()practiceEvent=new EventEmitter()
  fireEvent(){
    this.practiceEvent.emit("I am 29 now, hahah")
  }
  constructor() { }

  ngOnInit(): void {
  }

}
