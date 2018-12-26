import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  @Input()
  stockCode: string;//股票代码

  @Input()
  amount: number;//股票数量

  constructor() { }

  ngOnInit() {
  }

}
