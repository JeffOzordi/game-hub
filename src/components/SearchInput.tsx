import useGameQueryStore from '@/store';
import { Input, InputGroup } from '@chakra-ui/react';
import { useRef } from 'react';
import { BsSearch } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';

const SearchInput = () => {
  const ref = useRef<HTMLInputElement>(null)
  const setSearchText  =useGameQueryStore(s => s.setSearchText)
  const navigate = useNavigate()

  return (
    <form  onChange={(event) => {
      event.preventDefault()
      if (ref.current) {
        setSearchText(ref.current.value)
        navigate('/')
      }
      }}>
      <InputGroup startElement={<BsSearch size={18} color="gray" />}>
        <Input ref={ref} borderRadius={20} padding={4} placeholder="Search games..." />
      </InputGroup>
    </form>
  );
};

export default SearchInput;
