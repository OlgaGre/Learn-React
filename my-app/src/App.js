import React from 'react';
// //С помощью этого массива сформируйте следующий код:

// <ul>
// 	<li>a</li>
// 	<li>b</li>
// 	<li>c</li>
// 	<li>d</li>
// 	<li>e</li>
// </ul>

function App() {
	const arr = ['a', 'b', 'c', 'd', 'e'];
  let li = arr.map(function(item) {
		return <li>{item}</li>;
	});
  return <ul>
    {li}
  </ul>

}
export default App;