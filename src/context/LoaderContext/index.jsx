// src/context/LoaderContext.jsx
import React, { createContext, useState, useContext, useMemo } from 'react';
import styles from './styles.module.css';

const LoaderContext = createContext();

export const LoaderProvider = ({ children }) => {
  const [globalLoading, setGlobalLoading] = useState(false);
  const [localLoadings, setLocalLoadings] = useState({});

  // Mostrar loader global
  const showGlobalLoader = () => setGlobalLoading(true);
  
  // Esconder loader global
  const hideGlobalLoader = () => setGlobalLoading(false);
  
  // Mostrar loader local em um componente específico
  const showLocalLoader = (componentId) => {
    setLocalLoadings(prev => ({
      ...prev,
      [componentId]: true
    }));
  };
  
  // Esconder loader local de um componente específico
  const hideLocalLoader = (componentId) => {
    setLocalLoadings(prev => ({
      ...prev,
      [componentId]: false
    }));
  };
  
  // Verifica se um componente específico está carregando
  const isLoading = (componentId) => {
    return componentId ? localLoadings[componentId] : globalLoading;
  };

  const value = useMemo(() => ({
    showGlobalLoader,
    hideGlobalLoader,
    showLocalLoader,
    hideLocalLoader,
    isLoading
  }), [globalLoading, localLoadings]);

  return (
    <LoaderContext.Provider value={value}>
      {children}
      
      {/* Loader Global */}
      {globalLoading && (
        <div className={styles.globalLoaderOverlay}>
          <div className={styles.loaderContent}>
            <div className={styles.spinner}></div>
            <span>Carregando...</span>
          </div>
        </div>
      )}
    </LoaderContext.Provider>
  );
};

// Hook para usar o contexto
export const useLoader = () => {
  const context = useContext(LoaderContext);
  if (!context) {
    throw new Error('useLoader must be used within a LoaderProvider');
  }
  return context;
};

// Componente para Loader Local
export const LocalLoader = ({ componentId, children }) => {
  const { isLoading } = useLoader();
  
  if (isLoading(componentId)) {
    return (
      <div className={styles.localLoaderContainer}>
        <div className={styles.spinner}></div>
      </div>
    );
  }
  
  return children;
};