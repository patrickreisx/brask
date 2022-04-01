import styled from 'styled-components';
import * as ContextMenu from '@radix-ui/react-context-menu';
interface Props {
  delete?: any;
}


const StyledContext = styled(ContextMenu.Root)``;

const StyledContextWrapper = styled(ContextMenu.Trigger)`
  width: 100%;
`;

const StyledContextContent = styled(ContextMenu.Content)`
  background-color: white;
  min-width: 10rem;
  min-height: 2rem;
  border-radius: 0.4rem;
  padding: 0.8rem 1.4rem;
  box-shadow:
  0px 10px 38px -10px rgba(22, 23, 24, 0.35), 0px 10px 20px -15px rgba(22, 23, 24, 0.2);
`;

const StyledContextItem = styled(ContextMenu.Item)<Props>`
  color: ${(props) => props.delete ? "red" : "#8a8a8a"};
  font-size: 13px;
  font-weight: 200;
  padding: 1rem 0;
  cursor: pointer;
  align-items: center;
  display: flex;
  &:hover{
    outline: none;
    border: none;
  }
`;


const StyledSeparator = styled(ContextMenu.Separator)`
  background-color: #ebebeb;
  padding: 0.02rem;
`;

export { 
  StyledContext, 
  StyledContextWrapper, 
  StyledContextContent, 
  StyledContextItem,
  StyledSeparator
}