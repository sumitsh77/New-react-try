import React from 'react';

const English = () => {
  const videos = ["https://www.youtube.com/embed/EngW7tLk6R8", "https://www.youtube.com/embed/4ITcSHos5vA", "https://www.youtube.com/embed/pz1Qf4Or6Hg", "https://www.youtube.com/embed/GCqDBgYN1ik", "https://www.youtube.com/embed/m9sIaFwQagw", "https://www.youtube.com/embed/zYLzq09WwOQ", "https://www.youtube.com/embed/PcukLktbPNM", "https://www.youtube.com/embed/FFNTQARYDKU", "https://www.youtube.com/embed/Guh4r6Chw-8", "https://www.youtube.com/embed/Iu9BxwHiojo", "https://www.youtube.com/embed/CYgZyDw2ADk", "https://www.youtube.com/embed/Guh4r6Chw-8", "https://www.youtube.com/embed/Iu9BxwHiojo", "https://www.youtube.com/embed/CYgZyDw2ADk"]
  return (
    <div className='py-10 '>
      {videos.map((video, id) => (
        <div tabIndex={0} key={id} className="collapse text-center collapse-plus border border-base-300 max-w-xl bg-gradient-to-r from-gray-700 via-gray-900 to-black my-2 text-white mx-auto bg-base-100  rounded-box">
          <input type="checkbox" className="peer" />
          <div className="collapse-title text-xl font-medium">
            <h1>Chapter {id + 1}</h1>
          </div>
          <div className="collapse-content">
            <iframe src={video} title="YouTube video player" className='text-center mx-auto py-5' allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen={true} ></iframe>
            <a href="https://quizmaster-41gr.onrender.com/Class%2012%20Art/Computer%20Science/QUIZES/main.html" rel='noreferrer' target={'_blank'}>try Quiz</a>
          </div>
        </div>
      ))}
    </div>
  );
}

export default English;
