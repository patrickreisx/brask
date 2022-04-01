import styled from 'styled-components';
import {
  gray,
  blue,
  red,
  green,
  grayDark,
  blueDark,
  redDark,
  greenDark,
} from '@radix-ui/colors';

interface Props {
  done: boolean
}

export const Container = styled.div<Props>`
  align-items: center;
  display: flex;
  margin-top: 1rem;
  cursor: pointer;
  text-decoration: ${(props) => props.done ? "line-through": "none"};
`;

export const InfoTask = styled.div`
  margin-left: 1rem;
  h4{
    line-height: 0.8rem;
  }
  small{
    color: gray;
    font-size: 10px;
  }

`;

export const Checkbox = styled.div<Props>`
  background-color: ${(props) => props.done ? "black" : "white"};
  width: 1.2rem;
  height: 1.2rem;
  border-radius: 50%;
  border: 1px solid black;
`; 

