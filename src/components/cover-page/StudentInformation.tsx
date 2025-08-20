/**
 * StudentInformation Component
 * Handles all student-related input fields with individual visibility controls
 */
import React from 'react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import type { CoverPageData, VisibilityState } from '../CoverPage';

interface StudentInformationProps {
  coverData: CoverPageData;
  visibility: VisibilityState;
  onUpdateCoverData: (path: string, value: any) => void;
  onUpdateVisibility: (key: keyof VisibilityState, value: boolean) => void;
}

const StudentInformation: React.FC<StudentInformationProps> = ({
  coverData,
  visibility,
  onUpdateCoverData,
  onUpdateVisibility
}) => {
  return (
    <div className="border border-primary/20 rounded-lg p-4 bg-primary/5">
      <h3 className="font-semibold text-primary mb-3 flex items-center gap-2">
        <div className="w-2 h-2 bg-primary rounded-full"></div>
        Student Information
      </h3>
      <div className="space-y-3">
        {/* Student Name */}
        <div className="flex items-center gap-2">
          <div className="flex-1">
            <Label className="text-xs font-medium text-foreground">Name</Label>
            <Input
              value={coverData.submittedBy.name}
              onChange={(e) => onUpdateCoverData('submittedBy.name', e.target.value)}
              className="mt-1"
            />
          </div>
          <div className="flex items-center space-x-1 mt-4">
            <Checkbox
              id="show-by-name"
              checked={visibility.submittedByName}
              onCheckedChange={(checked) => onUpdateVisibility('submittedByName', checked as boolean)}
            />
            <Label htmlFor="show-by-name" className="text-xs">Show</Label>
          </div>
        </div>

        {/* Student ID */}
        <div className="flex items-center gap-2">
          <div className="flex-1">
            <Label className="text-xs font-medium text-foreground">Student ID</Label>
            <Input
              value={coverData.submittedBy.id}
              onChange={(e) => onUpdateCoverData('submittedBy.id', e.target.value)}
              className="mt-1"
            />
          </div>
          <div className="flex items-center space-x-1 mt-4">
            <Checkbox
              id="show-by-id"
              checked={visibility.submittedById}
              onCheckedChange={(checked) => onUpdateVisibility('submittedById', checked as boolean)}
            />
            <Label htmlFor="show-by-id" className="text-xs">Show</Label>
          </div>
        </div>

        {/* Section */}
        <div className="flex items-center gap-2">
          <div className="flex-1">
            <Label className="text-xs font-medium text-foreground">Section</Label>
            <Input
              value={coverData.submittedBy.section}
              onChange={(e) => onUpdateCoverData('submittedBy.section', e.target.value)}
              className="mt-1"
            />
          </div>
          <div className="flex items-center space-x-1 mt-4">
            <Checkbox
              id="show-by-section"
              checked={visibility.submittedBySection}
              onCheckedChange={(checked) => onUpdateVisibility('submittedBySection', checked as boolean)}
            />
            <Label htmlFor="show-by-section" className="text-xs">Show</Label>
          </div>
        </div>

        {/* Program */}  
        <div className="flex items-center gap-2">
          <div className="flex-1">
            <Label className="text-xs font-medium text-foreground">Program</Label>
            <Input
              value={coverData.submittedBy.program}
              onChange={(e) => onUpdateCoverData('submittedBy.program', e.target.value)}
              className="mt-1"
            />
          </div>
          <div className="flex items-center space-x-1 mt-4">
            <Checkbox
              id="show-by-program"
              checked={visibility.submittedByProgram}
              onCheckedChange={(checked) => onUpdateVisibility('submittedByProgram', checked as boolean)}
            />
            <Label htmlFor="show-by-program" className="text-xs">Show</Label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentInformation;