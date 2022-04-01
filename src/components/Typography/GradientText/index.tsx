import { ReactNode } from 'react';

import { Text } from './styles';

interface GradientTextProps {
  children: string;
}

function GradientText({ children }: GradientTextProps) {
  return (
    <Text>
      {children}
    </Text>
  );
};

export default GradientText;
