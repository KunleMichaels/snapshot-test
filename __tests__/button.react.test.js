import React from 'react';
import Button from '../Button.react';
import renderer from 'react-test-renderer';

describe('Button component', () => {

    it('renders correctly', () => {
        const tree = renderer.create(<Button>Facebook</Button>).toJSON();
        console.log("TREE", tree)
        expect(tree).toMatchSnapshot();
    });

    
});