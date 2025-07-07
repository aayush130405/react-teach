import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import React from 'react'

function MyApp() {
    return (
        <div>
            <h1>This is my custom app</h1>
        </div>
    )
}

const reactElement = React.createElement(
    'a', {href: 'http://google.com', target: '_blank'}, "Click Me"
) 


createRoot(document.getElementById('root')).render(
    <App />
)
