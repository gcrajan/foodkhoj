import React,{useState} from 'react'
import { useGlobalContext } from '../context'
import RingLoader from "react-spinners/RingLoader";

const Loading = () => {
    const{loading}=useGlobalContext();
    let [color, setColor] = useState('#6af5f5');
 return (
    <div className='loader'>
        <RingLoader
        color= {color}
        loading={loading}
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
    />
  </div>
 )
}

export default Loading
