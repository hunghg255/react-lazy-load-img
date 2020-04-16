import React, { Component } from 'react'

import './LazyLoadImage.css'
import ImgMask from '../img/place-holder.png'

const elementInViewport = (el) => {
    var rect = el.getBoundingClientRect();
  return (
    (rect.top <= 0
      && rect.bottom >= 0)
    ||
    (rect.bottom >= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.top <= (window.innerHeight || document.documentElement.clientHeight))
    ||
    (rect.top >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight))
  );
}

export default class LazyLoadImage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loaded: false
        }

        this.handleScrollPage = this.handleScrollPage.bind(this);
    }

    componentDidMount() {
        this.handleScrollPage();
        window.addEventListener('scroll', this.handleScrollPage);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScrollPage);
    }

    handleScrollPage() {
        if (!this.state.loaded && elementInViewport(this.imgEle)) {
            // Load img
            const imgLoader = new Image();
            imgLoader.src = this.props.src;
            imgLoader.onload = () => {
                const ratioWH = imgLoader.width / imgLoader.height;

                this.imgEle.setAttribute('src', this.props.src);

                this.props.keepRatio && this.imgEle.setAttribute('height', `${this.props.width / ratioWH}`);

                this.imgEle.classList.add('opacity');

                this.setState({ loaded: true });
            }
        }
    }

    render() {
        const width = this.props.width || '100%';
        const height = this.props.height || '100%';

        return (
            <img 
                src={ImgMask} 
                width={width}
                height={height}
                ref={imgEle => this.imgEle = imgEle}
                className="lazy-image"
                alt={this.props.alt}
            />
        )
    }
}
