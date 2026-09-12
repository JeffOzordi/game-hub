import { type Game } from '@/hooks/useGames';
import { CardBody, CardRoot, Heading, Image } from '@chakra-ui/react';
import PlatformIconList from './PlatformIconList';

interface GameCardProps {
  game: Game;
}

const GameCard = ({ game }: GameCardProps) => {
  return (
    <CardRoot borderRadius={10} overflow={'hidden'}>
      <Image src={game.background_image} />
      <CardBody>
        <Heading fontSize="2xl">{game.name}</Heading>
        <PlatformIconList
          platforms={game.parent_platforms.map((p) => p.platform)}
        />
      </CardBody>
    </CardRoot>
  );
};

export default GameCard;
