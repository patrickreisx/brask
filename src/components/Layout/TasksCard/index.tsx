import { Container, Checkbox, InfoTask } from './styles';

interface TasksCardProps {
  title: string;
  priority?: string,
  done: boolean,
  onClick: () => void;
}

function TasksCard({ title, priority, done, onClick }: TasksCardProps) {
  return (
    <Container done={done} onClick={onClick}>
      <Checkbox done={done}/>
      <InfoTask>
        <h4>{title}</h4>
        <small>Tarefas</small>
      </InfoTask>
    </Container>
  );
};

export default TasksCard;
