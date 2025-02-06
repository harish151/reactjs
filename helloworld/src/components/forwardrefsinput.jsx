//rfce
import React from 'react'

// function forwardrefsinput() {
//   return (
//     <div>
//       <input type="text" />
//     </div>
//   )
// }
const ForwardRefsInput = React.forwardRef((props, ref) => {
    return (
      <div>
        <input type="text" ref={ref} />
      </div>
    );
  });
  
  export default ForwardRefsInput;