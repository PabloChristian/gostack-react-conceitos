import React , { useState, useEffect } from 'react';
import Header from './components/Header';
import './App.css';
import backgroundImage from './assets/background.jpeg';
import api from './services/api';

function App() {
  const [projects, setProjects] = useState(['Desenvolvimento de app', 'Front-end web']);

  useEffect(() => {
    api.get('projects').then(response => {
      console.log(response);
    })
  }, []);

  function handleAddProject() {
    // utilizamos spread operator para criar um novo array
    setProjects([...projects, `Novo projeto ${Date.now()}`]) 
    console.log(projects);
  }

  return (
    <>
      <Header title="Projects" />
      <img width={300} src={backgroundImage}/>
      <ul>
        {projects.map(project => <li key={project}>{project}</li>)}
      </ul>

      <button type="button" onClick={handleAddProject}>Adicionar projeto</button>
    </>
  );
}

export default App;