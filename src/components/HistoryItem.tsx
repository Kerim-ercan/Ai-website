import React from 'react';
import { Calendar, Clock } from 'lucide-react';
import { PredictionResult } from '../types';

interface HistoryItemProps {
  item: PredictionResult;
}

const HistoryItem: React.FC<HistoryItemProps> = ({ item }) => {
  const timestamp = new Date(item.timestamp);
  const formattedDate = timestamp.toLocaleDateString();
  const formattedTime = timestamp.toLocaleTimeString();
  
  const topPrediction = item.predictions[0];

  return (
    <div className="card hover:shadow-lg transition-shadow duration-300">
      <div className="flex flex-col md:flex-row">
        <div className="w-full md:w-1/3 h-48 md:h-auto relative">
          <img 
            src={item.imageUrl} 
            alt="Prediction" 
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>
        <div className="p-6 flex-grow">
          <div className="flex justify-between items-start mb-4">
            <h3 className="text-lg font-semibold text-gray-900">
              {topPrediction.class}
            </h3>
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary-100 text-primary-800">
              {(topPrediction.confidence * 100).toFixed(2)}%
            </span>
          </div>
          
          <div className="mb-4">
            <h4 className="text-sm font-medium text-gray-700 mb-2">All Predictions:</h4>
            <div className="space-y-1">
              {item.predictions.slice(0, 3).map((pred, idx) => (
                <div key={idx} className="flex justify-between text-sm">
                  <span className="text-gray-600">{pred.class}</span>
                  <span className="text-gray-900 font-medium">
                    {(pred.confidence * 100).toFixed(2)}%
                  </span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="mt-4 flex items-center text-xs text-gray-500">
            <Calendar className="h-4 w-4 mr-1" />
            <span className="mr-3">{formattedDate}</span>
            <Clock className="h-4 w-4 mr-1" />
            <span>{formattedTime}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HistoryItem;