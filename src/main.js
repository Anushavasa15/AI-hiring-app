import React from 'react'
import ReactDom from 'react-dom/client'
import './index.css'
import App from './App.js'

const root = ReactDom.createRoot(document.getElementById("root"))
root.render(React.createElement(React.StrictMode, null , React.createElement(App)))