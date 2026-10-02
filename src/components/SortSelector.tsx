import useGameQueryStore from '@/store';
import { Button, Menu, MenuItem, Portal } from '@chakra-ui/react';
import { LuChevronDown } from 'react-icons/lu';

const SortSelector = () => {
  const sortOrders = [
    { value: '', label: 'Relevance' },
    { value: '-added', label: 'Date added' },
    { value: 'name', label: 'Name' },
    { value: '-released', label: 'Release date' },
    { value: '-rating', label: 'Average rating' },
  ];
  const setSortOrder = useGameQueryStore((s) => s.setSortOrder);
  const sortOrder = useGameQueryStore((s) => s.gameQuery.sortOrder);

  const currentSortOrder = sortOrders.find(
    (order) => order.value === sortOrder
  );

  return (
    <Menu.Root>
      <Menu.Trigger asChild>
        <Button variant="outline">
          Order by: {currentSortOrder?.label || 'Relevance'}
          <LuChevronDown />
        </Button>
      </Menu.Trigger>
      <Portal>
        <Menu.Positioner>
          <Menu.Content>
            {sortOrders.map((order) => (
              <MenuItem
                onClick={() => setSortOrder(order.value)}
                key={order.value}
                value={order.value}
              >
                {order.label}
              </MenuItem>
            ))}
          </Menu.Content>
        </Menu.Positioner>
      </Portal>
    </Menu.Root>
  );
};

export default SortSelector;
