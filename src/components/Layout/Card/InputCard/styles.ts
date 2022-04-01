import styled from 'styled-components';


let borderRadius = 8
export const Container = styled.div`
  width: 100%;
  height: 2.4rem;
  justify-content: space-between;
  display: flex;
  input{
    flex: 1;
    padding: 0 0.6rem;
    border: 1px solid #E6E6E6;
    border-radius: ${borderRadius}px;
  }
  button{
    background-color: black;
    color: white;
    min-width: 20%;
    padding: 0 0.8rem;
    border: none;
    border-radius: ${borderRadius}px;
  }
  *:focus{
    outline: none;
  }
`;
