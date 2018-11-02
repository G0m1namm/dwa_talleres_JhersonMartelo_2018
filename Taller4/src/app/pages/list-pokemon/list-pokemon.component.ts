import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { PokemonElement } from '../list-pokemon/pokemon.model';

@Component({
  selector: 'app-list-pokemon',
  templateUrl: './list-pokemon.component.html',
  styleUrls: ['./list-pokemon.component.scss']
})
export class ListPokemonComponent implements OnInit {
  public listPokemon:Array<PokemonElement>;
  public parametroUrl:string;

  constructor(
    private _router:Router,
    private _route:ActivatedRoute
  ) { 
    this.listPokemon = [
      new PokemonElement("Bulbasaur",1,19,"veneno","Chlorophyll",69,7,"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"),
      new PokemonElement("Ivisaur",2,62,"veneno","Chlorophyll",130,10,"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png"),
      new PokemonElement("Venusaur",3,82,"veneno","Chlorophyll",1000,20,"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png"),
      new PokemonElement("Charmanderr",4,52,"fuego","Solar-Power",85,6,"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png"),
      new PokemonElement("Charmeleon",5,64,"fuego","Solar-Power",190,11,"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png"),
      new PokemonElement("Charizard",6,84,"fuego","Solar-Power",905,17,"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png"),
      new PokemonElement("Squirtle",7,48,"Agua","Rain-Dish",90,5,"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png"),
      new PokemonElement("Wartortle",8,63,"Agua","Rain-Dish",255,10,"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/8.png"),
      new PokemonElement("Blastoise",9,83,"Agua","Rain-Dish",855,16,"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png"),
    ]
  }

  ngOnInit() {
    this._route.params.forEach((params:Params) => {
      this.parametroUrl = params['ident'];
    });
  }

  verDetalle(_index) {
    this._router.navigate(['/list/'+_index]);
  }

  volverAtras() {
    this._router.navigate(['/list']);
  }

}
