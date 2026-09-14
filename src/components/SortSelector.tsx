import { Button, Menu, MenuItem, Portal } from '@chakra-ui/react'
import { LuChevronDown } from 'react-icons/lu'

const SortSelector = () => {
  return (
    <Menu.Root>
        <Menu.Trigger asChild>
        <Button variant="outline">
            Order by: relevance
            <LuChevronDown />
        </Button>
        </Menu.Trigger>
        <Portal>
        <Menu.Positioner>
            <Menu.Content>
                <MenuItem value='relevance'>Relevance</MenuItem>
                <MenuItem value='relevance'>Relevant</MenuItem>
                <MenuItem value='relevance'>Relevan</MenuItem>
            </Menu.Content>
        </Menu.Positioner>
        </Portal>
    </Menu.Root>
  )
}

export default SortSelector