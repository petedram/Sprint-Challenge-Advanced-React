import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {listLen} from './components/ListPlayers';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

test("list loads to screen", () => {
  const arrayLength = listLen();

  expect(arrayLength).toBeGreaterThan(0);
 
 
 });