import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import ContactForm from './ContactForm';
import userEvent from '@testing-library/user-event';
import { act } from 'react-dom/test-utils';

test('renders ContactForm without errors', async () => {
    render(<ContactForm />);

    const firstName = screen.getByPlaceholderText(/edd/i);
    fireEvent.change(firstName, {target: {value: 'Stephanie'}});
   

    const lastName = screen.getByPlaceholderText(/burke/i);
    fireEvent.change(lastName, {target: {value: 'Enciso'}});


    const email = screen.getByLabelText(/email/i);
    userEvent.type(email, 'anime@cutelilpup.com');


    const message = screen.getByLabelText(/message/i);
    userEvent.type(message, 'done and done');
    act(() => {
        const button = screen.getByRole('button');
    userEvent.click(button);
    });
    

    const newUser =  screen.findByText(/Stephanie/i);
    expect(newUser).toMatchObject(/Stephanie/i);
});




