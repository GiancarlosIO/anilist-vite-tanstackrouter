import { useThemeStore } from '@/stores/Theme';
import { Moon, Sun } from 'lucide-react';
import { Button } from './ui/button';
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from './ui/dropdown-menu';

export const ThemeSwitcher = () => {
  const theme = useThemeStore((state) => state.theme);
  const setTheme = useThemeStore((state) => state.setTheme);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button>
          {theme === 'light' ? <Sun size={24} /> : <Moon size={24} />}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuCheckboxItem
          checked={theme === 'light'}
          onCheckedChange={() => setTheme('light')}>
          Light
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem
          checked={theme === 'dark'}
          onCheckedChange={() => setTheme('dark')}>
          Dark
        </DropdownMenuCheckboxItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
