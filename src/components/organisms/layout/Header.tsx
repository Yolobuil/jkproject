import { Box, Button, Drawer, DrawerBody, DrawerContent, DrawerOverlay, Flex, Heading, IconButton, Link, useDisclosure } from '@chakra-ui/react'
import React,{memo} from 'react'
import { HamburgerIcon } from '@chakra-ui/icons'

export const Header:React.FC = memo(() => {

  const {isOpen,onOpen,onClose} = useDisclosure();

  // チャクラUIはデフォルトでブレークポイントを提供している
  // 基本的には文字のサイズはmd ブレークポイントがmd以上になったらlg（文字の大きさを大きくする）
  // Linkのbaseがnoneの理由はモバイルファーストのため。
  // DrawerOverlayはハンバーガーメニューでメニューを開いた時に背景を暗くするもの。
return (
  <>
<Flex as="nav" bg='teal.500' color='gray.50' align='center' justify='space-between' padding={{base: 3 , md:5}}>
<Flex align='center' as='a' mr={8} _hover={{cursor:"pointer"}}><Heading as='h1' fontSize={{base: 'md' , md:"lg"}}> ユーザ管理アプリ </Heading></Flex>
<Flex align='center' fontSize='sm' flexGrow={2} display={{base:'none' , md:'flex'}}>
  <Box pr={4}>
 <Link>ユーザ一覧</Link>
 <Link>設定</Link>
 </Box>
</Flex>
<IconButton aria-label='メニューボタン' onClick={onOpen} icon={ <HamburgerIcon />} size='sm' variant='unstyled' display={{base:'block' , md:'none'}}/>
</Flex>
<Drawer placement='left' size='xs' onClose={onClose} isOpen={isOpen}>
  <DrawerOverlay>
<DrawerContent>
  <DrawerBody p={0} bg='gray.100'>
    <Button w='100%'>TOP</Button>
<Button w='100%'>ユーザ一覧</Button>
<Button w='100%'>設定</Button>
  </DrawerBody>
</DrawerContent>
    </DrawerOverlay>
</Drawer>
</>


)

})