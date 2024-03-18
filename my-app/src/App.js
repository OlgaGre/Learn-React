import React from 'react';
//Сделайте так, чтобы по клику на первую кнопку алертом выводилось число 1, по клику на вторую кнопку - число 2, а по клику на третью - число 3.

function App() {
  function alertNum(num) {
    alert(num)
  }
	return <div>
		<button onClick={() => alertNum('1')}>act1</button>
		<button onClick={() => alertNum('2')}>act2</button>
		<button onClick={() => alertNum('3')}>act3</button>
	</div>;
}
export default App;