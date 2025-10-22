import { useLocation, useNavigate } from 'react-router-dom';
import './Nav.css';
import Toggle from './Toggle';
import './Toggle.css';
import { ColorModeButton } from './ui/color-mode';
import { Text, HStack, Box } from '@chakra-ui/react';

export default function Nav() {
   const nav = useNavigate();
   const location = useLocation(); //현재 페이지 감지
   const currentPath = location.pathname;

   // 1.	useNavigate() → 클릭 시 페이지 이동 처리
   // 2.	useLocation() → 현재 경로(pathname) 추적
   // 3.	useState() → 선택된 메뉴의 경로를 저장
   // 4.	useEffect() → 주소가 바뀌면 active 상태도 자동 갱신

   const handleClick = path => {
      nav(path);
   };

   return (
      <div className="Nav">
         <HStack className="logo" onClick={() => handleClick('/home')}>
            BarrierFree
         </HStack>
         <Box className="menu">
            <Box
               id="menu-item"
               className={currentPath === '/about' ? 'active' : ''}
               onClick={() => handleClick('/about')}
            >
               About;
            </Box>
            <Box
               id="menu-item"
               className={currentPath === '/works' ? 'active' : ''}
               onClick={() => handleClick('/works')}
            >
               Works;
            </Box>
            <Box
               className={currentPath === '/sideproject' ? 'active' : ''}
               onClick={() => handleClick('/sideproject')}
               id="menu-item"
            >
               SideProject;
            </Box>
         </Box>
         <HStack className="header-right" justifyContent={'flex-end'} gap={'20px'}>

            <HStack display={'flex'}>
               <ColorModeButton
                  style={{
                     backgroundColor: 'transparent',
                     width: '40px',
                     height: '40px',
                     borderRadius: '50%',
                     border: 'none',
                     cursor: 'pointer',
                  }}
               />
            </HStack>
         </HStack>
      </div>
   );
}
