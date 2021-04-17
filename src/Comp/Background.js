import React from 'react';
import './Background.css';


function Background({
  cover,
  hasCover,
  alt,
  svijetlaPozadina,
  gornji,
  svijetliTekst,
  svijetliTekstDeskripcija,
  glavni_naslov,
  tekst1,
  tekst2,
  tekst3,
  tekst4,
  tekst5,
  slika1,
  tekst6,
  slika2,
  tekst7,
  slika3,
  tekst8,
  slika4,
  tekst9,
  slika5,
  tekst10,
  slika6,
  tekst11,
  slika7,
  tekst12,
  slika8,
  tekst13,
  slika9,
  tekst14,
  slika10,
  tekst15,
  slika11
  
}) {
  return (
    <>
    <div> <div  className={ hasCover ? 'Cover' : 'notCover' }>
                {cover}
                </div></div>
      <div className={svijetlaPozadina ? 'Introduction_background' : 'Introduction_background blackPozadina'}>
        <div className='cont'>
            <div className='col'>
              <div className='background_wr'>
                <div className='gornji'>{gornji}</div>
                <h1 className={svijetliTekst ? 'glavni_naslov' : 'glavni_naslov black'}>
                  {glavni_naslov}
                </h1>
                
                <p
                  className={
                    svijetliTekstDeskripcija ? 'donji_naslov white': 'donji_naslov black' }>
                  {tekst1}
                </p>
                <p
                  className={
                    svijetliTekstDeskripcija ? 'donji_naslov white': 'donji_naslov black' }>
                  {tekst2}
                </p>
                
                <p
                  className={
                    svijetliTekstDeskripcija ? 'donji_naslov white': 'donji_naslov black' }>
                  {tekst3}
                </p>
                <p
                  className={
                    svijetliTekstDeskripcija ? 'donji_naslov white': 'donji_naslov black' }>
                  {tekst4}
                </p>
                <p
                  className={
                    svijetliTekstDeskripcija ? 'donji_naslov white': 'donji_naslov black'}>
                  {tekst5}
                </p>

               

                <img src={slika1} alt={alt} className='slike' />
              
                <p
                  className={
                    svijetliTekstDeskripcija ? 'donji_naslov white': 'donji_naslov black' }>
                  {tekst6}
                </p>

                <img src={slika2} alt={alt} className='slike' />

                <p
                  className={
                    svijetliTekstDeskripcija ? 'donji_naslov white': 'donji_naslov black' }>
                  {tekst7}
                </p>
                <img src={slika3} alt={alt} className='slike' />
                <p
                  className={
                    svijetliTekstDeskripcija ? 'donji_naslov white': 'donji_naslov black' }>
                  {tekst8}
                </p>
                
                <img src={slika4} alt={alt} className='slike' />
                <p
                  className={
                    svijetliTekstDeskripcija ? 'donji_naslov white': 'donji_naslov black' }>
                  {tekst9}
                </p>
                <img src={slika5} alt={alt} className='slike' />
               
                <p
                  className={
                    svijetliTekstDeskripcija ? 'donji_naslov white': 'donji_naslov black' }>
                  {tekst10}
                </p>
                <img src={slika6} alt={alt} className='slike' />
                <p 
                  className={
                    svijetliTekstDeskripcija ? 'donji_naslov white': 'donji_naslov black' }>
                  {tekst11}
                </p>
                <img src={slika7} alt={alt} className='slike' />
                <p
                  className={
                    svijetliTekstDeskripcija ? 'donji_naslov white': 'donji_naslov black' }>
                  {tekst12}
                </p>
                <img src={slika8} alt={alt} className='slike' />
                <p
                  className={
                    svijetliTekstDeskripcija ? 'donji_naslov white': 'donji_naslov black' }>
                  {tekst13}
                </p>
                <img src={slika9} alt={alt} className='slike' />
                <p id="p14" className={svijetliTekstDeskripcija ? 'donji_naslov white': 'donji_naslov black' 
                }><em>{tekst14}</em>
                  
                </p>

              

                <img src={slika10} alt={alt} className='slike' />
                <p
                  className={
                    svijetliTekstDeskripcija ? 'donji_naslov white': 'donji_naslov black' }>
                  <em>{tekst15}</em>
                </p>
                <img src={slika11} alt={alt} className='slike' />
              

              </div>
            </div>
        </div>
      </div>
    </>
  );
}

export default Background;

