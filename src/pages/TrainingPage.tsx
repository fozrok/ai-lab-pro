import React from 'react';
import Sidebar from '../components/navigation/Sidebar';
import VideoSlider from '../components/training/VideoSlider';
import FocusAreas from '../components/training/FocusAreas';
import FAQ from '../components/training/FAQ';
import ResourceList from '../components/training/ResourceList';

export default function TrainingPage() {
  const [selectedCategory, setSelectedCategory] = React.useState<string | null>(null);
  const [selectedWizardStep, setSelectedWizardStep] = React.useState<string | null>(null);

  return (
    <div className="flex gap-8"> {/* Increased gap from 6 to 8 */}
      {/* Left Sidebar */}
      <Sidebar
        selectedCategory={selectedCategory}
        onCategorySelect={setSelectedCategory}
        selectedWizardStep={selectedWizardStep}
        onWizardStepSelect={setSelectedWizardStep}
      />
      
      {/* Main Content */}
      <div className="flex-1 max-w-[52rem]"> {/* Adjusted max width */}
        <div className="space-y-10"> {/* Increased space between sections */}
          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Featured Training
            </h2>
            <VideoSlider />
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Focus Areas
            </h2>
            <FocusAreas />
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Frequently Asked Questions
            </h2>
            <FAQ />
          </section>
        </div>
      </div>

      {/* Resources Sidebar */}
      <div className="hidden xl:block w-[480px] pr-8"> {/* Increased width and padding */}
        <div className="sticky top-20">
          <div className="bg-white dark:bg-gray-800 rounded-xl p-8 border border-gray-200 dark:border-gray-700">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-8">
              Training Resources
            </h2>
            <ResourceList />
          </div>
        </div>
      </div>
    </div>
  );
}