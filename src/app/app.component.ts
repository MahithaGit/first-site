import { Component, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class AppComponent {
  title = 'first-site';
  featureselect = 'recipe';
  onNavigate(feature:string){
  	this.featureselect = feature;
  }

}
