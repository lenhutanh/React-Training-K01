import { useState } from 'react';

const AddTodo = ({ onAddTodo }) => {
    const [inputValue, setInputValue] = useState('');
    return (
        <>
            <div className="row">
                <input 
                    type="text" 
                    value={inputValue} 
                    onChange={e => setInputValue(e.target.value)} 
                    placeholder="Add a todo"
                />
                <button onClick={() => {
                    onAddTodo(inputValue);
                    setInputValue('');
                }}>Add</button>
            </div>
        </>
    )
}

export default AddTodo;