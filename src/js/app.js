import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';

import helpers from './helpers';
import PastEventsList from './components/PastEventsList';

const { getSkParamsFromQuerystring } = helpers;

const urlParams = new URLSearchParams(window.location.search);
const backgroundColor = urlParams.get('style[background-color]') || 'black';
const textColor = urlParams.get('style[color]') || 'white';

document.body.style.backgroundColor = backgroundColor;
document.body.style.color = textColor;

ReactDOM.render(
  <PastEventsList />,
  document.getElementById('past-events-container'),
);
