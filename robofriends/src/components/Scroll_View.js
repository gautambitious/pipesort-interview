import React from 'react';

const Scroll_View= (props) => {
  return(
    <div style={{overflowY: 'scroll',border: '1px solid black' ,marginTop: '20px',maxHeight:'500px'}}>
      {props.children}
    </div>
  )
}
export default Scroll_View;
