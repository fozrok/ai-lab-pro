import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Brain, Rocket, Map, ChevronDown, ArrowDownWideNarrow, DollarSign, FileText, Calendar, LayoutGrid, Magnet } from 'lucide-react';
import SidebarAdBanner from '../ads/SidebarAdBanner';

interface SidebarProps {
  selectedCategory: string | null;
  onCategorySelect: (category: string | null) => void;
  selectedWizardStep: string | null;
  onWizardStepSelect: (step: string | null) => void;
}

const wizardSteps = [
  { name: 'Digital Brain Creator', icon: Brain },
  { name: 'The Ultimate USP Framework & Marketing Plan', icon: Rocket },
  { name: 'Customer Journey Designer', icon: Map }
];

const funnelSteps = [
  { name: 'Funnel System Planner', icon: ArrowDownWideNarrow },
    { name: 'Lead Magnet Strategist', icon: Magnet },
  { name: 'Micro Offer Deal Creator', icon: DollarSign }
];

const contentSteps = [
  { name: 'Pillar Content Creator', icon: FileText },
  { name: '30-Day Social Media Content Calendar', icon: Calendar }
];

export default function Sidebar({ 
  selectedCategory, 
  onCategorySelect,
  selectedWizardStep,
  onWizardStepSelect
}: SidebarProps) {
  const [isWizardExpanded, setIsWizardExpanded] = useState(false);
  const [isFunnelExpanded, setIsFunnelExpanded] = useState(false);
  const [isContentExpanded, setIsContentExpanded] = useState(false);

  const WizardSection = ({ 
    title, 
    steps, 
    isExpanded, 
    onToggle 
  }: { 
    title: string;
    steps: typeof wizardSteps;
    isExpanded: boolean;
    onToggle: () => void;
  }) => (
    <div className="mb-6">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between text-base font-medium mb-2 hover:text-purple-600 dark:hover:text-neon-purple transition-colors"
      >
        <span>{title}</span>
        <motion.div
          animate={{ rotate: isExpanded ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <ChevronDown className="w-4 h-4" />
        </motion.div>
      </button>

      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <nav className="space-y-2">
              {steps.map((step, index) => {
                const Icon = step.icon;
                const isSelected = selectedWizardStep === step.name;
                
                return (
                  <button
                    key={step.name}
                    onClick={() => {
                      onWizardStepSelect(isSelected ? null : step.name);
                      onCategorySelect(null);
                    }}
                    className={`w-full flex items-center px-3 py-2 rounded-md transition-colors duration-200 relative
                      ${isSelected 
                        ? 'bg-purple-50 dark:bg-purple-900/20 text-purple-600 dark:text-neon-purple' 
                        : 'text-gray-700 dark:text-gray-300'}`}
                  >
                    <div className="flex items-center gap-3">
                      <div className="flex items-center justify-center w-5 h-5 rounded-full bg-purple-100 dark:bg-purple-900/30">
                        <span className="text-xs font-medium">{index + 1}</span>
                      </div>
                      <Icon className={`w-5 h-5 transition-colors duration-200
                        ${isSelected 
                          ? 'text-purple-600 dark:text-neon-purple' 
                          : 'text-purple-500 dark:text-purple-400'}`}
                      />
                    </div>
                  </button>
                );
              })}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );

  return (
    <div className="w-48 flex flex-col h-[calc(100vh-4rem)] p-3">
      {/* All Tools Button */}
      <button
        onClick={() => {
          onCategorySelect(null);
          onWizardStepSelect(null);
        }}
        className={`w-full flex items-center gap-2 px-3 py-2 mb-6 rounded-md transition-colors duration-200
          ${!selectedCategory && !selectedWizardStep
            ? 'bg-purple-50 dark:bg-purple-900/20 text-purple-600 dark:text-neon-purple'
            : 'text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800/50'}`}
      >
        <LayoutGrid className="w-4 h-4" />
        <span className="font-medium">All Tools</span>
      </button>

      {/* Setup Wizard Section */}
      <WizardSection
        title="Setup Wizard"
        steps={wizardSteps}
        isExpanded={isWizardExpanded}
        onToggle={() => setIsWizardExpanded(!isWizardExpanded)}
      />

      {/* Funnel Wizard Section */}
      <WizardSection
        title="Funnel Wizard"
        steps={funnelSteps}
        isExpanded={isFunnelExpanded}
        onToggle={() => setIsFunnelExpanded(!isFunnelExpanded)}
      />

      {/* Content Wizard Section */}
      <WizardSection
        title="Content Wizard"
        steps={contentSteps}
        isExpanded={isContentExpanded}
        onToggle={() => setIsContentExpanded(!isContentExpanded)}
      />

      <div className="flex-1" />

      {/* Ad Banner */}
      <div className="mt-6">
        <SidebarAdBanner />
      </div>
    </div>
  );
}