import { Button, Card } from "@material-ui/core";
import React, { Component } from "react";


class WatchList extends Component {
  render() {
    if (!this.props.data) return null;


    const openLink = url => {
        window.location.href = url;
      };


    const AnimeList = this.props.data.anime.showList.map(anime => {
        return (
        
            <Card key={anime.id}>
            <Card.Title className='card-title'>{anime.name}</Card.Title>
            <Card.Body>
              <p>Anime Description: {anime.description}</p>
              <p>Total Episodes: {anime.totalEpisodes}</p>
              <p>Current Episode: {anime.currentEpisode}</p>
              <p>Completed? {anime.completed}</p>
              <Button variant='primary' onClick={openLink.bind(this, anime.url)}>
                Open
              </Button>{' '}
            </Card.Body>
          </Card>
        
        )
    });

    return (
        <div className="row">
            {AnimeList}
        </div>
    );
  }
}

export default WatchList;
