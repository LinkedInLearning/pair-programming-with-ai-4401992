import React from 'react';
import Image from './Image';
import styles from './Header.module.css';

const Header = () => {
  return (
    <>
      <header id={styles.banner}>
        <a href="./">
          <Image
            imgData={{ root: 'logomark-big-star-white', width: 43, height: 50 }}
            folder={null}
            type="svg"
            alt="Big Star Collectibles"
          />
        </a>
        <nav aria-label="Site">
          <ul>
            <li>
              <a href="./" aria-current="page">
                Home
              </a>
            </li>
            <li>
              <a href="Product-List.html">Products</a>
              <div className={styles.wrapper}>
                <figure>
                  <figcaption>Characters</figcaption>
                  <ul>
                    <li>
                      <a href="Characters-by-Collection.html">
                        All characters{' '}
                        <span className={styles.arrow} aria-hidden="true">
                          &rarr;
                        </span>
                      </a>
                    </li>
                    <li>
                      <a href="Characters-by-Collection.html">Binaryville</a>
                    </li>
                    <li>
                      <a href="Characters-by-Collection.html">Lil’ Monsters</a>
                    </li>
                    <li>
                      <a href="Characters-by-Collection.html">Stargazers</a>
                    </li>
                    <li>
                      <a href="Characters-by-Collection.html">Tech Heroes</a>
                    </li>
                  </ul>
                </figure>
                <figure>
                  <figcaption>Products</figcaption>
                  <ul>
                    <li>
                      <a href="Product-List.html">
                        All products{' '}
                        <span className={styles.arrow} aria-hidden="true">
                          &rarr;
                        </span>
                      </a>
                    </li>
                    <li>
                      <a href="Product-List.html">Aprons</a>
                    </li>
                    <li>
                      <a href="Product-List.html">Framed Art</a>
                    </li>
                    <li>
                      <a href="Product-List.html">Hats</a>
                    </li>
                    <li>
                      <a href="Product-List.html">Mugs</a>
                    </li>
                    <li>
                      <a href="Product-List.html">Notebooks</a>
                    </li>
                    <li>
                      <a href="Product-List.html">Pillows</a>
                    </li>
                    <li>
                      <a href="Product-List.html">Tote Bags</a>
                    </li>
                    <li>
                      <a href="Product-List.html">Trading Cards</a>
                    </li>
                    <li>
                      <a href="Product-List.html">Tshirts</a>
                    </li>
                  </ul>
                </figure>
                <figure>
                  <figcaption>Gifts by price</figcaption>
                  <ul>
                    <li>
                      <a href="#">Under $20</a>
                    </li>
                    <li>
                      <a href="#">$20 – $30</a>
                    </li>
                    <li>
                      <a href="#">$30 – $40</a>
                    </li>
                    <li>
                      <a href="#">$40 – $50</a>
                    </li>
                    <li>
                      <a href="#">Over $50</a>
                    </li>
                  </ul>
                </figure>
              </div>
            </li>
            <li>
              <a href="Static-About.html">About</a>
              <div className={styles.wrapper}>
                <figure>
                  <figcaption>About Big Star Collectibles</figcaption>
                  <ul>
                    <li>
                      <a href="Static-About.html">About us</a>
                    </li>
                    <li>
                      <a href="#">Our story</a>
                    </li>
                    <li>
                      <a href="#">Our team</a>
                    </li>
                    <li>
                      <a href="#">FAQ</a>
                    </li>
                    <li>
                      <a href="#">Return policy</a>
                    </li>
                    <li>
                      <a href="#">Press center</a>
                    </li>
                    <li>
                      <a href="#">Privacy policy</a>
                    </li>
                    <li>
                      <a href="#">Blog</a>
                    </li>
                    <li>
                      <a href="Contact-Us.html">Contact us</a>
                    </li>
                    <li>
                      <figure>
                        <figcaption>Follow us</figcaption>
                        <ul>
                          <li>
                            <a href="#" target="_blank">
                              <svg width="24" height="24" viewBox="0 0 24 24" role="img">
                                <title>Instagram</title>
                                <path
                                  aria-hidden="true"
                                  d="M16.5 0H7.5C3.35625 0 0 3.35625 0 7.5V16.5C0 20.6438 3.35625 24 7.5 24H16.5C20.6438 24 24 20.6438 24 16.5V7.5C24 3.35625 20.6438 0 16.5 0ZM21.75 16.5C21.75 19.3875 19.3875 21.75 16.5 21.75H7.5C4.6125 21.75 2.25 19.3875 2.25 16.5V7.5C2.25 4.6125 4.6125 2.25 7.5 2.25H16.5C19.3875 2.25 21.75 4.6125 21.75 7.5V16.5ZM12 6C8.68125 6 6 8.68125 6 12C6 15.3188 8.68125 18 12 18C15.3188 18 18 15.3188 18 12C18 8.68125 15.3188 6 12 6ZM12 15.75C9.9375 15.75 8.25 14.0625 8.25 12C8.25 9.9375 9.9375 8.25 12 8.25C14.0625 8.25 15.75 9.9375 15.75 12C15.75 14.0625 14.0625 15.75 12 15.75ZM19.2562 5.55C19.2562 6 18.9 6.35625 18.45 6.35625C18 6.35625 17.6437 6 17.6437 5.55C17.6437 5.1 18 4.74375 18.45 4.74375C18.9 4.74375 19.2562 5.1 19.2562 5.55Z"
                                  strokeWidth="0"
                                />
                              </svg>
                            </a>
                          </li>
                          <li>
                            <a href="#" target="_blank">
                              <svg width="24" height="24" viewBox="0 0 24 24" role="img">
                                <title>Facebook</title>
                                <path
                                  aria-hidden="true"
                                  d="M21 0H3C1.35 0 0 1.35 0 3V21C0 22.65 1.35 24 3 24H12V15.75H9V12H12V9C12 6.50625 14.0062 4.5 16.5 4.5H19.5V8.25H18C17.175 8.25 16.5 8.175 16.5 9V12H20.25L18.75 15.75H16.5V24H21C22.65 24 24 22.65 24 21V3C24 1.35 22.65 0 21 0Z"
                                  strokeWidth="0"
                                />
                              </svg>
                            </a>
                          </li>
                          <li>
                            <a href="#" target="_blank">
                              <svg width="24" height="24" viewBox="0 0 24 21" role="img">
                                <title>Twitter</title>
                                <path
                                  aria-hidden="true"
                                  d="M24 3.15015C23.1007 3.54359 22.1639 3.80589 21.171 3.9183C22.1827 3.31877 22.9696 2.34453 23.3255 1.20167C22.37 1.76374 21.3208 2.17591 20.2155 2.40074C19.3162 1.44523 18.0234 0.845703 16.6183 0.845703C13.9016 0.845703 11.7096 3.05648 11.7096 5.75437C11.7096 6.14781 11.7471 6.52252 11.822 6.87849C7.7377 6.69114 4.12178 4.72392 1.68618 1.745C1.25527 2.47568 1.01171 3.31877 1.01171 4.21807C1.01171 5.92299 1.89227 7.42181 3.20375 8.30238C2.41686 8.28364 1.62998 8.05882 0.974239 7.70284C0.974239 7.72158 0.974239 7.74032 0.974239 7.75905C0.974239 10.1572 2.67916 12.1244 4.90867 12.5928C4.51522 12.7052 4.06557 12.7614 3.61593 12.7614C3.29742 12.7614 2.97892 12.7427 2.67916 12.6865C3.31616 14.6349 5.11475 16.0588 7.26932 16.115C5.60187 17.4265 3.46604 18.2134 1.18033 18.2134C0.76815 18.2134 0.393443 18.1946 0 18.1384C2.19204 19.5249 4.77752 20.3305 7.56909 20.3305C16.6183 20.3305 21.5644 12.8363 21.5644 6.33516C21.5644 6.11034 21.5644 5.90425 21.5457 5.69816C22.5199 5.00495 23.3255 4.14313 24 3.15015Z"
                                  strokeWidth="0"
                                />
                              </svg>
                            </a>
                          </li>
                          <li>
                            <a href="#" target="_blank">
                              <svg width="24" height="24" viewBox="0 0 24 18" role="img">
                                <title>YouTube</title>
                                <path
                                  aria-hidden="true"
                                  d="M23.0048 2.36448C22.348 1.20111 21.6537 0.9947 20.2089 0.919644C18.7641 0.807059 15.1426 0.769531 12.009 0.769531C8.87541 0.769531 5.25394 0.807059 3.82787 0.90088C2.38304 0.9947 1.67 1.20111 1.01326 2.36448C0.337753 3.50909 0 5.51684 0 9.02573C0 12.5158 0.337753 14.5236 1.01326 15.6682C1.67 16.8316 2.38304 17.038 3.80911 17.1318C5.25394 17.2256 8.87541 17.2819 12.009 17.2819C15.1426 17.2819 18.7641 17.2256 20.1901 17.1506C21.635 17.0568 22.3293 16.8503 22.986 15.687C23.6615 14.5424 23.9993 12.5346 23.9993 9.04449C24.018 5.51684 23.6803 3.50909 23.0048 2.36448ZM9.00676 13.5291V4.52235L16.5124 9.02573L9.00676 13.5291Z"
                                  strokeWidth="0"
                                />
                              </svg>
                            </a>
                          </li>
                        </ul>
                      </figure>
                    </li>
                  </ul>
                </figure>
              </div>
            </li>
            <li>
              <a href="Contact-Us.html">Contact</a>
            </li>
          </ul>
          <button type="button">
            Big Star Collectibles
            <Image
              imgData={{ root: 'icon-menu', width: 30, height: 24 }}
              folder={null}
              type="svg"
              alt="Site Navigation Panel"
            />
          </button>
        </nav>
        <div id={styles['search-widget']}>
          <button type="button" aria-expanded="false" aria-controls="search-popup">
            <Image
              imgData={{ root: 'icon-search-white', width: 36, height: 36 }}
              folder={null}
              type="svg"
              alt="Search Form"
            />
          </button>
          <div id={styles['search-popup']} aria-hidden="true">
            <form method="post" role="search">
              <input
                type="search"
                aria-label="Enter product name"
                placeholder="Search&hellip;"
                tabIndex="-1"
                required
              />
              <button type="submit" tabIndex="-1">
                Search
              </button>
            </form>
            <button type="button" tabIndex="-1">
              <Image
                imgData={{ root: 'icon-xmark', width: 26, height: 26 }}
                folder={null}
                type="svg"
                alt="Close"
              />
            </button>
          </div>
        </div>
        <a href="#">
          <Image
            imgData={{ root: 'icon-user-v01-white', width: 36, height: 36 }}
            folder={null}
            type="svg"
            alt="Account"
          />
        </a>
        <button type="button">
          <Image
            imgData={{ root: 'icon-shopping-cart-v01-white', width: 36, height: 33 }}
            folder={null}
            type="svg"
            alt="Cart Panel"
          />
          <span className="visually-hidden">(</span>
          <span className={styles.num}>6</span> <span className="visually-hidden">items)</span>
        </button>
      </header>
    </>
  );
};

export default Header;
