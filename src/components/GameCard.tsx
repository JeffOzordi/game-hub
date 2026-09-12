import { type Game } from '@/hooks/useGames';
import { CardBody, CardRoot, Heading, HStack, Image } from '@chakra-ui/react';
import PlatformIconList from './PlatformIconList';
import CriticScore from './CriticScore';

interface GameCardProps {
  game: Game;
}

const GameCard = ({ game }: GameCardProps) => {
  return (
    <CardRoot borderRadius={10} overflow={'hidden'}>
      <Image src={game.background_image} />
      <CardBody>
        <Heading fontSize="2xl">{game.name}</Heading>
        <HStack justifyContent={'space-between'}>
            <PlatformIconList
              platforms={game.parent_platforms.map((p) => p.platform)}
            />
            <CriticScore score={game.metacritic}/>
        </HStack>
      </CardBody>
    </CardRoot>
  );
};

export default GameCard;
