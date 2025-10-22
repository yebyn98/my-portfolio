import { useRef } from 'react';
import '../components/Intro.css';
import { useNavigate } from 'react-router-dom';

export default function Intro() {
   const questionRef = useRef(null);
   const boxRef = useRef(null);
   const textRef = useRef(null);

   const handleClick = () => {
      questionRef.current.classList.add('click');
      boxRef.current.classList.add('open');
      setTimeout(() => {
         textRef.current.classList.add('show');
      }, 3000);
   }
   const nav = useNavigate();
      
   return (
      <>
         <div className="question" ref={questionRef}>
            <div className='ask'>당신의 Barrier를 제거할까요?</div>
            <button className='button' onClick={handleClick}>좋아요</button>
         </div>
         <div className="Box" ref={boxRef}>
            <div className="box1"></div>
            <div className="box2"></div>
         </div>
         <div className="Show" ref={textRef}>
            <div className="title">"모든 레벨, 모든 장벽을 허물다"</div>
            <div className="concept">BarrierFree - Adaptive Layers</div>
            <div className="author">by Yebyn Ok</div>
            <button className='start'  onClick={() => nav('/home')}>Portfolio Enter</button>
         </div>
      </>
   );
}