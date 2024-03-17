import React from 'react';
// Пусть в константе isAdult содержится true, если пользователю уже есть 18 лет, и false, если нет
// Сделайте так, чтобы в зависимости от значения isAdult на экране показался или один абзац с текстом, или другой.

function App() {
  let text;
  const isAdult = true;
  if (isAdult) {
    text = "взрослый"
  } else {
    text = "ребенок"
  }
return <div>
  {text}
</div>
}

export default App;