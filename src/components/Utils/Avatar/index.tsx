import { Container } from './styles';

interface AvatarProps {
  avatarName: any;
}

function Avatar({ avatarName }: AvatarProps) {
  let tempName = avatarName.split(' ')
  let newName:any = []
  tempName.forEach(item => {
    newName.push(item[0])
  })
  return (
    <Container>
      <span>{newName.join('')}</span>
    </Container>
  );
};

export default Avatar;
