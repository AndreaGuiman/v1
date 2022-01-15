import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { HomeComponent } from "./home/home.component";

@NgModule({
    declarations:[
        HomeComponent,
    ],
    imports:[
        HttpClientModule,
    ],
    providers:[

    ],
})
export class ComponentsModule{}