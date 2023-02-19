import React from 'react';
import { useState, createRef } from 'react';
import "../styles/AgriAdvice.css"

const Advice = () => {
  const [model, setModel] = useState(false);
  let data = [
    {
      id: 1,
      // poster: '',
      videoUrl: 'https://www.youtube.com/embed/jOv9JGGPhoQ',
    },
    {
      id: 2,
      // poster: '',
      videoUrl: 'https://www.youtube.com/embed/qkqtcXuogu4',
    
    },
    {
      id: 3,
      // poster: '',
      videoUrl: 'https://www.youtube.com/embed/415an1V0FxQ',
    },
    {
      id: 4,
      // poster: '',
      videoUrl: 'https://www.youtube.com/embed/uljlDOjeb8I',
    },
    {
      id: 5,
      // poster: '',
      videoUrl: 'https://www.youtube.com/embed/fRlUhUWS0Hk',
    },
    {
      id: 6,
      // poster: '',
      videoUrl: 'https://www.youtube.com/embed/I8ChfxcZG9U',
    }
  ]
  return (
    <div style={{backgroundImage:`url(${process.env.PUBLIC_URL + 'assets/B7.jpg'})`}} className="TalkToUsContainer">
      <h1 style={{textAlign: 'center'}}>Video Gallery</h1>
      <div className='gallery'>
        {data.map((item, index)=>{
            let divRef = createRef(null);
            const openMdel = () => {
              divRef.current.classList.remove('video');
              divRef.current.classList.add('model');
              setModel(true);
            }
            const closeMdel = () => {
              divRef.current.classList.add('video');
              divRef.current.classList.remove('model');
              setModel(false);
            }
            return(
              <div ref={divRef} className='video' key={index}>
                {model && <button className='model-close-btn' onClick={()=>closeMdel()}>X</button>}
                <div className='video-container' onClick={()=>openMdel()}>
                  <iframe height={'250px'}
                    autoPlay
                    style={{width: '100%'}}
                    type="video/mp4"
                    controls={['PlayPause', 'Seek', 'Time', 'Volume', 'Fullscreen']}
                    allowFullScreen
                    src = {item.videoUrl} >
                  </iframe> 
                </div>
              </div>
            )
        })}
      </div>
    </div>
  );
};

export default Advice;