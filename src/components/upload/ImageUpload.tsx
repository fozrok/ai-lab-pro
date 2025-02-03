import React, { useCallback, useState } from 'react';
import { Upload, X } from 'lucide-react';
import { uploadImage } from '../../utils/cloudinary';

interface ImageUploadProps {
  imageUrl: string;
  onImageChange: (url: string) => void;
  className?: string;
}

export default function ImageUpload({ imageUrl, onImageChange, className = '' }: ImageUploadProps) {
  const [previewUrl, setPreviewUrl] = useState<string>(imageUrl);
  const [isUploading, setIsUploading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleUpload = useCallback(async (file: File) => {
    try {
      setIsUploading(true);
      setError(null);

      if (file.size > 10 * 1024 * 1024) {
        throw new Error('File size must be less than 10MB');
      }

      const allowedTypes = ['image/jpeg', 'image/png', 'image/gif', 'image/webp'];
      if (!allowedTypes.includes(file.type)) {
        throw new Error('Only JPG, PNG, GIF, and WebP images are allowed');
      }

      // Create temporary preview
      const tempUrl = URL.createObjectURL(file);
      setPreviewUrl(tempUrl);

      // Upload to Cloudinary
      const cloudinaryUrl = await uploadImage(file);
      
      if (cloudinaryUrl) {
        onImageChange(cloudinaryUrl);
        setPreviewUrl(cloudinaryUrl);
      } else {
        throw new Error('No URL returned from upload');
      }
    } catch (error) {
      console.error('Upload failed:', error);
      setError(error instanceof Error ? error.message : 'Failed to upload image');
      setPreviewUrl(imageUrl); // Revert to original image on error
    } finally {
      setIsUploading(false);
    }
  }, [imageUrl, onImageChange]);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();

    if (e.dataTransfer.files?.[0]) {
      handleUpload(e.dataTransfer.files[0]);
    }
  }, [handleUpload]);

  const handleFileInput = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.[0]) {
      handleUpload(e.target.files[0]);
    }
  }, [handleUpload]);

  return (
    <div className="space-y-2">
      <div
        className={`relative group ${className}`}
        onDragOver={(e) => e.preventDefault()}
        onDrop={handleDrop}
      >
        {previewUrl ? (
          <div className="relative">
            <img
              src={previewUrl}
              alt="Tool preview"
              className={`w-full h-48 object-cover rounded-lg ${isUploading ? 'opacity-50' : ''}`}
            />
            {isUploading && (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-purple-600 dark:border-neon-purple"></div>
              </div>
            )}
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-200 rounded-lg flex items-center justify-center">
              <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex gap-2">
                <label className="cursor-pointer p-2 bg-white dark:bg-gray-800 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                  <Upload className="h-5 w-5 text-gray-600 dark:text-gray-300" />
                  <input
                    type="file"
                    className="hidden"
                    accept="image/jpeg,image/png,image/gif,image/webp"
                    onChange={handleFileInput}
                    disabled={isUploading}
                  />
                </label>
              </div>
            </div>
          </div>
        ) : (
          <label className="flex flex-col items-center justify-center w-full h-48 border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg cursor-pointer hover:border-purple-500 dark:hover:border-neon-purple transition-colors">
            <div className="flex flex-col items-center justify-center pt-5 pb-6">
              <Upload className="h-10 w-10 text-gray-400 dark:text-gray-500 mb-2" />
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Drop an image or click to upload
              </p>
              <p className="text-xs text-gray-400 dark:text-gray-500">
                JPG, PNG, GIF, WebP up to 10MB
              </p>
            </div>
            <input
              type="file"
              className="hidden"
              accept="image/jpeg,image/png,image/gif,image/webp"
              onChange={handleFileInput}
              disabled={isUploading}
            />
          </label>
        )}
      </div>
      {error && (
        <p className="text-sm text-red-600 dark:text-red-400">{error}</p>
      )}
    </div>
  );
}