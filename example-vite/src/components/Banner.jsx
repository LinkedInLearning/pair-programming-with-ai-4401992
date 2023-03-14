import React from 'react';
import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';
import Image from './Image';
import '../../node_modules/@splidejs/react-splide/dist/css/splide-core.min.css';
import '../../node_modules/@splidejs/react-splide/dist/css/splide.min.css';
import './Banner.css';

export const Banner = () => {
  return (
    <Splide hasTrack={false} id="hero" className="splide" aria-label="Hero section">
      <SplideTrack>
        <SplideSlide className="big-star">
          <div className="wrapper">
            <Image
              imgData={{ root: 'logo-big-star-H-purple', width: 298, height: 161 }}
              folder={null}
              type="svg"
            />
            <a href="Product-List.html" className="button lg solid gold">
              Shop now
            </a>
          </div>
          <Image
            imgData={{ root: 'hero-big-star', width: 485, height: 317 }}
            folder={null}
            type="jpg"
          />
        </SplideSlide>
        <SplideSlide className="sale">
          <div className="wrapper">
            <h2>Seasonal Sale!</h2>
            <p>Enjoy up to 20% off select items.</p>
            <a href="Product-List.html" className="button lg solid white">
              See items on sale
            </a>
          </div>
          <Image
            imgData={{ root: 'hero-sale', width: 502, height: 367 }}
            folder={null}
            type="jpg"
          />
        </SplideSlide>
        <SplideSlide className="gifts">
          <div className="wrapper">
            <h2>Gifts for Everyone!</h2>
            <p>
              Shop our collections
              <br /> to find that perfect collectible.
            </p>
            <a href="Product-List.html" className="button lg solid gold">
              Shop now
            </a>
          </div>
          <Image
            imgData={{ root: 'hero-gifts', width: 750, height: 465 }}
            folder={null}
            type="jpg"
          />
        </SplideSlide>
      </SplideTrack>
      <div className="splide__arrows">
        <button className="splide__arrow splide__arrow--prev">
          <Image
            imgData={{ root: 'icon-chevron-left-white', width: 50, height: 50 }}
            folder={null}
            type="svg"
            alt="Previous"
          />
        </button>
        <button className="splide__arrow splide__arrow--next">
          <Image
            imgData={{ root: 'icon-chevron-left-white', width: 50, height: 50 }}
            folder={null}
            type="svg"
            alt="Next"
          />
        </button>
      </div>
    </Splide>
  );
};

export default Banner;
