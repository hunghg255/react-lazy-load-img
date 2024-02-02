import React, { Component, useCallback, useEffect, useRef, useState } from 'react'

import ImgMask from '../img/place-holder.png';

import './LazyLoadImage.css'

const elementInViewport = (el: any) => {
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

const LazyLoadImage = ({ src, alt, keepRatio, ...props }: { src: string, alt: string, width?: number, height?: number, keepRatio?: boolean }) => {
    const imgEle = useRef<any>(null);
    const [loaded, setLoaded] = useState(false);
    const width = props.width || '100%';
    const height = props.height || '100%';

    useEffect(() => {
        handleScrollPage();
        window.addEventListener('scroll', handleScrollPage);

        return () => {
            window.removeEventListener('scroll', handleScrollPage);
        }
    }, []);

    const handleScrollPage = useCallback(() => {
        if (!loaded && elementInViewport(imgEle.current)) {
            // Load img
            const imgLoader = new Image();
            imgLoader.src = src;
            imgLoader.onload = () => {
                const ratioWH = imgLoader.width / imgLoader.height;

                imgEle.current.setAttribute('src', src);

                keepRatio && imgEle.current.setAttribute('height', `${(props?.width || 0) / ratioWH}`);

                imgEle.current.classList.add('opacity');

                setLoaded(true);
            }
        }
    }, [loaded, props])

    return (
        <img
            src={ImgMask}
            width={width}
            height={height}
            ref={ele => imgEle.current = ele}
            className="lazy-image"
            alt={alt}
        />
    )
}

export default LazyLoadImage;
