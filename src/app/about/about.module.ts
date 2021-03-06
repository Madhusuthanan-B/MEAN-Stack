import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';
import { SpinnerModule } from '../spinner/index';
import { AboutComponent } from './about.component';
import { MongoService } from '../services/mongo.service';

@NgModule({
    declarations: [AboutComponent],
    imports: [HttpModule, CommonModule, SpinnerModule],
    providers: [MongoService],
    exports: [AboutComponent]
})
export class AboutModule { }
