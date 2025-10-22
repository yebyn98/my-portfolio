import './Button.css';
import { useState } from 'react';
export default function Button() {

   const [state, setState] = useState("uiux");

   const onClickUi = () => {
    setState("uiux")
   };
   const onClickCode = () => {
    setState("code")
   };

   return (
      <div className="tab">
         <button  className={state === "uiux" ? "active" : ""} onClick={onClickUi}>UI/UX</button>
         <button  className={state === "code" ? "active" : ""} onClick={onClickCode}>Code</button>

      </div>
   );
}
