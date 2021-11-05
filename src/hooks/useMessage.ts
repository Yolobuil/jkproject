import { useToast } from "@chakra-ui/react"
import { useCallback } from "react"

type Props = {
  title:string;
  status: "info" | "warning" | "success" | "error";
}

export const useMessage = () => {
  const toast = useToast();

const showMessage = useCallback((props:Props) => {
  const{ title, status} = props;
toast({
  // 同じ名称なため、:以降を省略
  title,
  position:'top',
  duration:2000,
  isClosable:true,
  status,
});
},[toast])
return{ showMessage }

}