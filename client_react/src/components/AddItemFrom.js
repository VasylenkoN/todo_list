import React from "react";
import {Button, Form, FormControl, InputGroup} from "react-bootstrap";

const AddItemFrom = ({onItemCreate}) => {
    const [newItem, setNewItem] = React.useState('');
    const onChange = (event) => {
        setNewItem(event.target.value);
    };
    const onCreate = (event) => {
        event.preventDefault();
        onItemCreate(newItem);
        setNewItem('');

    };

    return (
        <Form onSubmit={onCreate}>
            <InputGroup>
                <FormControl
                    value={newItem}
                    onChange={onChange}
                    type='text'
                    placeholder="New Item"
                />
                <Button
                    type='submit'
                    variant='primary'
                    disabled={!newItem.length}>
                    Add
                </Button>

            </InputGroup>
        </Form>
    );


};
export default AddItemFrom;
