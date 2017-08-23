import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AboutComponent } from './about.component';
import { MongoService } from '../services/mongo.service';

@NgModule({
    declarations: [AboutComponent],
    imports: [HttpModule],
    providers: [MongoService],
    exports: [AboutComponent]
})
export class AboutModule { }
