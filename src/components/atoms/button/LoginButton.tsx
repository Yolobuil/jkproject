import { HamburgerIcon } from '@chakra-ui/icons'
import { Button, IconButton } from '@chakra-ui/react'
import React,{memo, ReactNode} from 'react'

type Props ={
children:ReactNode;
onClick: () => void;
disabled?: boolean;
isLoading?:boolean;
}

export const LoginButton:React.FC<Props> = memo((props) => {
const { children,onClick,disabled=false ,isLoading=false } = props;

return (
<Button bg="teal.400" color='white' disabled={disabled || isLoading} isLoading={isLoading} _hover={{opacity:0.8}} onClick={onClick}>{children}</Button>

)

})