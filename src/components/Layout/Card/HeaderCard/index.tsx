import { ReactNode } from 'react';

import { Container } from './styles';

interface HeaderCardProps {
  children: ReactNode;
}

function HeaderCard({ children }: HeaderCardProps) {
  return (
    <Container>
      {children}
    </Container>
  );
};

export default HeaderCard;
