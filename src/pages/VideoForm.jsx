import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { VideoForm as VideoFormComponent } from '../components/VideoForm';

const MOCK_VIDEOS = [
  {
    id: '1',
    titulo: 'SEO com React',
    categoria: 'Front End',
    imageUrl: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee',
    videoUrl: 'https://youtube.com/watch?v=example1',
    descricao: 'Eu tô aqui pra esse vídeo dizer que a gente vai aprender a começar um projeto inspirado no design Pokemon com Next.js SEO e outras coisas mais.'
  }
];

export function VideoFormPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const video = id ? MOCK_VIDEOS.find(v => v.id === id) : undefined;

  const handleSubmit = (data) => {
    console.log('Formulário enviado:', data);
    navigate('/');
  };

  const handleClear = () => {
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-gray-900 py-12">
      <VideoFormComponent
        initialData={video}
        onSubmit={handleSubmit}
        onClear={handleClear}
      />
    </div>
  );
}