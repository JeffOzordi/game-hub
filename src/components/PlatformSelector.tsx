import usePlatform from '@/hooks/usePlatform';
import usePlatforms from '@/hooks/usePlatforms';
import useGameQueryStore from '@/store';
import { Button, Menu, MenuItem, Portal } from '@chakra-ui/react';
import { LuChevronDown } from 'react-icons/lu';


const PlatformSelector = () => {
  const { data, error } = usePlatforms();
  
  const setSelectedPlatformId = useGameQueryStore(s => s.setPlatformId)
  const selectedPlatformId = useGameQueryStore(s => s.gameQuery.platformId)
  const selectedPlatform = usePlatform(selectedPlatformId)

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
                onClick={() => setSelectedPlatformId(platform.id)}
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
