import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OrderWatch } from '../orderwatch';
import { OrderwatchService } from '../orderwatch.service';

@Component({
  selector: 'app-list-order-watch',
  templateUrl: './list-order-watch.component.html',
  styleUrls: ['./list-order-watch.component.css']
})
export class ListOrderWatchComponent implements OnInit{
  // orderWatch: OrderWatch[] | undefined;
  orderWatch:OrderWatch[]=[]

  constructor(private orderwatchService: OrderwatchService,
    private router: Router) { }

  ngOnInit(): void {
    this.getOrderWatch();
  }
  private getOrderWatch(){
    this.orderwatchService.getOrderwatchList().subscribe(data => {
      this.orderWatch = data;
      console.log(data,"data")
    });
  }
  
  deleteOrderWatch(id: number){
    if(confirm("Are you sure to delete "+ id)) {
      this.orderwatchService.deleteOrderWatch(id).subscribe( data => {
        console.log(data);
        this.getOrderWatch();
      })
    }
  }
  updateOrderWatch(id: number){
    this.router.navigate(['update-orderwatch', id]);
  }

}
