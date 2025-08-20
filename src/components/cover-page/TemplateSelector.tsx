/**
 * TemplateSelector Component
 * Handles the selection and display of design templates for cover pages
 */
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Palette } from 'lucide-react';
import { designTemplates, type DesignTemplate } from '../DesignTemplates';

interface TemplateSelectorProps {
  selectedTemplate: string;
  currentTemplate: DesignTemplate;
  onTemplateChange: (templateId: string) => void;
}

const TemplateSelector: React.FC<TemplateSelectorProps> = ({
  selectedTemplate,
  currentTemplate,
  onTemplateChange
}) => {
  return (
    <Card className="shadow-professional">
      <CardContent className="p-6">
        <h2 className="text-heading font-semibold text-primary mb-4 flex items-center gap-2">
          <Palette className="w-5 h-5" />
          Design Templates
        </h2>
        
        <div className="space-y-4">
          <div>
            <Label htmlFor="template-select" className="text-sm font-medium text-foreground">Choose Template</Label>
            <Select value={selectedTemplate} onValueChange={onTemplateChange}>
              <SelectTrigger className="mt-1">
                <SelectValue />
              </SelectTrigger>
              <SelectContent className="max-h-60">
                {['Classic', 'Modern', 'Creative', 'Professional', 'Minimalist'].map(category => (
                  <div key={category}>
                    <div className="px-2 py-1 text-xs font-semibold text-foreground bg-muted">{category}</div>
                    {designTemplates
                      .filter(t => t.category === category)
                      .map(template => (
                        <SelectItem key={template.id} value={template.id}>
                          {template.name}
                        </SelectItem>
                      ))
                    }
                  </div>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="text-xs text-foreground bg-muted/50 p-3 rounded">
            <strong>Current:</strong> {currentTemplate.name} - {currentTemplate.category}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default TemplateSelector;