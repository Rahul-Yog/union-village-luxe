import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Settings, Eye, EyeOff } from 'lucide-react';
import ImageProcessor from './ImageProcessor';

const CrownImageAdmin = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Admin collections data matching the current structure
  const collectionsWithBranding = [
    {
      name: 'End Unit Collection',
      images: ['abbey-elev-a.png', 'abbey-elev-b.png', 'abbey-elev-c.png'],
      status: 'Has Branding',
      category: 'Townhomes'
    },
    {
      name: 'Freehold Collection',
      images: ['freehold-corner.png', 'freehold-elev-b.png', 'freehold-elev-c.png'],
      status: 'Has Branding',
      category: 'Townhomes'
    },
    {
      name: 'Family Home Collection',
      images: ['town-elev-a.png', 'town-elev-b.png', 'town-elev-c.png'],
      status: 'Has Branding',
      category: 'Detached - Estate'
    },
    {
      name: 'Classic Compact Homes',
      images: ['estate-home-1-elev-a.png', 'estate-home-1-elev-b.png', 'estate-home-1-elev-c.png'],
      status: 'Cleaned',
      category: 'Detached - Compact'
    },
    {
      name: 'Modern Compact Homes',
      images: ['compact-home-2-elev-a.png', 'compact-home-2-elev-b.png'],
      status: 'Cleaned',
      category: 'Detached - Compact'
    },
    {
      name: 'Executive Compact Homes',
      images: ['compact-home-1-elev-c.png'],
      status: 'Cleaned',
      category: 'Detached - Compact'
    },
    {
      name: 'Luxury Compact Homes',
      images: ['compact-home-3-elev-b.png', 'compact-home-3-elev-c.png'],
      status: 'Cleaned',
      category: 'Detached - Compact'
    }
  ];

  if (!isVisible) {
    return (
      <div className="fixed bottom-4 right-4 z-50">
        <Button
          onClick={() => setIsVisible(true)}
          size="sm"
          variant="outline"
          className="shadow-lg"
        >
          <Settings className="h-4 w-4" />
        </Button>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <div className="bg-background rounded-lg shadow-xl max-w-6xl w-full max-h-[90vh] overflow-hidden">
        <div className="p-6 border-b flex items-center justify-between">
          <h2 className="text-2xl font-bold">Crown Image Management</h2>
          <Button
            onClick={() => setIsVisible(false)}
            size="sm"
            variant="outline"
          >
            <EyeOff className="h-4 w-4" />
          </Button>
        </div>
        
        <div className="p-6 overflow-y-auto max-h-[calc(90vh-100px)]">
          <Tabs defaultValue="processor" className="space-y-6">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="processor">AI Image Processor</TabsTrigger>
              <TabsTrigger value="status">Collection Status</TabsTrigger>
            </TabsList>
            
            <TabsContent value="processor" className="space-y-4">
              <ImageProcessor />
            </TabsContent>
            
            <TabsContent value="status" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Collection Branding Status</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {collectionsWithBranding.map((collection, index) => (
                      <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                        <div>
                          <h3 className="font-semibold">{collection.name}</h3>
                          <p className="text-sm text-muted-foreground">{collection.category}</p>
                          <p className="text-xs text-muted-foreground mt-1">
                            {collection.images.length} elevation(s): {collection.images.join(', ')}
                          </p>
                        </div>
                        <Badge variant={collection.status === 'Cleaned' ? 'default' : 'destructive'}>
                          {collection.status}
                        </Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Instructions</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2 text-sm">
                  <p><strong>1. Process Images:</strong> Upload elevation images with branding to the AI processor</p>
                  <p><strong>2. Choose Method:</strong> Use "Remove Branding" for smart cropping or "Remove Background" for full processing</p>
                  <p><strong>3. Download:</strong> Download processed images and replace the originals in the assets folder</p>
                  <p><strong>4. Update Code:</strong> Update the import statements in CrownHomeCollection.tsx to use the new images</p>
                  <p className="text-muted-foreground mt-4">
                    <strong>Note:</strong> The "Remove Branding" method uses smart cropping and masking to remove common branding areas while preserving architectural details.
                  </p>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default CrownImageAdmin;