import React, { useState } from 'react';
import { Edit2, Eye, EyeOff, Save, X } from 'lucide-react';
import { Tool } from '../../types';
import ImageUpload from '../upload/ImageUpload';

interface AdminToolCardProps {
  tool: Tool;
  index: number;
  onUpdate: (index: number, tool: Tool) => void;
  onDelete: (index: number) => void;
}

export default function AdminToolCard({
  tool,
  index,
  onUpdate,
  onDelete
}: AdminToolCardProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [editingTool, setEditingTool] = useState<Tool | null>(null);

  const handleEdit = () => {
    setIsEditing(true);
    setEditingTool({ ...tool });
  };

  const handleSave = () => {
    if (editingTool) {
      onUpdate(index, editingTool);
      setIsEditing(false);
      setEditingTool(null);
    }
  };

  const handleCancel = () => {
    setIsEditing(false);
    setEditingTool(null);
  };

  const toggleVisibility = () => {
    onUpdate(index, { ...tool, isHidden: !tool.isHidden });
  };

  return (
    <tr className={`hover:bg-gray-50 dark:hover:bg-gray-800/50 ${
      tool.isHidden ? 'opacity-50' : ''
    }`}>
      <td className="table-cell">
        {isEditing ? (
          <ImageUpload
            imageUrl={editingTool?.imageUrl || ''}
            onImageChange={(url) => setEditingTool(prev => prev ? { ...prev, imageUrl: url } : null)}
          />
        ) : (
          <img src={tool.imageUrl} alt={tool.title} className="h-24 w-full object-cover rounded-md" />
        )}
      </td>
      <td className="table-cell">
        <div className="space-y-2">
          {isEditing ? (
            <div className="space-y-2">
              <div>
                <label className="block text-xs font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Tool Name
                </label>
                <input
                  type="text"
                  value={editingTool?.title}
                  onChange={(e) => setEditingTool(prev => prev ? { ...prev, title: e.target.value } : null)}
                  className="input"
                  placeholder="Tool name"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Tool URL
                </label>
                <input
                  type="text"
                  value={editingTool?.url}
                  onChange={(e) => setEditingTool(prev => prev ? { ...prev, url: e.target.value } : null)}
                  className="input"
                  placeholder="Tool URL"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Description
                </label>
                <textarea
                  value={editingTool?.description}
                  onChange={(e) => setEditingTool(prev => prev ? { ...prev, description: e.target.value } : null)}
                  className="textarea"
                  rows={2}
                  placeholder="Tool description"
                />
              </div>
            </div>
          ) : (
            <>
              <h3 className="text-sm font-medium text-gray-900 dark:text-white">{tool.title}</h3>
              <a href={tool.url} target="_blank" rel="noopener noreferrer" className="text-xs text-purple-600 dark:text-neon-purple hover:underline">
                {tool.url}
              </a>
              <p className="text-xs text-gray-600 dark:text-gray-400">{tool.description}</p>
            </>
          )}
        </div>
      </td>
      <td className="table-cell">
        {isEditing ? (
          <div>
            <label className="block text-xs font-medium text-gray-700 dark:text-gray-300 mb-1">
              Categories
            </label>
            <input
              type="text"
              value={editingTool?.categories.join(', ')}
              onChange={(e) => setEditingTool(prev => prev ? { 
                ...prev, 
                categories: e.target.value.split(',').map(c => c.trim()) 
              } : null)}
              className="input"
              placeholder="Categories (comma-separated)"
            />
          </div>
        ) : (
          <div className="flex flex-wrap gap-1">
            {tool.categories.map((category, i) => (
              <span key={i} className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium border border-purple-200 dark:border-purple-700 text-purple-800 dark:text-purple-200">
                {category}
              </span>
            ))}
          </div>
        )}
      </td>
      <td className="table-cell text-right">
        {isEditing ? (
          <div className="flex justify-end space-x-2">
            <button
              onClick={handleSave}
              className="p-1 text-green-600 hover:text-green-900 dark:text-green-400 dark:hover:text-green-300"
              title="Save"
            >
              <Save className="h-4 w-4" />
            </button>
            <button
              onClick={handleCancel}
              className="p-1 text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-300"
              title="Cancel"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        ) : (
          <div className="flex justify-end space-x-2">
            <button
              onClick={toggleVisibility}
              className={`p-1 ${
                tool.isHidden
                  ? 'text-gray-400 hover:text-gray-600 dark:text-gray-500 dark:hover:text-gray-300'
                  : 'text-blue-600 hover:text-blue-900 dark:text-blue-400 dark:hover:text-blue-300'
              }`}
              title={tool.isHidden ? 'Show Tool' : 'Hide Tool'}
            >
              {tool.isHidden ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
            </button>
            <button
              onClick={handleEdit}
              className="p-1 text-indigo-600 hover:text-indigo-900 dark:text-indigo-400 dark:hover:text-indigo-300"
              title="Edit"
            >
              <Edit2 className="h-4 w-4" />
            </button>
            <button
              onClick={() => onDelete(index)}
              className="p-1 text-red-600 hover:text-red-900 dark:text-red-400 dark:hover:text-red-300"
              title="Delete"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        )}
      </td>
    </tr>
  );
}