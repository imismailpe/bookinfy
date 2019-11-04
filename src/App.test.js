import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';

test('addition test',() => {
  expect(1-1).not.toBe(-1)
})
it('render of App',() => {
  const div2 = document.createElement('div')
  ReactDOM.render(<App/>,div2)
  ReactDOM.unmountComponentAtNode(div2)
})

it('snapshot match test',() => {
    const appTree = renderer.create(<App/>).toJSON();
    expect(appTree).toMatchSnapshot();
})
