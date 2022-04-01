import { ReactNode } from 'react';

import { Container } from './styles';

interface InfoHeaderCardProps {
  children: ReactNode;
}

function InfoHeaderCard({ children }: InfoHeaderCardProps) {
  return (
    <Container>
      {children}
    </Container>
  );
};

export default InfoHeaderCard;
