import { useState, useRef, RefObject } from 'react';

interface TooltipPosition {
  top: number;
  left: number;
}

export function useTooltip() {
  const [showTooltip, setShowTooltip] = useState(false);
  const [tooltipPosition, setTooltipPosition] = useState<TooltipPosition>({ top: 0, left: 0 });
  const tooltipTriggerRef = useRef<HTMLButtonElement>(null);

  const updateTooltipPosition = () => {
    if (tooltipTriggerRef.current) {
      const rect = tooltipTriggerRef.current.getBoundingClientRect();
      setTooltipPosition({
        top: rect.bottom + window.scrollY + 8,
        left: rect.left + window.scrollX - 100,
      });
    }
  };

  const handleTooltipShow = () => {
    updateTooltipPosition();
    setShowTooltip(true);
  };

  const handleTooltipHide = () => {
    setShowTooltip(false);
  };

  return {
    showTooltip,
    tooltipPosition,
    tooltipTriggerRef,
    handleTooltipShow,
    handleTooltipHide,
  };
}