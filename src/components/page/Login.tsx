import { Box, Button, Divider, Flex, Heading, Input, Stack } from '@chakra-ui/react'
import React,{ChangeEvent, memo, useState} from 'react'
import { useAuth } from '../../hooks/useAuth'
import { LoginButton } from '../atoms/button/LoginButton'

export const Login:React.FC = memo(() => {

  const [userId,setUserId] = useState<string>('')
  const { login, isLoading} = useAuth();

  const onClickLogin = () => {
    login(userId);
  }

  const onChangeUserId = (e:ChangeEvent<HTMLInputElement>) => setUserId(e.target.value);

  // Stackは囲った要素を等間隔で配置していくもの
return (
  <Flex align="center" justify="center" height="100vh">
    <Box bg='#FFFFFF' w='sm' padding={4} borderRadius='md' shadow='md'>
  <Heading as="h1" size='lg' textAlign='center'>
    ユーザ管理アプリ
  </Heading>
<Divider my={4}/>
<Stack spacing={6} py={4} px={10}>
<Input placeholder="UserId" value={userId} onChange={onChangeUserId}/>
<LoginButton isLoading={isLoading}  disabled={userId === ""}  onClick={onClickLogin}>login</LoginButton>
</Stack>
      </Box>
  </Flex>

  )

})