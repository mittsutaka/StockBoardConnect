import React from 'react';
import ReactDOM from 'react-dom';
import ReactDOMServer from 'react-dom/server';

import { Tutorial } from './Tutorial.jsx';

// any css-in-js or other libraries you want to use server-side
import { ServerStyleSheet } from 'styled-components';
import Helmet from 'react-helmet';

global.React = React;
global.ReactDOM = ReactDOM;
global.ReactDOMServer = ReactDOMServer;

global.Styled = { ServerStyleSheet };
global.Helmet = Helmet;

global.Components = { Tutorial};