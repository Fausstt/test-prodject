import React from 'react';

import Header from './Header/Header';
import L_panel from './L_panel/L_panel';
import Abonent from './Abonent/Abonent';

import './Element.scss';

const Element = () => (
  <div className='element'>
    <L_panel />
    <Header />
    <Abonent />
  </div>
);

export default Element;