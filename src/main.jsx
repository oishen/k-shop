import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import ShopContextProvider from './Component/ShopContext/ShopContext.jsx'
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.js"

ReactDOM.createRoot(document.getElementById('root')).render(
    <ShopContextProvider>
        <App />
    </ShopContextProvider>,
)