import React from 'react';
import { Plus } from 'lucide-react';
import AdminToolCard from './AdminToolCard';
import { Tool } from '../../types';
import TitleSelector from '../brand/TitleSelector';

interface AdminToolListProps {
  tools: Tool[];
  onUpdateTool: (index: number, tool: Tool) => void;
  onDeleteTool: (index: number) => void;
  onAddTool: (tool: Tool) => void;
}

export default function AdminToolList({
  tools,
  onUpdateTool,
  onDeleteTool,
  onAddTool
}: AdminToolListProps) {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
        <div>
          <h1 className="text-xl font-semibold text-gray-900 dark:text-white">Tool Management</h1>
          <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
            Manage all AI tools in the directory
          </p>
        </div>
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
          <TitleSelector />
          <button
            onClick={() => onAddTool({
              title: 'New Tool',
              description: '',
              categories: [],
              tags: [],
              imageUrl: '',
              url: '',
              isHidden: false
            })}
            className="btn-primary whitespace-nowrap"
          >
            <Plus className="h-4 w-4 mr-2" />
            Add New Tool
          </button>
        </div>
      </div>

      <div className="overflow-x-auto rounded-lg border border-gray-200 dark:border-gray-700">
        <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
          <thead className="bg-gray-50 dark:bg-gray-800">
            <tr>
              <th scope="col" className="table-header w-48">Image</th>
              <th scope="col" className="table-header">Tool Details</th>
              <th scope="col" className="table-header">Categories</th>
              <th scope="col" className="table-header text-right w-32">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white dark:bg-gray-900 divide-y divide-gray-200 dark:divide-gray-700">
            {tools.map((tool, index) => (
              <AdminToolCard
                key={index}
                tool={tool}
                index={index}
                onUpdate={onUpdateTool}
                onDelete={onDeleteTool}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}