import useGameQueryStore from '@/store';
import { Input, InputGroup } from '@chakra-ui/react';
import { useRef } from 'react';
import { BsSearch } from 'react-icons/bs';

const SearchInput = () => {
  const ref = useRef<HTMLInputElement>(null)
  const setSearchText  =useGameQueryStore(s => s.setSearchText)

  return (
    <form onSubmit={(event) => {
      event.preventDefault()
      if (ref.current) setSearchText(ref.current.value)
      }}>
      <InputGroup startElement={<BsSearch size={18} color="gray" />}>
        <Input ref={ref} borderRadius={20} padding={4} placeholder="Search games..." />
      </InputGroup>
    </form>
  );
};

export default SearchInput;
