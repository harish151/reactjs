//rfce
import React from 'react';
import ReactDOM from 'react-dom';

function portaldemo() {
  return ReactDOM.createPortal(
    <h1>Portal Demo</h1>,
    document.getElementById('portal-root')
  )
}

export default portaldemo
