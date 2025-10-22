import Nav from '../components/Nav';
import Title from '../components/Title';
import Button from '../components/Button';
// import { useState } from 'react';
// import Hyundai_AutoEver_logo from '../public/Hyundai_AutoEver_logo.svg';
// import LIG_Nex1_CI_Logo from '../public/LIG_Nex1_CI_Logo.svg';

export default function Works() {
   // const [state, setState] = useState("code");
   return (
      <div className="Works">
         <Nav />
         <Title title="Works" name="yebyn" />
         <Button />
         <div className="content">
            {/* if (state === "uiux") ({Project_1_ux}, {Project_2_ux}, {Project_3_ux}) else (state === "code") ({Project_1_code}, {Project_2_code}, {Project_3_code}) */}
            <div className="uiux"></div>
            <div className="code"></div>
         </div>
      </div>
   );
}
