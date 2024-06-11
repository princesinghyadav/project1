   
   
   
   
   
   function Top(){

    return(
    
        <div id="top">
            <div id="toop">
          <a href=" ">  <h3><span style={{color:"black"}}> Get 4X Points** on ALL PATRICK TA.</span>  Use code<span style={{color:"black"}}>  PATRICKTA.
            </span>  Ends 3/6. **Terms apply. <span style={{color:"black"}}> SHOP NOW ▸</span></h3></a>
            </div>
            </div>
            
    )
}






 // search bar
 function Search(){
    return (
      <div id="search">
         
        <h1> SEPHORA </h1>

      <div><input placeholder="Search...." type="search" id="input" /></div>

      <div style={{display:"flex"}}> 
         <img  style={{marginLeft:"13px"}} src=" https://cdn-icons-png.flaticon.com/128/3443/3443338.png " alt="y"/> 
        <div className="p">
        <h4>Stores  </h4> 
        </div>

      </div>

        <div style={{display:"flex"}}>
        <img src="https://cdn-icons-png.flaticon.com/128/3364/3364929.png " />  <div><h4>Community </h4></div>

        </div>

      <div style={{display:"flex"}}>
        <img src=" https://cdn-icons-png.flaticon.com/128/10479/10479887.png" alt="3" />

        <div><h4>Sign in </h4>  </div>

        </div>

      <div >
        <img src="https://cdn-icons-png.flaticon.com/128/1077/1077035.png" alt="4"/>
        
        <img style={{marginLeft:"13px"}} src="https://cdn-icons-png.flaticon.com/128/325/325335.png" alt="5" />
        </div>
        </div>
    )
  }




  function Navbar(){
    return(
        <div id="Nav">
      <div id="Navbar">
    
    <div><a href="" ><h4>New</h4></a></div>
    <div><a href="" ><h4>Brands</h4></a></div>
    <div><a href="" ><h4>Makeup</h4></a></div>
    <div><a href="" ><h4>Skincare</h4></a></div>
    <div><a href="" ><h4>Hair </h4></a></div>
    <div><a href="" ><h4>Fragrance</h4></a></div>
    <div><a href="" ><h4>Tools & Freshness</h4></a></div>
    <div><a href="" ><h4>Bath & Body</h4></a></div>
    <div><a href="" ><h4>Mini Size </h4></a></div>
    <div><a href="" ><h4>Gifts & Gift Card</h4></a></div>
    <div><a href="" ><h4>Beauty Under $20</h4></a></div>
    <div><a href="" ><h4>Sale & Offers</h4></a></div>
        </div>
    
        </div>

    )
  }
   function Upperpart (){


    return (
        <>
           <Top/>
        <Search/>
        <Navbar/>
        </>
     
    )
   }
    export default Upperpart