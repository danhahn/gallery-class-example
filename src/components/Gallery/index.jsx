import React, { Component } from "react";
import GalleryView from "./gallerySwiper";

class Gallery extends Component {
  static defaultProps = {
    title: "default title"
  };
  state = {
    photos: []
  };
  componentDidMount() {
    fetch("https://api.myjson.com/bins/1f8zmq")
      .then(raw => raw.json())
      .then(photos => {
        this.setState({ photos });
      });
  }
  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        {this.state.photos.length ? (
          <GalleryView photos={this.state.photos} />
        ) : (
          "...Loading"
        )}
      </div>
    );
  }
}

export default Gallery;
