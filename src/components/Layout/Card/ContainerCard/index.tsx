import { ReactNode } from 'react';

import { Container } from './styles';

interface ContainerCardProps {
  children: ReactNode;
}

function ContainerCard({ children }: ContainerCardProps) {
  return (
    <Container>
      {children}
    </Container>
  );
};

export default ContainerCard;
