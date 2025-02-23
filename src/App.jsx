import { useState } from 'react';
import './App.css';

const App = () => {
  const [inputText, setInputText] = useState('');
  const [displayText, setDisplayText] = useState('');

  const handleChange = (e) => {
    setInputText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setDisplayText(inputText.toUpperCase());  // формат текста uppercase
    setInputText('');  // очищаем поле ввода    
  };


  return (
    <div className="App">
      <h1>Форматирование текста</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          required //обязательное
          value={inputText}
          onChange={handleChange}
          placeholder="Напишите здесь"
        />
        <button
          type='submit'
        >Добавить</button>
      </form>

      {displayText && (
        <p className="formatted-text">{displayText}</p>
      )}
    </div>
  );
}

export default App;