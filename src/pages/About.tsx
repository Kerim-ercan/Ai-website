import React from 'react';
import { FileQuestion, Lightbulb, Shield } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-10">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          About ImageAI
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Leveraging state-of-the-art deep learning to provide accurate image predictions.
        </p>
      </div>

      <div className="prose prose-lg max-w-none">
        <h2 className="flex items-center text-2xl font-semibold text-gray-900 mb-4">
          <Lightbulb className="h-6 w-6 text-primary-600 mr-2" />
          Our Technology
        </h2>
        <p>
          ImageAI uses advanced convolutional neural networks trained on millions of images to provide 
          accurate predictions and classifications. Our models are continuously improved to ensure 
          the highest possible accuracy across a wide range of categories.
        </p>
        <p>
          The backend processing happens in real-time, analyzing multiple aspects of each image to 
          provide you with comprehensive results in seconds.
        </p>

        <h2 className="flex items-center text-2xl font-semibold text-gray-900 mb-4 mt-8">
          <Shield className="h-6 w-6 text-primary-600 mr-2" />
          Privacy & Security
        </h2>
        <p>
          We take your privacy seriously. All image processing happens on our secure servers, 
          and we don't store your images permanently unless you explicitly opt-in to help improve 
          our models. Your data is never sold or shared with third parties.
        </p>

        <h2 className="flex items-center text-2xl font-semibold text-gray-900 mb-4 mt-8">
          <FileQuestion className="h-6 w-6 text-primary-600 mr-2" />
          Frequently Asked Questions
        </h2>
        
        <div className="mt-6 space-y-6">
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-lg font-medium text-gray-900 mb-2">
              What types of images can I analyze?
            </h3>
            <p className="text-gray-600">
              Our system can analyze virtually any type of image, including photographs, 
              illustrations, and diagrams. For best results, use clear images with good lighting 
              and minimal blur.
            </p>
          </div>
          
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-lg font-medium text-gray-900 mb-2">
              How accurate are the predictions?
            </h3>
            <p className="text-gray-600">
              Our models typically achieve 85-95% accuracy for common objects and scenes. 
              However, accuracy may vary depending on image quality and whether the subject 
              is well-represented in our training data.
            </p>
          </div>
          
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-lg font-medium text-gray-900 mb-2">
              Is there a limit to how many images I can analyze?
            </h3>
            <p className="text-gray-600">
              Free accounts can analyze up to 100 images per day. For higher volumes, 
              please contact us about our premium options.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;