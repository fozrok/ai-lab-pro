import React, { useState } from 'react';
import Sidebar from '../components/navigation/Sidebar';
import ToolCard from '../components/tools/ToolCard';
import ToolGrid from '../components/tools/ToolGrid';
import ViewToggle from '../components/tools/ViewToggle';
import { useTools } from '../utils/hooks/useTools';
import { useAuth } from '../contexts/AuthContext';

export default function HomePage() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedWizardStep, setSelectedWizardStep] = useState<string | null>(null);
  const [view, setView] = useState<'grid' | 'list'>('grid');
  const { isAdmin } = useAuth();
  const { filterTools } = useTools();

  const filteredTools = filterTools(selectedCategory, isAdmin, selectedWizardStep);

  return (
    <div className="flex gap-8">
      <Sidebar 
        selectedCategory={selectedCategory} 
        onCategorySelect={setSelectedCategory}
        selectedWizardStep={selectedWizardStep}
        onWizardStepSelect={setSelectedWizardStep}
      />
      <div className="flex-1">
        <div className="flex justify-end mb-4">
          <ViewToggle view={view} onViewChange={setView} />
        </div>
        {view === 'grid' ? (
          <ToolGrid tools={filteredTools} />
        ) : (
          <div className="flex flex-col gap-3">
            {filteredTools.map((tool) => (
              <ToolCard key={tool.title} {...tool} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}