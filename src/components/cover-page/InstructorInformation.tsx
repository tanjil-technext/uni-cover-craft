/**
 * InstructorInformation Component
 * Handles all instructor-related input fields with individual visibility controls
 */
import React from 'react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import type { CoverPageData, VisibilityState } from '../CoverPage';

interface InstructorInformationProps {
  coverData: CoverPageData;
  visibility: VisibilityState;
  onUpdateCoverData: (path: string, value: any) => void;
  onUpdateVisibility: (key: keyof VisibilityState, value: boolean) => void;
}

const InstructorInformation: React.FC<InstructorInformationProps> = ({
  coverData,
  visibility,
  onUpdateCoverData,
  onUpdateVisibility
}) => {
  return (
    <div className="border border-accent/20 rounded-lg p-4 bg-accent/5">
      <h3 className="font-semibold text-primary mb-3 flex items-center gap-2">
        <div className="w-2 h-2 bg-primary rounded-full"></div>
        Instructor Information
      </h3>
      <div className="space-y-3">
        {/* Instructor Name */}
        <div className="flex items-center gap-2">
          <div className="flex-1">
            <Label className="text-xs font-medium text-foreground">Name</Label>
            <Input
              value={coverData.submittedTo.name}
              onChange={(e) => onUpdateCoverData('submittedTo.name', e.target.value)}
              className="mt-1"
            />
          </div>
          <div className="flex items-center space-x-1 mt-4">
            <Checkbox
              id="show-to-name"
              checked={visibility.submittedToName}
              onCheckedChange={(checked) => onUpdateVisibility('submittedToName', checked as boolean)}
            />
            <Label htmlFor="show-to-name" className="text-xs">Show</Label>
          </div>
        </div>

        {/* Designation */}
        <div className="flex items-center gap-2">
          <div className="flex-1">
            <Label className="text-xs font-medium text-foreground">Designation</Label>
            <Input
              value={coverData.submittedTo.designation}
              onChange={(e) => onUpdateCoverData('submittedTo.designation', e.target.value)}
              className="mt-1"
            />
          </div>
          <div className="flex items-center space-x-1 mt-4">
            <Checkbox
              id="show-to-designation"
              checked={visibility.submittedToDesignation}
              onCheckedChange={(checked) => onUpdateVisibility('submittedToDesignation', checked as boolean)}
            />
            <Label htmlFor="show-to-designation" className="text-xs">Show</Label>
          </div>
        </div>

        {/* Department */}
        <div className="flex items-center gap-2">
          <div className="flex-1">
            <Label className="text-xs font-medium text-foreground">Department</Label>
            <Input
              value={coverData.submittedTo.department}
              onChange={(e) => onUpdateCoverData('submittedTo.department', e.target.value)}
              className="mt-1"
            />
          </div>
          <div className="flex items-center space-x-1 mt-4">
            <Checkbox
              id="show-to-department"
              checked={visibility.submittedToDepartment}
              onCheckedChange={(checked) => onUpdateVisibility('submittedToDepartment', checked as boolean)}
            />
            <Label htmlFor="show-to-department" className="text-xs">Show</Label>
          </div>
        </div>

        {/* University */}
        <div className="flex items-center gap-2">
          <div className="flex-1">
            <Label className="text-xs font-medium text-foreground">University</Label>
            <Input
              value={coverData.submittedTo.university}
              onChange={(e) => onUpdateCoverData('submittedTo.university', e.target.value)}
              className="mt-1"
            />
          </div>
          <div className="flex items-center space-x-1 mt-4">
            <Checkbox
              id="show-to-university"
              checked={visibility.submittedToUniversity}
              onCheckedChange={(checked) => onUpdateVisibility('submittedToUniversity', checked as boolean)}
            />
            <Label htmlFor="show-to-university" className="text-xs">Show</Label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstructorInformation;