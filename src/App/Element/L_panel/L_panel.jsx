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
    <a className='L_panel__nav__masage'>
      <div>Сооищения</div>
      <div>3</div>
    </a>
    <div className='L_panel__nav__profel'>
      <a className='profel'>Профиль</a>
      
      <a className='profel'>Настройки</a>
    </div>
    <div className='L_panel__nav__help'>
      <a className='profel'>Вопросы</a>

      <a className='profel'>Написать модератору</a>
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

