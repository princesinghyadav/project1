



  


function Only(){
  
    let Array=[
    {
      id:8,
        img:"https://www.sephora.com/contentimages/2024-3-1-kerastase-premiere-collection-site-desktop-home-page-rwd-marketing-banner-800x534-en-us-can.jpg?imwidth=800",
     
      name:" Fight Damage with New Kerestase Premiere",
      work:" SHOP  NOW   ",
      price:" Visibly restore 99% of hair's original strnghth"
    },{
      id:9,
      img:"https://www.sephora.com/contentimages/2024-02-01-slotting-baar-site-rwd-home-page-marketing-banner-english-sknfx-US-CA-handoff_01.jpg?imwidth=800",
      
      name:"Auto-Replinish Hot Deal",
      work:" Getr10% off  ",
      price:" Get 10% off your three skinflix triple Lipid peptide Crem refill subscription deleiveries in select size"
    },
      {  
        id:0,
        img:"https://www.sephora.com/contentimages/2024-02-19-digital-personalization-bundle-b-site-desktop-home-page-rwd-marketing-banner-february-skincare-trending-on-social-us-final.jpg?imwidth=800 ",
        
        name:" Hot on Social   ",
        work:" SHOP NOW ",
        price:"On-trend skincare picks all over your #fyp"
      }
      
   
    ]
    return (
    <>
    <div>
      <br/>
      <br/>
      <br/>
    </div>
    <div  id="productt" >
    { Array.map((i)=>(
  
  <div id="pro" >
    <div >
    <img id="imu"src={i.img} alt=" choosen "/>
    </div>
    <div>
    <h4>{i.name}</h4>
    <p>{i.work}</p>
      <p><i class="price"></i></p>
  </div>
  </div>
  
    ))
  } 
  </div>
      </>
    
  
    )
  }
  

  export default Only
//   function Test(){
  
//           return(
//             <div>
//   <Top/>
//   <Search/>
//   <Navbar/>
//   <Product/>
//    <Productlist/>
//    <Only/>
//   </div>
//           )
//       }
     
  
  
  
    //   let rot=ReactDOM.createRoot(document.getElementById("root"))
    //   rot.render(<Test/>)
     
  
  