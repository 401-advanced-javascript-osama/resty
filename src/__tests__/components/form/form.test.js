import React from 'react';
import { shallow, mount } from 'enzyme';
import renderer from 'react-test-renderer';
import Form from '../../../components/form/form';

describe('<Form/>', () => {
    it('is alive at application start', () => {
        const form = shallow(<Form />);
        expect(form.find('main form .url input').exists()).toBeTruthy();
    });
    it('Does it properly store the users input into state?', () => {
        const form = mount(<Form />);
        const input = form.find('main form .url #url');
        const input2 = form.find('main form .method #get');
        input.simulate('change', { target: { value: 'localhoast://3000' } });
        input2.simulate('change', { target: { value: 'GET' } });
        const myForm = form.find('main form');
        myForm.simulate('submit');
        expect(form.state().request.url).toBe('localhoast://3000');
        expect(form.state().request.method).toBe('GET');
    });

    it('Does it properly display the users input in the output area on form submit?', () => {
        const form = mount(<Form />);
        const input = form.find('main form .url #url');
        const input2 = form.find('main form .method #get');
        input.simulate('change', { target: { value: 'localhoast://3000' } });
        input2.simulate('change', { target: { value: 'GET' } });
        const myForm = form.find('main form');
        myForm.simulate('submit');
        const div = form.find('main .result .method')
        const div2 = form.find('main .result .url')
        console.log(div.text());
        expect(div.text()).toBe('GET');
        expect(div2.text()).toBe('localhoast://3000');
    });
    it('Does it properly clear the form/state after the form is submitted?', () => {
        const form = mount(<Form />);
        const input = form.find('main form .url #url');
        const input2 = form.find('main form .method #get');
        input.simulate('change', { target: { value: 'localhoast://3000' } });
        input2.simulate('change', { target: { value: 'GET' } });
        const myForm = form.find('main form');
        myForm.simulate('submit');
        expect(form.state().url).toBe('');
        expect(form.state().methode).toBe('');
    });
});