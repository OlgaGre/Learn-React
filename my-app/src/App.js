import React from 'react';
//Сделайте так, чтобы результатом рендеринга было следующее:

// <ul>
// 	<li>text1</li>
// 	<li>text2</li>
// 	<li>text3</li>
// </ul>

function App() {
	const li1 = <li>text1</li>;
	const li2 = <li>text2</li>;
	const li3 = <li>text3</li>;
  return <ul>
    {li1}
    {li2}
    {li3}
  </ul>
}

export default App;
