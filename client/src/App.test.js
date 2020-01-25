import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {apiFail} from './components/ListPlayers';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

test("API call did not fail", () => {
  const fail = apiFail();
  expect(fail).toBe(0);

 });