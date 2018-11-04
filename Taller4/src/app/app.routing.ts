import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { ListPokemonComponent } from './pages/list-pokemon/list-pokemon.component';
import { MainComponent } from './components/main/main.component';

const appRoutes: Routes = [
    { path:'', component:ListPokemonComponent },
    { path:'home', component:ListPokemonComponent },
    { path:'list', component:ListPokemonComponent },
    { path:'list/:ident', component:MainComponent },
];

export const appRoutingProviders: any = [];
export const routing: ModuleWithProviders = RouterModule.forRoot( appRoutes );
