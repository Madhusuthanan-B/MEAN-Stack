import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { DealAnalysisComponent } from './deal-analysis.component';
import { ValidateOnBlurDirective } from '../directives/index';
import { AquisitionAssumptionsUserChangeable } from '../models/index';

@NgModule({
    declarations: [DealAnalysisComponent, ValidateOnBlurDirective],
    imports: [CommonModule, FormsModule],
    providers: [AquisitionAssumptionsUserChangeable],
    exports: [DealAnalysisComponent]
})
export class DealAnalysisModule { }
