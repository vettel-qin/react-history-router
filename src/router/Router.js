import { createContext, useEffect, useState } from "react"

// 用于共享路由当前history地址
export const RouterContext = createContext();

export default function Router(props) {
  const [path, setPath] = useState();

  useEffect(() => {
    // 先解析第一次的history值
    const paths = window.location.pathname;

    setPath(paths)

    // 监听浏览器回退事件
    window.addEventListener('popstate', () => {
      const paths = window.location.pathname;
      setPath(paths);
    })

    return () => {
      window.removeEventListener('popstate');
    }
    
  }, [])

  const onPath = (paths) => () => {
    setPath(paths);
  }

  return (
    <RouterContext.Provider value={{path, onPath: (paths) => {console.log(paths, 'eee'); setPath(paths)}}}>
      {props.children}
    </RouterContext.Provider>
  )
}