/**
 * BasicInformation Component
 * Handles university name, logo, and document type input fields with visibility controls
 */
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { Button } from '@/components/ui/button';
import { Camera } from 'lucide-react';
import type { CoverPageData, VisibilityState } from '../CoverPage';

interface BasicInformationProps {
  coverData: CoverPageData;
  visibility: VisibilityState;
  logoInputRef: React.RefObject<HTMLInputElement>;
  onUpdateCoverData: (path: string, value: any) => void;
  onUpdateVisibility: (key: keyof VisibilityState, value: boolean) => void;
  onLogoUpload: (event: React.ChangeEvent<HTMLInputElement>) => void;
  // Font customization for University Name
  universityNameFontSize: string;
  universityNameFontFamily: string;
  universityNameFontStyle: string;
  onUniversityNameFontChange: (property: string, value: string) => void;
}

const BasicInformation: React.FC<BasicInformationProps> = ({
  coverData,
  visibility,
  logoInputRef,
  onUpdateCoverData,
  onUpdateVisibility,
  onLogoUpload,
  universityNameFontSize,
  universityNameFontFamily,
  universityNameFontStyle,
  onUniversityNameFontChange
}) => {
  return (
    <Card className="shadow-professional">
      <CardContent className="p-6">
        <h2 className="text-heading font-semibold text-primary mb-4">Basic Information</h2>
        
        <div className="space-y-4">
          {/* University Name Section */}
          <div className="flex items-center gap-3">
            <div className="flex-1">
              <Label htmlFor="universityName" className="text-sm font-medium text-foreground">University Name</Label>
              <Input
                id="universityName"
                value={coverData.universityName}
                onChange={(e) => onUpdateCoverData('universityName', e.target.value)}
                className="mt-1"
              />
            </div>
            <div className="flex items-center space-x-2 mt-6">
              <Checkbox
                id="show-university"
                checked={visibility.universityName}
                onCheckedChange={(checked) => onUpdateVisibility('universityName', checked as boolean)}
              />
              <Label htmlFor="show-university" className="text-sm">Show</Label>
            </div>
          </div>

          {/* University Name Font Customization */}
          <div className="grid grid-cols-3 gap-4 ml-4 p-3 bg-muted/30 rounded">
            <div>
              <Label className="text-xs font-medium text-foreground">Font Size</Label>
              <Select value={universityNameFontSize} onValueChange={(value) => onUniversityNameFontChange('fontSize', value)}>
                <SelectTrigger className="mt-1">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="text-2xl">Small</SelectItem>
                  <SelectItem value="text-3xl">Medium</SelectItem>
                  <SelectItem value="text-4xl">Large</SelectItem>
                  <SelectItem value="text-5xl">X-Large</SelectItem>
                  <SelectItem value="text-6xl">XX-Large</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label className="text-xs font-medium text-foreground">Font Family</Label>
              <Select value={universityNameFontFamily} onValueChange={(value) => onUniversityNameFontChange('fontFamily', value)}>
                <SelectTrigger className="mt-1">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="font-serif">Serif</SelectItem>
                  <SelectItem value="font-sans">Sans</SelectItem>
                  <SelectItem value="font-mono">Mono</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label className="text-xs font-medium text-foreground">Font Style</Label>
              <Select value={universityNameFontStyle} onValueChange={(value) => onUniversityNameFontChange('fontStyle', value)}>
                <SelectTrigger className="mt-1">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="not-italic">Normal</SelectItem>
                  <SelectItem value="italic">Italic</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Logo Size Controls */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="logoWidth" className="text-sm font-medium text-foreground">Logo Width (px)</Label>
              <Input
                id="logoWidth"
                type="number"
                value={coverData.logoWidth}
                onChange={(e) => onUpdateCoverData('logoWidth', parseInt(e.target.value) || 120)}
                className="mt-1"
              />
            </div>
            <div>
              <Label htmlFor="logoHeight" className="text-sm font-medium text-foreground">Logo Height (px)</Label>
              <Input
                id="logoHeight"
                type="number"
                value={coverData.logoHeight}
                onChange={(e) => onUpdateCoverData('logoHeight', parseInt(e.target.value) || 120)}
                className="mt-1"
              />
            </div>
          </div>

          {/* Logo Upload Section */}
          <div className="flex items-start gap-3">
            <div className="flex-1">
              <Label className="text-sm font-medium text-foreground">University Logo</Label>
              <div className="mt-1 flex gap-2">
                <Input
                  ref={logoInputRef}
                  type="file"
                  accept="image/*"
                  onChange={onLogoUpload}
                  className="hidden"
                />
                <Button
                  variant="outline"
                  onClick={() => logoInputRef.current?.click()}
                  className="flex-1"
                >
                  <Camera className="w-4 h-4 mr-2" />
                  Upload Logo
                </Button>
              </div>
            </div>
            <div className="flex items-center space-x-2 mt-6">
              <Checkbox
                id="show-logo"
                checked={visibility.logo}
                onCheckedChange={(checked) => onUpdateVisibility('logo', checked as boolean)}
              />
              <Label htmlFor="show-logo" className="text-sm">Show</Label>
            </div>
          </div>

          {/* Document Type Section */}
          <div className="flex items-center gap-3">
            <div className="flex-1">
              <Label htmlFor="documentType" className="text-sm font-medium text-foreground">Document Type</Label>
              <Select value={coverData.documentType} onValueChange={(value) => onUpdateCoverData('documentType', value)}>
                <SelectTrigger className="mt-1">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Project Report">Project Report</SelectItem>
                  <SelectItem value="Assignment">Assignment</SelectItem>
                  <SelectItem value="Lab Report">Lab Report</SelectItem>
                  <SelectItem value="Thesis">Thesis</SelectItem>
                  <SelectItem value="Dissertation">Dissertation</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex items-center space-x-2 mt-6">
              <Checkbox
                id="show-document-type"
                checked={visibility.documentType}
                onCheckedChange={(checked) => onUpdateVisibility('documentType', checked as boolean)}
              />
              <Label htmlFor="show-document-type" className="text-sm">Show</Label>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default BasicInformation;