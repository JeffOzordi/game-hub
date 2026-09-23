import type { Platform } from '@/hooks/useGames';
import usePlatforms from '@/hooks/usePlatforms';
import { Button, Menu, MenuItem, Portal } from '@chakra-ui/react';
import { LuChevronDown } from 'react-icons/lu';

interface Props {
  onSelectPlatform: (paltform: Platform) => void;
  selectedPlatform: Platform | null
}

const PlatformSelector = ({ onSelectPlatform, selectedPlatform }: Props) => {
  const { data, error } = usePlatforms();

  if (error) return null;
  return (
    <Menu.Root>
      <Menu.Trigger asChild>
        <Button variant="outline">
          {selectedPlatform?.name || 'Platforms'}
          <LuChevronDown />
        </Button>
      </Menu.Trigger>
      <Portal>
        <Menu.Positioner>
          <Menu.Content>
            {data?.results.map((platform) => (
              <MenuItem
                onClick={() => onSelectPlatform(platform)}
                key={platform.id}
                value={platform.name}
              >
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
