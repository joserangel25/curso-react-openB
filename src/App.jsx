// import { useState } from 'react';
// import './App.css'
import TaskList from './components/containers/TaskList';
import ContactosContainer from './components/containers/ContactosContainer';

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className="App">
      {/* Componente de listado de tareas */}
      <TaskList />
      <ContactosContainer />
    </div>
  )
}

export default App
