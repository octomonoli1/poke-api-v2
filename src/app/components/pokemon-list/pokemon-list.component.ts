import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../../services/pokemon.service';
import { Pokemon } from '../../models/pokemon';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrl: './pokemon-list.component.css'
})
export class PokemonListComponent implements OnInit{

  //Inyeccion del servicio
  private _pokemonService: PokemonService;

  //Atributo para binding
  public pokemons: Pokemon[] = [];

  constructor(pokemonService: PokemonService){
    this._pokemonService = pokemonService;
  }

  //Metodo que se llama al cargar el componente
  public ngOnInit(): void {
    this._pokemonService.getList().subscribe(
      (data:any) =>{
        let {count, next, previous, results} = data;
        this.pokemons = results;
      }
    )
  }

  //Método que calcula la imagen dado un pokemon
  public getImageByUrl(pokemon: Pokemon): string{
    const urlSeparated = pokemon.url.split("/");
    let id = urlSeparated[urlSeparated.length - 2];
    return "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" + id + ".png"
  }

  public getDetailUrl(pokemon: Pokemon): string{
    const urlSeparated = pokemon.url.split("/");
    return "/detail/" + urlSeparated[urlSeparated.length - 2];
  }

}
