import React from 'react';
import heroImage from '../../images/hero-image.png';
import calcImage from '../../images/calculator.png';
import timerImage from '../../images/timer.png';
import { Link } from 'react-router-dom';
import '../styles/home.less';

export default function Home() {
  return (
    <>
      <div className='hero-image'>
        <h1>在线实用工具</h1>
      </div>
      <div className='body-nav'>
        <div className='col'>
          <img src={calcImage} />
          <Link to='/calc'>计算器</Link>
        </div>
        <div className='col'>
          <img src={timerImage} />
          <Link to='/timer'>计时器</Link>
        </div>
      </div>
    </>
  );
}
