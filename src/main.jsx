import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { initFirebase } from './firebase/config.js'
// import './index.css'

// return <App/>
initFirebase()

ReactDOM.createRoot(document.getElementById('root')).render(<App />)
