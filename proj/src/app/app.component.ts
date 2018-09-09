import { Component } from '@angular/core';
/* import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http'; */

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'proj';
/*   constructor (private httpService: HttpClient) { }
 jsonData: string [];

  ngOnInit () {
    this.httpService.get('https://jsonplaceholder.typicode.com/users').subscribe(
      data => {
        this.jsonData = data as string [];	 // FILL THE ARRAY WITH DATA.
        //  console.log(this.arrBirds[1]);
      },
      (err: HttpErrorResponse) => {
        console.log (err.message);
      }
    );
  } */
}
