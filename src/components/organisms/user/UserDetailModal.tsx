import { Box, Button, IconButton, Stack , Text ,Image, FormControl, FormLabel, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, ModalFooter,} from '@chakra-ui/react'
import React,{ChangeEvent, memo, ReactNode, useEffect} from 'react'
import { useState } from 'react';
import { UserFetch } from '../../../types/api/user';
import { PrimaryButton } from '../../atoms/button/PrimaryButton';

type Props ={
isOpen:boolean;
onClose: () => void;
selectedUser?: UserFetch | null;
isAdmin?: boolean;
}

export const UserDetailModal:React.FC<Props> = memo((props) => {
const { isOpen, onClose ,selectedUser ,isAdmin =false} = props;

const [username,setUsername] = useState('');
const [name,setName] = useState('');
const [email,setEmail] = useState('');
const [phone,setPhone] = useState('');

useEffect(() => {
 setUsername(selectedUser?.username || "");
  setName(selectedUser?.name || "");
   setEmail(selectedUser?.email || "");
    setPhone(selectedUser?.phone || "");
}, [selectedUser])

const onClickUpdate = ()  => alert('aa');

const onChangeUserName = (e:ChangeEvent<HTMLInputElement>) => setUsername(e.target.value);
const onChangeName = (e:ChangeEvent<HTMLInputElement>) => setName(e.target.value);
const onChangeEmail = (e:ChangeEvent<HTMLInputElement>) => setEmail(e.target.value);
const onChangePhone = (e:ChangeEvent<HTMLInputElement>) => setPhone(e.target.value);

return (
 <Modal isOpen={isOpen} onClose={onClose} autoFocus={false} motionPreset='slideInBottom'>
    <ModalOverlay />
    <ModalContent pb={2}>
        <ModalHeader>
          ユーザ詳細
        </ModalHeader>
        <ModalCloseButton/>
        <ModalBody mx={4}>
          <Stack spacing={4}>
            <FormControl>
              <FormLabel>
                名前
              </FormLabel>
              <Input value={username} onChange={onChangeUserName} isReadOnly={!isAdmin} />
             <FormLabel>
                フルネーム
              </FormLabel>
              <Input value={name} onChange={onChangeName} isReadOnly={!isAdmin}  />
                  <FormLabel>
         メール
              </FormLabel>
              <Input value={email} onChange={ onChangeEmail}isReadOnly={!isAdmin}  />
                  <FormLabel>
              電話番号
              </FormLabel>
              <Input value={phone} onChange={onChangePhone} isReadOnly={!isAdmin}  />
            </FormControl>
          </Stack>
        </ModalBody>
        {isAdmin === true &&(
        <ModalFooter>
          <PrimaryButton onClick={onClickUpdate}> 更新　</PrimaryButton>
        </ModalFooter>
)}
      </ModalContent>
    </Modal>

)

})