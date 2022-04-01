import { ReactNode } from 'react';

import { Container } from './styles';

interface WrapperCardProps {
  children: ReactNode;
}

function WrapperCard({ children }: WrapperCardProps) {
  return (
    <Container>
      {children}
    </Container>
  );
};

export default WrapperCard;
