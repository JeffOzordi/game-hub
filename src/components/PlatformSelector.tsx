import usePlatforms from '@/hooks/usePlatforms';
import { Button, Menu, MenuItem, Portal } from '@chakra-ui/react';
import { LuChevronDown } from 'react-icons/lu';

const PlatformSelector = () => {
  const { data, error } = usePlatforms();

  if (error) return null
  return (
    <Menu.Root>
      <Menu.Trigger asChild>
        <Button variant="outline">
          Platforms
          <LuChevronDown />
        </Button>
      </Menu.Trigger>
      <Portal>
        <Menu.Positioner>
          <Menu.Content>
            {data.map((platform) => (
              <MenuItem key={platform.id} value={platform.name}>
                {platform.name}
              </MenuItem>
            ))}
          </Menu.Content>
        </Menu.Positioner>
      </Portal>
    </Menu.Root>
  );
};

export default PlatformSelector;
