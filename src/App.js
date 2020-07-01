import React, { Fragment } from 'react';
import './App.css';
import { isBrowser, isTablet } from 'react-device-detect';
import LandingPage from './BrowserView/LandingPage/LandingPage';
import MobileLandingPage from './MobileView/LandingPage/LandingPage';



function App() {

  return (
    <Fragment>
      {isBrowser || isTablet ? <LandingPage /> : <MobileLandingPage />}
      <footer class="footer-cls">
        <div class="container">
          <div class="d-inline-flex text-white footer-cls">
            <div class="p-2">
              Chemilea, World’s First Wikipedia of scientific information for chemicals.
              Chemilea is the first world’s chemical directory to provide chemical information and properties. You can search for chemicals by their common name, SMILES Code, InChI or CAS number.
              With this chemical directory, you can find physical and chemical properties, safety information, toxicity levels, biological activities and much more.
              Chemilea is not a supplier directory and does not show information of chemical suppliers.
              Chemilea is an initiative of Carbanio.com, which has already flourished as India’s largest B2B chemical marketplace with more than 5 million products listed by chemical suppliers from India.
            </div>
          </div>
          {/* <div className="d-flex flex-row-reverse p-1">© 2020 ALL RIGHT RESERVED BY CHEMILEA. </div> */}
        </div>
      </footer>
    </Fragment>
  );
}

export default App;
