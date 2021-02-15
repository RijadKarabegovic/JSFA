
import React from 'react';
import { Link } from 'react-router-dom';
import './footnote.css';
import { RiFacebookBoxLine, RiInstagramLine, RiYoutubeLine, RiGithubLine} from 'react-icons/ri';
import { DiJavascript } from 'react-icons/di';


function footnote() {
  return (
    <div className='footnote'>
      <div className='global'>
        <div className='global_detail'>
         
            <Link to='/' className='logo'> <DiJavascript className='NB_icon' /> JavaScript for aunties </Link>
          
          <div className='rijad'> Made by Rijad Karabegović © 2021</div>
          
          <div className='ikone'>
            <Link className='ikone_velicina' to={'//bs-ba.facebook.com/rijadkarabegovic'} target='_blank' >
              <RiFacebookBoxLine />
            </Link>

            <Link className='ikone_velicina' to={'//www.youtube.com/channel/UCSLLthf2EfcqLVnoQK9UGwg'} target='_blank' >
              <RiYoutubeLine />
            </Link>
            
            <Link className='ikone_velicina' to={'//github.com/RijadKarabegovic'} target='_blank' >
              <RiGithubLine />
            </Link>

            <Link className='ikone_velicina'  to='//instagram.com/rijadkarabegovic?igshid=1i2pg5kni6g3g' target='_blank' >
              <RiInstagramLine/>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default footnote;


