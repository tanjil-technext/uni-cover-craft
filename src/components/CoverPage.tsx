/**
 * CoverPage Component - Main cover page generator
 * Refactored into modular sub-components for better maintainability
 */
import React, { useState, useRef } from 'react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import universityLogo from '@/assets/university-logo.png';
import { designTemplates, getTemplateById, type DesignTemplate } from './DesignTemplates';

// Sub-components
import TemplateSelector from './cover-page/TemplateSelector';
import BasicInformation from './cover-page/BasicInformation';
import CourseDetails from './cover-page/CourseDetails';
import StudentInstructorSection from './cover-page/StudentInstructorSection';
import DownloadOptions from './cover-page/DownloadOptions';
import CoverPreview from './cover-page/CoverPreview';

export interface CoverPageData {
  universityName: string;
  logoUrl: string;
  logoWidth: number;
  logoHeight: number;
  documentType: string;
  courseCode: string;
  courseTitle: string;
  projectTitle: string;
  submittedBy: {
    name: string;
    id: string;
    section: string;
    program: string;
  };
  submittedTo: {
    name: string;
    designation: string;
    department: string;
    university: string;
  };
  submissionDate: string;
  styles: {
    fontSize: {
      title: string;
      heading: string;
      body: string;
    };
    fontFamily: string;
    primaryColor: string;
    accentColor: string;
  };
}

export interface VisibilityState {
  universityName: boolean;
  logo: boolean;
  documentType: boolean;
  courseCode: boolean;
  courseTitle: boolean;
  projectTitle: boolean;
  submittedByName: boolean;
  submittedById: boolean;
  submittedBySection: boolean;
  submittedByProgram: boolean;
  submittedToName: boolean;
  submittedToDesignation: boolean;
  submittedToDepartment: boolean;
  submittedToUniversity: boolean;
  submissionDate: boolean;
}

const CoverPage: React.FC = () => {
  // State management section
  const previewRef = useRef<HTMLDivElement>(null);
  const logoInputRef = useRef<HTMLInputElement>(null);
  
  const [selectedTemplate, setSelectedTemplate] = useState<string>('classic-1');
  const [currentTemplate, setCurrentTemplate] = useState<DesignTemplate>(designTemplates[0]);
  
  // Font customization states
  const [universityNameFontSize, setUniversityNameFontSize] = useState<string>('text-4xl');
  const [universityNameFontFamily, setUniversityNameFontFamily] = useState<string>('font-serif');  
  const [universityNameFontStyle, setUniversityNameFontStyle] = useState<string>('not-italic');
  
  const [projectTitleFontSize, setProjectTitleFontSize] = useState<string>('text-2xl');
  const [projectTitleFontFamily, setProjectTitleFontFamily] = useState<string>('font-serif');
  const [projectTitleFontStyle, setProjectTitleFontStyle] = useState<string>('not-italic');
  
  const [showSubmissionDateBorder, setShowSubmissionDateBorder] = useState<boolean>(false);

  const [coverData, setCoverData] = useState<CoverPageData>({
    universityName: 'University of Excellence',
    logoUrl: universityLogo,
    logoWidth: 120,
    logoHeight: 120,
    documentType: 'Project Report',
    courseCode: 'CSE 4001',
    courseTitle: 'Software Engineering',
    projectTitle: 'Dynamic Cover Page Generator',
    submittedBy: {
      name: 'John Doe',
      id: '201812345',
      section: 'A',
      program: 'Computer Science & Engineering'
    },
    submittedTo: {
      name: 'Dr. Jane Smith',
      designation: 'Professor',
      department: 'Department of Computer Science',
      university: 'University of Excellence'
    },
    submissionDate: new Date().toLocaleDateString('en-GB'),
    styles: {
      fontSize: {
        title: 'text-4xl',
        heading: 'text-2xl',
        body: 'text-base'
      },
      fontFamily: 'font-serif',
      primaryColor: 'text-primary',
      accentColor: 'text-accent'
    }
  });

  const [visibility, setVisibility] = useState<VisibilityState>({
    universityName: true,
    logo: true,
    documentType: true,
    courseCode: true,
    courseTitle: true,
    projectTitle: true,
    submittedByName: true,
    submittedById: true,
    submittedBySection: true,
    submittedByProgram: true,
    submittedToName: true,
    submittedToDesignation: true,
    submittedToDepartment: true,
    submittedToUniversity: true,
    submissionDate: true,
  });

  // Event handlers section
  const updateCoverData = (path: string, value: any) => {
    setCoverData(prev => {
      const keys = path.split('.');
      const newData = { ...prev };
      let current: any = newData;
      
      for (let i = 0; i < keys.length - 1; i++) {
        current[keys[i]] = { ...current[keys[i]] };
        current = current[keys[i]];
      }
      
      current[keys[keys.length - 1]] = value;
      return newData;
    });
  };

  const updateVisibility = (key: keyof VisibilityState, value: boolean) => {
    setVisibility(prev => ({ ...prev, [key]: value }));
  };

  const handleTemplateChange = (templateId: string) => {
    const template = getTemplateById(templateId);
    if (template) {
      setSelectedTemplate(templateId);
      setCurrentTemplate(template);
      setCoverData(prev => ({
        ...prev,
        styles: {
          ...prev.styles,
          fontSize: template.styles.fontSize,
          fontFamily: template.styles.fontFamily,
          primaryColor: template.styles.primaryColor,
          accentColor: template.styles.accentColor
        }
      }));
    }
  };

  const handleLogoUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        updateCoverData('logoUrl', e.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleUniversityNameFontChange = (property: string, value: string) => {
    if (property === 'fontSize') setUniversityNameFontSize(value);
    if (property === 'fontFamily') setUniversityNameFontFamily(value);
    if (property === 'fontStyle') setUniversityNameFontStyle(value);
  };

  const handleProjectTitleFontChange = (property: string, value: string) => {
    if (property === 'fontSize') setProjectTitleFontSize(value);
    if (property === 'fontFamily') setProjectTitleFontFamily(value);
    if (property === 'fontStyle') setProjectTitleFontStyle(value);
  };

  // Download functionality section
  const downloadAsPDF = async () => {
    if (!previewRef.current) return;
    
    const canvas = await html2canvas(previewRef.current, {
      scale: 2,
      backgroundColor: '#ffffff',
      logging: false,
    });
    
    const imgData = canvas.toDataURL('image/png');
    const pdf = new jsPDF('p', 'mm', 'a4');
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (canvas.height * pdfWidth) / canvas.width;
    
    pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
    pdf.save(`${coverData.projectTitle.replace(/\s+/g, '_')}_cover.pdf`);
  };

  const downloadAsImage = async (format: 'png' | 'jpg' | 'webp') => {
    if (!previewRef.current) return;
    
    const canvas = await html2canvas(previewRef.current, {
      scale: 2,
      backgroundColor: '#ffffff',
      logging: false,
    });
    
    const link = document.createElement('a');
    link.download = `${coverData.projectTitle.replace(/\s+/g, '_')}_cover.${format}`;
    link.href = canvas.toDataURL(`image/${format}`, 0.9);
    link.click();
  };

  // Main render section
  return (
    <div className="min-h-screen bg-gradient-subtle p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header section */}
        <div className="mb-8 text-center">
          <h1 className="text-display font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">
            University Cover Page Generator
          </h1>
          <p className="text-muted-foreground text-lg">
            Create professional cover pages for your academic projects
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 h-screen">
          {/* Editor Panel - Left side with independent scrolling */}
          <div className="overflow-y-auto max-h-full pr-2 space-y-6">
            <TemplateSelector
              selectedTemplate={selectedTemplate}
              currentTemplate={currentTemplate}
              onTemplateChange={handleTemplateChange}
            />
            
            <BasicInformation
              coverData={coverData}
              visibility={visibility}
              logoInputRef={logoInputRef}
              onUpdateCoverData={updateCoverData}
              onUpdateVisibility={updateVisibility}
              onLogoUpload={handleLogoUpload}
              universityNameFontSize={universityNameFontSize}
              universityNameFontFamily={universityNameFontFamily}
              universityNameFontStyle={universityNameFontStyle}
              onUniversityNameFontChange={handleUniversityNameFontChange}
            />
            
            <CourseDetails
              coverData={coverData}
              visibility={visibility}
              onUpdateCoverData={updateCoverData}
              onUpdateVisibility={updateVisibility}
              projectTitleFontSize={projectTitleFontSize}
              projectTitleFontFamily={projectTitleFontFamily}
              projectTitleFontStyle={projectTitleFontStyle}
              onProjectTitleFontChange={handleProjectTitleFontChange}
              showSubmissionDateBorder={showSubmissionDateBorder}
              onSubmissionDateBorderChange={setShowSubmissionDateBorder}
            />
            
            <StudentInstructorSection
              coverData={coverData}
              visibility={visibility}
              onUpdateCoverData={updateCoverData}
              onUpdateVisibility={updateVisibility}
            />
            
            <DownloadOptions
              onDownloadPDF={downloadAsPDF}
              onDownloadImage={downloadAsImage}
            />
          </div>

          {/* Preview Panel - Right side with independent scrolling */}
          <div className="overflow-y-auto max-h-full">
            <CoverPreview
              previewRef={previewRef}
              coverData={coverData}
              visibility={visibility}
              universityNameFontSize={universityNameFontSize}
              universityNameFontFamily={universityNameFontFamily}
              universityNameFontStyle={universityNameFontStyle}
              projectTitleFontSize={projectTitleFontSize}
              projectTitleFontFamily={projectTitleFontFamily}
              projectTitleFontStyle={projectTitleFontStyle}
              showSubmissionDateBorder={showSubmissionDateBorder}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoverPage;