import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Upload } from 'lucide-react';
import ImageUpload from '../upload/ImageUpload';
import { Tool } from '../../types';
import { categories } from '../../data/categories';

export default function NewToolForm() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<Tool>({
    title: '',
    description: '',
    imageUrl: '',
    url: '',
    rating: 0,
    reviews: 0,
    categories: [],
    tags: [],
    isHidden: false
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    console.log('Form submitted:', formData);
    navigate('/admin');
  };

  const handleCategoryChange = (category: string) => {
    setFormData(prev => ({
      ...prev,
      categories: prev.categories.includes(category)
        ? prev.categories.filter(c => c !== category)
        : [...prev.categories, category]
    }));
  };

  const handleTagInput = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && e.currentTarget.value.trim()) {
      e.preventDefault();
      const newTag = e.currentTarget.value.trim();
      if (!formData.tags.includes(newTag)) {
        setFormData(prev => ({
          ...prev,
          tags: [...prev.tags, newTag]
        }));
      }
      e.currentTarget.value = '';
    }
  };

  const removeTag = (tagToRemove: string) => {
    setFormData(prev => ({
      ...prev,
      tags: prev.tags.filter(tag => tag !== tagToRemove)
    }));
  };

  return (
    <div className="max-w-2xl mx-auto py-8 px-4">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Add New AI Tool</h1>
        <p className="mt-2 text-gray-600 dark:text-gray-300">Submit a new AI tool to be listed in our directory.</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Tool Image</label>
          <ImageUpload
            imageUrl={formData.imageUrl}
            onImageChange={(url) => setFormData(prev => ({ ...prev, imageUrl: url }))}
          />
        </div>

        <div>
          <label htmlFor="title" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Tool Name
          </label>
          <input
            type="text"
            id="title"
            value={formData.title}
            onChange={(e) => setFormData(prev => ({ ...prev, title: e.target.value }))}
            className="input"
            required
          />
        </div>

        <div>
          <label htmlFor="url" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Tool URL
          </label>
          <input
            type="url"
            id="url"
            value={formData.url}
            onChange={(e) => setFormData(prev => ({ ...prev, url: e.target.value }))}
            className="input"
            required
          />
        </div>

        <div>
          <label htmlFor="description" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Description
          </label>
          <textarea
            id="description"
            value={formData.description}
            onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
            rows={4}
            className="textarea"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Categories
          </label>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
            {categories.filter(cat => cat.name !== 'All').map((category) => (
              <label
                key={category.name}
                className="flex items-center space-x-2 cursor-pointer"
              >
                <input
                  type="checkbox"
                  checked={formData.categories.includes(category.name)}
                  onChange={() => handleCategoryChange(category.name)}
                  className="rounded border-gray-300 text-purple-600 focus:ring-purple-500 dark:border-gray-600 dark:bg-gray-700"
                />
                <span className="text-sm text-gray-700 dark:text-gray-300">{category.name}</span>
              </label>
            ))}
          </div>
        </div>

        <div>
          <label htmlFor="tags" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Tags
          </label>
          <div className="space-y-2">
            <input
              type="text"
              id="tags"
              onKeyDown={handleTagInput}
              className="input"
              placeholder="Press Enter to add tags"
            />
            <div className="flex flex-wrap gap-2">
              {formData.tags.map(tag => (
                <span
                  key={tag}
                  className="inline-flex items-center px-2 py-1 rounded-full text-sm bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300"
                >
                  #{tag}
                  <button
                    type="button"
                    onClick={() => removeTag(tag)}
                    className="ml-1 text-purple-600 dark:text-purple-400 hover:text-purple-800 dark:hover:text-purple-200"
                  >
                    ×
                  </button>
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="pt-4">
          <button
            type="submit"
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-purple-600 hover:bg-purple-700 dark:bg-neon-purple dark:hover:bg-purple-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 dark:focus:ring-neon-purple transition-all duration-200"
          >
            Submit Tool
          </button>
        </div>
      </form>
    </div>
  );
}