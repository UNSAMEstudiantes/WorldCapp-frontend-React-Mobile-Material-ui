
import { BottomNav } from 'src/components/bottom-nav/bottonNav'
import { Header } from './../components/header/Header'
import { Outlet } from 'react-router-dom'
import { useContext } from 'react'
import { Context } from 'src/context/Context'
const LayoutWrap = () => {

  const {title} = useContext(Context)

  return (
    <>
      <Header title={title} />
      <Outlet />
      <BottomNav />
    </>
  )
}


LayoutWrap.propTypes = {

}


export default LayoutWrap
