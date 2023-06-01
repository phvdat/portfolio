/** @jsxImportSource @emotion/react */

import { RoutePath } from 'constants/routes';
import { Link } from 'react-router-dom';
import { avatarStyle } from './AvatarStyle';

interface AvatarProps {
  image: string;
  name?: string;
}

const Avatar = (props: AvatarProps) => {
  const { image, name } = props;
  return (
    <Link to={RoutePath.Index} title='name' css={avatarStyle.self}>
      <img src={image} alt='avatar' css={avatarStyle.image} />
      <h1 css={avatarStyle.name}>{name}</h1>
    </Link>
  );
};

export default Avatar;
