import { Box, Stack, Wrap, WrapItem,Image,Text, Spinner, Center, Modal, ModalOverlay, ModalContent, useDisclosure, ModalHeader, ModalCloseButton, ModalBody, FormControl, FormLabel, Input } from '@chakra-ui/react'
import React,{memo, useCallback, useEffect} from 'react'
import { useAlls } from '../../hooks/useAlls'
import { useLoginUser } from '../../hooks/useLoginUser'
import { useSelectUser } from '../../hooks/useSelectUser'
import { LoginUserContext } from '../../providers/LoginUserProvider'
import { LUserCard } from '../organisms/user/LUserCard'
import { UserDetailModal } from '../organisms/user/UserDetailModal'



export const UserManagement:React.FC = memo(() => {
  const { isOpen, onOpen, onClose} = useDisclosure()

  const { getAllUser,users,isLoading } = useAlls();
const { onSelectUser,selectedUser} = useSelectUser();
const { loginUser } = useLoginUser();

  useEffect(() => {
  getAllUser();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const onClickUser = useCallback((id:number) =>{
  onSelectUser({id:id, users:users ,onOpen})
  },[ users,onOpen,onSelectUser]);

return (
  <>
  {isLoading ?
  <Center h='100vh'>
  <Spinner />
  </Center>
  : (
<Wrap p={{base:4, md: 10}}>
    {users.map((user) =>   <WrapItem key={user.id} mx='auto'> <LUserCard id={user.id}  userName={user.username}  onClick={onClickUser} fullName={user.name} imageUrl='https://source.unsplash.com/random'/> </WrapItem>)}
</Wrap>
  )}
  <UserDetailModal isOpen={isOpen} isAdmin={loginUser?.isAdmin} onClose={onClose} selectedUser={selectedUser}/>
  </>
)

})