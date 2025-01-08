// src/index.js

import React from 'react';
import ReactDOM from 'react-dom';
import Game from './components/Game';
import './assets/styles.css';

const rootElement = document.getElementById('root');
ReactDOM.render(<Game />, rootElement);