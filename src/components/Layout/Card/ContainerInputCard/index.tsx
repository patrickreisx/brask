import { ReactNode } from 'react';

import { Container } from './styles';

interface ContainerInputCardProps {
  children: ReactNode;
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
}

function ContainerInputCard({ children, onSubmit }: ContainerInputCardProps) {
  return (
    <Container onSubmit={onSubmit}>
      {children}
    </Container>
  );
};

export default ContainerInputCard;
