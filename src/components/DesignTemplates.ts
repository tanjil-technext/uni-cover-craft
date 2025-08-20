export interface DesignTemplate {
  id: string;
  name: string;
  category: 'Classic' | 'Modern' | 'Creative' | 'Professional' | 'Minimalist';
  styles: {
    fontSize: {
      title: string;
      heading: string;
      body: string;
    };
    fontFamily: string;
    primaryColor: string;
    accentColor: string;
    backgroundColor: string;
    borderStyle: string;
    layout: 'centered' | 'left-aligned' | 'modern-grid';
    decorativeElements: boolean;
  };
}

export const designTemplates: DesignTemplate[] = [
  // Classic Templates (1-10)
  {
    id: 'classic-1',
    name: 'Classic Blue',
    category: 'Classic',
    styles: {
      fontSize: { title: 'text-4xl', heading: 'text-2xl', body: 'text-base' },
      fontFamily: 'font-serif',
      primaryColor: 'text-blue-800',
      accentColor: 'text-blue-600',
      backgroundColor: 'bg-white',
      borderStyle: 'border-blue-200',
      layout: 'centered',
      decorativeElements: true
    }
  },
  {
    id: 'classic-2',
    name: 'Royal Purple',
    category: 'Classic',
    styles: {
      fontSize: { title: 'text-5xl', heading: 'text-2xl', body: 'text-base' },
      fontFamily: 'font-serif',
      primaryColor: 'text-purple-800',
      accentColor: 'text-purple-600',
      backgroundColor: 'bg-purple-50',
      borderStyle: 'border-purple-200',
      layout: 'centered',
      decorativeElements: true
    }
  },
  {
    id: 'classic-3',
    name: 'Forest Green',
    category: 'Classic',
    styles: {
      fontSize: { title: 'text-4xl', heading: 'text-xl', body: 'text-sm' },
      fontFamily: 'font-serif',
      primaryColor: 'text-green-800',
      accentColor: 'text-green-600',
      backgroundColor: 'bg-green-50',
      borderStyle: 'border-green-200',
      layout: 'centered',
      decorativeElements: false
    }
  },
  {
    id: 'classic-4',
    name: 'Burgundy Elegance',
    category: 'Classic',
    styles: {
      fontSize: { title: 'text-4xl', heading: 'text-2xl', body: 'text-base' },
      fontFamily: 'font-serif',
      primaryColor: 'text-red-900',
      accentColor: 'text-red-700',
      backgroundColor: 'bg-red-50',
      borderStyle: 'border-red-200',
      layout: 'centered',
      decorativeElements: true
    }
  },
  {
    id: 'classic-5',
    name: 'Navy Scholar',
    category: 'Classic',
    styles: {
      fontSize: { title: 'text-5xl', heading: 'text-3xl', body: 'text-lg' },
      fontFamily: 'font-serif',
      primaryColor: 'text-slate-800',
      accentColor: 'text-slate-600',
      backgroundColor: 'bg-slate-50',
      borderStyle: 'border-slate-200',
      layout: 'centered',
      decorativeElements: true
    }
  },
  {
    id: 'classic-6',
    name: 'Traditional Gold',
    category: 'Classic',
    styles: {
      fontSize: { title: 'text-4xl', heading: 'text-2xl', body: 'text-base' },
      fontFamily: 'font-serif',
      primaryColor: 'text-yellow-800',
      accentColor: 'text-yellow-700',
      backgroundColor: 'bg-yellow-50',
      borderStyle: 'border-yellow-200',
      layout: 'centered',
      decorativeElements: true
    }
  },
  {
    id: 'classic-7',
    name: 'Crimson Heritage',
    category: 'Classic',
    styles: {
      fontSize: { title: 'text-3xl', heading: 'text-xl', body: 'text-sm' },
      fontFamily: 'font-serif',
      primaryColor: 'text-red-800',
      accentColor: 'text-red-600',
      backgroundColor: 'bg-white',
      borderStyle: 'border-red-300',
      layout: 'centered',
      decorativeElements: false
    }
  },
  {
    id: 'classic-8',
    name: 'Oxford Blue',
    category: 'Classic',
    styles: {
      fontSize: { title: 'text-4xl', heading: 'text-2xl', body: 'text-base' },
      fontFamily: 'font-serif',
      primaryColor: 'text-indigo-900',
      accentColor: 'text-indigo-700',
      backgroundColor: 'bg-indigo-50',
      borderStyle: 'border-indigo-200',
      layout: 'centered',
      decorativeElements: true
    }
  },
  {
    id: 'classic-9',
    name: 'Emerald Academic',
    category: 'Classic',
    styles: {
      fontSize: { title: 'text-5xl', heading: 'text-2xl', body: 'text-base' },
      fontFamily: 'font-serif',
      primaryColor: 'text-emerald-800',
      accentColor: 'text-emerald-600',
      backgroundColor: 'bg-emerald-50',
      borderStyle: 'border-emerald-200',
      layout: 'centered',
      decorativeElements: true
    }
  },
  {
    id: 'classic-10',
    name: 'Amber Scholar',
    category: 'Classic',
    styles: {
      fontSize: { title: 'text-4xl', heading: 'text-xl', body: 'text-sm' },
      fontFamily: 'font-serif',
      primaryColor: 'text-amber-800',
      accentColor: 'text-amber-600',
      backgroundColor: 'bg-amber-50',
      borderStyle: 'border-amber-200',
      layout: 'centered',
      decorativeElements: false
    }
  },

  // Modern Templates (11-20)
  {
    id: 'modern-1',
    name: 'Tech Blue',
    category: 'Modern',
    styles: {
      fontSize: { title: 'text-5xl', heading: 'text-3xl', body: 'text-lg' },
      fontFamily: 'font-sans',
      primaryColor: 'text-blue-600',
      accentColor: 'text-cyan-500',
      backgroundColor: 'bg-gray-50',
      borderStyle: 'border-blue-300',
      layout: 'modern-grid',
      decorativeElements: true
    }
  },
  {
    id: 'modern-2',
    name: 'Neon Gradient',
    category: 'Modern',
    styles: {
      fontSize: { title: 'text-4xl', heading: 'text-2xl', body: 'text-base' },
      fontFamily: 'font-sans',
      primaryColor: 'text-pink-600',
      accentColor: 'text-purple-500',
      backgroundColor: 'bg-gray-900',
      borderStyle: 'border-pink-400',
      layout: 'modern-grid',
      decorativeElements: true
    }
  },
  {
    id: 'modern-3',
    name: 'Clean Slate',
    category: 'Modern',
    styles: {
      fontSize: { title: 'text-6xl', heading: 'text-3xl', body: 'text-lg' },
      fontFamily: 'font-sans',
      primaryColor: 'text-gray-800',
      accentColor: 'text-gray-600',
      backgroundColor: 'bg-white',
      borderStyle: 'border-gray-200',
      layout: 'left-aligned',
      decorativeElements: false
    }
  },
  {
    id: 'modern-4',
    name: 'Electric Orange',
    category: 'Modern',
    styles: {
      fontSize: { title: 'text-4xl', heading: 'text-2xl', body: 'text-base' },
      fontFamily: 'font-sans',
      primaryColor: 'text-orange-600',
      accentColor: 'text-orange-400',
      backgroundColor: 'bg-orange-50',
      borderStyle: 'border-orange-300',
      layout: 'modern-grid',
      decorativeElements: true
    }
  },
  {
    id: 'modern-5',
    name: 'Cyber Green',
    category: 'Modern',
    styles: {
      fontSize: { title: 'text-5xl', heading: 'text-2xl', body: 'text-base' },
      fontFamily: 'font-mono',
      primaryColor: 'text-green-500',
      accentColor: 'text-lime-400',
      backgroundColor: 'bg-gray-900',
      borderStyle: 'border-green-400',
      layout: 'modern-grid',
      decorativeElements: true
    }
  },
  {
    id: 'modern-6',
    name: 'Digital Purple',
    category: 'Modern',
    styles: {
      fontSize: { title: 'text-4xl', heading: 'text-xl', body: 'text-sm' },
      fontFamily: 'font-sans',
      primaryColor: 'text-violet-600',
      accentColor: 'text-violet-400',
      backgroundColor: 'bg-violet-50',
      borderStyle: 'border-violet-300',
      layout: 'modern-grid',
      decorativeElements: false
    }
  },
  {
    id: 'modern-7',
    name: 'Future Teal',
    category: 'Modern',
    styles: {
      fontSize: { title: 'text-6xl', heading: 'text-3xl', body: 'text-lg' },
      fontFamily: 'font-sans',
      primaryColor: 'text-teal-600',
      accentColor: 'text-teal-400',
      backgroundColor: 'bg-teal-50',
      borderStyle: 'border-teal-300',
      layout: 'left-aligned',
      decorativeElements: true
    }
  },
  {
    id: 'modern-8',
    name: 'Matrix Black',
    category: 'Modern',
    styles: {
      fontSize: { title: 'text-4xl', heading: 'text-2xl', body: 'text-base' },
      fontFamily: 'font-mono',
      primaryColor: 'text-green-400',
      accentColor: 'text-lime-300',
      backgroundColor: 'bg-black',
      borderStyle: 'border-green-500',
      layout: 'modern-grid',
      decorativeElements: true
    }
  },
  {
    id: 'modern-9',
    name: 'Chrome Silver',
    category: 'Modern',
    styles: {
      fontSize: { title: 'text-5xl', heading: 'text-2xl', body: 'text-base' },
      fontFamily: 'font-sans',
      primaryColor: 'text-gray-700',
      accentColor: 'text-gray-500',
      backgroundColor: 'bg-gray-100',
      borderStyle: 'border-gray-300',
      layout: 'centered',
      decorativeElements: false
    }
  },
  {
    id: 'modern-10',
    name: 'Neon Pink',
    category: 'Modern',
    styles: {
      fontSize: { title: 'text-4xl', heading: 'text-xl', body: 'text-sm' },
      fontFamily: 'font-sans',
      primaryColor: 'text-pink-500',
      accentColor: 'text-fuchsia-400',
      backgroundColor: 'bg-pink-50',
      borderStyle: 'border-pink-300',
      layout: 'modern-grid',
      decorativeElements: true
    }
  },

  // Creative Templates (21-30)
  {
    id: 'creative-1',
    name: 'Sunset Vibes',
    category: 'Creative',
    styles: {
      fontSize: { title: 'text-6xl', heading: 'text-3xl', body: 'text-lg' },
      fontFamily: 'font-sans',
      primaryColor: 'text-orange-500',
      accentColor: 'text-red-400',
      backgroundColor: 'bg-gradient-to-br from-orange-100 to-red-100',
      borderStyle: 'border-orange-300',
      layout: 'centered',
      decorativeElements: true
    }
  },
  {
    id: 'creative-2',
    name: 'Ocean Wave',
    category: 'Creative',
    styles: {
      fontSize: { title: 'text-5xl', heading: 'text-2xl', body: 'text-base' },
      fontFamily: 'font-sans',
      primaryColor: 'text-blue-500',
      accentColor: 'text-cyan-400',
      backgroundColor: 'bg-gradient-to-br from-blue-100 to-cyan-100',
      borderStyle: 'border-blue-300',
      layout: 'modern-grid',
      decorativeElements: true
    }
  },
  {
    id: 'creative-3',
    name: 'Forest Dream',
    category: 'Creative',
    styles: {
      fontSize: { title: 'text-4xl', heading: 'text-2xl', body: 'text-base' },
      fontFamily: 'font-serif',
      primaryColor: 'text-green-600',
      accentColor: 'text-emerald-500',
      backgroundColor: 'bg-gradient-to-br from-green-100 to-emerald-100',
      borderStyle: 'border-green-300',
      layout: 'centered',
      decorativeElements: true
    }
  },
  {
    id: 'creative-4',
    name: 'Galaxy Purple',
    category: 'Creative',
    styles: {
      fontSize: { title: 'text-5xl', heading: 'text-3xl', body: 'text-lg' },
      fontFamily: 'font-sans',
      primaryColor: 'text-purple-400',
      accentColor: 'text-pink-400',
      backgroundColor: 'bg-gradient-to-br from-purple-900 to-indigo-900',
      borderStyle: 'border-purple-400',
      layout: 'modern-grid',
      decorativeElements: true
    }
  },
  {
    id: 'creative-5',
    name: 'Autumn Leaves',
    category: 'Creative',
    styles: {
      fontSize: { title: 'text-4xl', heading: 'text-2xl', body: 'text-base' },
      fontFamily: 'font-serif',
      primaryColor: 'text-amber-600',
      accentColor: 'text-orange-500',
      backgroundColor: 'bg-gradient-to-br from-amber-100 to-orange-100',
      borderStyle: 'border-amber-300',
      layout: 'centered',
      decorativeElements: true
    }
  },
  {
    id: 'creative-6',
    name: 'Arctic Ice',
    category: 'Creative',
    styles: {
      fontSize: { title: 'text-6xl', heading: 'text-2xl', body: 'text-base' },
      fontFamily: 'font-sans',
      primaryColor: 'text-sky-600',
      accentColor: 'text-ice-blue-400',
      backgroundColor: 'bg-gradient-to-br from-sky-100 to-blue-100',
      borderStyle: 'border-sky-300',
      layout: 'left-aligned',
      decorativeElements: false
    }
  },
  {
    id: 'creative-7',
    name: 'Cherry Blossom',
    category: 'Creative',
    styles: {
      fontSize: { title: 'text-4xl', heading: 'text-xl', body: 'text-sm' },
      fontFamily: 'font-serif',
      primaryColor: 'text-pink-600',
      accentColor: 'text-rose-400',
      backgroundColor: 'bg-gradient-to-br from-pink-100 to-rose-100',
      borderStyle: 'border-pink-300',
      layout: 'centered',
      decorativeElements: true
    }
  },
  {
    id: 'creative-8',
    name: 'Volcanic Red',
    category: 'Creative',
    styles: {
      fontSize: { title: 'text-5xl', heading: 'text-3xl', body: 'text-lg' },
      fontFamily: 'font-sans',
      primaryColor: 'text-red-600',
      accentColor: 'text-orange-500',
      backgroundColor: 'bg-gradient-to-br from-red-100 to-orange-100',
      borderStyle: 'border-red-300',
      layout: 'modern-grid',
      decorativeElements: true
    }
  },
  {
    id: 'creative-9',
    name: 'Mint Fresh',
    category: 'Creative',
    styles: {
      fontSize: { title: 'text-4xl', heading: 'text-2xl', body: 'text-base' },
      fontFamily: 'font-sans',
      primaryColor: 'text-mint-600',
      accentColor: 'text-green-400',
      backgroundColor: 'bg-gradient-to-br from-mint-100 to-green-100',
      borderStyle: 'border-mint-300',
      layout: 'centered',
      decorativeElements: false
    }
  },
  {
    id: 'creative-10',
    name: 'Cosmic Blue',
    category: 'Creative',
    styles: {
      fontSize: { title: 'text-6xl', heading: 'text-2xl', body: 'text-base' },
      fontFamily: 'font-mono',
      primaryColor: 'text-blue-400',
      accentColor: 'text-purple-400',
      backgroundColor: 'bg-gradient-to-br from-blue-900 to-purple-900',
      borderStyle: 'border-blue-400',
      layout: 'modern-grid',
      decorativeElements: true
    }
  },

  // Professional Templates (31-40)
  {
    id: 'professional-1',
    name: 'Corporate Black',
    category: 'Professional',
    styles: {
      fontSize: { title: 'text-4xl', heading: 'text-2xl', body: 'text-base' },
      fontFamily: 'font-sans',
      primaryColor: 'text-gray-900',
      accentColor: 'text-gray-700',
      backgroundColor: 'bg-white',
      borderStyle: 'border-gray-300',
      layout: 'left-aligned',
      decorativeElements: false
    }
  },
  {
    id: 'professional-2',
    name: 'Executive Blue',
    category: 'Professional',
    styles: {
      fontSize: { title: 'text-5xl', heading: 'text-3xl', body: 'text-lg' },
      fontFamily: 'font-sans',
      primaryColor: 'text-blue-900',
      accentColor: 'text-blue-700',
      backgroundColor: 'bg-blue-50',
      borderStyle: 'border-blue-200',
      layout: 'centered',
      decorativeElements: false
    }
  },
  {
    id: 'professional-3',
    name: 'Business Gray',
    category: 'Professional',
    styles: {
      fontSize: { title: 'text-4xl', heading: 'text-2xl', body: 'text-base' },
      fontFamily: 'font-sans',
      primaryColor: 'text-slate-800',
      accentColor: 'text-slate-600',
      backgroundColor: 'bg-slate-50',
      borderStyle: 'border-slate-200',
      layout: 'left-aligned',
      decorativeElements: false
    }
  },
  {
    id: 'professional-4',
    name: 'Law Office',
    category: 'Professional',
    styles: {
      fontSize: { title: 'text-6xl', heading: 'text-2xl', body: 'text-base' },
      fontFamily: 'font-serif',
      primaryColor: 'text-gray-800',
      accentColor: 'text-amber-600',
      backgroundColor: 'bg-white',
      borderStyle: 'border-gray-400',
      layout: 'centered',
      decorativeElements: true
    }
  },
  {
    id: 'professional-5',
    name: 'Medical White',
    category: 'Professional',
    styles: {
      fontSize: { title: 'text-4xl', heading: 'text-xl', body: 'text-sm' },
      fontFamily: 'font-sans',
      primaryColor: 'text-blue-800',
      accentColor: 'text-blue-600',
      backgroundColor: 'bg-white',
      borderStyle: 'border-blue-200',
      layout: 'left-aligned',
      decorativeElements: false
    }
  },
  {
    id: 'professional-6',
    name: 'Finance Green',
    category: 'Professional',
    styles: {
      fontSize: { title: 'text-5xl', heading: 'text-3xl', body: 'text-lg' },
      fontFamily: 'font-sans',
      primaryColor: 'text-green-800',
      accentColor: 'text-green-600',
      backgroundColor: 'bg-white',
      borderStyle: 'border-green-300',
      layout: 'centered',
      decorativeElements: false
    }
  },
  {
    id: 'professional-7',
    name: 'Tech Startup',
    category: 'Professional',
    styles: {
      fontSize: { title: 'text-4xl', heading: 'text-2xl', body: 'text-base' },
      fontFamily: 'font-sans',
      primaryColor: 'text-indigo-800',
      accentColor: 'text-indigo-600',
      backgroundColor: 'bg-gray-50',
      borderStyle: 'border-indigo-200',
      layout: 'modern-grid',
      decorativeElements: true
    }
  },
  {
    id: 'professional-8',
    name: 'Consulting Navy',
    category: 'Professional',
    styles: {
      fontSize: { title: 'text-6xl', heading: 'text-2xl', body: 'text-base' },
      fontFamily: 'font-serif',
      primaryColor: 'text-slate-900',
      accentColor: 'text-slate-700',
      backgroundColor: 'bg-slate-100',
      borderStyle: 'border-slate-300',
      layout: 'left-aligned',
      decorativeElements: false
    }
  },
  {
    id: 'professional-9',
    name: 'Banking Gold',
    category: 'Professional',
    styles: {
      fontSize: { title: 'text-4xl', heading: 'text-xl', body: 'text-sm' },
      fontFamily: 'font-serif',
      primaryColor: 'text-yellow-800',
      accentColor: 'text-yellow-600',
      backgroundColor: 'bg-white',
      borderStyle: 'border-yellow-300',
      layout: 'centered',
      decorativeElements: true
    }
  },
  {
    id: 'professional-10',
    name: 'Engineering Steel',
    category: 'Professional',
    styles: {
      fontSize: { title: 'text-5xl', heading: 'text-3xl', body: 'text-lg' },
      fontFamily: 'font-mono',
      primaryColor: 'text-zinc-800',
      accentColor: 'text-zinc-600',
      backgroundColor: 'bg-zinc-50',
      borderStyle: 'border-zinc-300',
      layout: 'modern-grid',
      decorativeElements: false
    }
  },

  // Minimalist Templates (41-50)
  {
    id: 'minimalist-1',
    name: 'Pure White',
    category: 'Minimalist',
    styles: {
      fontSize: { title: 'text-6xl', heading: 'text-3xl', body: 'text-lg' },
      fontFamily: 'font-sans',
      primaryColor: 'text-black',
      accentColor: 'text-gray-800',
      backgroundColor: 'bg-white',
      borderStyle: 'border-gray-100',
      layout: 'left-aligned',
      decorativeElements: false
    }
  },
  {
    id: 'minimalist-2',
    name: 'Simple Black',
    category: 'Minimalist',
    styles: {
      fontSize: { title: 'text-4xl', heading: 'text-2xl', body: 'text-base' },
      fontFamily: 'font-sans',
      primaryColor: 'text-white',
      accentColor: 'text-gray-300',
      backgroundColor: 'bg-black',
      borderStyle: 'border-gray-800',
      layout: 'centered',
      decorativeElements: false
    }
  },
  {
    id: 'minimalist-3',
    name: 'Clean Lines',
    category: 'Minimalist',
    styles: {
      fontSize: { title: 'text-5xl', heading: 'text-2xl', body: 'text-base' },
      fontFamily: 'font-mono',
      primaryColor: 'text-gray-900',
      accentColor: 'text-gray-600',
      backgroundColor: 'bg-gray-50',
      borderStyle: 'border-gray-200',
      layout: 'left-aligned',
      decorativeElements: false
    }
  },
  {
    id: 'minimalist-4',
    name: 'Stark Contrast',
    category: 'Minimalist',
    styles: {
      fontSize: { title: 'text-7xl', heading: 'text-xl', body: 'text-sm' },
      fontFamily: 'font-sans',
      primaryColor: 'text-black',
      accentColor: 'text-gray-700',
      backgroundColor: 'bg-white',
      borderStyle: 'border-black',
      layout: 'centered',
      decorativeElements: false
    }
  },
  {
    id: 'minimalist-5',
    name: 'Subtle Gray',
    category: 'Minimalist',
    styles: {
      fontSize: { title: 'text-4xl', heading: 'text-3xl', body: 'text-lg' },
      fontFamily: 'font-sans',
      primaryColor: 'text-gray-800',
      accentColor: 'text-gray-600',
      backgroundColor: 'bg-gray-100',
      borderStyle: 'border-gray-300',
      layout: 'left-aligned',
      decorativeElements: false
    }
  },
  {
    id: 'minimalist-6',
    name: 'Monochrome',
    category: 'Minimalist',
    styles: {
      fontSize: { title: 'text-6xl', heading: 'text-2xl', body: 'text-base' },
      fontFamily: 'font-mono',
      primaryColor: 'text-zinc-900',
      accentColor: 'text-zinc-700',
      backgroundColor: 'bg-zinc-50',
      borderStyle: 'border-zinc-200',
      layout: 'centered',
      decorativeElements: false
    }
  },
  {
    id: 'minimalist-7',
    name: 'Paper White',
    category: 'Minimalist',
    styles: {
      fontSize: { title: 'text-4xl', heading: 'text-2xl', body: 'text-base' },
      fontFamily: 'font-serif',
      primaryColor: 'text-stone-900',
      accentColor: 'text-stone-700',
      backgroundColor: 'bg-stone-50',
      borderStyle: 'border-stone-200',
      layout: 'left-aligned',
      decorativeElements: false
    }
  },
  {
    id: 'minimalist-8',
    name: 'Essential Blue',
    category: 'Minimalist',
    styles: {
      fontSize: { title: 'text-5xl', heading: 'text-xl', body: 'text-sm' },
      fontFamily: 'font-sans',
      primaryColor: 'text-blue-900',
      accentColor: 'text-blue-700',
      backgroundColor: 'bg-white',
      borderStyle: 'border-blue-100',
      layout: 'centered',
      decorativeElements: false
    }
  },
  {
    id: 'minimalist-9',
    name: 'Neutral Beige',
    category: 'Minimalist',
    styles: {
      fontSize: { title: 'text-6xl', heading: 'text-3xl', body: 'text-lg' },
      fontFamily: 'font-sans',
      primaryColor: 'text-amber-900',
      accentColor: 'text-amber-700',
      backgroundColor: 'bg-amber-50',
      borderStyle: 'border-amber-100',
      layout: 'left-aligned',
      decorativeElements: false
    }
  },
  {
    id: 'minimalist-10',
    name: 'Void Black',
    category: 'Minimalist',
    styles: {
      fontSize: { title: 'text-4xl', heading: 'text-2xl', body: 'text-base' },
      fontFamily: 'font-mono',
      primaryColor: 'text-gray-100',
      accentColor: 'text-gray-400',
      backgroundColor: 'bg-gray-900',
      borderStyle: 'border-gray-700',
      layout: 'centered',
      decorativeElements: false
    }
  }
];

export const getTemplatesByCategory = (category: DesignTemplate['category']) => {
  return designTemplates.filter(template => template.category === category);
};

export const getTemplateById = (id: string) => {
  return designTemplates.find(template => template.id === id);
};