import React, { useState, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Progress } from '@/components/ui/progress';
import { useToast } from '@/hooks/use-toast';
import { Download, Upload, Wand2, Crop } from 'lucide-react';
import { loadImage, removeBranding, removeBackground } from '@/utils/imageProcessor';

interface ProcessedImage {
  original: File;
  processed: Blob;
  preview: string;
  filename: string;
}

const ImageProcessor = () => {
  const [images, setImages] = useState<ProcessedImage[]>([]);
  const [processing, setProcessing] = useState(false);
  const [progress, setProgress] = useState(0);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { toast } = useToast();

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(event.target.files || []);
    if (files.length === 0) return;

    // Reset previous images
    setImages([]);
    
    // Preview original images
    files.forEach((file) => {
      const reader = new FileReader();
      reader.onload = (e) => {
        const preview = e.target?.result as string;
        setImages(prev => [...prev, {
          original: file,
          processed: file,
          preview,
          filename: file.name
        }]);
      };
      reader.readAsDataURL(file);
    });

    toast({
      title: "Images uploaded",
      description: `${files.length} image(s) ready for processing`,
    });
  };

  const processImages = async (method: 'branding' | 'background') => {
    if (images.length === 0) {
      toast({
        title: "No images",
        description: "Please upload images first",
        variant: "destructive",
      });
      return;
    }

    setProcessing(true);
    setProgress(0);

    try {
      const processedImages: ProcessedImage[] = [];
      
      for (let i = 0; i < images.length; i++) {
        const image = images[i];
        setProgress((i / images.length) * 100);
        
        try {
          const img = await loadImage(image.original);
          const processedBlob = method === 'branding' 
            ? await removeBranding(img)
            : await removeBackground(img);
          
          const processedPreview = URL.createObjectURL(processedBlob);
          
          processedImages.push({
            ...image,
            processed: processedBlob,
            preview: processedPreview,
            filename: `processed-${image.filename}`
          });
        } catch (error) {
          console.error(`Error processing ${image.filename}:`, error);
          toast({
            title: "Processing error",
            description: `Failed to process ${image.filename}`,
            variant: "destructive",
          });
        }
      }
      
      setImages(processedImages);
      setProgress(100);
      
      toast({
        title: "Processing complete",
        description: `${processedImages.length} image(s) processed successfully`,
      });
    } catch (error) {
      console.error('Error during batch processing:', error);
      toast({
        title: "Batch processing failed",
        description: "An error occurred during batch processing",
        variant: "destructive",
      });
    } finally {
      setProcessing(false);
    }
  };

  const downloadImage = (image: ProcessedImage) => {
    const url = URL.createObjectURL(image.processed);
    const a = document.createElement('a');
    a.href = url;
    a.download = image.filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const downloadAll = () => {
    images.forEach(image => downloadImage(image));
    toast({
      title: "Download started",
      description: `Downloading ${images.length} processed image(s)`,
    });
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Wand2 className="h-5 w-5" />
            AI Image Processor
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <Label htmlFor="image-upload">Upload Elevation Images</Label>
            <Input
              id="image-upload"
              type="file"
              accept="image/*"
              multiple
              ref={fileInputRef}
              onChange={handleFileUpload}
              className="mt-1"
            />
          </div>

          <div className="flex gap-2">
            <Button 
              onClick={() => processImages('branding')}
              disabled={processing || images.length === 0}
              className="flex-1"
            >
              <Crop className="h-4 w-4 mr-2" />
              Remove Branding
            </Button>
            <Button 
              onClick={() => processImages('background')}
              disabled={processing || images.length === 0}
              variant="outline"
              className="flex-1"
            >
              <Wand2 className="h-4 w-4 mr-2" />
              Remove Background
            </Button>
          </div>

          {processing && (
            <div className="space-y-2">
              <div className="text-sm text-muted-foreground">
                Processing images... {Math.round(progress)}%
              </div>
              <Progress value={progress} />
            </div>
          )}

          {images.length > 0 && !processing && (
            <Button onClick={downloadAll} className="w-full">
              <Download className="h-4 w-4 mr-2" />
              Download All Processed Images
            </Button>
          )}
        </CardContent>
      </Card>

      {images.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {images.map((image, index) => (
            <Card key={index}>
              <CardContent className="p-4">
                <div className="space-y-3">
                  <img
                    src={image.preview}
                    alt={image.filename}
                    className="w-full h-48 object-cover rounded-md border"
                  />
                  <div className="text-sm font-medium truncate">
                    {image.filename}
                  </div>
                  <Button
                    onClick={() => downloadImage(image)}
                    size="sm"
                    className="w-full"
                  >
                    <Download className="h-4 w-4 mr-2" />
                    Download
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
};

export default ImageProcessor;