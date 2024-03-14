import React, { useState } from 'react';
import '../styles/Main.css'; // Import the CSS file

export function Main() {
    const [inputName, setInputName] = useState('');
    const [inputIsComplete, setInputIsComplete] = useState('');
    const [inputId, setInputId] = useState('');
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

    const handleGetRequest = async () => {
        try {
            const response = await fetch(`https://localhost:7071/api/TodoItems/${inputId}`);
            const data = await response.json();
            setResponse(JSON.stringify(data));
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div className="CenterWrapper">
            <div className="Main"> {/* Use the Main class */}
                <h1>HTTP request to .NET Web API</h1>
                <form onSubmit={handleSubmit}>
                    <input type="text" value={inputName} placeholder="Name" onChange={handleInputChangeName}/>
                    <input type="text" value={inputIsComplete} placeholder="Is Complete (true/false)" onChange={handleInputChangeIsComplete}/>
                    <button type="submit">Submit</button>
                </form>
                <br />
                <form>
                    <input type="text" value={inputId} placeholder="ID" onChange={handleInputChangeId}/>
                    <button onClick={handleGetRequest}>Get Todo Item</button>
                    {response && <p>Response: {response}</p>}
                </form>
            </div>
        </div>
    );
}
