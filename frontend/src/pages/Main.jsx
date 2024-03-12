import React, {useState} from 'react';
import '../styles/Main.css'; // Import the CSS file

export function Main() {
    const [input1, setInput1] = useState('');
    const [input2, setInput2] = useState('');
    const [response, setResponse] = useState('');

    const handleInputChange1 = (event) => {
        setInput1(event.target.value);
    };

    const handleInputChange2 = (event) => {
        setInput2(event.target.value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            // need to change the URL to the backend server to make the fetch request
            const response = await fetch('http://localhost:8080', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    input1,
                    input2,
                }),
            });

            const data = await response.json();
            setResponse(data.result);
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div className="CenterWrapper">
            <div className="Main"> {/* Use the Main class */}
                <h1>Main</h1>
                <form onSubmit={handleSubmit}>
                    <input type="text" value={input1} placeholder="input1" onChange={handleInputChange1}/>
                    <input type="text" value={input2} placeholder="input2" onChange={handleInputChange2}/>
                    <button type="submit">Submit</button>
                </form>
                {response && <p>{response}</p>}
            </div>
        </div>
    );
}
