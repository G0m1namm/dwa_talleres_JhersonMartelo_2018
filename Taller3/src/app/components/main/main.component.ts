import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  public poke:Array<any>;


  constructor() { }

  ngOnInit() {
    var poke = this.getPokemon();
    poke.then(result => this.poke = result);
  }

  async getPokemon() {
    var response = await fetch(`https://pokeapi.co/api/v2/pokemon/1/`);
    var pokemon = await response.json();

    return pokemon;
  }

}
