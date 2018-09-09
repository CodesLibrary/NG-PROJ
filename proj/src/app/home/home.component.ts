import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
constructor (private HttpService:HttpClient){}
jsonData: string [];
x = 5;
y = 0;
b = 0;
 
 
  ngOnInit() {
    this.HttpService.get('https://jsonplaceholder.typicode.com/users').subscribe(
      data => {
        this.jsonData = data as string[]
      }
    );

   this.b = this.jsonData.length;

    
  }
change(){
this.x = this.x+5 ;
this.y = this.y+5;
this.b = this.jsonData.length;

if( this.x === this.b){

  var elem = document.getElementById("t");
elem.parentNode.removeChild(elem);


}else{
  alert('not equal');
}
}


}
