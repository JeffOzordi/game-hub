import { type Game } from '@/hooks/useGames';
import { CardBody, CardRoot, Heading, Image } from '@chakra-ui/react';


interface GameCardProps {
    game: Game;
}

const GameCard = ({game}: GameCardProps) => {
  return (
    <CardRoot borderRadius={10} overflow={'hidden'}>
        <Image src={game.background_image}/>
        <CardBody>
            <Heading fontSize='2xl'>{game.name}</Heading>
        </CardBody>
    </CardRoot>
  )
};

export default GameCard;
