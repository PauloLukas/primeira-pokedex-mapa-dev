/* 
quando clicar no pokemon da listagem temos que esconder o cartao do pokemon aberto e mostra o cartão  correspondente ao que foi selecionado na listagem

pra isso vamos precisar tranlhar com dois elemnetos
1 listagem   
2 cartao do pokemon  

precisamos crais duas variaveis no Js pra trabalhar com os elementos na tela 

vamos precisar tranalhar com um evento de clice feito pelo usúario na listagem de pokémons

- remover a classe aberto só do cartão que está aberto
- ao clicar em um pokémon da listagem pegamos o id desse pokémon para saber qual cartão mostra 
- remover a classe ativo que marcar o pokémon selecionado 
- adicionar a classe ativo no item da lista selecionado 
*/

//precisamos crais duas variaveis no Js pra trabalhar com os elementos na tela

const listaSelecaoPokemons = document.querySelectorAll(".pokemon");
const pokemonsCard = document.querySelectorAll(".cartao-pokemon");

listaSelecaoPokemons.forEach((pokemon) => {
  //vamos precisar tranalhar com um evento de clice feito pelo usúario na listagem de pokémons

  pokemon.addEventListener("click", () => {
    const cartaoPokemonAberto = document.querySelector(".aberto");
    cartaoPokemonAberto.classList.remove("aberto");

    const idPokemonSelecionado = pokemon.attributes.id.value;

    const idDoCartaoPokemonParaAbrir = "cartao-" + idPokemonSelecionado;

    const cartaoPokemonParaAbrir = document.getElementById(
      idDoCartaoPokemonParaAbrir
    );
    cartaoPokemonParaAbrir.classList.add("aberto");

    //remover a classe ativo que marca o pokémon selecionado

    const pokemonAtivoNaListagem = document.querySelector(".ativo");
    pokemonAtivoNaListagem.classList.remove("ativo");

    //adicionar a classe ativo no item da lista selecionado

    const pokemonSelecionadoNaListagem =
      document.getElementById(idPokemonSelecionado);
    pokemonSelecionadoNaListagem.classList.add("ativo");
  });
});
