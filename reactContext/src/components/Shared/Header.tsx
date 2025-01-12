import { Avatar } from "@/components/ui/avatar";
import {
  DrawerActionTrigger,
  DrawerBackdrop,
  DrawerBody,
  DrawerCloseTrigger,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerRoot,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import {
  MenuContent,
  MenuItem,
  MenuRoot,
  MenuTrigger,
} from "@/components/ui/menu";

import {
  Box,
  Button,
  Flex,
  Heading,
  Input,
  Link,
  Stack,
  Text,
} from "@chakra-ui/react";
import { TiThMenu } from "react-icons/ti";

const Header = () => {
  return (
    <Box background="tomato" width="100%" padding="4" color="white">
      <Flex gap="4" align="center" justify="space-between">
        <Heading as="h1" size="xl">
          Component 2
        </Heading>

        <Flex align={"center"} display={{ base: "none", lg: "flex" }} gap="4">
          <Text
            fontWeight="medium"
            _hover={{ color: "black", cursor: "pointer" }}
          >
            Home
          </Text>
          <Text
            fontWeight="medium"
            _hover={{ color: "black", cursor: "pointer" }}
          >
            About
          </Text>
          <MenuRoot>
            <MenuTrigger asChild>
              <Button size="sm">Branch</Button>
            </MenuTrigger>
            <MenuContent>
              <MenuItem value="new-txt">
                {" "}
                <Link href="https://github.com/adnanalemran">
                  Branch 1
                </Link>{" "}
              </MenuItem>
              <MenuItem value="new-txt">Branch 2 </MenuItem>
              <MenuItem value="new-txt">Branch 3 </MenuItem>
              <MenuItem value="new-txt">Branch 4 </MenuItem>
            </MenuContent>
          </MenuRoot>
          <Avatar
            name="Segun Adebayo"
            src="https://adnanalemran.vercel.app/_next/image?url=%2Flogo.png&w=384&q=75"
          />
        </Flex>

        <Box display={{ base: "block", lg: "none" }} cursor="pointer">
          <DrawerRoot initialFocusEl={() => ref.current}>
            <DrawerBackdrop />
            <DrawerTrigger asChild>
              <TiThMenu size="24px" />
            </DrawerTrigger>
            <DrawerContent>
              <DrawerHeader>
                <DrawerTitle>Drawer Menu</DrawerTitle>
              </DrawerHeader>
              <DrawerBody>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <Stack mt="5">
                  <Input defaultValue="Naruto" placeholder="First name" />
                  <Input placeholder="Email" />
                </Stack>
              </DrawerBody>
              <DrawerFooter>
                <DrawerActionTrigger asChild>
                  <Button variant="outline">Close</Button>
                </DrawerActionTrigger>
                {/* <Button>Save</Button> */}
              </DrawerFooter>
              <DrawerCloseTrigger />
            </DrawerContent>
          </DrawerRoot>
        </Box>
      </Flex>
    </Box>
  );
};

export default Header;
