import { Platform } from '../hooks/useGames'
import {FaWindows, FaXbox, FaApple, FaPlaystation, FaLinux, FaAndroid} from 'react-icons/fa'
import { MdPhoneIphone} from 'react-icons/md'
import {SiNintendo} from 'react-icons/si'
import {BsGlobe} from 'react-icons/bs'
import { HStack, Icon } from '@chakra-ui/react'

interface Props {
    platforms: Platform[]
}
const PlatformIconList = ({platforms}: Props) => {
    const iconMap: { [key: string]: IconType } = {
        pc: FaWindows ,
        playstation: FaPlaystation , 
        xbox: FaXbox,
        nintendo: SiNintendo,
        android: FaAndroid,
        mac: FaApple,
        ios: MdPhoneIphone,
        linux: FaLinux,
        web: BsGlobe,

    }
  return (
    <HStack marginY={4}>
      {platforms.map(platform => <Icon key={platform.id} as={iconMap[platform.slug]} color='gray.500' />)}
    </HStack>
  )
}

export default PlatformIconList