import React from "react"
import ReactDOM from "react-dom/client"


const Header = () => {
    return (
        <div className="header">
            <img src="https://i.pinimg.com/originals/d2/82/c8/d282c8b0f4af7e8354081882ea4ae191.png" className="logo" />
            
            <nav className="nav-links">
                <ul>
                    <li> Home </li>
                    <li> About </li>
                    <li> Cart </li>
                </ul>
            </nav>
        </div>
    )
}

const App = () => {
    return (
        <div className="app">
            <Header />

        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App />)
