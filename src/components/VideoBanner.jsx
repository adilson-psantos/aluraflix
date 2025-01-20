import React from 'react';

export function VideoBanner({ video }) {
  return (
    <div className="w-full bg-black">
      <div 
        className="relative mx-auto"
        style={{ width: '1443px', height: '832px' }}
      >
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${video.imageUrl})` }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50">
            <div className="h-full flex flex-col justify-center px-12">
              <span 
                className="inline-block bg-front-end text-black px-8 py-2 rounded text-xl font-bold mb-6"
                style={{ backgroundColor: '#6BD1FF' }}
              >
                {video.categoria}
              </span>
              <h1 className="text-5xl font-bold text-white mb-6">{video.titulo}</h1>
              <p className="text-white text-xl max-w-2xl">{video.descricao}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}