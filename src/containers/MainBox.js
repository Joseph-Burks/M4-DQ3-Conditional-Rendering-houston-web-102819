import React from 'react'
import MenuBar from '../components/MenuBar.js'
import { Profile, Photos, Cocktails, Pokemon} from '../components/Pages.js'

class MainBox extends React.Component {

  state = {
    activeItem: 'profile'
  }

  handleClick = (e) => {
    this.setState({activeItem: e.target.id})
  }

  render() {

    /*

    Replace the code below! Depending on what menu item is selected in the menu, I should render either a Profile, Photos, Cocktails, or Pokemon component.Think of a way to track which menu item was selected. Which component should have state? Which component should have methods to control state? Where should these methods be called?

    */

    let detailsToDisplay = <div>Hi, I'm a div!</div>
    if(this.state.activeItem === 'profile'){
      detailsToDisplay = <Profile />
    }
    if(this.state.activeItem === 'photo'){
      detailsToDisplay = <Photos />
    }
    if(this.state.activeItem === 'cocktail'){
      detailsToDisplay = <Cocktails />
    }
    if(this.state.activeItem === 'pokemon'){
      detailsToDisplay = <Pokemon />
    }

    return (
      <div>
        <MenuBar onClick={this.handleClick} activeItem={this.state.activeItem}/>
        {detailsToDisplay}
      </div>
    )
  }

}

export default MainBox
