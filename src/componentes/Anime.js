import React, { Component } from "react";

/*Construtor dos Animes*/
export default class Anime extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  //Adicionar Anime à lista
  AdicionarAnime = () => {
    this.setState({ count: this.state.count + 1 });
  };

  //Resetar a lista de Animes
  ResetarAnime = () => {
    this.setState({ count: 0 });
  };

  render() {
    const { id, img, anime, autor } = this.props.info;
    const { ExcluirAnime } = this.props; //acessar as propriedaades

    return (
      <article className="anime">
        <img src={img} wdith="150" alt="animes favoritos"></img>
        <div className="teste">
          <h3>Anime: {anime}</h3>
          <h5>Autor: {autor}</h5>
          <h6>Carrinho: {this.state.count}</h6>

          <button type="button" onClick={this.AdicionarAnime}>
            Adicionar Anime
          </button>

          <button type="button" onClick={() => ExcluirAnime(id)}>
            Excluir Anime
          </button>

          <button type="button" onClick={this.ResetarAnime}>
            Resetar Anime
          </button>
        </div>
      </article>
    );
  }
}
