// client/src/App.js
import React, { useEffect, useState } from 'react';
import api from './api';

function App() {
    const [message, setMessage] = useState("");

    useEffect(() => {
        api.get("/")
            .then(response => setMessage(response.data))
            .catch(error => console.error("Error fetching data:", error));
    }, []);

    return (
        <div className="text-center p-5">
            <h1 className="text-3xl font-bold">{message}</h1>
        </div>
    );
}

export default App;
