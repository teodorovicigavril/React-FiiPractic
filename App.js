import React from 'react'
import './App.css'
import CLoseButton from './components/CloseButton'
import Form from './components/Form'

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      name: 'john'
    }
  }

  componentDidMount(){
    console.log(this.state.name);
    this.setState({
      name: 'gabii',
      isOn: true
    })
  }

  /*
  shouldComponentUpdate(nextProps, nextState){
    if(this.state.name !== nextState.name){
      return true;
    }
    return false;
  }
  */

  handleButton = () => {
    this.setState({
      isOn: !this.state.isOn
    })
  }

  render(){
    const {isOn, name} = this.state
    console.log('render')
    return (
      <div className="main" style={{"color": "red"}}>
        <h1>{name}</h1>
        {isOn ? <CLoseButton handleButton={this.handleButton} name={this.state.name}/> : <Form />}
      </div>
    );
  }
}


export default App;
