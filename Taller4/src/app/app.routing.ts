import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { ListPokemonComponent } from './pages/list-pokemon/list-pokemon.component';

const appRoutes: Routes = [
    { path:'', component:HomeComponent },
    { path:'home', component:HomeComponent },
    { path:'list', component:ListPokemonComponent },
    { path:'list/:ident', component:ListPokemonComponent },
];

export const appRoutingProviders: any = [];
export const routing: ModuleWithProviders = RouterModule.forRoot( appRoutes );
