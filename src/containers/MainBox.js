import React from 'react'
import MenuBar from '../components/MenuBar.js'
import { Profile, Photos, Cocktails, Pokemon} from '../components/Pages.js'

class MainBox extends React.Component {

  constructor(){
    super()
    this.state = {
      choice: 'profile'
    }
  }

  handleChoice = event => {

    this.setState({
      choice: event.target.id
    })
  }

  handleContent = () => {
    if(this.state.choice==='photo'){
      return Photos()
    }
    else if(this.state.choice==='cocktail'){
      return Cocktails()
    }
    else if(this.state.choice==='profile'){
      return Profile()
    }
    else if(this.state.choice==='pokemon'){
      return <Pokemon />
    }

    return [this.state.choice]

  }


  render() {

    /*

    Replace the code below! Depending on what menu item is selected in the menu, I should render either a Profile, Photos, Cocktails, or Pokemon component.Think of a way to track which menu item was selected. Which component should have state? Which component should have methods to control state? Where should these methods be called?

    */
    return (
      <div>
        <MenuBar pressAButton={this.handleChoice}/>
        {this.handleContent()}
      </div>
    )
  }

}

export default MainBox
