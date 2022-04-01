import { ReactNode } from 'react';
import { Container } from './styles';

interface InputCardProps {
  placeholder: string,
  onChange: any,
  value?: string,
}

function InputCard({ placeholder, onChange, value }: InputCardProps) {
  return (
    <Container>
      <input placeholder={placeholder} value={value} onChange={onChange}/>
    </Container>
  );
};

export default InputCard;
