import React from "react";
import {
  Flex,
  Spacer,
  Box,
  Button,
  Heading,
  chakra,
  useColorModeValue,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import albedo from "@albedo-link/intent";

import authServices from "./services/auth-services";
export default class Header extends React.Component {
  const { isOpen, onOpen, onClose } = useDisclosure()
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);

    this.state = {
      keyvalue: "Connect Wallet",
    };
  }
  handleClick = (e) => {
    albedo.publicKey({}).then((res) =>
      authServices.account_details(res.pubkey).then((Response) => {
        this.setState({
          keyvalue: Response.account_id,
        });
        console.log(Response);
      })
    );
  };
  render() {
    const classes = this.props;

    return (
      <Flex width="100%">
        <Spacer />
        <Box paddingTop="5" paddingRight="5">
          <Button
            onClick={this.handleClick}
            marginStart="10"
            paddingY="7"
            display="inline-flex"
            rounded="md"
            shadow="md"
            bgGradient="linear(to-r, #4F3BA9, #CB5AFD)"
            _hover={{
              bgGradient: "linear(to-l, #4F3BA9, #CB5AFD)",
            }}
          >
            <chakra.a
              display="inline-flex"
              alignItems="center"
              justifyContent="center"
              px={5}
              py={3}
              border="solid transparent"
              fontWeight="bold"
              w="full"
              rounded="md"
              color="white"
            >
              {this.state.keyvalue}
              {/* Connect Wallet */}
            </chakra.a>
          </Button>
        </Box>
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Modal Title</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Lorem count={2} />
            </ModalBody>

            <ModalFooter>
              <Button colorScheme="blue" mr={3} onClick={onClose}>
                Close
              </Button>
              <Button variant="ghost">Secondary Action</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </Flex>
    );
  }
}
