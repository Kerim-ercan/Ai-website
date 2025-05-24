import React, { useState, useRef } from 'react';
import { Upload, X, Image as ImageIcon, Camera } from 'lucide-react';
import { usePrediction } from '../contexts/PredictionContext';

const ImageUpload: React.FC = () => {
  const [isDragging, setIsDragging] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { uploadImage, isLoading } = usePrediction();

  const handleDragEnter = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const validateFile = (file: File): boolean => {
    // Check file type
    if (!file.type.startsWith('image/')) {
      setError('Please upload an image file');
      return false;
    }
    
    // Check file size (max 5MB)
    if (file.size > 5 * 1024 * 1024) {
      setError('File size should not exceed 5MB');
      return false;
    }
    
    setError(null);
    return true;
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      const file = e.dataTransfer.files[0];
      if (validateFile(file)) {
        uploadImage(file);
      }
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      if (validateFile(file)) {
        uploadImage(file);
      }
    }
  };

  const handleButtonClick = () => {
    fileInputRef.current?.click();
  };

  const dropZoneClasses = `image-drop-zone ${
    isDragging ? 'image-drop-zone-hover' : 'image-drop-zone-idle'
  } ${error ? 'image-drop-zone-error' : ''}`;

  return (
    <div className="mb-8">
      <div
        className={dropZoneClasses}
        onDragEnter={handleDragEnter}
        onDragLeave={handleDragLeave}
        onDragOver={handleDragOver}
        onDrop={handleDrop}
        onClick={handleButtonClick}
      >
        {isLoading ? (
          <div className="text-center">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-4 border-primary-300 border-t-primary-600 mb-4"></div>
            <p className="text-gray-600">Processing your image...</p>
          </div>
        ) : (
          <>
            <div className="mb-4 bg-primary-100 p-4 rounded-full">
              <Upload className="h-10 w-10 text-primary-600" />
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-1">Upload an image</h3>
            <p className="text-sm text-gray-500 mb-4">
              Drag and drop or click to browse
            </p>
            <div className="flex space-x-2">
              <span className="inline-flex items-center text-xs text-gray-500">
                <ImageIcon className="h-4 w-4 mr-1" />
                JPEG, PNG
              </span>
              <span className="inline-flex items-center text-xs text-gray-500">
                <Camera className="h-4 w-4 mr-1" />
                Max 5MB
              </span>
            </div>
            {error && <p className="mt-2 text-sm text-red-600">{error}</p>}
          </>
        )}
      </div>
      <input
        ref={fileInputRef}
        type="file"
        className="hidden"
        accept="image/*"
        onChange={handleFileChange}
        disabled={isLoading}
      />
    </div>
  );
};

export default ImageUpload;