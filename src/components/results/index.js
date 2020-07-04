import React from 'react';
import ReactJson from 'react-json-view'
import { If, Then, Else } from '../if';
import './loader.scss';

function Result(props) {
  console.log(props.loading);
  return (
    <>
    {/* <ReactJson src={props.result} theme="monokai" /> */}
    {/* <img src="https://i.pinimg.com/originals/72/f1/a4/72f1a425e3ea3505929a30b8adabefb8.gif" className={`loading-${props.loading}`}/> */}
    {/* <If condition={!props.loading}> */}
          {/* <Then> */}
          <ReactJson id= "output" src={props.result}  /> 
          {/* </Then> */}
          {/* <Else>
          <img src="https://i.pinimg.com/originals/72/f1/a4/72f1a425e3ea3505929a30b8adabefb8.gif" />
          </Else> */}
        {/* </If> */}
        {/* <div className={`loading-${!props.loading}`}  id="output">
            <ReactJson src={props.result} />
        </div> */}
    </>
  );
}

export default Result;
