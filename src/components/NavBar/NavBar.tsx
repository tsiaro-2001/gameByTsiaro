import { HStack, Image, Text } from "@chakra-ui/react"
import logo from "../../assets/logo.webp"
import ColorModeSwitch from "./ColorModeSwitch"
import SearchInput from "../SearchInput"

interface Props {
  onSearch: (val: string) => void
}
const NavBar = ({onSearch}: Props) => {
  return (
    <HStack justifyContent='space-between' padding='10px'>
        <Image src={logo} boxSize='60px' />
        <HStack>
         <Text fontSize='2xl'>ByTsiaro</Text> 
        </HStack>
        <SearchInput onSearch={onSearch} />
        <ColorModeSwitch />
    </HStack>
    
  )
}

export default NavBar