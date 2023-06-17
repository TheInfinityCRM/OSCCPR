import React from 'react'
import { IHeadingProps } from '@customTypes/components'

const Heading : React.FC <IHeadingProps> = ({title}) => {

  return (<h2 className="text-[#FFCB05] text-center text-4xl font-bold font-roboto">{title}</h2>)
  
}

export default Heading