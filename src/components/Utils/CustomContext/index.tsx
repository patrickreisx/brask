import React, { ReactNode } from 'react'
import { TrashIcon } from '@radix-ui/react-icons';
import { StyledContext, StyledContextContent, StyledContextItem, StyledContextWrapper, StyledSeparator } from "./styles";
import CustomDialog from '../CustomDialog';

interface ContextMenuProps {
  children: ReactNode,
  deleteTodo: any,
  finishTodo: any,
}

function CustomContext({ children, deleteTodo, finishTodo }: ContextMenuProps) {
  return (
    <>
      <StyledContext>
        <StyledContextWrapper>
          {children}
        </StyledContextWrapper>
        <StyledContextContent>
          <StyledContextItem onSelect={finishTodo}>
            Marcar como concluída
          </StyledContextItem>
          <StyledSeparator />
          <CustomDialog>
            <StyledContextItem delete="true" onSelect={deleteTodo}>
              <TrashIcon />
              Excluir tarefa
            </StyledContextItem>
          </CustomDialog>
        </StyledContextContent>
      </StyledContext>
    </>
  );
};

export default CustomContext;