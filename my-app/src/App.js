import React from 'react';
//Используя созданную вами функцию getDigitsSum выведите в абзац сумму цифр числа 12345.

function App() {
	function getDigitsSum(num) {
    let result = 0
    let numberString = num.toString();
    for (let i = 0; i < numberString.length; i++) {
      result += parseInt(numberString[i]);
    }
 return result
    
  }

	
	return <div>
	{getDigitsSum(12345)}
	</div>;
}
export default App;