## Getting Started

Pembuatan music player
```bash
#Untuk file audio bisa ditaruh difolder /public/audiofile/
#Untuk file index.jsx ditaruh difolder src/pages
```

## Pembuatan Kode

#1 Bagian Atas import dan export
```bash
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import { CiPlay1,CiPause1,CiStop1 } from "react-icons/ci";
export default function Home() {
const [isplaying,setplaying]=useState(false)
const [currenttime,setcurrenttime]=useState(0)
const [duration,setduration]=useState(0)
const audioref= useRef(null)


```
#2.Fungsi untuk menjalankan audio
```bash
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
```
#3. Fungsi untuk stop lagu

```bash
//fungsi untuk stop lagunya
const togglestop=(e)=>{ 
  audioref.current.load()
  setcurrenttime(0)
  setduration(0)
  setplaying(false)
}
 
```
#4 Untuk Ubah waktu ke detik
```bash
//fungsi untuk ubah waktu audionya
const ubahwaktu=(second)=>{
  const jam = Math.floor(second/3600)
  const menit= Math.floor((second%3600)/60)
  const detik=  Math.floor(second%60)
  return `${jam.toString().padStart(2,'0')}:${menit.toString().padStart(2,'0')}:${
  detik.toString().padStart(2,'0')}`
}

```
#5 Untuk Slider inputnya
```bash
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
```
#6 Bagian Komponennya
```bash

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
```


## NextJs

Pembuatannya menggunakan NextJs 

kalian bisa kunjungi websitenya 

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn-pages-router) - an interactive Next.js tutorial.
  [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

 [Next.js deployment documentation](https://nextjs.org/docs/pages/building-your-application/deploying) for more details.
