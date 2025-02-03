import { 
  LayoutGrid,
  Brain,
  ArrowDownWideNarrow,
  FileText,
  Video,
  Mail
} from 'lucide-react';

export interface Category {
  name: string;
  icon: typeof LayoutGrid;
}

export const categories: Category[] = [
  { name: 'All', icon: LayoutGrid },
  { name: 'Setup', icon: Brain },
  { name: 'Funnels', icon: ArrowDownWideNarrow },
  { name: 'Content', icon: FileText },
  { name: 'Video', icon: Video },
  { name: 'Emails', icon: Mail }
];