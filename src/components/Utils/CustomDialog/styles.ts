import styled from 'styled-components';
import * as AlertDialog from '@radix-ui/react-alert-dialog';

export const AlertTrigger = styled(AlertDialog.Trigger)`
  background-color: transparent;
  inset: 0;
  border: none;
  -webkit-appearance: none;
    -moz-appearance: none;
        appearance: none;
`;
export const AlertContent = styled(AlertDialog.Content)`
  background-color: white;
  width: 90vw;
  max-width: 500px;
  max-height: 85vh;
  transform: translate(-50%, -50%);
  top: 50%;
  left: 50%;
  position: fixed;
  border-radius: 6px;
  z-index: 1000000000000;
  box-shadow: hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px;
  padding: 25px;
`;

export const CustomOverlay = styled(AlertDialog.Overlay)`
  background-color: rgba(0,0,0, 0.02);
  position: fixed;
  inset: 0;
`;

export const CustomTitle = styled(AlertDialog.Title)`
  font-size: 17px;
  font-weight: 700;
  margin: 0;
`;


export const CustomDescription = styled(AlertDialog.Description)`
  font-size: 15px;
  margin-bottom: 20px;
  line-height: 1.5;
`;