// import { logRoles } from '@testing-library/dom';
import React,{ useState } from 'react'
 function Logo(){

    const [logos, setlogos] = useState({
      list:[
        'https://wpvip.com/wp-content/uploads/sites/3/2015/08/bigbite-vip.png',
        'https://brandeps.com/logo-download/C/Circle-k-logo-vector-01.svg',
        'https://www.mediainfoline.com/wp-content/uploads/2021/07/Mamypoko-Pants.jpg',
        'https://1000logos.net/wp-content/uploads/2017/03/Kfc_logo-500x281.png'
      ]
    })
    // console.log(logos)
    function renderItems(items){
        return(
            <div>
            {
                items.forEach((item)=>{
                    return(
                        <div>{item}</div>
                        )
                    })
                }
            </div>
            )
        }
        
     return(
         <>
         <h3>Some of Our Clients</h3> 
         {renderItems(logos.list)}
         </>
     );
     
    }
 export default Logo;