import React from 'react';
class Video extends React.Component{
  render(){
return(
  <video src={this.props.vSource} autoPlay controls ></video>
)
  }

}
export default Video