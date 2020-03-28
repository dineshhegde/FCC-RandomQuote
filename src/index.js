import React from 'react'
import ReactDOM from 'react-dom'
import QuoteBox from './components/QuoteBox';
const App = () => {

    const style = {
        container : {
            width: "100%",
            height: "100%",
            background: "none",
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
        }
    }

    return(
        <div style={style.container}>
           <QuoteBox />
        </div>
    )
}

ReactDOM.render(<App />,document.querySelector("#root")) ;