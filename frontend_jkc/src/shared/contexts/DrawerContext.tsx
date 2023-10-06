import React, { createContext, useCallback, useState, useContext, useEffect } from 'react';
import { Home, Category, Person, Article, Place, Build, LocalShipping } from '@mui/icons-material';

const defaultDrawerOptions = [
  // {
  //   label: 'Blog',
  //   icon: <Category />,
  //   path: '/frota'
  // },
  {
    label: 'Frota',
    icon: <LocalShipping />,
    path: '/frota'
  },
  {
    label: 'Destinos',
    icon: <Place />,
    path: '/places'
  },
  // {
  //   label: 'Perfil',
  //   icon: <Person />,
  //   path: '/Perfil'
  // },
  // {
  //   label: 'Configurações',
  //   icon: <Build />,
  //   path: '/Configuracoes'
  // },
  // {
  //   label: 'Sobre o blog',
  //   icon: <Info />,
  //   path: '/Sobre'
  // }
];

interface IDrawerContext {
    isDrawerOpen: true | false;
    toggleDrawer: () => void;
    drawerOptions: IDrawerOptions[];
    setDrawerOptions: (newDrawerOption: IDrawerOptions[]) => void;
}

interface IDrawerProviderProps {
    children: React.ReactNode;
}

interface IDrawerOptions {
    label: string;
    icon: React.ReactElement;
    path: string;
}

const DrawerContext = createContext({} as IDrawerContext);

const DrawerProvider: React.FC<IDrawerProviderProps> = ({ children }) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState<true | false>(false);
  const [drawerOptions, setDrawerOptions] = useState<IDrawerOptions[]>([]);

  useEffect(() => {
    setDrawerOptions(defaultDrawerOptions);
  }, []);

  const toggleDrawer = useCallback(() => {
    setIsDrawerOpen(!isDrawerOpen);
  }, [isDrawerOpen]);

  const handleSetDrawerOptions = useCallback((newDrawerOption: IDrawerOptions[]) => {
    setDrawerOptions(newDrawerOption);
  }, [drawerOptions]);

  return (
    <DrawerContext.Provider value={{ isDrawerOpen, toggleDrawer, drawerOptions, setDrawerOptions:handleSetDrawerOptions }}>
      {children}
    </DrawerContext.Provider>
  );

};

const useDrawerContext = () => {
  return useContext(DrawerContext);
};

export  {
  DrawerProvider,
  useDrawerContext
};
