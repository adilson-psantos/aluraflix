import React, { useState } from 'react';
import { categories } from '../types';

export function VideoForm({ initialData, onSubmit, onClear }) {
  const [formData, setFormData] = useState({
    titulo: initialData?.titulo || '',
    categoria: initialData?.categoria || categories[0],
    imageUrl: initialData?.imageUrl || '',
    videoUrl: initialData?.videoUrl || '',
    descricao: initialData?.descricao || '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-2xl mx-auto p-6">
      <h2 className="text-2xl font-bold text-white mb-6">
        {initialData ? 'Editar Vídeo' : 'Novo Vídeo'}
      </h2>
      
      <div className="space-y-4">
        <div>
          <label className="block text-white mb-2">Título</label>
          <input
            type="text"
            value={formData.titulo}
            onChange={(e) => setFormData({ ...formData, titulo: e.target.value })}
            className="w-full p-2 rounded bg-gray-800 text-white border border-gray-700"
            required
          />
        </div>

        <div>
          <label className="block text-white mb-2">Categoria</label>
          <select
            value={formData.categoria}
            onChange={(e) => setFormData({ ...formData, categoria: e.target.value })}
            className="w-full p-2 rounded bg-gray-800 text-white border border-gray-700"
          >
            {categories.map((categoria) => (
              <option key={categoria} value={categoria}>{categoria}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-white mb-2">URL da Imagem</label>
          <input
            type="url"
            value={formData.imageUrl}
            onChange={(e) => setFormData({ ...formData, imageUrl: e.target.value })}
            className="w-full p-2 rounded bg-gray-800 text-white border border-gray-700"
            required
          />
        </div>

        <div>
          <label className="block text-white mb-2">URL do Vídeo</label>
          <input
            type="url"
            value={formData.videoUrl}
            onChange={(e) => setFormData({ ...formData, videoUrl: e.target.value })}
            className="w-full p-2 rounded bg-gray-800 text-white border border-gray-700"
            required
          />
        </div>

        <div>
          <label className="block text-white mb-2">Descrição</label>
          <textarea
            value={formData.descricao}
            onChange={(e) => setFormData({ ...formData, descricao: e.target.value })}
            className="w-full p-2 rounded bg-gray-800 text-white border border-gray-700 h-32"
            required
          />
        </div>

        <div className="flex gap-4">
          <button
            type="submit"
            className="px-6 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition"
          >
            {initialData ? 'Salvar Alterações' : 'Salvar'}
          </button>
          <button
            type="button"
            onClick={onClear}
            className="px-6 py-2 bg-gray-700 text-white rounded hover:bg-gray-600 transition"
          >
            Limpar
          </button>
        </div>
      </div>
    </form>
  );
}