import React from 'react';
// Сделайте функцию getDigitsSum, которая будет находить сумму цифр переданного числа. С ее помощью выведите на экран сумму цифр числа 123.

function App() {
	function getDigitsSum(num) {
    let result = 0
    let numberString = num.toString();
    for (let i = 0; i < numberString.length; i++) {
      result += parseInt(numberString[i]);
    }
 return result
    
  }
 let text = getDigitsSum(123)
	
	return <div>
	{text}
	</div>;
}
export default App;