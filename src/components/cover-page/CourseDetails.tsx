/**
 * CourseDetails Component
 * Handles course code, course title, project title, and submission date input fields
 */
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import type { CoverPageData, VisibilityState } from '../CoverPage';

interface CourseDetailsProps {
  coverData: CoverPageData;
  visibility: VisibilityState;
  onUpdateCoverData: (path: string, value: any) => void;
  onUpdateVisibility: (key: keyof VisibilityState, value: boolean) => void;
  // Font customization for Project Title
  projectTitleFontSize: string;
  projectTitleFontFamily: string;
  projectTitleFontStyle: string;
  onProjectTitleFontChange: (property: string, value: string) => void;
  // Border-top option for submission date
  showSubmissionDateBorder: boolean;
  onSubmissionDateBorderChange: (value: boolean) => void;
}

const CourseDetails: React.FC<CourseDetailsProps> = ({
  coverData,
  visibility,
  onUpdateCoverData,
  onUpdateVisibility,
  projectTitleFontSize,
  projectTitleFontFamily,
  projectTitleFontStyle,
  onProjectTitleFontChange,
  showSubmissionDateBorder,
  onSubmissionDateBorderChange
}) => {
  return (
    <Card className="shadow-professional">
      <CardContent className="p-6">
        <h2 className="text-heading font-semibold text-primary mb-4">Course & Project Details</h2>
        
        <div className="space-y-4">
          {/* Course Code Section */}
          <div className="flex items-center gap-3">
            <div className="flex-1">
              <Label htmlFor="courseCode" className="text-sm font-medium text-foreground">Course Code</Label>
              <Input
                id="courseCode"
                value={coverData.courseCode}
                onChange={(e) => onUpdateCoverData('courseCode', e.target.value)}
                className="mt-1"
              />
            </div>
            <div className="flex items-center space-x-2 mt-6">
              <Checkbox
                id="show-course-code"
                checked={visibility.courseCode}
                onCheckedChange={(checked) => onUpdateVisibility('courseCode', checked as boolean)}
              />
              <Label htmlFor="show-course-code" className="text-sm">Show</Label>
            </div>
          </div>

          {/* Course Title Section */}
          <div className="flex items-center gap-3">
            <div className="flex-1">
              <Label htmlFor="courseTitle" className="text-sm font-medium text-foreground">Course Title</Label>
              <Input
                id="courseTitle"
                value={coverData.courseTitle}
                onChange={(e) => onUpdateCoverData('courseTitle', e.target.value)}
                className="mt-1"
              />
            </div>
            <div className="flex items-center space-x-2 mt-6">
              <Checkbox
                id="show-course-title"
                checked={visibility.courseTitle}
                onCheckedChange={(checked) => onUpdateVisibility('courseTitle', checked as boolean)}
              />
              <Label htmlFor="show-course-title" className="text-sm">Show</Label>
            </div>
          </div>

          {/* Project Title Section */}
          <div className="flex items-center gap-3">
            <div className="flex-1">
              <Label htmlFor="projectTitle" className="text-sm font-medium text-foreground">Project Title</Label>
              <Input
                id="projectTitle"
                value={coverData.projectTitle}
                onChange={(e) => onUpdateCoverData('projectTitle', e.target.value)}
                className="mt-1"
              />
            </div>
            <div className="flex items-center space-x-2 mt-6">
              <Checkbox
                id="show-project-title"
                checked={visibility.projectTitle}
                onCheckedChange={(checked) => onUpdateVisibility('projectTitle', checked as boolean)}
              />
              <Label htmlFor="show-project-title" className="text-sm">Show</Label>
            </div>
          </div>

          {/* Project Title Font Customization */}
          <div className="grid grid-cols-3 gap-4 ml-4 p-3 bg-muted/30 rounded">
            <div>
              <Label className="text-xs font-medium text-foreground">Font Size</Label>
              <Select value={projectTitleFontSize} onValueChange={(value) => onProjectTitleFontChange('fontSize', value)}>
                <SelectTrigger className="mt-1">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="text-xl">Small</SelectItem>
                  <SelectItem value="text-2xl">Medium</SelectItem>
                  <SelectItem value="text-3xl">Large</SelectItem>
                  <SelectItem value="text-4xl">X-Large</SelectItem>
                  <SelectItem value="text-5xl">XX-Large</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label className="text-xs font-medium text-foreground">Font Family</Label>
              <Select value={projectTitleFontFamily} onValueChange={(value) => onProjectTitleFontChange('fontFamily', value)}>
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
              <Select value={projectTitleFontStyle} onValueChange={(value) => onProjectTitleFontChange('fontStyle', value)}>
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

          {/* Submission Date Section */}
          <div className="flex items-center gap-3">
            <div className="flex-1">
              <Label htmlFor="submissionDate" className="text-sm font-medium text-foreground">Submission Date</Label>
              <Input
                id="submissionDate"
                value={coverData.submissionDate}
                onChange={(e) => onUpdateCoverData('submissionDate', e.target.value)}
                className="mt-1"
              />
            </div>
            <div className="flex items-center space-x-2 mt-6">
              <Checkbox
                id="show-submission-date"
                checked={visibility.submissionDate}
                onCheckedChange={(checked) => onUpdateVisibility('submissionDate', checked as boolean)}
              />
              <Label htmlFor="show-submission-date" className="text-sm">Show</Label>
            </div>
          </div>

          {/* Border-top option for submission date */}
          <div className="flex items-center gap-3 ml-4">
            <Checkbox
              id="show-submission-date-border"
              checked={showSubmissionDateBorder}
              onCheckedChange={(checked) => onSubmissionDateBorderChange(checked as boolean)}
            />
            <Label htmlFor="show-submission-date-border" className="text-sm text-foreground">Show border above submission date</Label>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default CourseDetails;