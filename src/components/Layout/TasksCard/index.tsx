import { useState } from "react";
import { Container, Content ,Checkbox, InfoTask, CustomTrashIcon } from './styles';
interface TasksCardProps {
  title: string;
  priority?: string,
  done: boolean,
  onClick: () => void,
  deleteTodo: () => void,
}

function TasksCard({ title, priority, done, onClick, deleteTodo }: TasksCardProps) {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <Container done={done} onMouseOver={() => (
      setIsVisible(true)
    )} onMouseOut={() => (
      setIsVisible(false)
    )}>
      <Content>
        <Checkbox done={done} onClick={onClick}/>
        <InfoTask>
          <h4>{title}</h4>
          <small>Tarefas</small>
        </InfoTask>
      </Content>
      <CustomTrashIcon hidden={isVisible} onClick={deleteTodo}/>
    </Container>
  );
};

export default TasksCard;
