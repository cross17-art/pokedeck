import Pokedex from 'pokedex-promise-v2';
const pokdex = new Pokedex();


class PokemonsCards {
  pokemonsNames = '1'
  pokemonAbilities = '1'
  pokemonsForms = []

  async getPokemonNames(callback=console.log,offset = 0,limit=100000){
    const interval = {
      limit: limit,
      offset: offset
    }
    console.log("Fetch to get Pokemons Names List")
    return await pokdex.getPokemonsList(interval)
      .then((response) => {
        this.pokemonsNames = response.results
        // callback(this.pokemonsNames)
        console.log("We get Pokemons Names List")
        return response.results
      })
  }

  async getAbilitiesNames(callback=console.log,offset = 0,limit=100000){
    const interval = {
      limit: limit,
      offset: offset
    }
    console.log("Fetch to get Abilities List")
    return await pokdex.getAbilitiesList(interval)
      .then((response) => {
        this.pokemonAbilities = response.results
        callback(this)
        console.log("We get Abilities List")
        return response.results
      })

  }
  //может причина в том что я вызывает вторую функцию  как callback !!!!!
   async getPokemonsAbilitiesDescriptionsList(abilities){
    return await Promise.all(abilities.pokemonAbilities.map(async (element)=>{
      let end = await fetch(`https://pokeapi.co/api/v2/ability/${element.name}`)
      .then((response) => response.text())
      .then((result) => JSON.parse(result)); 

      let description = end.flavor_text_entries.length!=0?end.flavor_text_entries.filter(el=> el.language.name==="en")[0].flavor_text:element.name
      let efect = end.effect_entries.length!=0?end.effect_entries.filter((el) => el.language.name === "en")[0].effect:element.name
      
      element["description"] = description.replaceAll("\n"," ")
      element["efect"] = efect.replaceAll("\n"," ")
      
      return element    
    }))
  }
  async getPokemonMainData(identifier){
    let result = await fetch(`https://pokeapi.co/api/v2/pokemon/${identifier}`)
      .then((response) => response.text())
      .then((body) => {
          return JSON.parse(body)
      }); 
      return result;
  }
  
//   let pokemonAbilities = await pokemonMainData.abilities.reduce(async (previousPromise,ability)=> {
//     let abilitiesArray = await previousPromise;

//     let data = await this.getPokemonsAbilities(ability.ability.name)
//     abilitiesArray.push(data)

//     return abilitiesArray
// },Promise.resolve([]))
  async initPokemonData (){
    let i=0;
    let time = performance.now()
    for(const element of this.pokemonsNames){
      let pokemonMainData = await this.getPokemonMainData(element.name)
  
      let pokemonAbilities = await pokemonMainData.abilities.reduce(async (previousPromise,ability)=> {
        let abilitiesArray = await previousPromise;

        let data =  this.pokemonAbilities.find(element => element.name===ability.ability.name )

        abilitiesArray.push(data)
        
        return abilitiesArray
      },Promise.resolve([]))
     
     this.pokemonsForms.push({
       'name':element.name,
       'svg':pokemonMainData.sprites.other.dream_world.front_default,
       'weight': pokemonMainData.weight,
       'height': pokemonMainData.height,
       'abilities': pokemonAbilities,
       'stat': pokemonMainData.stats
     })
    //  console.log(++i)
    }
    console.log("Time of loop",performance.now()-time)

    return this.pokemonsForms

  
  }

}

const Data = async () =>{
  let pok = new PokemonsCards()
  let pokemonsNames = await pok.getPokemonNames() 
  let abilitiesList = await pok.getAbilitiesNames(pok.getPokemonsAbilitiesDescriptionsList)
  pok.initPokemonData()
  // pok.getPokemonsAbilitiesDescriptionsList("aasdas")
}
Data()

// pok.test()

