import React from 'react';
import ImageUpload from '../components/ImageUpload';
import PredictionResult from '../components/PredictionResult';
import { Brain } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-10">
        <div className="flex justify-center mb-4">
          <Brain className="h-16 w-16 text-primary-600" />
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
          AI Image Prediction
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Upload an image and our deep learning model will analyze and predict what's in it.
        </p>
      </div>

      <div className="space-y-8">
        <ImageUpload />
        <PredictionResult />
      </div>
      
      <div className="mt-16 bg-gradient-to-r from-primary-50 to-secondary-50 rounded-lg p-6 shadow-sm">
        <h2 className="text-xl font-semibold text-gray-900 mb-3">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div className="p-4">
            <div className="bg-white rounded-full h-12 w-12 flex items-center justify-center mx-auto mb-4 shadow-sm">
              <span className="text-xl font-bold text-primary-600">1</span>
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">Upload</h3>
            <p className="text-gray-600">Upload any image from your device</p>
          </div>
          <div className="p-4">
            <div className="bg-white rounded-full h-12 w-12 flex items-center justify-center mx-auto mb-4 shadow-sm">
              <span className="text-xl font-bold text-secondary-600">2</span>
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">Process</h3>
            <p className="text-gray-600">Our AI analyzes the image content</p>
          </div>
          <div className="p-4">
            <div className="bg-white rounded-full h-12 w-12 flex items-center justify-center mx-auto mb-4 shadow-sm">
              <span className="text-xl font-bold text-accent-600">3</span>
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">Results</h3>
            <p className="text-gray-600">Get accurate predictions instantly</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;