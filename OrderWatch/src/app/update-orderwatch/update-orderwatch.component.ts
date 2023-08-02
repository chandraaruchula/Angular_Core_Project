import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OrderWatch } from '../orderwatch';
import { OrderwatchService } from '../orderwatch.service';

@Component({
  selector: 'app-update-orderwatch',
  templateUrl: './update-orderwatch.component.html',
  styleUrls: ['./update-orderwatch.component.css']
})
export class UpdateOrderwatchComponent implements OnInit {
  orderwatch:OrderWatch= new OrderWatch() ;
  id: number;
  constructor(private orderwatchService: OrderwatchService, private route:ActivatedRoute,
    private router: Router) { }
    ngOnInit(): void {
      this.id = this.route.snapshot.params['id'];
       this.orderwatchService.getOrderwatchById(this.id).subscribe(data => {this.orderwatch = data
       });
    }

    updateOrderWatch(){
    this.orderwatchService.updateOrderWatch(this.id, this.orderwatch).subscribe(data => {
      console.log("update orderwatch", data);
      this.goToOrderwatchList();     
    })
  }
  goToOrderwatchList(){
    this.router.navigate(['orderwatch']);
  }
  onupdate(){
    this.updateOrderWatch()
  }
}
