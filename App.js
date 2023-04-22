import React from "react"
import ReactDOM from "react-dom/client"

const jsxheading = <h1 id="heading"> Namaste React </h1>

const HeadingComponent = () => {
    return (
        <div> 
            <h1> Heading Component </h1>
            {jsxheading}
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<HeadingComponent />)






//Assignment

// const elem1 = React.createElement('div', {}, [React.createElement('h1', {}, 'H1'), React.createElement('h2',{}, 'H2' ), React.createElement('h3', {}, 'H3')] )


// const elem2 = 
// <div> 
//     <h1> H1 JSX</h1>
//     <h2> H2 JSX</h2>
//     <h3> H3 JSX </h3>
// </div>


// const Elem3 = () => {
//     return (
//     <div>
//         <h1> H1 FC</h1>
//         <h2> H2 FC</h2>
//         <h3> H3 FC</h3>
//     </div>
// )}




// const Header = () => {
//     return (
//         <div id="header">
//             <img src=''></img>
//             <input type="text"></input> 
//             <img src='' ></img>        
//         </div>
//     )
// }


