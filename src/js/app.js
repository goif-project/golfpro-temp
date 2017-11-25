import React from 'react';
import ReactDOM from 'react-dom';

// stylus読み込み
import styles from '../stylus/style.styl'

import {agoTest} from './ago'

ReactDOM.render(
  <div>Hello React!!</div>,
  document.getElementById('app'),
);

agoTest();
