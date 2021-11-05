import { Box, Button, Drawer, DrawerBody, DrawerContent, DrawerOverlay, Flex, Heading, IconButton, Link, useDisclosure } from '@chakra-ui/react'
import React,{memo, useCallback} from 'react'
import { HamburgerIcon } from '@chakra-ui/icons'
import { MenuIconButton } from '../../atoms/button/MenuIconButton';
import { MenuDrawer } from '../../molecules/MenuDrawer';
import { useHistory } from 'react-router-dom';

export const Header:React.FC = memo(() => {

  const {isOpen,onOpen,onClose} = useDisclosure();
  const history = useHistory();

  // 監視する変数を不要にするならば、EsLintをオフにすればOK
  const onClickHome = useCallback(() => history.push('/home'),[history]);
 const onClickUserManagement = useCallback(() => history.push('/home/user_management'),[history]);
 const onClickSetting = useCallback(() => history.push('/home/setting'),[history]);

  // チャクラUIはデフォルトでブレークポイントを提供している
  // 基本的には文字のサイズはmd ブレークポイントがmd以上になったらlg（文字の大きさを大きくする）
  // Linkのbaseがnoneの理由はモバイルファーストのため。
  // DrawerOverlayはハンバーガーメニューでメニューを開いた時に背景を暗くするもの。
return (
  <>
<Flex as="nav" bg='teal.500' color='gray.50' align='center' justify='space-between' padding={{base: 3 , md:5}}>
<Flex align='center' as='a' mr={8} _hover={{cursor:"pointer"}} onClick={onClickHome}><Heading as='h1' fontSize={{base: 'md' , md:"lg"}}> ユーザ管理アプリ </Heading></Flex>
<Flex align='center' fontSize='sm' flexGrow={2} display={{base:'none' , md:'flex'}}>
  <Box pr={4}>
 <Link onClick={onClickUserManagement}>ユーザ一覧</Link>
 <Link onClick={onClickSetting}>設定</Link>
 </Box>
</Flex>
<MenuIconButton  onOpen={onOpen}/>
</Flex>
<MenuDrawer onClose={onClose} onClickHome={onClickHome} onClickSetting={onClickSetting} onClickUserManagement={onClickUserManagement} isOpen={isOpen} />
</>


)

})