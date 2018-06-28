import { Component } from '@angular/core';

@Component({  // annotating component class with @Component decorator which specifies Angular meta data for the component
  
  // 3 meta deta properties  

  selector: 'app-root',  
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular 4 App';
}
