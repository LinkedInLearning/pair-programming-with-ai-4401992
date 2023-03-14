import React from 'react';
import Head from './Head';
import Header from './Header';
import Main from './Main';
import Collections from './Collections';
import Footer from './Footer';
import styles from './Layout.module.css';
// import '../../public/css/home.css';

export const Layout = () => {
  return (
    <>
      <Head />
      <div id={styles.skip}>
        <a href="#main">Skip to main content</a>
      </div>
      <Header />
      <Main />
      <Collections />
      <Footer />
    </>
  );
};

export default Layout;
