'use client';

import { useTheme } from 'next-themes';

import { Switch } from '@/components/ui/switch';

interface DarkModeToggleProps {
  isTextHidden?: boolean;
}

const DarkModeToggle = ({ isTextHidden = false }: DarkModeToggleProps) => {
  const { setTheme, theme } = useTheme();
  return (
    <div className='flex justify-between p-[1px]'>
      <h6
        className={`dropDownMenuItem darkModeToggle ${
          isTextHidden ? 'hidden' : ''
        }`}
      >
        Interface
      </h6>

      <Switch onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')} />
    </div>
  );
};

export default DarkModeToggle;
