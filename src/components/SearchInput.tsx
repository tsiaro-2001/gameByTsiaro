import { Input, InputGroup, InputLeftElement, InputRightElement } from '@chakra-ui/react'
import { useState } from 'react'
import { BsSearch } from 'react-icons/bs'

interface Props {
    onSearch: (val: string) => void
}

function SearchInput({onSearch}: Props) {
    const [valInput, setValInput] = useState('')

    const handleSumbit = (event: React.FormEvent) => {
        event.preventDefault()
        onSearch(valInput)
    }
    const handleChange = (event: React.FormEvent) => {
        // setValInput(event.target.value)
        const vale = (event.target as HTMLInputElement).value 
        setValInput(vale)
        console.log(valInput);     
    }
  return (
    <form style={{width: '100%'}} onSubmit={handleSumbit}>
        <InputGroup>
            <InputLeftElement children={<BsSearch/>} />
            <Input onChange={handleChange} borderRadius={18} placeholder='Search games...' variant='filled' />
        </InputGroup>
    </form>
  )
}

export default SearchInput