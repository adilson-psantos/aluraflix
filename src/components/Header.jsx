import React from 'react';
import { Link } from 'react-router-dom';

export function Header() {
  return (
    <header className="bg-black py-4 px-6 border-b border-primary-blue">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link to="/" className="text-primary-blue text-4xl font-bold tracking-wider">
          ALURAFLIX
        </Link>
        
        <nav className="flex gap-4">
          <Link 
            to="/" 
            className="px-4 py-2 border border-primary-blue text-primary-blue rounded hover:bg-primary-blue hover:text-white transition"
          >
            INÍCIO
          </Link>
          <Link 
            to="/new-video" 
            className="px-4 py-2 border border-white text-white rounded hover:bg-white hover:text-black transition"
          >
            NOVO VÍDEO
          </Link>
        </nav>
      </div>
    </header>
  );
}