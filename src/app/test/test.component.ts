import { Component, Input, OnInit, Output, EventEmitter} from '@angular/core';


@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  @Input('parent') name
  @Output() childEvent=new EventEmitter()
  constructor() { }
  onClick(){
    this.childEvent.emit("hello from test")

  }
  ngOnInit(): void {
  }

}
