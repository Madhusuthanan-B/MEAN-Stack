import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpinnerModule } from '../spinner/index';
import { HomeComponent } from './home.component';
import { MongoService } from '../services/mongo.service';

@NgModule({
    declarations: [HomeComponent],
    imports: [CommonModule, SpinnerModule],
    providers: [MongoService],
    exports: [HomeComponent]
})
export class HomeModule { }
