/**
 * CoverPreview Component
 * Renders the live preview of the cover page with all dynamic content and styling
 */
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import type { CoverPageData, VisibilityState } from '../CoverPage';

interface CoverPreviewProps {
  previewRef: React.RefObject<HTMLDivElement>;
  coverData: CoverPageData;
  visibility: VisibilityState;
  universityNameFontSize: string;
  universityNameFontFamily: string;
  universityNameFontStyle: string;
  projectTitleFontSize: string;
  projectTitleFontFamily: string;
  projectTitleFontStyle: string;
  showSubmissionDateBorder: boolean;
}

const CoverPreview: React.FC<CoverPreviewProps> = ({
  previewRef,
  coverData,
  visibility,
  universityNameFontSize,
  universityNameFontFamily,
  universityNameFontStyle,
  projectTitleFontSize,
  projectTitleFontFamily,
  projectTitleFontStyle,
  showSubmissionDateBorder
}) => {
  return (
    <div className="lg:sticky lg:top-6">
      <Card className="shadow-professional">
        <CardContent className="p-2">
          <div className="aspect-[210/297] bg-white overflow-auto max-h-[800px]">
            <div 
              ref={previewRef}
              className={`w-full h-full p-12 ${coverData.styles.fontFamily} flex flex-col justify-between`}
              style={{ minHeight: '842px' }} // A4 height in pixels at 72 DPI
            >
              {/* Header Section */}
              <div className="text-center space-y-6">
                <div>
                  {visibility.universityName && (
                    <h1 className={`${universityNameFontSize} ${universityNameFontFamily} ${universityNameFontStyle} font-bold text-primary tracking-wide`}>
                      {coverData.universityName}
                    </h1>
                  )}
                  
                  {visibility.logo && coverData.logoUrl && (
                    <div className="flex justify-center my-6">
                      <img 
                        src={coverData.logoUrl} 
                        alt="University Logo"
                        style={{
                          width: `${coverData.logoWidth}px`,
                          height: `${coverData.logoHeight}px`,
                          objectFit: 'contain'
                        }}
                        className="rounded-lg shadow-soft"
                      />
                    </div>
                  )}
                </div>

                {visibility.documentType && (
                  <div className="border-b-2 border-primary/20 pb-4">
                    <h2 className={`${coverData.styles.fontSize.heading} font-semibold text-primary uppercase tracking-wider`}>
                      {coverData.documentType}
                    </h2>
                  </div>
                )}
              </div>

              {/* Middle Section */}
              <div className="space-y-8 flex-1 flex flex-col justify-center">
                <div className="text-center space-y-4">
                  <div>
                    {visibility.courseCode && (
                      <p className={`${coverData.styles.fontSize.body} text-foreground font-medium`}>
                        Course Code: <span className="text-primary font-semibold">{coverData.courseCode}</span>
                      </p>
                    )}
                    {visibility.courseTitle && (
                      <p className={`${coverData.styles.fontSize.body} text-foreground font-medium mt-1`}>
                        Course Title: <span className="text-primary font-semibold">{coverData.courseTitle}</span>
                      </p>
                    )}
                  </div>
                  
                  {visibility.projectTitle && (
                    <div className="py-6">
                      <h3 className={`${projectTitleFontSize} ${projectTitleFontFamily} ${projectTitleFontStyle} font-bold text-primary leading-tight`}>
                        {coverData.projectTitle}
                      </h3>
                    </div>
                  )}
                </div>

                <Separator className="my-8" />

                {/* Two-column layout for submission info with table borders */}
                <div className="grid grid-cols-2 gap-0 border border-primary/30">
                  <div className="text-left p-4 border-r border-primary/30">
                    <h4 className={`${coverData.styles.fontSize.body} font-bold text-primary mb-3 pb-1 border-b border-primary/30`}>
                      Submitted By:
                    </h4>
                    <div className="space-y-1">
                      {visibility.submittedByName && (
                        <p className={`${coverData.styles.fontSize.body} font-semibold text-foreground`}>
                          {coverData.submittedBy.name}
                        </p>
                      )}
                      {visibility.submittedById && (
                        <p className="text-sm text-foreground">
                          ID: {coverData.submittedBy.id}
                        </p>
                      )}
                      {visibility.submittedBySection && (
                        <p className="text-sm text-foreground">
                          Section: {coverData.submittedBy.section}
                        </p>
                      )}
                      {visibility.submittedByProgram && (
                        <p className="text-sm text-foreground">
                          {coverData.submittedBy.program}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="text-left p-4">
                    <h4 className={`${coverData.styles.fontSize.body} font-bold text-primary mb-3 pb-1 border-b border-primary/30`}>
                      Submitted To:
                    </h4>
                    <div className="space-y-1">
                      {visibility.submittedToName && (
                        <p className={`${coverData.styles.fontSize.body} font-semibold text-foreground`}>
                          {coverData.submittedTo.name}
                        </p>
                      )}
                      {visibility.submittedToDesignation && (
                        <p className="text-sm text-foreground">
                          {coverData.submittedTo.designation}
                        </p>
                      )}
                      {visibility.submittedToDepartment && (
                        <p className="text-sm text-foreground">
                          {coverData.submittedTo.department}
                        </p>
                      )}
                      {visibility.submittedToUniversity && (
                        <p className="text-sm text-foreground">
                          {coverData.submittedTo.university}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              {/* Footer Section */}
              <div className="text-center">
                {visibility.submissionDate && (
                  <div className={showSubmissionDateBorder ? "border-t border-primary/20 pt-4" : ""}>
                    <p className={`${coverData.styles.fontSize.body} text-foreground font-medium`}>
                      <span className="text-primary font-semibold">Submission Date:</span> {coverData.submissionDate}
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default CoverPreview;