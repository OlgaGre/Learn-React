import React from 'react';
//Сделайте так, чтобы результатом рендеринга был тег ul, в тегах li которого будут стоять элементы массива.

function App() {
	const arr = [1, 2, 3, 4, 5];
  let result 
  function liFromArr()  {
    for (let i = 0; i < arr.length; i++) {
  result +=  `<li>${arr[i]} </li>`;
}
  }
  liFromArr()
return <ul>
{result}
</ul>
}

export default App;
