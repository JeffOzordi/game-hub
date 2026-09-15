import { Input, InputGroup } from '@chakra-ui/react';
import { BsSearch } from 'react-icons/bs';

const SearchInput = () => {
  return (
    <InputGroup startElement={<BsSearch size={18} color="gray" />}>
      <Input borderRadius={20} padding={4} placeholder="Search games..." />
    </InputGroup>
  );
};

export default SearchInput;
