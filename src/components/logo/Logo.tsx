import { FC } from 'react';
import logo from '../../assets/logo.svg'

interface Props {

}

const Logo: FC<Props> = ({  }) => {
  return <h1 className="app-logo">
      <img src={logo} width={'186rem'} height={'53rem'} alt="logo"  />
  </h1>;
};

export default Logo;
