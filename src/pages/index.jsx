import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import { CiPlay1,CiPause1,CiStop1 } from "react-icons/ci";

export default function Home() {
const [isplaying,setplaying]=useState(false)
const [currenttime,setcurrenttime]=useState(0)
const [duration,setduration]=useState(0)
const audioref= useRef(null)

//fungsi untuk memulai audio dan pause audio
const toogle=()=>{
 if(isplaying){
  audioref.current.pause()    
  
 }else{
  audioref.current.play()
  setcurrenttime(audioref.current.currentTime)
  setduration(audioref.current.duration)
 }
 setplaying(!isplaying)
}
//fungsi untuk stop lagunya
const togglestop=(e)=>{ 
  audioref.current.load()
  setcurrenttime(0)
  setduration(0)
  setplaying(false)
}
 
  

//fungsi untuk ubah waktu audionya
const ubahwaktu=(second)=>{
  const jam = Math.floor(second/3600)
  const menit= Math.floor((second%3600)/60)
  const detik=  Math.floor(second%60)
  return `${jam.toString().padStart(2,'0')}:${menit.toString().padStart(2,'0')}:${
  detik.toString().padStart(2,'0')}`
}

//fungsi untuk slider lagunya
const handleseek=(e)=>{  
  audioref.current.currentTime=e.target.value
  setcurrenttime(e.target.value)
}


useEffect(()=>{
 audioref.current.addEventListener('timeupdate',()=>{
  setcurrenttime(audioref.current.currentTime)  
 })
})

  return (
   <div className=" flex justify-center items-center flex-col min-h-screen gap-3">
    <div>
      <audio ref={audioref} src="./audiofile/tes.m4a" ></audio>
    </div>
    <div className="flex flex-col gap-3"> 
    <div>
      <img src="https://play-lh.googleusercontent.com/1TO53OEq3vDyIDnZgkrvsseC52YrZWo2XXfnqVFxD8yUh0d1HjAA8kUf8FS-iNljsIvM" width={200} height={200} alt="" />
    </div> 

    <div>
      <input className="w-full" type="range" min="0" max={duration} value={currenttime} onChange={handleseek}  />
    </div>

    <div>
     Time : {ubahwaktu(currenttime)}/ {ubahwaktu(duration)}
    </div>
    <div className="flex justify-center gap-2">
    <button onClick={togglestop} className="border rounded-lg p-2"><CiStop1/></button>
      <button onClick={toogle} className="border rounded-lg p-2">{isplaying? (<CiPause1 />) :(<CiPlay1/>)}</button>
    </div>
    </div>
   </div>
  );
}
