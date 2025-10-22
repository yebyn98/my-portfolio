import Nav from '../components/Nav';
import '../components/Home.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';

export default function Home() {
   return (
      <div className="Home" >
         <Nav name="BarrierFree" className="portfolio"/>
         <div className="info">
            <div>
               <FontAwesomeIcon icon={faUser} className="icon" size="1.9x" />
               <p>Yebyn Ok</p>
            </div>
            <div>
               <FontAwesomeIcon icon={faEnvelope} className="icon" size="1.9x" />
               <p>yebyn19981114@gmail.com</p>
            </div>
            <div>
               <FontAwesomeIcon icon={faGithub} className="icon" size="1.9x" />
               <a href="https://github.com/yebyn98" className="link" target="_blank">
                  Github
               </a>
            </div>
         </div>
      </div>
   );
}
