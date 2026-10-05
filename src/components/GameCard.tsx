import { type Game } from '@/entities/Game';
import { CardBody, CardRoot, Heading, HStack, Image } from '@chakra-ui/react';
import PlatformIconList from './PlatformIconList';
import CriticScore from './CriticScore';
import getCroppedImageUrl from '@/services/image-url';
import Emoji from './emoji';
import { Link } from 'react-router-dom';

interface GameCardProps {
  game: Game;
}

const GameCard = ({ game }: GameCardProps) => {
  return (
    <CardRoot>
      <Image src={getCroppedImageUrl(game.background_image)} />
      <CardBody>
        <HStack justifyContent="space-between" marginBottom={3}>
          <PlatformIconList
            platforms={game.parent_platforms.map((p) => p.platform)}
          />
          <CriticScore score={game.metacritic} />
        </HStack>
        <Heading fontSize="2xl"></Heading>
        <Link to={'/games/' + game.slug}>{game.name}</Link>
        <Emoji rating={game.rating_top}></Emoji>
      </CardBody>
    </CardRoot>
  );
};

export default GameCard;
