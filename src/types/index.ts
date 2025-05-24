export interface PredictionClass {
  class: string;
  confidence: number;
}

export interface PredictionResult {
  id: string;
  timestamp: string;
  imageUrl: string;
  predictions: PredictionClass[];
  model: string;
  processingTime: number;
}