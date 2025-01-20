import { useState } from 'react'
import { Button, Form, FormGroup, Input, Label } from 'reactstrap'

const NewUserForm = ({onSubmit}) => {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');

    const handleFirstNameChange = e => {
        setFirstName(e.target.value);
    }

    const handleLastNameChange = e => {
        setLastName(e.target.value);
    }
    const handleSubmit = e => {
        e.preventDefault();

        onSubmit({
            firstName,
            lastName,
        });

        setFirstName('');
        setLastName('');
    }
  return (
    <Form onSubmit={handleSubmit}>
        <FormGroup>
            <Label>
                First Name
            </Label>
            <Input placeholder='First name' onChange={handleFirstNameChange} value={firstName}/>
        </FormGroup>
        <FormGroup>
            <Label>
                Last Name
            </Label>
            <Input placeholder='Last name' onChange={handleLastNameChange} value={lastName}/>
        </FormGroup>
        <FormGroup>
            <Button block outline type='submit' color='primary'>
                Create
            </Button>
        </FormGroup>
    </Form>
  )
}

export default NewUserForm