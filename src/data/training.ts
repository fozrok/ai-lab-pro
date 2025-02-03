import { Brain, Target, UserCircle, Lightbulb, Magnet } from 'lucide-react';

export const videos = [
  {
    id: 1,
    title: "Create a Digital Brain From a FB Page",
    description: "Learn how to build your digital brain for business success",
    thumbnail: "https://res.cloudinary.com/dhxriuzu5/image/upload/v1736810796/a-high-engaging-youtube-short-thumbnail-_p159g2.jpg",
    url: "https://player.vimeo.com/video/1046380814",
    badge: "Recently added"
  },
  {
    id: 2,
    title: "Customise Your Own Hypnosis Scripts",
    description: "Create a Unique Framework You'll Be Remembered For",
    thumbnail: "https://res.cloudinary.com/dhxriuzu5/image/upload/v1736810914/a-high-engaging-youtube-short-thumbnail-scripts_h98zc4.jpg",
    url: "https://player.vimeo.com/video/1046589392",
    badge: "Recently added"
  },
    {
    id: 3,
    title: "Full Business Acension Model Masterclass",
    description: "Create a Full Customer Journey Acension Model",
    thumbnail: "https://res.cloudinary.com/dhxriuzu5/image/upload/v1736587529/472598206_3653528031604787_8276446387673498326_n_xwe90z.jpg",
    url: "https://www.youtube.com/watch?v=example1",
    badge: "Recently added"
  },
];

export const colorVariants = {
  purple: 'bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400',
  blue: 'bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400',
  green: 'bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400',
  amber: 'bg-amber-100 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400',
  pink: 'bg-pink-100 dark:bg-pink-900/30 text-pink-600 dark:text-pink-400'
};

export const focusAreas = [
  {
    title: 'Digital Brain Development',
    description: 'Learn to build and optimize your digital brain for business success',
    icon: Brain,
    color: 'purple'
  },
  {
    title: 'Strategic Marketing',
    description: 'Master modern marketing strategies and implementation',
    icon: Target,
    color: 'blue'
  },
  {
    title: 'Personal Branding',
    description: 'Build a strong personal brand that attracts opportunities',
    icon: UserCircle,
    color: 'green'
  },
  {
    title: 'Innovation & Growth',
    description: 'Stay ahead with cutting-edge business strategies',
    icon: Lightbulb,
    color: 'amber'
  }
];

export const resources = [
  {
    title: 'Quick Start Guide',
    description: 'Get started with AI Lab PRO in minutes',
    url: '#',
    icon: Lightbulb
  },
  {
    title: 'Resource Library',
    description: 'Access our comprehensive collection of tools and templates',
    url: '#',
    icon: Brain
  },
  {
    title: 'Community Forum',
    description: 'Connect with other members and share insights',
    url: '#',
    icon: UserCircle
  },
  {
    title: 'Support Center',
    description: '24/7 access to help and documentation',
    url: '#',
    icon: Target
  }
];