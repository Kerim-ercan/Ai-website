import React from 'react';
import { Check, AlertCircle } from 'lucide-react';
import { usePrediction } from '../contexts/PredictionContext';

const PredictionResult: React.FC = () => {
  const { prediction, imagePreview, error } = usePrediction();

  if (!imagePreview && !prediction && !error) {
    return null;
  }

  return (
    <div className="card p-6">
      <h2 className="text-xl font-semibold mb-4">Results</h2>
      
      {error && (
        <div className="rounded-md bg-red-50 p-4 mb-4">
          <div className="flex">
            <div className="flex-shrink-0">
              <AlertCircle className="h-5 w-5 text-red-400" aria-hidden="true" />
            </div>
            <div className="ml-3">
              <h3 className="text-sm font-medium text-red-800">Error</h3>
              <div className="mt-2 text-sm text-red-700">
                <p>{error}</p>
              </div>
            </div>
          </div>
        </div>
      )}
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Image Preview */}
        {imagePreview && (
          <div>
            <h3 className="text-md font-medium mb-2">Uploaded Image</h3>
            <div className="relative aspect-square overflow-hidden rounded-lg bg-gray-100">
              <img 
                src={imagePreview} 
                alt="Uploaded" 
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        )}
        
        {/* Prediction Results */}
        {prediction && (
          <div>
            <h3 className="text-md font-medium mb-3">Prediction</h3>
            <div className="space-y-3">
              {prediction.predictions.map((item, index) => (
                <div 
                  key={index}
                  className="flex items-center bg-gray-50 p-3 rounded-md border border-gray-200"
                >
                  <div className="flex-shrink-0">
                    <Check className="h-5 w-5 text-primary-500" />
                  </div>
                  <div className="ml-3 flex-grow">
                    <p className="text-sm font-medium text-gray-900">{item.class}</p>
                  </div>
                  <div className="text-sm font-medium text-gray-900">
                    {(item.confidence * 100).toFixed(2)}%
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-4 text-sm text-gray-500">
              <p>Model: {prediction.model}</p>
              <p>Processing Time: {prediction.processingTime}ms</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PredictionResult;