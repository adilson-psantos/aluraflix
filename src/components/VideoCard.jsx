import React from 'react';
import { Trash2, Edit } from 'lucide-react';
import { Link } from 'react-router-dom';

export function VideoCard({ video }) {
  const categoryClass = `category-card-${video.categoria.toLowerCase().replace(' ', '-')}`;

  return (
    <div className={`relative group ${categoryClass}`}>
      <img 
        src={video.imageUrl} 
        alt={video.titulo}
        className="w-full aspect-video object-cover"
      />
      <div className="absolute bottom-0 left-0 right-0 flex justify-between p-2 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition">
        <button className="p-2 hover:text-red-500 transition">
          <Trash2 size={20} />
        </button>
        <Link 
          to={`/editar-video/${video.id}`}
          className="p-2 hover:text-primary-blue transition"
        >
          <Edit size={20} />
        </Link>
      </div>
    </div>
  );
}