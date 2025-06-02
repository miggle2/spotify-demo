import React from 'react'
import { Outlet } from 'react-router'
import { useNavigate } from 'react-router'

const AppLayout = () => {
    
    const navigate = useNavigate();

  return (
    <div>
        Sidebar
        <div>
        <button onClick={()=> navigate('/')}>Home</button>
        <button onClick={()=> navigate('/search')}>Search</button>
        <button onClick={()=> navigate('/search/{keyword}')}>SearchWithKeyword</button>
        <button onClick={()=> navigate('/playlist/{1}')}>PlaylistDetailPage</button>
        </div>
        <Outlet/>
    </div>
    
  )
}

export default AppLayout