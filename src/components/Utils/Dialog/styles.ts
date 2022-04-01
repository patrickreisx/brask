import { blackA, mauve, green } from "@radix-ui/colors";
import styled, { keyframes } from "styled-components";
import * as Dialog from '@radix-ui/react-dialog';

const overlayShow = keyframes`
  from{
    opacity: 0;
  }
  to{
    opacity: 1;
  }
`;

const contentShow = keyframes`
  from{
    opacity: 0;
    transform: translate(-50%, -48%) scale(.96);
  }
  to{
    opacity: 1;
    transform: translate(-50%, -50%) scale(1);
  }
`;

export const DialogRoot = styled(Dialog.Root)`
`; 
export const DialogTrigger = styled(Dialog.Trigger)`
  display: none;
`; 
export const DialogPortal = styled(Dialog.Portal)`
`; 
export const DialogOverlay = styled(Dialog.Overlay)`
  background-color: ${blackA.blackA7};
  inset: 0;
  position: fixed;
  animation: ${overlayShow} 450ms cubic-bezier(0.16, 1, 0.3, 1) forwards;
`; 

export const DialogContent = styled(Dialog.Content)`
  background-color: white;
  border-radius: 6;
  box-shadow: hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px;
  position: fixed;
  top: 50%;
  border-radius: 0.4rem;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 90vw;
  max-width: 450px;
  max-height: 85vh;
  padding: 25px;
  animation: ${contentShow} 150ms cubic-bezier(0.16, 1, 0.3, 1) forwards;

`; 
export const DialogTitle = styled(Dialog.Title)`
  margin: 0;
  font-weight: 500;
  color: ${mauve.mauve12};
  font-size: 17;
`; 
export const DialogDescription = styled(Dialog.Description)`
  margin: 10px 0 20px;
  color: ${mauve.mauve11};
  font-size: 15;
  line-height: 1.5;
`; 
export const DialogClose = styled(Dialog.Close)`
  all: unset;
  button{
    all: unset;
    background: ${green.green4};
    color: ${green.green11};
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border-radius: 4px;
    padding: 0 15px;
    font-size: 15px;
    line-height: 1px;
    font-weight: 500;
    height: 35px;
    }
`; 