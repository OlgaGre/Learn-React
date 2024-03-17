import React from 'react';
// Если в age записано больше 18 лет, то в тексте тега div покажите пользователю абзац с одним текстом, а если меньше - то с другим.

function App() {
	const age = 1;
	
	return <div>
		{age <= 18? 'less':'more'}
	</div>;
}
export default App;