import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ProductsComponent } from './products/products.component';
import { ProjectComponent } from './project/project.component';
import { HelloComponent } from './hello/hello.component';
import { NeoComponent } from './neo/neo.component';
import { SidenavComponent} from './sidenav/sidenav.component';



const routes: Routes = [
   {path:'', component:HomeComponent},
   {path:'about',component:AboutComponent},
   {path:'contact',component:ContactComponent},
   {path:'products',component:ProductsComponent},
   {path:'project',component:ProjectComponent},
   {path:'hello',component:HelloComponent},
   {path:'neo',component:NeoComponent},
   {path:'sidenav',component:SidenavComponent},
   
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
