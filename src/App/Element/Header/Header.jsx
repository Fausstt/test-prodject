import React from 'react';
import './Header.scss';

const Header = () => (
  <div className='Header'>
    <Redachin />
    <Nav />
    <Search />
  </div>
);

const Redachin = () => (
  <div className='Header__redachin'>
    <div className='Header__redachin__delet'>Удалить</div>
    <div>Добавить в архив</div>
  </div>
);

const Nav = () => (
  <div className='Header__nav'>
    <div className='Header__nav__arf'>Непрочитаные</div>
    <div>Архив</div>
  </div>
);

const Search = () => (
  <div className='Header__searh'>
    <div className='Header__searh__rh'>
      Искать 🡢
    </div>
  </div>
);

export default Header;