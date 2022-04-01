import { useState, useEffect } from 'react';
import Wrapper from '../../components/Layout/Wrapper';
import WrapperCard from '../../components/Layout/Card/WrapperCard';
import ContainerCard from '../../components/Layout/Card/ContainerCard';
import TasksCard from '../../components/Layout/TasksCard';
import CustomContext from '../../components/Utils/CustomContext';
import ContainerInputCard from '../../components/Layout/Card/ContainerInputCard';
import InputCard from '../../components/Layout/Card/InputCard';
import ButtonCard from "../../components/Layout/Card/ButtonCard";
document.addEventListener('contextmenu', event => event.preventDefault());
let localStorage: any = window.localStorage;
function App() {
  const [todoTitle, setTodoTitle] = useState('');
  const [todoList, setTodoList] = useState(localStorage.getItem('todoList') ? JSON.parse(localStorage.getItem('todoList')) : [
    {
      title: 'Primeira tarefa',
      done: true,
    },
  ]);
  function handleDeleteTodo(index: number) {
    const newTodoList = [...todoList];
    newTodoList.splice(index, 1);
    setTodoList(newTodoList);
  }
  function addTodo(e:any) {
    e.preventDefault();
    if(todoTitle === ''){
      alert("Por favor, digite um item.")
    }else{
      const newTodoList = [...todoList, {title: todoTitle, priority: "Baixa", done: false}];
      setTodoList(newTodoList)
      setTodoTitle("");
    }
  }
  function finishTodo(index: number) {
    const newTodoList = [...todoList];
    newTodoList[index].done = true;
    setTodoList(newTodoList);
  }
  useEffect(() => {
    localStorage.setItem('todoList', JSON.stringify(todoList));
  }, [todoList]);
  return (
    <Wrapper>
    <WrapperCard>
      <ContainerCard>
      <div style={{width: '100%'}}>
        <h2>Tarefas</h2>
      </div>
      {todoList.sort((a,b) => (a.done > b.done) ? 1 : ((b.done > a.done) ? -1 : 0)).map((item, index) => (
          <CustomContext key={index} deleteTodo={() => handleDeleteTodo(index)} finishTodo={() => finishTodo(index)}>
            <TasksCard 
              title={item.title} 
              done={item.done} 
              onClick={() => finishTodo(index)}
            />
          </CustomContext>
      ))}
      </ContainerCard>
      <ContainerInputCard onSubmit={(e) => addTodo(e)}>
        <ButtonCard />
        <InputCard placeholder='Digite uma tarefa' value={todoTitle} onChange={(e:any) => setTodoTitle(e.target.value)}/>
      </ContainerInputCard>
    </WrapperCard>
  </Wrapper>
  );
}

export default App;
