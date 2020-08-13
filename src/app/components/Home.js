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
        <div>在线实用工具</div>
        <img src={heroImage} style={{ visibility: 'hidden' }} />
      </div>

      <div className='row'>
        <div>
          <img src={calcImage} alt='calculator link' />
          <div>
            <Link to='/calc'>计算器</Link>
          </div>
        </div>
        <div>
          <img src={calcImage} alt='calculator link' />
          <div>
            <Link to='/timer'>计时器</Link>
          </div>
        </div>
      </div>
    </>
  );
}
