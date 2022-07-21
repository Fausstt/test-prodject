import React from 'react';
import Maovning from './Maovning/Maovning';
import './Abonent.scss';

const Abonent = () => (
  <div className='Abonent'>
    <ul className='Abonent__letters'>
      <Maovning />
      <Maovning />
      <Maovning />
      <Maovning />
      <Maovning />
      <Maovning />
      <Maovning />
      <Maovning />
    </ul>
    <div className='Abonent__movning'>
        <div className='number'>1</div>
        <div className='number'>2</div>
        <div className='number'>3</div>
        <div className='number'>4</div>
        <div className='number'>5</div>
        <div className='number'>6</div>
        <div className='number'>7</div>
        <div className='number'>8</div>
        <div className='number'>9</div>
        <div className='number'>10</div>
        <div className='number'>...</div>
        <div className='number12'>123</div>
        <div className='str'>➝</div>
    </div>
  </div>
);

export default Abonent;