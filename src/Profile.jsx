// import React from 'react'

// const Profile = () => {

//     const names = ["sunny ", "ali", "ahmad", "abbas"]
//   return (
//     <div>
//       {names.length > 0 ? (
//         <ul>
//             {
//                 names.map((it, index)=>(
//                     <li key={index}>{it}</li>
//                 ))
//             }
//         </ul>
//       ):(
//         <p>no names sorry</p>
//       )}
//     </div>
//   )
// }

// export default Profile


import React from 'react'

const Profile = ()=>{

  const names = ["sunny", "ali", "abbas", "ahmad", "hamza", "atta"]
  return(
    <> 
       {names.length <0 ? (
          <ul>
            {names.map((items, index)=>(
              <li key={index}>{items}</li>
            ))}
          </ul>
       ):(
          <h1>sorry names was not founds...!</h1>
       )}
    </>
  )
}

export default Profile;