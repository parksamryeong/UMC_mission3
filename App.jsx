import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'




function App() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [doneTodos, setDoneTodos] = useState([]);
  

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleEnterPress = (e) => {
    if (e.key === 'Enter' && inputValue.trim() !== '') {
      setTodos([...todos, inputValue.trim()]);
      setInputValue('');
    }
  };

  const handleComplete = (index) => {
    const completedTodo = todos[index];
    const newTodos = todos.filter((todo, i) => i !== index);
    setTodos(newTodos);
    setDoneTodos([...doneTodos, completedTodo]);
  };

  const handleDelete = (index) => {
    const newDoneTodos = doneTodos.filter((todo, i) => i !== index);
    setDoneTodos(newDoneTodos);
  };
  
  return (
    <>
      <div className='TodoContainer'>
        <h1>UMC Study Plan</h1>
        <input type = "text" className='inputTodo' placeholder="UMC 스터디 계획을 작성해보세요!" value={inputValue} onChange={handleInputChange} onKeyDown={handleEnterPress}/>

        <div className='ListContainer'>
          <div className='List'>
            <h2>해야할 일</h2>
            <ul>
              {todos.map((todo, index) => (
                <li key={index}>{todo}<span className='wrapper'><button className='btn1' onClick={() => handleComplete(index)}>
                  완료
                  </button></span>
                  </li>
              ))}
            </ul>
          </div>

          <div className='List'>
            <h2>해낸 일</h2>
            <ul>
              {doneTodos.map((todo, index) => (
                <li key={index}>{todo}<span className='wrapper'><button className='btn2' onClick={() => handleDelete(index)}>
                삭제
                </button></span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
     </>
  );
}

export default App;
