import React from "react";
import { AiFillCloseCircle, AiOutlineClose } from "react-icons/ai";
interface Props{
    children:React.ReactNode;
    modalOpen:boolean;
    setModalOpen:(isOpen:boolean)=>void;
}
const Model = ({ children, modalOpen, setModalOpen }:Props) => {
  return (
    <>
      {modalOpen && (
        <div className="bg-black/50 fixed inset-0">
          <div className="flex justify-center items-center h-full">
            <div className="flex flex-col items-start  bg-dark-2 w-1/2 p-5 rounded-md ">
            <button className="text-2xl mb-3" onClick={()=>setModalOpen(false)}>
          <AiOutlineClose size={20} color="white"/>
          
            </button>
            {children}</div>
          </div>
          
        </div>
      )}
    </>
  );
};

export default Model;
