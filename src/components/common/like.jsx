import React, { Component } from "react";

//Input: liked: boolean
//Events: onClick

const Like = (props) => {
  let classes = "fa-heart fa";
  //console.log(this.props.liked);
  classes += props.liked === true ? "s" : "r";
  return (
    <i
      className={classes}
      onClick={props.onLike}
      style={{ cursor: "pointer" }}
    ></i>
  );
};

export default Like;
