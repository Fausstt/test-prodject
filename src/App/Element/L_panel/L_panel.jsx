import React from 'react';
import './L_panel.scss';
import galca from './galca.png'

const L_panel = () => (
  <div className='L_panel'>
    <Pfoto />
    <Nav />
    <Knop />
  </div>
);


const Pfoto = () => (
  <div className='L_panel__pfoto'>
    <img className='galca' src={galca}/>
  </div>
);


const Nav = () => (
  <div className='L_panel__nav'>
    <div className='L_panel__nav__masage'>
      <div>Сооищения</div>
      <div>3</div>
    </div>
    <div className='L_panel__nav__profel'>
      <div>Профиль</div>
      <br />
      <div>Настройки</div>
    </div>
    <div className='L_panel__nav__help'>
      <div>Вопросы</div>
      <br />
      <div>Написать модератору</div>
    </div>

  </div>
);

const Knop = () => (
  <div className='L_panel__knop'>
    <div className='L_panel__knop__text'>
      Купить  подписку
    </div>
  </div>
);

export default L_panel;

