import React from 'react';
class Menu extends React.Component{
  handleClick=(e)=>{
    this.props.chooseVideo(e.target.value)
  }
  render(){
    return(
      <form onClick={this.handleClick}>
           <input type="radio" name='aaa' value='fast'/>Fast
           <input type="radio" name='aaa' value='slow'/>Fast
           <input type="radio" name='aaa' value='cute'/>Fast
           <input type="radio" name='aaa' value='eek'/>Fast
      </form>
    )
  }
}
export default Menu
