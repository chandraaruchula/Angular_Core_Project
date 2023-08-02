import { Component, OnInit } from '@angular/core';
import { Router, ROUTER_CONFIGURATION } from '@angular/router';
import { Dropdown } from '../Dropdown';
import { OrderWatch } from '../orderwatch';
import { OrderwatchService } from '../orderwatch.service';

@Component({
  selector: 'app-add-orderwatch',
  templateUrl: './add-orderwatch.component.html',
  styleUrls: ['./add-orderwatch.component.css']
})
export class AddOrderwatchComponent  implements OnInit {
  orderwatch:OrderWatch= new OrderWatch() ;
  dropdown:Dropdown[]=[];
  ordertype:any;
  milestonestatus:any;
  country:any;
  constructor(private orderwatchService: OrderwatchService,
    private router: Router) { }
    ngOnInit(): void {
      this.orderwatchService.getDropdownList().subscribe( data =>{
        console.log(data);
        this.dropdown=data;
        this.ordertype=data.map(function(e){ return e.ordertype });
        this.milestonestatus=data.map(function(e){return e.milestonestatus});
        this.country=data.map(function(e){return e.country});
        debugger
      },
      error => console.log(error));
     }
    saveOrderwatch(){
      this.orderwatchService.createOrderWatch(this.orderwatch).subscribe( data =>{
        console.log(data);
        this.goToOrderwatchList();
      },
      error => console.log(error));
    }
  
    goToOrderwatchList(){
      this.router.navigate(['orderwatch']);
    }
    
    onSubmit(){
      // console.log(this.orderwatch);
      this.saveOrderwatch();
    }
  }
  // save(){
    
  // }
