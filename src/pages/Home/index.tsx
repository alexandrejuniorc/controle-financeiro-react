import { Extract } from '../../components/Extract';
import { Transation } from '../../components/Transation';
import { HomeContainer } from './styles';

export const Home = () => {
  return (
    <HomeContainer>
      <Transation />
      <Extract />
    </HomeContainer>
  );
};
