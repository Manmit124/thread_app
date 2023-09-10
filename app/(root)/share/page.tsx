'use client'
import {
FacebookShareButton,
FacebookIcon,   
WhatsappShareButton,
WhatsappIcon
  } from "react-share";
const page = () => {

    const shareurl="https://www.facebook.com/login.php/"
  return (
    <div>
   <FacebookShareButton url={shareurl}>
    <FacebookIcon size={40}/>
   </FacebookShareButton>
  
    </div>
  )
}

export default page
