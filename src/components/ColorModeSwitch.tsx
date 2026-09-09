import { HStack, Switch, Text } from "@chakra-ui/react";
import { useColorMode } from "../components/ui/color-mode";

const ColorModeSwitch = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <HStack>
      <Switch.Root
        checked={colorMode === "dark"}
        onCheckedChange={toggleColorMode}
      >
        <Switch.HiddenInput />
        <Switch.Control>
          <Switch.Thumb />
        </Switch.Control>
      </Switch.Root>

      <Text>Dark Mode</Text>
    </HStack>
  );
};

export default ColorModeSwitch;

