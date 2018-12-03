import React, { Component } from "react";
import Swiper from "react-id-swiper";

import "./gallery.css";

class GalleryView extends Component {
  static defaultProps = {
    photos: []
  };
  render() {
    const params = {
      pagination: {
        el: ".swiper-pagination",
        type: "bullets",
        clickable: true
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
      },
      spaceBetween: 30,
      renderPrevButton: () => <button className="swiper-button-prev prev" />,
      renderNextButton: () => <button className="swiper-button-next next" />
    };
    return (
      <Swiper {...params}>
        {this.props.photos.map(photo => (
          <div className="Gallery" key={photo.url}>
            <img src={photo.url} alt={photo.title} />
            <div className="info">
              <h2>{photo.title}</h2>
              <p>
                {photo.description} -- {photo.credit}
              </p>
            </div>
          </div>
        ))}
      </Swiper>
    );
  }
}

export default GalleryView;
