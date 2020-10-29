import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import List from './List';

describe('List component', () => {
  it('List renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<List 
    key='0'
    header='test'
    cards={[]}
    />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('List renders the UI as expected', () => {
    const tree = renderer
      .create(<List key='0' header='test-2' cards={[]}/>)
      .toJSON();
    expect(tree).toMatchSnapshot();  
  });
});