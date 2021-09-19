import React, { Component } from "react";
import {
  chakra,
  Box,
  useColorModeValue,
  Stack,
  Image,
  Flex,
  Button,
  Spacer,
  HStack,
  
} from "@chakra-ui/react";
import { Input } from "@chakra-ui/react";
import TextLoop from "react-text-loop";
import generte_pay from "./services/generte_pay";

class SellerA extends React.Component{

  constructor(props){
    super(props);
    
    this.handlesubmit = this.handlesubmit.bind(this);
    this.onChangename = this.onChangename.bind(this);
    this.onchangedescription = this.onchangedescription.bind(this);
    this.onchangeprice = this.onchangeprice.bind(this);
    this.onchangedepositwid = this.onchangedepositwid.bind(this);
    this.onchnageconditions = this.onchnageconditions.bind(this);
    this.onchagesecretproduct = this.onchagesecretproduct.bind(this);

    this.state ={
      name: "",
      description:"",
      price:"",
      depositwid:"",
      conditions:"",
      secretproduct:""
    };
  }

  onChangename(e){
    this.setState({
      name: e.target.value
    });
  }

  onchangedescription(e){
    this.setState({
      description: e.target.value
    });
  } 
  
  onchangeprice(e){
    this.setState({
      price: e.target.value
    });
  } 
  
  onchnageconditions(e){
    this.setState({
      conditions: e.target.value
    });
  } 
  onchangedepositwid(e){
    this.setState({
      depositwid: e.target.value
    });
  } 
  onchagesecretproduct(e){
    this.setState({
      secretproduct: e.target.value
    });
  }

  handlesubmit(e) {
    e.preventDefault();

    generte_pay.getdetails(
      this.state.name,
      this.state.description,
      this.state.price,
      this.state.conditions,
      this.state.secretproduct
    ).then (
      Response => {
        console.log(Response.data);
      }
    )

    // console.log(this.state.name);
    // console.log(this.state.price);
    // console.log(this.state.secretproduct);
    // console.log(this.state.description);
    // console.log(this.state.conditions);
    // console.log(this.state.depositwid);
  }
  render(){
    return(
      <Box paddingTop="7" paddingLeft="40" w="full" mx="auto">
           <form  onSubmit={this.handlesubmit}>
            <chakra.h2
              fontSize={{ base: "3xl", sm: "4xl" }}
              fontWeight="extrabold"
              lineHeight="shorter"
              color="white"
              mb={6}
            >
              <chakra.span
                display="block"
                color="black"
                fontFamily="sans-serif"
                // bgGradient="linear(to-r, #4F3BA9, #CB5AFD)"
                // bgClip="text"
                fontSize="xxx-large"
              >
                Create Payment Link
              </chakra.span>
            </chakra.h2>
            <HStack>
              <Box>
                <chakra.p mb="3" fontSize={{ base: "lg", md: "xl" }} color="#47586B">
                  <span>Name of the product</span>
                </chakra.p>
             
                <Input
                  _hover={{
                    borderColor: "#4F3BA9",
                  }}
                  paddingRight="20"
                  borderColor="#CB5AFD"
                  color="black"
                  size="lg"
                  name="name"
                  value={ this.state.name}
                  onChange = { this.onChangename}
                />
              </Box>
              <Box paddingLeft="10">
                <chakra.p mb="3" fontSize={{ base: "lg", md: "xl" }} color="#47586B">
                  <span>Price in XLM</span>
                </chakra.p>
      
                <Input
                  _hover={{
                    borderColor: "#4F3BA9",
                  }}
                  borderColor="#CB5AFD"
                  color="black"
                  size="lg"
                  name="price"
                  value={ this.state.price}
                  onChange = { this.onchangeprice}
                />
              </Box>
            </HStack>
      
            <HStack>
              <Box paddingTop="5">
                <chakra.p mb="3" fontSize={{ base: "lg", md: "xl" }} color="#47586B">
                  <span>Description of product</span>
                </chakra.p>
      
                <Input
                  _hover={{
                    borderColor: "#4F3BA9",
                  }}
                  paddingRight="520"
                  borderColor="#CB5AFD"
                  color="black"
                  size="lg"
                  paddingBottom="20"
                  name="description"
                  value={ this.state.description}
                  onChange = { this.onchangedescription}
                />
              </Box>
            </HStack>
            <HStack paddingTop="5">
              <Box>
                <chakra.p mb="3" fontSize={{ base: "lg", md: "xl" }} color="#47586B">
                  <span>Deposit Address</span>
                </chakra.p>
      
                <Input
                  _hover={{
                    borderColor: "#4F3BA9",
                  }}
                  paddingRight="20"
                  borderColor="#CB5AFD"
                  color="black"
                  size="lg"
                  name="depositwid"
                  value={ this.state.depositwid}
                  onChange = { this.onchangedepositwid}
                />
              </Box>
              <Box paddingLeft="10">
                <chakra.p mb="3" fontSize={{ base: "lg", md: "xl" }} color="#47586B">
                  <span>Conditions</span>
                </chakra.p>
      
                <Input
                  _hover={{
                    borderColor: "#4F3BA9",
                  }}
                  borderColor="#CB5AFD"
                  color="black"
                  paddingRight="150"
                  size="lg"
                  name="conditions"
                  value={ this.state.conditions}
                  onChange = { this.onchnageconditions}
                />
              </Box>
            </HStack>
            <HStack>
              <Box paddingTop="5">
                <chakra.p mb="3" fontSize={{ base: "lg", md: "xl" }} color="#47586B">
                  <span>Secret</span>
                </chakra.p>
                <chakra.p fontSize="14" color="#47586B">
                  <span>
                    Information that you enter here will be revealed to the buyer once
                    he deposits the tokens into the escrow wallet.
                  </span>
                </chakra.p>
                <Input
                  marginTop="3"
                  _hover={{
                    borderColor: "#4F3BA9",
                  }}
                  minWidth="620"
                  borderColor="#CB5AFD"
                  color="black"
                  size="lg"
                  height="20"
                  name="secretproduct"
                  value={ this.state.secretproduct}
                  onChange = { this.onchagesecretproduct}
                />
              </Box>
            </HStack>
      
            <Button
              marginTop="5"
              paddingY="7"
              display="inline-flex"
              rounded="md"
              shadow="md"
              bgGradient="linear(to-r, #4F3BA9, #CB5AFD)"
              _hover={{
                bgGradient: "linear(to-l, #4F3BA9, #CB5AFD)",
              }}
              type="submit"
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
                Generate Link
              </chakra.a>
            </Button>
            </form>
          </Box>
    );
  }  
 
}
export default SellerA

// export  class Seller1 extends Component{
  // constructor(props){
  //   super(props);
    
  //   this.handlesubmit = this.handlesubmit.bind(this);
  //   this.onChangename = this.onChangename.bind(this);
  //   this.onchangedescription = this.onchangedescription.bind(this);
  //   this.onchangeprice = this.onchangeprice.bind(this);
  //   this.onchangedepositwid = this.onchangedepositwid.bind(this);
  //   this.onchnageconditions = this.onchnageconditions.bind(this);
  //   this.onchagesecretproduct = this.onchagesecretproduct.bind(this);

  //   this.state ={
  //     name: "",
  //     description:"",
  //     price:"",
  //     depositwid:"",
  //     conditions:"",
  //     secretproduct:""
  //   };
  // }

  // onChangename(e){
  //   this.setState({
  //     name: e.target.value
  //   });
  // }

  // onchangedescription(e){
  //   this.setState({
  //     description: e.target.value
  //   });
  // } 
  
  // onchangeprice(e){
  //   this.setState({
  //     price: e.target.value
  //   });
  // } 
  
  // onchnageconditions(e){
  //   this.setState({
  //     conditions: e.target.value
  //   });
  // } 
  // onchangedepositwid(e){
  //   this.setState({
  //     depositwid: e.target.value
  //   });
  // } 
  // onchagesecretproduct(e){
  //   this.setState({
  //     secretproduct: e.target.value
  //   });
  // }

  // handlesubmit(e) {
  //   e.preventDefault();

  //   console.log(this.state.name);
  //   console.log(this.state.price);
  //   console.log(this.state.secretproduct);
  //   console.log(this.state.description);
  //   console.log(this.state.conditions);
  // }
//  render(){
//   return (
//     <Box paddingTop="7" paddingLeft="40" w="full" mx="auto">
//       <form  onSubmit={this.handlesubmit}>
//       <chakra.h2
//         fontSize={{ base: "3xl", sm: "4xl" }}
//         fontWeight="extrabold"
//         lineHeight="shorter"
//         color="white"
//         mb={6}
//       >
//         <chakra.span
//           display="block"
//           color="black"
//           fontFamily="sans-serif"
//           // bgGradient="linear(to-r, #4F3BA9, #CB5AFD)"
//           // bgClip="text"
//           fontSize="xxx-large"
//         >
//           Create Payment Link
//         </chakra.span>
//       </chakra.h2>
//       <HStack>
//         <Box>
//           <chakra.p mb="3" fontSize={{ base: "lg", md: "xl" }} color="#47586B">
//             <span>Name of the product</span>
//           </chakra.p>
       
//           <TextField
//             _hover={{
//               borderColor: "#4F3BA9",
//             }}
//             paddingRight="20"
//             borderColor="#CB5AFD"
//             color="black"
//             size="lg"
//             name="name"
//             // value={ this.state.name}
//             // onChange = { this.onChangename}
//           />
//         </Box>
//         <Box paddingLeft="10">
//           <chakra.p mb="3" fontSize={{ base: "lg", md: "xl" }} color="#47586B">
//             <span>Price in XLM</span>
//           </chakra.p>

//           <Input
//             _hover={{
//               borderColor: "#4F3BA9",
//             }}
//             borderColor="#CB5AFD"
//             color="black"
//             size="lg"
//             name="price"
//             // value={ this.state.price}
//             // onChange = { this.onchangeprice}
//           />
//         </Box>
//       </HStack>

//       <HStack>
//         <Box paddingTop="5">
//           <chakra.p mb="3" fontSize={{ base: "lg", md: "xl" }} color="#47586B">
//             <span>Description of product</span>
//           </chakra.p>

//           <Input
//             _hover={{
//               borderColor: "#4F3BA9",
//             }}
//             paddingRight="520"
//             borderColor="#CB5AFD"
//             color="black"
//             size="lg"
//             paddingBottom="20"
//             name="description"
//             // value={ this.state.description}
//             // onChange = { this.onchangedescription}
//           />
//         </Box>
//       </HStack>
//       <HStack paddingTop="5">
//         <Box>
//           <chakra.p mb="3" fontSize={{ base: "lg", md: "xl" }} color="#47586B">
//             <span>Deposit Address</span>
//           </chakra.p>

//           <Input
//             _hover={{
//               borderColor: "#4F3BA9",
//             }}
//             paddingRight="20"
//             borderColor="#CB5AFD"
//             color="black"
//             size="lg"
//             name="depositwid"
//             // value={ this.state.depositwid}
//             // onChange = { this.onchangedepositwid}
//           />
//         </Box>
//         <Box paddingLeft="10">
//           <chakra.p mb="3" fontSize={{ base: "lg", md: "xl" }} color="#47586B">
//             <span>Conditions</span>
//           </chakra.p>

//           <Input
//             _hover={{
//               borderColor: "#4F3BA9",
//             }}
//             borderColor="#CB5AFD"
//             color="black"
//             paddingRight="150"
//             size="lg"
//             name="conditions"
//             // value={ this.state.conditions}
//             // onChange = { this.onchnageconditions}
//           />
//         </Box>
//       </HStack>
//       <HStack>
//         <Box paddingTop="5">
//           <chakra.p mb="3" fontSize={{ base: "lg", md: "xl" }} color="#47586B">
//             <span>Secret</span>
//           </chakra.p>
//           <chakra.p fontSize="14" color="#47586B">
//             <span>
//               Information that you enter here will be revealed to the buyer once
//               he deposits the tokens into the escrow wallet.
//             </span>
//           </chakra.p>
//           <Input
//             marginTop="3"
//             _hover={{
//               borderColor: "#4F3BA9",
//             }}
//             minWidth="620"
//             borderColor="#CB5AFD"
//             color="black"
//             size="lg"
//             height="20"
//             name="secretproduct"
//             // value={ this.state.secretproduct}
//             // onChange = { this.onchagesecretproduct}
//           />
//         </Box>
//       </HStack>

//       <Button
//         marginTop="5"
//         paddingY="7"
//         display="inline-flex"
//         rounded="md"
//         shadow="md"
//         bgGradient="linear(to-r, #4F3BA9, #CB5AFD)"
//         _hover={{
//           bgGradient: "linear(to-l, #4F3BA9, #CB5AFD)",
//         }}
//         type="submit"
//       >
//         <chakra.a
//           display="inline-flex"
//           alignItems="center"
//           justifyContent="center"
//           px={5}
//           py={3}
//           border="solid transparent"
//           fontWeight="bold"
//           w="full"
//           rounded="md"
//           color="white"
//         >
//           Generate Link
//         </chakra.a>
//       </Button>
//       </form>
//     </Box>
//   );
//  }
// }



