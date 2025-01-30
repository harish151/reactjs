import React from 'react';

function List() {
   const names = ['rC@18072021', 'james', 'jonny', 'jenny'];
   const namelist = names.map((i,index) => <h2 key={index}>{i}</h2>);
  
//   const persons = [
//     { id: 1, name: 'abc' },
//     { id: 2, name: 'xyz' }
//   ];

//   const personList = persons.map(person => {
//     return (
//       <h2 key={person.id}>
//         I am {person.name} bearing id: {person.id}
//       </h2>
//     );
//   });

  return (
    <div>
      {namelist}
      {/* {personList} */}
    </div>
  );
}

export default List;
