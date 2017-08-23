import { Routes, RouterModule } from '@angular/router';
import { HomeRoutes } from './home/index';
import { AboutRoutes } from './about/index';

const appRoutes: Routes = [
    ...HomeRoutes,
    ...AboutRoutes
];

export const appRoutingProviders: any[] = [

];

export const routing = RouterModule.forRoot(appRoutes);
