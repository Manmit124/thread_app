"use client";
import Image from "next/image";
import Model from "./Model";
import { useState } from "react";
import { FacebookIcon, FacebookMessengerIcon, FacebookMessengerShareButton, FacebookShareButton, InstapaperIcon, InstapaperShareButton, LinkedinIcon, LinkedinShareButton, PinterestIcon, PinterestShareButton, TelegramIcon, TelegramShareButton, WhatsappIcon, WhatsappShareButton } from "react-share";
import { useRouter } from "next/navigation";



const Sharebutton = () => {
const router=useRouter();
  const [openshare, setopenshare] = useState(false);
  const currentUrl=typeof window !== 'undefined' ? window.location.href : '';
  const shareurl = `${currentUrl}`
  const shareurlw=`${currentUrl}`
  return (
    <div>
      <div>
        <button onClick={() => setopenshare(true)}>
          <Image
            src="/assets/share.svg"
            alt="heart"
            width={24}
            height={24}
            className="cursor-pointer object-contain"
          />
        </button>

        <Model modalOpen={openshare} setModalOpen={setopenshare}>
          <div className="flex items-center gap-3 rounded-xl">
            <FacebookMessengerShareButton  url={shareurl} >
              <FacebookMessengerIcon className=" rounded-lg" size={40} />
            </FacebookMessengerShareButton>
            <WhatsappShareButton url={shareurlw} >
                <WhatsappIcon size={40}  className=" rounded-lg"/>
            </WhatsappShareButton>
           <LinkedinShareButton url={shareurl}>
                <LinkedinIcon size={40}  className=" rounded-lg"/>
                </LinkedinShareButton>
                <TelegramShareButton url={shareurlw}>
                  <TelegramIcon size={40} className=" rounded-lg"/>
                </TelegramShareButton>
          </div>
        </Model>
      </div>
    </div>
  );
};

export default Sharebutton;
