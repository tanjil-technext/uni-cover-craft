/**
 * DownloadOptions Component
 * Provides buttons for downloading the cover page in various formats (PDF, PNG, JPG, WebP)
 */
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Download, FileImage } from 'lucide-react';

interface DownloadOptionsProps {
  onDownloadPDF: () => void;
  onDownloadImage: (format: 'png' | 'jpg' | 'webp') => void;
}

const DownloadOptions: React.FC<DownloadOptionsProps> = ({
  onDownloadPDF,
  onDownloadImage
}) => {
  return (
    <Card className="shadow-professional">
      <CardContent className="p-6">
        <h2 className="text-heading font-semibold text-primary mb-4">Download Options</h2>
        
        <div className="grid grid-cols-2 gap-3">
          <Button 
            onClick={onDownloadPDF}
            className="bg-gradient-primary hover:opacity-90 transition-opacity"
          >
            <Download className="w-4 h-4 mr-2" />
            Download PDF
          </Button>
          
          <Button 
            variant="outline"
            onClick={() => onDownloadImage('png')}
          >
            <FileImage className="w-4 h-4 mr-2" />
            Download PNG
          </Button>
          
          <Button 
            variant="outline"
            onClick={() => onDownloadImage('jpg')}
          >
            <FileImage className="w-4 h-4 mr-2" />
            Download JPG
          </Button>
          
          <Button 
            variant="outline"
            onClick={() => onDownloadImage('webp')}
          >
            <FileImage className="w-4 h-4 mr-2" />
            Download WebP
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default DownloadOptions;