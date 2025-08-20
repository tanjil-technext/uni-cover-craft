import React, { useState, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Checkbox } from '@/components/ui/checkbox';
import { Download, FileImage, Camera, Palette } from 'lucide-react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import universityLogo from '@/assets/university-logo.png';
import { designTemplates, getTemplateById, type DesignTemplate } from './DesignTemplates';

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
  const previewRef = useRef<HTMLDivElement>(null);
  const logoInputRef = useRef<HTMLInputElement>(null);
  
  const [selectedTemplate, setSelectedTemplate] = useState<string>('classic-1');
  const [currentTemplate, setCurrentTemplate] = useState<DesignTemplate>(designTemplates[0]);
  
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

  return (
    <div className="min-h-screen bg-gradient-subtle p-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8 text-center">
          <h1 className="text-display font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">
            University Cover Page Generator
          </h1>
          <p className="text-muted-foreground text-lg">
            Create professional cover pages for your academic projects
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Editor Panel */}
          <div className="space-y-6">
            {/* Template Selection */}
            <Card className="shadow-professional">
              <CardContent className="p-6">
                <h2 className="text-heading font-semibold text-primary mb-4 flex items-center gap-2">
                  <Palette className="w-5 h-5" />
                  Design Templates
                </h2>
                
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="template-select" className="text-sm font-medium text-foreground">Choose Template</Label>
                    <Select value={selectedTemplate} onValueChange={handleTemplateChange}>
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

            <Card className="shadow-professional">
              <CardContent className="p-6">
                <h2 className="text-heading font-semibold text-primary mb-4">Basic Information</h2>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="flex-1">
                      <Label htmlFor="universityName" className="text-sm font-medium text-foreground">University Name</Label>
                      <Input
                        id="universityName"
                        value={coverData.universityName}
                        onChange={(e) => updateCoverData('universityName', e.target.value)}
                        className="mt-1"
                      />
                    </div>
                    <div className="flex items-center space-x-2 mt-6">
                      <Checkbox
                        id="show-university"
                        checked={visibility.universityName}
                        onCheckedChange={(checked) => updateVisibility('universityName', checked as boolean)}
                      />
                      <Label htmlFor="show-university" className="text-sm">Show</Label>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="logoWidth" className="text-sm font-medium text-foreground">Logo Width (px)</Label>
                      <Input
                        id="logoWidth"
                        type="number"
                        value={coverData.logoWidth}
                        onChange={(e) => updateCoverData('logoWidth', parseInt(e.target.value) || 120)}
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="logoHeight" className="text-sm font-medium text-foreground">Logo Height (px)</Label>
                      <Input
                        id="logoHeight"
                        type="number"
                        value={coverData.logoHeight}
                        onChange={(e) => updateCoverData('logoHeight', parseInt(e.target.value) || 120)}
                        className="mt-1"
                      />
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="flex-1">
                      <Label className="text-sm font-medium text-foreground">University Logo</Label>
                      <div className="mt-1 flex gap-2">
                        <Input
                          ref={logoInputRef}
                          type="file"
                          accept="image/*"
                          onChange={handleLogoUpload}
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
                        onCheckedChange={(checked) => updateVisibility('logo', checked as boolean)}
                      />
                      <Label htmlFor="show-logo" className="text-sm">Show</Label>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="flex-1">
                      <Label htmlFor="documentType" className="text-sm font-medium text-foreground">Document Type</Label>
                      <Select value={coverData.documentType} onValueChange={(value) => updateCoverData('documentType', value)}>
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
                        onCheckedChange={(checked) => updateVisibility('documentType', checked as boolean)}
                      />
                      <Label htmlFor="show-document-type" className="text-sm">Show</Label>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-professional">
              <CardContent className="p-6">
                <h2 className="text-heading font-semibold text-primary mb-4">Course & Project Details</h2>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="flex-1">
                      <Label htmlFor="courseCode" className="text-sm font-medium text-foreground">Course Code</Label>
                      <Input
                        id="courseCode"
                        value={coverData.courseCode}
                        onChange={(e) => updateCoverData('courseCode', e.target.value)}
                        className="mt-1"
                      />
                    </div>
                    <div className="flex items-center space-x-2 mt-6">
                      <Checkbox
                        id="show-course-code"
                        checked={visibility.courseCode}
                        onCheckedChange={(checked) => updateVisibility('courseCode', checked as boolean)}
                      />
                      <Label htmlFor="show-course-code" className="text-sm">Show</Label>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="flex-1">
                      <Label htmlFor="courseTitle" className="text-sm font-medium text-foreground">Course Title</Label>
                      <Input
                        id="courseTitle"
                        value={coverData.courseTitle}
                        onChange={(e) => updateCoverData('courseTitle', e.target.value)}
                        className="mt-1"
                      />
                    </div>
                    <div className="flex items-center space-x-2 mt-6">
                      <Checkbox
                        id="show-course-title"
                        checked={visibility.courseTitle}
                        onCheckedChange={(checked) => updateVisibility('courseTitle', checked as boolean)}
                      />
                      <Label htmlFor="show-course-title" className="text-sm">Show</Label>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="flex-1">
                      <Label htmlFor="projectTitle" className="text-sm font-medium text-foreground">Project Title</Label>
                      <Input
                        id="projectTitle"
                        value={coverData.projectTitle}
                        onChange={(e) => updateCoverData('projectTitle', e.target.value)}
                        className="mt-1"
                      />
                    </div>
                    <div className="flex items-center space-x-2 mt-6">
                      <Checkbox
                        id="show-project-title"
                        checked={visibility.projectTitle}
                        onCheckedChange={(checked) => updateVisibility('projectTitle', checked as boolean)}
                      />
                      <Label htmlFor="show-project-title" className="text-sm">Show</Label>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="flex-1">
                      <Label htmlFor="submissionDate" className="text-sm font-medium text-foreground">Submission Date</Label>
                      <Input
                        id="submissionDate"
                        value={coverData.submissionDate}
                        onChange={(e) => updateCoverData('submissionDate', e.target.value)}
                        className="mt-1"
                      />
                    </div>
                    <div className="flex items-center space-x-2 mt-6">
                      <Checkbox
                        id="show-submission-date"
                        checked={visibility.submissionDate}
                        onCheckedChange={(checked) => updateVisibility('submissionDate', checked as boolean)}
                      />
                      <Label htmlFor="show-submission-date" className="text-sm">Show</Label>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-professional">
              <CardContent className="p-6">
                <h2 className="text-heading font-semibold text-primary mb-4">Student & Instructor Information</h2>
                
                <div className="space-y-6">
                  {/* Student Information Section */}
                  <div className="border border-primary/20 rounded-lg p-4 bg-primary/5">
                    <h3 className="font-semibold text-primary mb-3 flex items-center gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      Student Information
                    </h3>
                    <div className="space-y-3">
                      <div className="flex items-center gap-2">
                        <div className="flex-1">
                          <Label className="text-xs font-medium text-foreground">Name</Label>
                          <Input
                            value={coverData.submittedBy.name}
                            onChange={(e) => updateCoverData('submittedBy.name', e.target.value)}
                            className="mt-1"
                          />
                        </div>
                        <div className="flex items-center space-x-1 mt-4">
                          <Checkbox
                            id="show-by-name"
                            checked={visibility.submittedByName}
                            onCheckedChange={(checked) => updateVisibility('submittedByName', checked as boolean)}
                          />
                          <Label htmlFor="show-by-name" className="text-xs">Show</Label>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="flex-1">
                          <Label className="text-xs font-medium text-foreground">Student ID</Label>
                          <Input
                            value={coverData.submittedBy.id}
                            onChange={(e) => updateCoverData('submittedBy.id', e.target.value)}
                            className="mt-1"
                          />
                        </div>
                        <div className="flex items-center space-x-1 mt-4">
                          <Checkbox
                            id="show-by-id"
                            checked={visibility.submittedById}
                            onCheckedChange={(checked) => updateVisibility('submittedById', checked as boolean)}
                          />
                          <Label htmlFor="show-by-id" className="text-xs">Show</Label>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="flex-1">
                          <Label className="text-xs font-medium text-foreground">Section</Label>
                          <Input
                            value={coverData.submittedBy.section}
                            onChange={(e) => updateCoverData('submittedBy.section', e.target.value)}
                            className="mt-1"
                          />
                        </div>
                        <div className="flex items-center space-x-1 mt-4">
                          <Checkbox
                            id="show-by-section"
                            checked={visibility.submittedBySection}
                            onCheckedChange={(checked) => updateVisibility('submittedBySection', checked as boolean)}
                          />
                          <Label htmlFor="show-by-section" className="text-xs">Show</Label>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="flex-1">
                          <Label className="text-xs font-medium text-foreground">Program</Label>
                          <Input
                            value={coverData.submittedBy.program}
                            onChange={(e) => updateCoverData('submittedBy.program', e.target.value)}
                            className="mt-1"
                          />
                        </div>
                        <div className="flex items-center space-x-1 mt-4">
                          <Checkbox
                            id="show-by-program"
                            checked={visibility.submittedByProgram}
                            onCheckedChange={(checked) => updateVisibility('submittedByProgram', checked as boolean)}
                          />
                          <Label htmlFor="show-by-program" className="text-xs">Show</Label>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Instructor Information Section */}
                  <div className="border border-accent/20 rounded-lg p-4 bg-accent/5">
                    <h3 className="font-semibold text-accent mb-3 flex items-center gap-2">
                      <div className="w-2 h-2 bg-accent rounded-full"></div>
                      Instructor Information
                    </h3>
                    <div className="space-y-3">
                      <div className="flex items-center gap-2">
                        <div className="flex-1">
                          <Label className="text-xs font-medium text-foreground">Name</Label>
                          <Input
                            value={coverData.submittedTo.name}
                            onChange={(e) => updateCoverData('submittedTo.name', e.target.value)}
                            className="mt-1"
                          />
                        </div>
                        <div className="flex items-center space-x-1 mt-4">
                          <Checkbox
                            id="show-to-name"
                            checked={visibility.submittedToName}
                            onCheckedChange={(checked) => updateVisibility('submittedToName', checked as boolean)}
                          />
                          <Label htmlFor="show-to-name" className="text-xs">Show</Label>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="flex-1">
                          <Label className="text-xs font-medium text-foreground">Designation</Label>
                          <Input
                            value={coverData.submittedTo.designation}
                            onChange={(e) => updateCoverData('submittedTo.designation', e.target.value)}
                            className="mt-1"
                          />
                        </div>
                        <div className="flex items-center space-x-1 mt-4">
                          <Checkbox
                            id="show-to-designation"
                            checked={visibility.submittedToDesignation}
                            onCheckedChange={(checked) => updateVisibility('submittedToDesignation', checked as boolean)}
                          />
                          <Label htmlFor="show-to-designation" className="text-xs">Show</Label>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="flex-1">
                          <Label className="text-xs font-medium text-foreground">Department</Label>
                          <Input
                            value={coverData.submittedTo.department}
                            onChange={(e) => updateCoverData('submittedTo.department', e.target.value)}
                            className="mt-1"
                          />
                        </div>
                        <div className="flex items-center space-x-1 mt-4">
                          <Checkbox
                            id="show-to-department"
                            checked={visibility.submittedToDepartment}
                            onCheckedChange={(checked) => updateVisibility('submittedToDepartment', checked as boolean)}
                          />
                          <Label htmlFor="show-to-department" className="text-xs">Show</Label>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="flex-1">
                          <Label className="text-xs font-medium text-foreground">University</Label>
                          <Input
                            value={coverData.submittedTo.university}
                            onChange={(e) => updateCoverData('submittedTo.university', e.target.value)}
                            className="mt-1"
                          />
                        </div>
                        <div className="flex items-center space-x-1 mt-4">
                          <Checkbox
                            id="show-to-university"
                            checked={visibility.submittedToUniversity}
                            onCheckedChange={(checked) => updateVisibility('submittedToUniversity', checked as boolean)}
                          />
                          <Label htmlFor="show-to-university" className="text-xs">Show</Label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Download Options */}
            <Card className="shadow-professional">
              <CardContent className="p-6">
                <h2 className="text-heading font-semibold text-primary mb-4">Download Options</h2>
                
                <div className="grid grid-cols-2 gap-3">
                  <Button 
                    onClick={downloadAsPDF}
                    className="bg-gradient-primary hover:opacity-90 transition-opacity"
                  >
                    <Download className="w-4 h-4 mr-2" />
                    Download PDF
                  </Button>
                  
                  <Button 
                    variant="outline"
                    onClick={() => downloadAsImage('png')}
                  >
                    <FileImage className="w-4 h-4 mr-2" />
                    Download PNG
                  </Button>
                  
                  <Button 
                    variant="outline"
                    onClick={() => downloadAsImage('jpg')}
                  >
                    <FileImage className="w-4 h-4 mr-2" />
                    Download JPG
                  </Button>
                  
                  <Button 
                    variant="outline"
                    onClick={() => downloadAsImage('webp')}
                  >
                    <FileImage className="w-4 h-4 mr-2" />
                    Download WebP
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Preview Panel */}
          <div className="lg:sticky lg:top-6">
            <Card className="shadow-professional">
              <CardContent className="p-2">
                <div className="aspect-[210/297] bg-white overflow-hidden">
                  <div 
                    ref={previewRef}
                    className={`w-full h-full p-12 ${coverData.styles.fontFamily} flex flex-col justify-between`}
                    style={{ minHeight: '842px' }} // A4 height in pixels at 72 DPI
                  >
                    {/* Header Section */}
                    <div className="text-center space-y-6">
                      <div>
                        {visibility.universityName && (
                          <h1 className={`${coverData.styles.fontSize.title} font-bold text-primary tracking-wide`}>
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
                            <h3 className={`${coverData.styles.fontSize.heading} font-bold text-primary leading-tight`}>
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
                          <h4 className={`${coverData.styles.fontSize.body} font-bold text-accent mb-3 pb-1 border-b border-primary/30`}>
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
                    {visibility.submissionDate && (
                      <div className="text-center pt-8 border-t border-primary/20">
                        <p className={`${coverData.styles.fontSize.body} font-semibold text-primary`}>
                          Submission Date: {coverData.submissionDate}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoverPage;