import React from 'react';
import { Moon, Sun, DollarSign, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTheme } from 'next-themes';
import { motion } from 'framer-motion';

interface NavbarProps {
  onTogglePermissions: () => void;
  onToggleChat: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onTogglePermissions, onToggleChat }) => {
  const { theme, setTheme } = useTheme();

  return (
    <motion.nav 
      className="nav-gradient sticky top-0 z-50 px-6 py-4"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        {/* Logo */}
        <motion.div 
          className="flex items-center space-x-3"
          whileHover={{ scale: 1.05 }}
        >
          <div className="relative">
            <div className="w-10 h-10 gradient-primary rounded-xl flex items-center justify-center">
              <DollarSign className="w-6 h-6 text-primary-foreground" />
            </div>
            <div className="absolute -inset-1 gradient-primary rounded-xl blur opacity-30"></div>
          </div>
          <div className="hidden sm:block">
            <h1 className="text-xl font-bold bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
              FinanceAI
            </h1>
            <p className="text-xs text-muted-foreground -mt-1">Your AI Financial Assistant</p>
          </div>
        </motion.div>

        {/* Center Actions */}
        <div className="flex items-center space-x-2">
          <Button
            variant="ghost"
            size="sm"
            onClick={onToggleChat}
            className="hidden md:flex items-center space-x-2 text-muted-foreground hover:text-foreground"
          >
            <span>Ask AI</span>
          </Button>
          
          <Button
            variant="outline"
            size="sm"
            onClick={onTogglePermissions}
            className="flex items-center space-x-2"
          >
            <Shield className="w-4 h-4" />
            <span className="hidden sm:inline">Privacy</span>
          </Button>
        </div>

        {/* Right Actions */}
        <div className="flex items-center space-x-2">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
            className="relative overflow-hidden"
          >
            <motion.div
              initial={false}
              animate={{ rotate: theme === 'light' ? 0 : 180 }}
              transition={{ duration: 0.3 }}
            >
              {theme === 'light' ? (
                <Moon className="w-4 h-4" />
              ) : (
                <Sun className="w-4 h-4" />
              )}
            </motion.div>
          </Button>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;