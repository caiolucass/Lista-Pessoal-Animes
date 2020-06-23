import React, { Component } from "react";

/*Construtor dos Animes*/
export default class Anime extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      MostrarInfo: false,
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

  //Mostrar as informações do Anime
  Informacao = () => {
    this.setState({ MostrarInfo: !this.state.MostrarInfo });
  };

  render() {
    const { id, img, anime, autor } = this.props.info;
    const { ExcluirAnime } = this.props; //acessar as propriedaades

    //Função para carregar a informação
    const ChecarInfo = (info) => {
      if (info === true) {
        return <p>Lorem10</p>;
      } else {
        return null;
      }
    };

    return (
      <article className="anime">
        <h3>Anime: {anime}</h3>
        <h5>Autor: {autor}</h5>
        <img src={img} wdith="150" alt="animes favoritos"></img>
        <h6>Carrinho: {this.state.count}</h6>

        <div className="teste">
          <button type="button" onClick={this.AdicionarAnime}>
            Adicionar Anime
          </button>

          <button type="button" onClick={() => ExcluirAnime(id)}>
            Excluir Anime
          </button>

          <button type="button" onClick={this.ResetarAnime}>
            Resetar Anime
          </button>

          <button type="button" onClick={this.Informacao}>
            Ver Mais
          </button>
          {ChecarInfo(this.state.MostrarInfo)}
        </div>
      </article>
    );
  }
}
