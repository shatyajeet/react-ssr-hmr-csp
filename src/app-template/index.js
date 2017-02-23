import React from 'react';
import {Link} from 'react-router';

const Template = ({children}) => {
  return (
    <div className='template'>
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/about'>About</Link></li>
      </ul>
      {children}
    </div>
  );
};

export default Template;
