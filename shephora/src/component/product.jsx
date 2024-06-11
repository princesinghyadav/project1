  




   function Product(){
    //  product list of product section
 let Arr=[ 
    {
      img:"https://www.sephora.com/contentimages/2024-feb-lip-and-cheek-site-desktop-mobile-rwd-hero-banner-color-story-berry-US-CAN-image-3005-release.jpg?imwidth=1090",
      flavour:"Berry on Berry",
      description:"Double down on a matching lip and cheek.It wins everytime.",
      shop:"SHOP NOW"
    },
    {
     img:" https://www.sephora.com/contentimages/2024-feb-lip-cheek-site-home-page-rwd-hero-banner-color-story-mauve-image-only-us-3003-3079-release.jpg?imwidth=1090",
     flavour: " Mauve On Mauve",
     description:"Play up your lips and cheeks with a wash of color.",
     shop:"SHOP NOW"
    },
   
    {
     img:"  https://www.sephora.com/contentimages/2024-feb-lip-cheek-site-home-page-rwd-hero-banner-color-story-pink-us-can-2883-release.jpg?imwidth=1090",
     flavour:"Pink on Pink  ",
     description:"Make this lip-and-cheek look your whole personality. ",
     shop:" SHOP NOW"
    },
    {
     img:"https://www.sephora.com/contentimages/2024-02-19-slotting-bestsellers-v2-site-rwd-hp-hero-banner-US-CA_01.jpg?imwidth=1090 ",
     flavour:"Bestselling Beauty",
     description:"These fan favourites are worth the type . ",
     shop:" SHOP NOW"
    },
    {
     img:"https://www.sephora.com/contentimages/2024-2-17-mufe-hd-skin-hydra-glow-skincare-foundation-site-desktop-home-page-rwd-hero-banner-1200x800-en-us-can.jpg?imwidth=1090 ",
     flavour:"New MAKEUP FOR EVER ",
     description:" Hd Skin Hydra Glow Foundation: 24 hours Of Hydrating, Blurring coverge Only at sephora ",
     shop:" SHOP NOW"
    },
    {
     img:"https://www.sephora.com/contentimages/2024-2-14-kosas-bb-burst-tinted-moisturizer-site-desktop-home-page-rwd-hero-banner-1200x800-en-us.jpg?imwidth=1090 ",
     flavour:"New Kosas BB Burst Tinted Gel Cream",
     description:"Hydrates Visibly smooth, comes in 24 shades.  ",
     shop:" SHOP NOW "
    }
 ]

 return (
  
   
   <div id="product">
      
       {Arr.map((prop) => (
          <a href="https://www.sephora.com/beauty/monochromatic-makeup?icid2=homepage_slideshow_color_animation_febmakeupstory0224_berry_fy243190_broadcast_us_rwd_banner_030124#berry ">
           <div id="products">
           <img  id="imgtag"  src={prop.img} /> 
           <div id="cover"> 
         <h1>{prop.flavour}</h1> 
         <p>{prop.description}</p> 
          <h3>{prop.shop}</h3>
          </div>
         </div>
        </a>   
       ))}
      
   </div>
  
 )
     
}
   export default Product





