import React from 'react';
import { VideoBanner } from '../components/VideoBanner';
import { VideoCard } from '../components/VideoCard';
import { categories } from '../types';

const MOCK_VIDEOS = [
  {
    id: '1',
    titulo: 'SEO com React',
    categoria: 'Front End',
    imageUrl: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee',
    videoUrl: 'https://youtube.com/watch?v=example1',
    descricao: 'Eu tô aqui pra esse vídeo dizer que a gente vai aprender a começar um projeto inspirado no design Pokemon com Next.js SEO e outras coisas mais.'
  },
  {
    id: '2',
    titulo: 'O que faz uma desenvolvedora Front-end?',
    categoria: 'Front End',
    imageUrl: 'https://plus.unsplash.com/premium_photo-1661764878654-3d0fc2eefcca',
    videoUrl: 'https://youtube.com/watch?v=example2',
    descricao: 'Descubra o papel de uma desenvolvedora Front-end'
  },
  {
    id: '3',
    titulo: 'GitHub CLI - Nova experiência no GitHub',
    categoria: 'Back End',
    imageUrl: 'https://images.unsplash.com/photo-1618401471353-b98afee0b2eb',
    videoUrl: 'https://youtube.com/watch?v=example3',
    descricao: 'Aprenda a usar o GitHub CLI'
  },
  {
    id: '4',
    titulo: 'Desenvolvimento Android',
    categoria: 'Mobile',
    imageUrl: 'https://images.unsplash.com/photo-1607252650355-f7fd0460ccdb',
    videoUrl: 'https://youtube.com/watch?v=example4',
    descricao: 'Aprenda desenvolvimento mobile com Android'
  }
];

export function Home() {
  const featuredVideo = MOCK_VIDEOS[0];

  return (
    <div className="min-h-screen bg-black">
      <VideoBanner video={featuredVideo} />
      
      <div className="max-w-7xl mx-auto px-6 py-12">
        {categories.map((categoria) => {
          const categoryVideos = MOCK_VIDEOS.filter(video => video.categoria === categoria);
          const categoryClass = `category-title-${categoria.toLowerCase().replace(' ', '-')}`;
          
          if (categoryVideos.length === 0) return null;

          return (
            <div key={categoria} className="mb-12">
              <div className={`inline-block px-8 py-2 mb-6 ${categoryClass} rounded`}>
                <h2 className="text-2xl font-bold text-black">{categoria}</h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {categoryVideos.map((video) => (
                  <VideoCard key={video.id} video={video} />
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}