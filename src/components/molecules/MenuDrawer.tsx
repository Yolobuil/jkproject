import { Drawer, DrawerOverlay, DrawerContent, DrawerBody, Button } from '@chakra-ui/react'
import React,{memo} from 'react'

type Props ={
onClose: () => void,
isOpen: boolean,
onClickHome: () => void,
onClickUserManagement: () => void,
onClickSetting: () => void,
}

export const MenuDrawer:React.FC<Props> = memo(({ onClose,isOpen,onClickUserManagement,onClickSetting ,onClickHome}) => {



return (

<Drawer placement='left' size='xs' onClose={onClose} isOpen={isOpen}>
  <DrawerOverlay>
<DrawerContent>
  <DrawerBody p={0} bg='gray.100'>
<Button w='100%' onClick={onClickHome}>TOP</Button>
<Button w='100%' onClick={onClickUserManagement}>ユーザ一覧</Button>
<Button w='100%'onClick={onClickSetting}>設定</Button>
  </DrawerBody>
</DrawerContent>
    </DrawerOverlay>
</Drawer>

)

})