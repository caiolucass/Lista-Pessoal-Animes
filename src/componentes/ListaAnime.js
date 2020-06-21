import React, { Component } from "react";
import Anime from "./Anime";
import dadosAnime from "./dadosAnime";

/*Lista de animes*/
export default class ListaAnime extends Component {
  constructor(props) {
    super(props);
    this.state = {
      animes: dadosAnime,
    };
  }
  render() {
    return (
      <section>
        <h3>Minha Lista de Animes Favoritos</h3>
        {this.state.animes.map((item) => (
          <Anime key={item.id} info={item} />
        ))}
      </section>
    );
  }
}
