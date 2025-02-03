import React from 'react';
import { Tool } from '../../types';
import ToolGridItem from './ToolGridItem';

interface ToolGridProps {
  tools: Tool[];
}

export default function ToolGrid({ tools }: ToolGridProps) {
  return (
    <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-6 gap-2">
      {tools.map((tool) => (
        <ToolGridItem key={tool.title} {...tool} />
      ))}
    </div>
  );
}