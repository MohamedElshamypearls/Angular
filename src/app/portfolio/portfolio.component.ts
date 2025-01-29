import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  imports: [],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent {

  sayhello(data:HTMLHeadingElement):void{
   
    data.classList.remove("w-100")
  }

  Out(data:HTMLHeadingElement):void{
    data.classList.add("w-100")
  }
}
