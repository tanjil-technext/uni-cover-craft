/**
 * StudentInstructorSection Component
 * Container component that combines StudentInformation and InstructorInformation components
 */
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import StudentInformation from './StudentInformation';
import InstructorInformation from './InstructorInformation';
import type { CoverPageData, VisibilityState } from '../CoverPage';

interface StudentInstructorSectionProps {
  coverData: CoverPageData;
  visibility: VisibilityState;
  onUpdateCoverData: (path: string, value: any) => void;
  onUpdateVisibility: (key: keyof VisibilityState, value: boolean) => void;
}

const StudentInstructorSection: React.FC<StudentInstructorSectionProps> = ({
  coverData,
  visibility,
  onUpdateCoverData,
  onUpdateVisibility
}) => {
  return (
    <Card className="shadow-professional">
      <CardContent className="p-6">
        <h2 className="text-heading font-semibold text-primary mb-4">Student & Instructor Information</h2>
        
        <div className="space-y-6">
          {/* Student Information Section */}
          <StudentInformation
            coverData={coverData}
            visibility={visibility}
            onUpdateCoverData={onUpdateCoverData}
            onUpdateVisibility={onUpdateVisibility}
          />

          {/* Instructor Information Section */}
          <InstructorInformation
            coverData={coverData}
            visibility={visibility}
            onUpdateCoverData={onUpdateCoverData}
            onUpdateVisibility={onUpdateVisibility}
          />
        </div>
      </CardContent>
    </Card>
  );
};

export default StudentInstructorSection;