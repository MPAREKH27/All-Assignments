// import React, { useEffect, useState } from "react";

// function AutoFetchData() {
//   const [posts, setPosts] = useState([]);

//   useEffect(() => {
//     fetch("https://jsonplaceholder.typicode.com/posts")
//       .then((response) => response.json())
//       .then((data) => {
//         setPosts(data.slice(0, 5));
//       })
//       .catch((error) => console.log(error));
//   }, []);

//   return (
//     <div>
//       <h2>Posts</h2>

//       <button>Fetch Done Automatically</button>

//       <ul>
//         {posts.map((post) => (
//           <li key={post.id}>{post.title}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default AutoFetchData;