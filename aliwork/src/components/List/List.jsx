import React,{useState,useEffect} from 'react';
import {getList} from '../../utils/http'
import {ListWrap} from './liststyled'

const List = (props)=> {
    // debugger
    // https://api.myjson.com/bins/zp6s0
    const [datalist, setdatalist] = useState([]);
    useEffect(()=>{
         (async ()=>{
            let res =  await getList('https://api.myjson.com/bins/zp6s0')
            console.log(res.data.list)
            setdatalist(
                res.data.list
            )
        })()
    }
       
    ,[])
    return (
        <ListWrap>
            <div className='top'>
                <span>更新职位</span>
                <p>更多</p>
            </div>

            <ul>
                {datalist.map(item=>(
                    <li key={item.id}>
                        <span>{item.title}</span>
                        <h3>{item.city}</h3>
                        <h4>{item.time}</h4>
                    </li>
                ))}
            </ul>  
        
        </ListWrap>
    );
}

export default List;