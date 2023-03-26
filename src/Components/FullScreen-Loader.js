import React from 'react'
import { useSelector } from 'react-redux'

const FullScreenLoader = () => {
    const settings = useSelector((state)=>state.settings.loader)
  return (
    <>
         <div  className={`${settings} LoadingOverlay`}>
                <div className="Line-Progress">
                    <div className="indeterminate"/>
                </div>
            </div>
    </>
  )
}

export default FullScreenLoader