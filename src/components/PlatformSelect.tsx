import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react"
import { BsChevronDown } from "react-icons/bs"
import usePlatform from "../hooks/usePlatform"
import { Platform } from "../hooks/useGames"

interface Props {
  onSelectPlatform: (plat: Platform) => void;
  selectPlatform: Platform  | null
}

const PlatformSelect = ({onSelectPlatform, selectPlatform}: Props) => {
  
   const {platforms} = usePlatform()
  return (
    <Menu>
        <MenuButton as={Button} rightIcon={<BsChevronDown/>}> {selectPlatform ? selectPlatform.name : 'Platforms'} </MenuButton>
            <MenuList>
                {platforms?.map( platform =>  <MenuItem onClick={() => onSelectPlatform(platform) } key={platform.id}>{platform.name}</MenuItem> )}
            </MenuList>
    </Menu>
  )
}

export default PlatformSelect