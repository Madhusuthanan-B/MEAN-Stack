import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { AquisitionAssumptionsUserChangeable } from '../models/index';

@Component({
  selector: 'app-deal',
  templateUrl: './deal-analysis.component.html',
  styleUrls: ['./deal-analysis.component.css']
})
export class DealAnalysisComponent implements OnInit {

    constructor(public acquisitionAssumptionsUserChangeable: AquisitionAssumptionsUserChangeable) {}

    ngOnInit() {
        // this.accuisitionAssumptionsUserChangeable = new FormGroup({
        //     PurchasePriceInDollars: new FormControl(1500000),
        //     AdditionalAmountInLoanInDollars: new FormControl('-'),
        //     AdditionalAmountNotInLoanInDollars: new FormControl('-'),
        //     DownPaymentInPercentage: new FormControl('25%'),
        //     InterestRateInPercentage: new FormControl('4.75%'),
        //     AmortiaztionInYears: new FormControl(25),
        //     LoanTermsInYears: new FormControl(5),
        //     ClosingCostsInPercentage: new FormControl('3%')
        //   });
        this.initializeAcquisitionAssumptionsUserChangeable();
        console.log(this.acquisitionAssumptionsUserChangeable);
    }

    initializeAcquisitionAssumptionsUserChangeable() {
        this.acquisitionAssumptionsUserChangeable.PurchasePriceInDollars = 1500000;
        this.acquisitionAssumptionsUserChangeable.AdditionalAmountInLoanInDollars = '-';
        this.acquisitionAssumptionsUserChangeable.AdditionalAmountNotInLoanInDollars = '-';
        this.acquisitionAssumptionsUserChangeable.DownPaymentInPercentage = '25%';
        this.acquisitionAssumptionsUserChangeable.InterestRateInPercentage = '4.75%';
        this.acquisitionAssumptionsUserChangeable.AmortiaztionInYears = 25;
        this.acquisitionAssumptionsUserChangeable.LoanTermsInYears = 5;
        this.acquisitionAssumptionsUserChangeable.ClosingCostsInPercentage = '3%';
    }

    onBlurMethod() {
        console.log(this.acquisitionAssumptionsUserChangeable);
    }
}
