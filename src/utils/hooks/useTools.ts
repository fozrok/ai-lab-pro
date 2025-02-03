import { useState } from 'react';
import { Tool } from '../../types';
import { featuredTools } from '../../data/tools';

export function useTools() {
  const [tools, setTools] = useState<Tool[]>(featuredTools);

  const updateTool = (index: number, updatedTool: Tool) => {
    const newTools = [...tools];
    newTools[index] = updatedTool;
    setTools(newTools);
  };

  const deleteTool = (index: number) => {
    const newTools = tools.filter((_, i) => i !== index);
    setTools(newTools);
  };

  const addTool = (newTool: Tool) => {
    setTools([...tools, newTool]);
  };

  const filterTools = (category: string | null, isAdmin: boolean, wizardStep: string | null) => {
    let filteredTools = tools.filter(tool => isAdmin || !tool.isHidden);

    if (wizardStep) {
      return filteredTools.filter(tool => tool.title === wizardStep);
    }

    return category === 'All' || !category
      ? filteredTools
      : filteredTools.filter(tool => tool.categories.includes(category));
  };

  return {
    tools,
    updateTool,
    deleteTool,
    addTool,
    filterTools
  };
}