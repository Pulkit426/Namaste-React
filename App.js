import React from "react"
import ReactDOM from "react-dom/client"

const div = React.createElement('div', {id: 'div1'}, 
React.createElement('div', {id: 'div2'} , 
[
    React.createElement('h2', {id: 'heading'} , "Hello World from React"),
    React.createElement('h1', {id: 'heading2'} , "Hello World from React")
]
)
)



const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(div)