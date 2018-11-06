import React, { Component } from "react";
const Like = props => {
  let heart = "fa fa-heart";
  if (!props.liked) heart += "-o";
  return (
    <i
      onClick={props.onClick}
      style={{ cursor: "pointer" }}
      className={heart}
      aria-hidden="true"
    />
  );
};

export default Like;
// class Like extends Component {
//   //   state = {
//   //     liked: false
//   //   };
//   //   handleToggle = () => {};
//   //   toggleLike = () => {
//   //     this.setState({ liked: !this.state.liked });
//   //   };
//   render() {

//   }
// }

// export default Like;
