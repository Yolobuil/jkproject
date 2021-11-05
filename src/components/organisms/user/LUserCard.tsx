import { Box, Button, IconButton, Stack , Text ,Image,} from '@chakra-ui/react'
import React,{memo, ReactNode} from 'react'

type Props ={
id:number;
imageUrl:string;
userName:string;
fullName:string;
onClick: (id:number) => void;
}

export const LUserCard:React.FC<Props> = memo((props) => {
const { id,imageUrl, userName,fullName,onClick} = props;

return (
 <Box onClick={() => onClick(id)} w='260px' h='260px' bg='white' borderRadius='10px' shadow='md' p={4} _hover={{cursor: "pointer" ,opacity:0.8}}>
      <Stack textAlign='center'>
        <Image boxSize='160px' borderRadius='full' src={imageUrl} alt={userName} m='auto' />
        <Text fontSize='large' fontWeight='bold'>{userName}</Text>
        <Text fontSize='small' color='gray'>{fullName}</Text>
      </Stack>
    </Box>

)

})