import { HeaderComponent } from './header/header.component';
import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = 
[    {path:"", redirectTo:"home",pathMatch:"full",title:"Home"},
    {path:"home", component:HomeComponent ,title:"home"    },
    {path:"about", component:AboutComponent ,title:"about"},
    {path:"Contact", component:ContactComponent,title:"Contact"},
    {path:"Portfolio", component:PortfolioComponent,title:"Portfolio"},
    {path:"**", component:HomeComponent,title:"home"}

];
