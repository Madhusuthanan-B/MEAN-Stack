import { Routes, RouterModule } from '@angular/router';
import { HomeRoutes } from './home/index';
import { AboutRoutes } from './about/index';
import { DealAnalysisRoutes } from './deal-analysis/index';

const appRoutes: Routes = [
    ...HomeRoutes,
    ...AboutRoutes,
    ...DealAnalysisRoutes
];

export const appRoutingProviders: any[] = [

];

export const routing = RouterModule.forRoot(appRoutes);
