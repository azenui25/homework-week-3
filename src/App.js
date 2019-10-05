import React from 'react';
import './App.css';
import { connect } from 'react-redux'
import ModelDetails from './components/ModelDetails'

class App extends Component {
  state = {
    value: "",
}

updateSelection =(event) => {
  this.setState({value: event.target.value})
}

handleClick = (event) => {
  this.props.dispatch({
    type: 'ADD_MODEL',
    payload: {
      name: this.state.value
    }
  })
}

render() {
  console.log('model', this.props)
  return (
    <div className="App">
      <header className="App-header">
        <hi>Computer Models</hi>
      </header>
      <main>
      <label>select Model:</label>
      <select value={this.state.value} onChange={this.updateSelection}>
        <option value="">-- pick a model --</option>
        {this.state.data.map(model => {
          return <option key={model.name} value={model.name}>{model.name} ({model.year})</option>
        })}

      </select>

      <button  onClick={this.handleClick}>Add</button>

      <ModelDetails />
      </main>

      
    </div>

  )

}
}


const data = [
  {
    name: "Ivel Z3",
    manufacturer: "Ivasim",
    year: 1969,
    origin: "Croatia"
  },
  {
    name: "Bally Astrocade",
    manufacturer: "Bally Consumer Products",
    year: 1977,
    origin: "USA"
  },
  {
    name: "Sord M200 Smart Home Computer",
    manufacturer: "Sord Computer Corporation",
    year: 1971,
    origin: "Japan"
  },
  {
    name: "Commodore 64",
    manufacturer: "Commodore",
    year: 1982,
    origin: "USA"
  }
]


const  mapStateToProps = (state) => {
  console.log('mapStateToProps', state)
  return {
    models: state.model
  }
}

export default connect(mapStateToProps)(App)