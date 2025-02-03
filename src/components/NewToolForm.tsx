import React, { useState } from 'react';
import { Upload, X } from 'lucide-react';

interface FormData {
  imageUrl: string;
  title: string;
  description: string;
  tags: string[];
}

export default function NewToolForm() {
  const [dragActive, setDragActive] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    imageUrl: '',
    title: '',
    description: '',
    tags: []
  });

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true);
    } else if (e.type === 'dragleave') {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const file = e.dataTransfer.files[0];
      if (file.type.startsWith('image/')) {
        setFormData(prev => ({
          ...prev,
          imageUrl: URL.createObjectURL(file)
        }));
      }
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    console.log('Form submitted:', formData);
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
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Tool Image</label>
          <div
            className={`mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-dashed rounded-lg ${
              dragActive 
                ? 'border-purple-500 bg-purple-50 dark:border-neon-purple dark:bg-purple-900/20' 
                : 'border-gray-300 dark:border-gray-600'
            }`}
            onDragEnter={handleDrag}
            onDragLeave={handleDrag}
            onDragOver={handleDrag}
            onDrop={handleDrop}
          >
            {formData.imageUrl ? (
              <div className="relative">
                <img
                  src={formData.imageUrl}
                  alt="Preview"
                  className="h-32 w-32 object-cover rounded-lg"
                />
                <button
                  type="button"
                  onClick={() => setFormData(prev => ({ ...prev, imageUrl: '' }))}
                  className="absolute -top-2 -right-2 p-1 bg-red-100 dark:bg-red-900/30 rounded-full text-red-600 dark:text-red-400 hover:bg-red-200 dark:hover:bg-red-900/50"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
            ) : (
              <div className="space-y-1 text-center">
                <Upload className="mx-auto h-12 w-12 text-gray-400 dark:text-gray-500" />
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  <label className="relative cursor-pointer text-purple-600 dark:text-neon-purple hover:text-purple-700 dark:hover:text-purple-400">
                    <span>Upload a file</span>
                    <input 
                      type="file" 
                      className="sr-only" 
                      accept="image/*" 
                      onChange={(e) => {
                        if (e.target.files?.[0]) {
                          setFormData(prev => ({
                            ...prev,
                            imageUrl: URL.createObjectURL(e.target.files![0])
                          }));
                        }
                      }} 
                    />
                  </label>
                  <p className="pl-1">or drag and drop</p>
                </div>
                <p className="text-xs text-gray-500 dark:text-gray-400">PNG, JPG, GIF up to 10MB</p>
              </div>
            )}
          </div>
        </div>

        <div>
          <label htmlFor="title" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
            Tool Name
          </label>
          <input
            type="text"
            id="title"
            value={formData.title}
            onChange={(e) => setFormData(prev => ({ ...prev, title: e.target.value }))}
            className="mt-1 block w-full rounded-lg border-gray-300 dark:border-gray-600 shadow-sm focus:border-purple-500 focus:ring-purple-500 dark:bg-gray-700 dark:text-white"
            required
          />
        </div>

        <div>
          <label htmlFor="description" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
            Description
          </label>
          <textarea
            id="description"
            value={formData.description}
            onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
            rows={4}
            className="mt-1 block w-full rounded-lg border-gray-300 dark:border-gray-600 shadow-sm focus:border-purple-500 focus:ring-purple-500 dark:bg-gray-700 dark:text-white"
            required
          />
        </div>

        <div>
          <label htmlFor="tags" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
            Tags
          </label>
          <div className="mt-1">
            <input
              type="text"
              id="tags"
              onKeyDown={handleTagInput}
              className="block w-full rounded-lg border-gray-300 dark:border-gray-600 shadow-sm focus:border-purple-500 focus:ring-purple-500 dark:bg-gray-700 dark:text-white"
              placeholder="Press Enter to add tags"
            />
          </div>
          <div className="mt-2 flex flex-wrap gap-2">
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
                  <X className="h-3 w-3" />
                </button>
              </span>
            ))}
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