import './App.css'
import { Component } from 'react'
import { Collection } from './Components/Collection'
import { SectionList } from './Components/SectionList'
import { pokemon } from './pokemondata'
class App extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    return (
      <div className="border app-cont">
        <Collection pokemons={pokemon} />
        <SectionList />
      </div>
    )
  }
}
export default App;
