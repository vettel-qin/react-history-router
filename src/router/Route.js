import { useContext } from 'react';
import { RouterContext } from './Router';

export default function Route(props) {
  const context = useContext(RouterContext);
  
  return (
    // 当前的historyh地址和组件配置的地址比较，相等就进入路由对应的组件，不想等则不显示组件。
    context.path === props.path ? <props.component /> : null
  )
}