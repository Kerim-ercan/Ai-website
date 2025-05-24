import React, { createContext, useContext, useState, ReactNode } from 'react';
import { PredictionResult } from '../types';
import { predictImage } from '../services/predictionService';

interface PredictionContextType {
  isLoading: boolean;
  imagePreview: string | null;
  prediction: PredictionResult | null;
  error: string | null;
  history: PredictionResult[];
  uploadImage: (file: File) => Promise<void>;
  clearResults: () => void;
}

const PredictionContext = createContext<PredictionContextType | undefined>(undefined);

export const usePrediction = () => {
  const context = useContext(PredictionContext);
  if (!context) {
    throw new Error('usePrediction must be used within a PredictionProvider');
  }
  return context;
};

interface PredictionProviderProps {
  children: ReactNode;
}

export const PredictionProvider: React.FC<PredictionProviderProps> = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [prediction, setPrediction] = useState<PredictionResult | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [history, setHistory] = useState<PredictionResult[]>([]);

  const uploadImage = async (file: File) => {
    setIsLoading(true);
    setError(null);
    setPrediction(null);
    
    // Create image preview
    const reader = new FileReader();
    reader.onload = (e) => {
      if (e.target?.result) {
        setImagePreview(e.target.result.toString());
      }
    };
    reader.readAsDataURL(file);

    try {
      // Call prediction service
      const result = await predictImage(file);
      
      setPrediction(result);
      setHistory(prev => [result, ...prev]);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred during prediction');
    } finally {
      setIsLoading(false);
    }
  };

  const clearResults = () => {
    setImagePreview(null);
    setPrediction(null);
    setError(null);
  };

  const value = {
    isLoading,
    imagePreview,
    prediction,
    error,
    history,
    uploadImage,
    clearResults,
  };

  return (
    <PredictionContext.Provider value={value}>
      {children}
    </PredictionContext.Provider>
  );
};