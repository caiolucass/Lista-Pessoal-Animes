import React, { Component } from "react";

/*Animes*/
export default class Anime extends Component {
  ApertaBotao() {}
  render() {
    const { img, anime, autor } = this.props.info;
    return (
      <article className="anime">
        <img src={img} wdith="150" alt="animes favoritos"></img>
        <div className="teste">
          <h3>Anime: {anime}</h3>
          <h5>Autor: {autor}</h5>
          <button type="button" onClick={this.ApertaBotao}>
            Assistir Anime
          </button>
        </div>
      </article>
    );
  }
}
