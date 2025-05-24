import React from 'react';
import { usePrediction } from '../contexts/PredictionContext';
import HistoryItem from '../components/HistoryItem';
import { History as HistoryIcon } from 'lucide-react';

const History: React.FC = () => {
  const { history } = usePrediction();

  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex items-center mb-8">
        <HistoryIcon className="h-8 w-8 text-primary-600 mr-3" />
        <h1 className="text-3xl font-bold text-gray-900">Prediction History</h1>
      </div>

      {history.length === 0 ? (
        <div className="text-center py-16 bg-gray-50 rounded-lg">
          <div className="mx-auto h-12 w-12 text-gray-400">
            <HistoryIcon className="h-12 w-12" />
          </div>
          <h3 className="mt-2 text-lg font-medium text-gray-900">No predictions yet</h3>
          <p className="mt-1 text-sm text-gray-500">
            Your prediction history will appear here after you analyze some images.
          </p>
        </div>
      ) : (
        <div className="space-y-6">
          {history.map((item, index) => (
            <HistoryItem key={index} item={item} />
          ))}
        </div>
      )}
    </div>
  );
};

export default History;