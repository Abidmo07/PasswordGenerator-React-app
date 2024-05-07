import { useState,useCallback, useEffect, useRef } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [isNUmber, setisNumber] = useState(false);
  const [isChar, setisChar] = useState(false);
  const [password, setPassword] = useState("");
  const PasswordGenerator=useCallback(
    () => {
      var pass='';
      var str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghigklmnopqrstuvwxyz"
      if(isNUmber) str+="0123456789"
      if(isChar) str+="+-*/!:;,%$=)]@_(['{}#~&"
      for (let i = 0; i <length; i++) {
        const randomNumber=Math.floor(Math.random()*str.length)
        pass+=str.charAt(randomNumber)
      }
      setPassword(pass)
    },
    [length,isNUmber,isNUmber],
  )
  useEffect(()=>{
      PasswordGenerator()
  },[length,isNUmber,isChar])
  const paswordRef=useRef(null)
  const copyPass=()=>{
    window.navigator.clipboard.writeText(password)
    paswordRef.current.select()
  }
  

  return (
    <>
      <main className="flex justify-center items-center ">
        <div className="flex flex-col justify-center items-center bg-slate-500 w-[700px] gap-3 mt-6 py-4 rounded-lg">
          <p>Password generator</p>
          <div className="flex ">
            <input
              className="w-[500px] rounded-tl-xl rounded-bl-xl px-3 bg-slate-200 text-orange-400"
              type="text"
              value={password}
              readOnly
              ref={paswordRef}
              
            />
            <button onClick={copyPass} className="bg-blue-700 p-3 rounded-tr-xl rounded-br-xl w-[90px] ">
              Copy
            </button>
          </div>
          <div className="flex gap-3 ">
            <input
              type="range"
              min="8"
              max="20"
              value={length}
              onChange={(e) => setLength(e.target.value)}
            />
            <p className="text-orange-400">length:{length}</p>
            <input 
             type="checkbox"
             defaultChecked={isNUmber}
             onChange={()=>{
              setisNumber((prev)=>!prev)
              
             }}
              />
            <p className="text-orange-400">Numbers</p>
            <input 
             type="checkbox"
             defaultChecked={isChar}
             onChange={()=>{setisChar((prev)=>!prev)}} />
            <p className="text-orange-400">Characters</p>
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
