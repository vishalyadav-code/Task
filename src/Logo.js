// import { logRoles } from '@testing-library/dom';
import "./Logo.css";
import React,{ useState } from 'react'
 function Logo(){

    const [logos, setlogos] = useState({
      list:[
          'https://www.neurointeractive.com/images/logo-circlek.png',
          'https://www.neurointeractive.com/images/logo-bigbite.png',
          'https://www.neurointeractive.com/images/logo-24seven.png',
          'https://www.neurointeractive.com/images/logo-panasonic.png',
          'https://www.neurointeractive.com/images/logo-whirlpool.png',
          'https://www.neurointeractive.com/images/logo-mahindra.png',
          'https://www.neurointeractive.com/images/logo-kfc.png',
          'https://www.neurointeractive.com/images/logo-havells.png',
          'https://www.neurointeractive.com/images/logo-pizzahut.png',
          'https://www.neurointeractive.com/images/logo-mamypoko.png',
          'https://www.neurointeractive.com/images/logo-sofy.png',
          'https://www.neurointeractive.com/images/logo-nikon.png'
         ]
    })

    function renderItems(items){
        return(
            <div>
            {
                items.map((item)=>{
                    return(
                        <img src={item} alt=".."/>
                        )
                    })
                }
            </div>
            )
        }
        
     return(
         <>
         <div className="LogoContainer">
         <h3 className="client-heading"> Some of Our Clients</h3> 
            <div className="logo-container">
                {renderItems(logos.list)}
            </div>
         </div>
         </>
     );
    }
 export default Logo;