import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react"
import { BsChevronDown } from "react-icons/bs"

interface Props {
    onSelectSortOrder: (order: string) => void
}

const SortSelector = ({onSelectSortOrder}: Props) => {
    const sortOrders = [
        {value: '', label: 'Relevance'},
        {value: '-added', label: 'Date added'},
        {value: 'name', label: 'Name'},
        {value: '-released', label: 'Release Date'},
        {value: '-metacritic', label: 'Popularity'},
        {value: '-rating', label: 'Average Rating'},
    ]
  return (
    <Menu >
        <MenuButton marginX={2} as={Button} rightIcon={<BsChevronDown/>}> Order by: Relevance </MenuButton>
            <MenuList>
             { sortOrders.map(order => <MenuItem key={order.value} onClick={() => onSelectSortOrder(order.value)}>{order.label}</MenuItem> )}  
            </MenuList>
    </Menu>
  )
}

export default SortSelector