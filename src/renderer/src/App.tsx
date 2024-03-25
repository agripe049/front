import { useEffect, useState } from 'react'
import Form from './components/Form'
import List from './components/List'
import { Task } from './Task'
import API from './utils/API'

function App(): JSX.Element {
  const [tarefas, setTarefas] = useState<Task[]>([])
  
  const getTasks = async () => {
    const {data , error} = await API.get('/tasks')
    if(data.length > 0){
      setTarefas(data)
    }
    
  }

  useEffect(()=>{
    getTasks()

  },[])
  
  return (
    <>
      <Form setTarefas={setTarefas} tarefas={tarefas} />
      <List tarefas={tarefas} />
    </>
  )
}

export default App
