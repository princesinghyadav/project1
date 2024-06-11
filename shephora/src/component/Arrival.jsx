 
 

 
function Choosen(){
    let Array=[
      {  
        id:0,
        img:"https://www.sephora.com/productimages/sku/s2735223-main-zoom.jpg?imwidth=332",
        quick:"Quicklook",
        name:"Tower 28 Beauty",
        work:"Lip Softie Hydrating Tinted Lip Treatment Balm",
        price:"$16.00"
      },
      {
        id:1,
      img:" https://www.sephora.com/productimages/sku/s2735207-main-zoom.jpg?imwidth=332 ",
      quick:"Quicklook",
      name:"Tower 28 Beauty ",
      work:"SOS Lip Softie Hydrating  Lip Treatment Balm",
      price:"$16.00 "
    },
    {
      id:2,
      img:" https://www.sephora.com/productimages/sku/s2736866-main-zoom.jpg?imwidth=332 ",
      quick:"Quicklook",
      name:"HAUS LABS BY LADY GAGA",
      work:"PhDHybrid Lip GlaZe Plumping Gloss ",
      price:" $26.00"
    },
    {
      id:3,
      img:"https://www.sephora.com/productimages/sku/s2659985-main-zoom.jpg?imwidth=332  ",
      quick:"Quicklook",
      name:"HAUS LABS BY LADY GAGA",
      work:"Le Monster Lip Crayon Vegan Lipstickand Lip...",
      price:" $22.00"
    },  {
      id:4,
      img:"https://www.sephora.com/productimages/sku/s2484509-main-zoom.jpg?imwidth=332  ",
      quick:"Quicklook",
      name:"Tower 28 Beauty",
      work:"JuiceBalm Vegan Tinted Lip Balm",
      price:" $16.00"
    },  {
      id:5,
      img:"https://www.sephora.com/productimages/sku/s2571941-main-zoom.jpg?imwidth=332  ",
      quick:"Quicklook",
      name:"Hauss LABBS BY LADY GAGA ",
      work:"PhD HYbrid Lip Oil",
      price:" $16.00 -$26.00"
    },
    {
      id:6,
      img:"  https://www.sephora.com/productimages/sku/s2648467-main-zoom.jpg?imwidth=332",
      quick:"Quicklook",
      name:"OLEHENRIKSEN",
      work:"Pout Preserve Hydrating Peptide lip Treatment ",
      price:"$22.00 "
    },
    {
      id:7,
      img:"https://www.sephora.com/productimages/sku/s2549970-main-zoom.jpg?imwidth=332  ",
      quick:"Quicklook",
      name:"Tower 28 Beauty ",
      work:"ShineOn Lip Jelly Non-Sticky Gloss ",
      price:"$16.00 "
    },{
      id:8,
      img:" https://www.sephora.com/productimages/sku/s2737005-main-zoom.jpg?imwidth=332 ",
      quick:"Quicklook",
      name:"MILK MAKEUP",
      work:"Cooling Water Jelly Tint Lip + Cheek Blush Stain ",
      price:" $24.00"
    },{
      id:9,
      img:" https://www.sephora.com/productimages/sku/s2691434-main-zoom.jpg?imwidth=332 ",
      quick:"Quicklook",
      name:"Sale",
      work:"Glossybounce High -shine Hydrating Lip Glo...",
      price:" $22.00"
    }
    ]
    return (
    <>
    <div>
      <h1 style={{marginLeft:"120px"}}>Choosen For You</h1>
    </div>
    <div  id="produ" >
    { Array.map((i)=>(
  
  <div id="pro" >
    <div >
    <img id="imu"src={i.img} alt=" choosen "/>
    </div>
    <div>
    <h4>{i.name}</h4>
    <p>{i.work}</p>
    <h2>{i.price}</h2>
  </div>
  </div>
  
    ))
  } 
  </div>
      </>
      )
   }
   



   
//  Arrival start 
 
 function Arrival(){
    let Array=[
    {
      id:8,
        img:"https://www.sephora.com/productimages/sku/s2742492-main-zoom.jpg?imwidth=332",
      quick:"Quicklook",
      name:" PATRICK TA",
      work:"Major Headlines Double Take Creme & Powder  ",
      price:" $38.00"
    },{
      id:9,
      img:"https://www.sephora.com/productimages/sku/s2737005-main-zoom.jpg?imwidth=332 ",
      quick:"Quicklook",
      name:"MILK MAKEUP ",
      work:"Cooling Water Jelly tint Lip + Cheek Blush Stain  ",
      price:" $22.00"
    },
      {  
        id:0,
        img:"https://www.sephora.com/productimages/sku/s2742195-main-zoom.jpg?imwidth=332 ",
        quick:"Quicklook",
        name:"Glow Recipe ",
        work:" Watermelon Glow Niacinamode Hue Drops",
        price:"$35.00 "
      },
      {
        id:1,
      img:"  https://www.sephora.com/productimages/sku/s2735223-main-zoom.jpg?imwidth=332 ",
      quick:"Quicklook",
      name:" Tower 28 Beauty ",
      work:"Lip Softie Hydrating Tinted Lip Treatment Balm  ",
      price:"$16.00 "
    },
    {
      id:2,
      img:"https://www.sephora.com/productimages/sku/s2744696-main-zoom.jpg?imwidth=332 ",
      quick:"Quicklook",
      name:" Summer Fridays",
      work:" Dream Lip Oil For Moisturizing Sheer.. ",
      price:" $26.00"
    },
    {
      id:3,
      img:"https://www.sephora.com/productimages/sku/s2571941-main-zoom.jpg?imwidth=332https://www.sephora.com/productimages/sku/s2737070-main-zoom.jpg?imwidth=332 ",
      quick:"Quicklook",
      name:"dae ",
      work:"fairy Duster Volumizing Dry shampoo powder ",
      price:" $30.00"
    },  {
      id:4,
      img:"https://www.sephora.com/productimages/sku/s2752509-main-zoom.jpg?imwidth=332  ",
      quick:"Quicklook",
      name:"OLEHENRIKSEN ",
      work:"Pout preserve Hydrating Peptide Lip Treatment ",
      price:" $22.00"
    },  {
      id:5,
      img:"https://www.sephora.com/productimages/sku/s2742989-main-zoom.jpg?imwidth=332  ",
      quick:"Quicklook",
      name:" Saie ",
      work:"Dew Blush BlenLiquid Blush ",
      price:" $25.00"
    },
    {
      id:6,
      img:"  https://www.sephora.com/productimages/sku/s2749133-main-zoom.jpg?imwidth=332",
      quick:"Quicklook",
      name:"Fenty Beauty by Rihanna",
      work:"  Gloss Bomb Universal Lip Luminizer ",
      price:"$21.00 "
    },
    {
      id:7,
      img:"https://www.sephora.com/productimages/sku/s2617983-main-zoom.jpg?imwidth=332  ",
      quick:"Quicklook",
      name:" Tower 28 Beauty ",
      work:" Sos daily RescueFacial Spray ",
      price:"$12.00-$68.00 ($112.00 vale)"
    }
    ]
    return (
    <>
    <div>
      <h1 style={{marginLeft:"120px"}}> New Arrivals </h1>
    </div>
    <div  id="produ" >
    { Array.map((i)=>(
  
  <div id="pro" >
    <div >
    <img id="imu"src={i.img} alt=" choosen "/>
    </div>
    <div>
    <h4>{i.name}</h4>
    <p>{i.work}</p>
    <h2>{i.price}</h2>
  </div>
  </div>
  
    ))
  } 
  </div>
      </>
    
  
    )
   }









   
//   B eauty offre 24 satart
function Beauty(){

    let Array=[
    {
      id:8,
        img:"https://www.sephora.com/contentimages/2024-spend-more-get-more-multiworld-app-site-desktop-mobile-beauty-offers-page-banner-us-final.jpg?imwidth=480",
     
      name:" Spend More, Get More",
      work:" Choose up to three trial sizes from top brands like Drunk Elephant, ceremonia and more!  ",
      price:" $38.00"
    },{
      id:9,
      img:"https://www.sephora.com/contentimages/promo/bpme/2024/February/2024-2-29-february-bpme-site-desktop-mobile-app-beauty-offers-page-banner-peter-thomas-roth-en-us-can-kohls.jpg?imwidth=480 ",
      
      name:"Get 4X Pointstt ",
      work:" on ALL Peter Thomas Roth.  ",
      price:" $22.00"
    },
      {  
        id:0,
        img:"https://www.sephora.com/contentimages/promo/bpme/2024/February/2024-2-29-february-bpme-site-desktop-mobile-app-beauty-offers-page-banner-patrick-ta-en-us-can.jpg?imwidth=480 ",
        quick:"Quicklook",
        name:" Get 4X POintstt ",
        work:" oN ALL  PATRICK TA.",
        price:"$35.00 "
      },
      {
        id:1,
      img:"  https://www.sephora.com/contentimages/promo/bpme/2024/February/2024-2-29-february-bpme-site-desktop-mobile-app-beauty-offers-page-banner-nutrafol-app-only-en-us.jpg?imwidth=480 ",
      quick:"Quicklook",
      name:"  Get 4X Pointstt",
      work:" oN all Netrafol-- only on the app. ",
      price:"$16.00 "
    },
    {
      id:2,
      img:"https://www.sephora.com/contentimages/promo/beautyoffers/2024/March/2024-03-01-slotting-baar-app-home-page-beauty-offer-banner-ddg-US-CA-handoff.jpg?imwidth=480 ",
      quick:"Quicklook",
      name:"  Auto-REplanish Hot Deal",
      work:"  Get 0% off your first three Alpha Beta Peel Pad subscription deliveries ",
      price:" $26.00"
    },
    {
      id:3,
      img:"https://www.sephora.com/contentimages/promo/beautyoffers/2024/March/2024-3-04-laneige-water-bank-moisture-collection-site-desktop-mobile-app-beauty-offers-page-banner-en-us-can.jpg?imwidth=480 ",
    
      name:"Free LANEIGE Trial Size",
      work:"Say goodbye to dry skin with this new, barrier-supporting moisturizer.  ",
      price:" $30.00"
    },  {
      id:4,
      img:"https://www.sephora.com/contentimages/promo/beautyoffers/2024/March/2024-03-01-PICKNEWNESS-slotting-promo-app-beauty-offers-banner-US-handoff.jpg?imwidth=480  ",
      
      name:"Choose a free trial size",
      work:" Get a kiels Since 1851 treatment,josie maran bodylotion,or Elemsis cleanser.",
      price:" $22.00"
    },  {
      id:5,
      img:"https://www.sephora.com/contentimages/promo/beautyoffers/2024/March/2024-03-01-slotting-baar-app-home-page-beauty-offers-banner-1000x750-abh-US-CA-handoff.jpg?imwidth=480  ",
      quick:"Quicklook",
      name:" Auto replenish Hot deal",
      work:"Get 10% off your first thrree Brow wiz ultrea -slim-precision Pencel subscription deliveries. ",
      price:" $25.00"
    },
    {
      id:6,
      img:"  https://www.sephora.com/contentimages/promo/beautyoffers/2024/February/2024-02-29-PRETTYHAIR-slotting-promo-app-beauty-offers-banner-US.jpg?imwidth=480",
      quick:"Quicklook",
      name:"Choose a free Hair -care-trial size",
      work:"  Get a NutrfolConditioner or Living Proof shampoo ",
      price:""
    },
    {
      id:7,
      img:" https://www.sephora.com/contentimages/promo/beautyoffers/2024/February/2024-2-28-skinfix-barrier-protection-site-desktop-mobile-app-beauty-offers-page-banner-en-us-can.jpg?imwidth=480 ",
      quick:"Quicklook",
      name:" Get a skinfix Trial size",
      work:"Visibly plump skin with this new and improved ,barrier-supporting moisturizer. ",
      price:"Free witrh $30 purchase .Beauty insider members onnly"
    }
    ]
    return (
    <>
    <div>
      <h1 style={{marginLeft:"120px"}}> Beauty Offer (24) </h1>
    </div>
    <div  id="produ" >
    { Array.map((i)=>(
  
  <div id="pro" >
    <div >
    <img id="imu"src={i.img} alt=" choosen "/>
    </div>
    <div>
    <h4>{i.name}</h4>
    <p>{i.work}</p>
     <p> Free with $30 purchase.* Beauty insider members only.</p>
     <p>App only *Exclusions/terms apply</p>
     <br/>
     <br/>
     <button style={{ width:"40%" ,height:"50px" ,margin:"50px",color:"black" ,borderRadius:"25px"}}>APPLY </button>
  </div>
  </div>
  
    ))
  } 
  </div>
      </>
    
  
    )
  }

  

  function Arrivals(){
    return(
      <>
      <Choosen/>
      <Arrival/>
      <Beauty/>
    </>
      )
    
   }
   export default Arrivals