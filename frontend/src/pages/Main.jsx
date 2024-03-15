import React, { useState } from 'react';
import '../styles/Main.css'; // Import the CSS file

export function Main() {
    const [inputName, setInputName] = useState('');
    const [inputIsComplete, setInputIsComplete] = useState('');
    const [inputId, setInputId] = useState('');
    const [deleteId, setDeleteId] = useState('');
    const [putId, setPutId] = useState('');
    const [putName, setPutName] = useState('');
    const [putIsComplete, setPutIsComplete] = useState('');
    const [response, setResponse] = useState('');

    const handleInputChangeName = (event) => {
        setInputName(event.target.value);
    };

    const handleInputChangeIsComplete = (event) => {
        setInputIsComplete(event.target.value);
    };

    const handleInputChangeId = (event) => {
        setInputId(event.target.value);
    };

    const handleInputChangeDeleteId = (event) => {
        setDeleteId(event.target.value);
    };

    const handlePutInputChangeId = (event) => {
        setPutId(event.target.value);
    };

    const handlePutInputChangeName = (event) => {
        setPutName(event.target.value);
    };

    const handlePutInputChangeIsComplete = (event) => {
        setPutIsComplete(event.target.value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await fetch('https://localhost:7071/api/TodoItems', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: inputName,
                    isComplete: inputIsComplete.toLowerCase() === 'true',
                }),
            });

            const data = await response.json();
            setResponse(JSON.stringify(data));
        } catch (error) {
            console.error('Error:', error);
        }
    };

    const handleGetRequest1 = async () => {
        try {
            const response = await fetch(`https://localhost:7071/api/TodoItems/${inputId}`);
            const data = await response.json();
            setResponse(JSON.stringify(data));
        } catch (error) {
            console.error('Error:', error);
        }
    };

    const handleGetRequest2 = async () => {
        try {
            const response = await fetch('https://localhost:7071/api/TodoItems/');
            const data = await response.json();
            setResponse(JSON.stringify(data));
        } catch (error) {
            console.error('Error:', error);
        }
    };

    const handlePutRequest = async () => {
        try {
            const response = await fetch(`https://localhost:7071/api/TodoItems/${putId}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    id: parseInt(putId),
                    name: putName,
                    isComplete: putIsComplete.toLowerCase() === 'true',
                }),
            });

            if (response.ok) {
                setResponse('Item updated successfully');
            } else {
                setResponse('Failed to update item');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    const handleDeleteRequest = async () => {
        try {
            const response = await fetch(`https://localhost:7071/api/TodoItems/${deleteId}`, {
                method: 'DELETE',
            });

            if (response.ok) {
                setResponse('Item deleted successfully');
            } else {
                setResponse('Failed to delete item');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div className="CenterWrapper">
            <div className="Main">
                <br/>

                <h1>HTTP request to .NET Web API</h1>
                <form onSubmit={handleSubmit}>
                    <input type="text" value={inputName} placeholder="Name" onChange={handleInputChangeName}/>
                    <input type="text" value={inputIsComplete} placeholder="Is Complete (true/false)"
                           onChange={handleInputChangeIsComplete}/>
                    <button type="submit">Submit</button>
                </form>
                <br/>
                <input type="text" value={inputId} placeholder="ID for GET" onChange={handleInputChangeId}/>
                <button onClick={handleGetRequest1}>Get Item</button>
                <br/>
                <button onClick={handleGetRequest2}>Get All Item</button>
                <br/>
                <input type="text" value={putId} placeholder="ID for PUT" onChange={handlePutInputChangeId}/>
                <input type="text" value={putName} placeholder="Name for PUT" onChange={handlePutInputChangeName}/>
                <input type="text" value={putIsComplete} placeholder="Is Complete for PUT"
                       onChange={handlePutInputChangeIsComplete}/>
                <button onClick={handlePutRequest}>Update Item</button>
                <br/>
                <input type="text" value={deleteId} placeholder="ID for DELETE" onChange={handleInputChangeDeleteId}/>
                <button onClick={handleDeleteRequest}>Delete Item</button>
                <br/>
                <br/>
                {response && <p>Response: {response}</p>}

            </div>
        </div>
    );
}
