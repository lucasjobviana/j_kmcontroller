import React, { createContext, useCallback, useState, useContext, useEffect } from 'react';
import { Build, LocalShipping, Factory, CarRepair } from '@mui/icons-material';

const defaultDrawerOptions = [
  {
    label: 'Frota',
    icon: <LocalShipping />,
    path: '/frota'
  },
  {
    label: 'Serviços',
    icon: <Build />,
    path: '/services'
  },
  {
    label: 'Oficinas',
    icon: <Factory />,
    path: '/workshops'
  },
  {
    label: 'Manutenções',
    icon: <CarRepair />,
    path: '/maintenances'
  }
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
