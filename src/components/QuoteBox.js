import React from 'react'
import { TwitterShareButton } from 'react-twitter-embed';

class QuoteBox extends React.Component {

    state = {
        randomIndex: Math.floor(Math.random() * (3 - 0) + 0),
        quotes: 
            [
            {quote: 
                `Limitations live only in our 
                minds. But if we use our imaginations, 
                our possibilities become limitless.`,
             author: `Jamie Paolinetti`,
             color: "red"
            },
            {
                quote: `Winning isn’t everything, but wanting to win is.`,
                author: `Vince Lombardi`,
                color: "green"
            },

            {
                quote: `If you’re offered a seat on a rocket ship, don’t ask what seat! Just get on.`,
                author: `Sheryl Sandberg`,
                color: "#5C73F2"
            },
            {
                quote: `Dream big and dare to fail.`,
                author: `Norman Vaughan`,
                color: "#ff567f"
            }
        ]

        
    }

    handleNewQuote = () => {
        const currentValue = this.state.randomIndex;

        let randomNum = Math.floor(Math.random() * (3 - 0) + 0);
        if(randomNum === currentValue) {
            if(currentValue === 0) {
                randomNum = 1;
            }
            else if(currentValue === 3){
                randomNum = 2;
            }
            else {
                randomNum = currentValue + 1;
            }
        }
        this.setState({
            randomIndex: randomNum,

        });
    }

    render() {


        const style = {

            wrapper: {
               height : "350px",
               width : "550px",
               background : "white",
               borderRadius : "5px",
               padding : "45px",
               position: "relative"
            },
            quote: {
                marginBottom: "25px",
                fontSize: "1.5rem",
                color: `${this.state.quotes[this.state.randomIndex].color}`
            },
            author: {
                textAlign: "right",
                color: `${this.state.quotes[this.state.randomIndex].color}`
            },

            newQuote: {
                background : `${this.state.quotes[this.state.randomIndex].color}`,
                width : "100px",
                height: "30px",
                outline: "none",
                border: "none",
                position: "absolute",
                right: "45px",
                top: "70%",
                cursor: "pointer"
               
                
            },
            container : {
                width: "100%",
                height: "100%",
                background: `${this.state.quotes[this.state.randomIndex].color}`,
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
            },
            shareWrapper: {
                position: "absolute",
                
                top: "70%",

            }
            
        }
         
        const randomNumberGenerator= () => {
            return Math.floor(Math.random() * (3 - 0) + 0);
         }
        
        return(
            <div style={style.container}>
            <div style= {style.wrapper} id="quote-box" >
                <h1 style={style.quote}>{this.state.quotes[this.state.randomIndex].quote} </h1>
                <p style={style.author}>--{this.state.quotes[this.state.randomIndex].author}</p>
                <button style={style.newQuote} onClick={this.handleNewQuote}>New Quote</button>

                <div style={style.shareWrapper}>
                <TwitterShareButton
            url={""}
            options={{ text: `${this.state.quotes[this.state.randomIndex].quote}  #quote` }}/> </div>
            
            </div>
        

    </div>
        );

        
    }
        
   

}

export default QuoteBox;