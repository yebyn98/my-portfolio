import Title from '../components/Title';
import Nav from '../components/Nav';
import '../components/About.css';
import image2 from '../assets/image2.png';
import { Box, Card, Grid, Heading, HStack, Text } from '@chakra-ui/react';

export default function About() {
   return (
      <div className="About">
         <Nav />
         <Title title="About" name="yebyn" />
         <HStack className="content" gap={'20px'}>
            <Box className="profile">
               <img src={image2} />
               <Box className="name">
                  <Text>이름</Text>
                  <Text>옥예빈</Text>
               </Box>

               <Box className="birth">
                  <Text>생일</Text>
                  <Text>1998.11.14</Text>
               </Box>
               <Box className="phone">
                  <Text>번호</Text>
                  <Text>010-2861-6811</Text>
               </Box>
            </Box>
            <Grid className="character" templateColumns="repeat(2, 3fr)" gap="5">
               <Card.Root>
                  <Card.Header className="Strength">
                     <Heading>Strength</Heading>
                  </Card.Header>
                  <Card.Body>
                     <Text>창의적</Text>
                     <Text>논리적</Text>
                     <Text>탐구적</Text>
                     <Text>자기주도적</Text>
                     <Text>학습적</Text>
                  </Card.Body>
               </Card.Root>
               <Card.Root>
                  <Card.Header className="education">
                     <Heading>Education</Heading>
                  </Card.Header>
                  <Card.Body>
                     <Text>청명고등학교 졸업</Text>
                     <Text>한국기술교육대학교 디자인공학과 졸업</Text>
                     <Text>KT Techup 부트캠프 수료</Text>
                  </Card.Body>
               </Card.Root>
               <Card.Root>
                  <Card.Header className="skills">
                     <Heading>Skills</Heading>
                  </Card.Header>
                  <Card.Body>
                     <Grid templateColumns={'repeat(2, 3fr)'}>
                        <Text>Figma</Text>
                        <Text>PowerPoint</Text>
                        <Text>Excel</Text>
                        <Text>HTML</Text>
                        <Text>CSS</Text>
                        <Text>Javascript</Text>
                        <Text>Typescript</Text>
                        <Text>React</Text>
                        <Text>Next.js</Text>
                        <Text>Github</Text>
                     </Grid>
                  </Card.Body>
               </Card.Root>
               <Card.Root>
                  <Card.Header className="experience">
                     <Heading>Experience</Heading>
                  </Card.Header>
                  <Card.Body>
                     <Text>이언커뮤니케이션즈 2022.01 - 2025.10</Text>
                     <Text>KT Tech up 부트캠프 2025.10 - 2026.04</Text>
                  </Card.Body>
               </Card.Root>
               <Card.Root className="project">
                  <Card.Header>
                     <Heading>Project</Heading>
                  </Card.Header>
                  <Card.Body>
                     <Grid templateColumns={"repeat(2,2fr)"}>
                     <Box>
                        <Text as={'h4'}>UI/UX</Text>
                        <Text>현대 네비게이션 UI기획</Text>
                        <Text>보안 프로젝트 UI기획</Text>
                        <Text>자산관리 서비스 기획</Text>
                     </Box>
                     <Box  className="code">
                        <Text>Code</Text>
                        <Text>KT tech Up</Text>
                        <Text>감정 일기장</Text>
                        <Text >여행 위키</Text>
                        <Text>공항 웹서비스 기획</Text>
                     </Box>
                     </Grid>
                  </Card.Body>
               </Card.Root>
               <Card.Root className="certificate">
                  <Card.Header>
                     <Heading>Certificate</Heading>
                  </Card.Header>
                  <Card.Body>
                     <Text>정보처리기사</Text>
                     <Text>시각디자인산업기사</Text>
                     <Text>웹디자인기능사</Text>
                     <Text>운전면허증 2급</Text>
                  </Card.Body>
               </Card.Root>
            </Grid>
         </HStack>
      </div>
   );
}
