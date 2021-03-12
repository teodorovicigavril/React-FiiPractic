import React from 'react'

/*
const SecondButton = () => {
    return (
        <h1>second button</h1>
    )
}

const printName = (name) => {
    console.log(name)
}
*/

const CloseButton = (props) => {
    return(
        <div>
            <button onClick={() => props.handleButton()}>
                {props.name}
            </button>
        </div>
    )
}

/*
const CloseButton = (props) => {
    return (
        <div>
            <h1>{props.name}</h1>
            <p>{props.tag}</p>
        </div>
    )
}
*/

/*
class CloseButton extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            value: 'Text button'
        }
    }

    changeName(){
        this.setState({
            value: "text 2"
        })
    }

    componentWillUnmount(){
        console.log('unmount')
    }

    render(){
        return(
            <button onClick={()=>this.props.handleButton()}>
                {this.state.value}
            </button>
        )
    }
    
}
*/

export default CloseButton