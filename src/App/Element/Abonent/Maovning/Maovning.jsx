import React from 'react';
import './Maovning.scss';

const Maovning = ({
    mark = '□',
    icon = '☢',
    name = 'Fuul Name',
    mark2 = '☣',
    text = 'тут должен быть текст',
    data = '00/00/0000',
    time = '00:00'
  }) => (
  <li className='list'>
    <div id='mark' className='list__marc '>{mark}</div>
    <div className='list__icon '>{icon}</div>
    <div className='list__name '>{name}</div>
    <div className='list__marc2 '>{mark2}</div>
    <div className='list__text '>{text}</div>
    <div className='list__data '>{data}</div>
    <div className='list__time '>{time}</div>
  </li>
);

export default Maovning;