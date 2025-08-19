import React, { useState, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Download, FileImage, Camera } from 'lucide-react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import universityLogo from '@/assets/university-logo.png';

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

const CoverPage: React.FC = () => {
  const previewRef = useRef<HTMLDivElement>(null);
  const logoInputRef = useRef<HTMLInputElement>(null);
  
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
            <Card className="shadow-professional">
              <CardContent className="p-6">
                <h2 className="text-heading font-semibold text-primary mb-4">Basic Information</h2>
                
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="universityName" className="text-sm font-medium">University Name</Label>
                    <Input
                      id="universityName"
                      value={coverData.universityName}
                      onChange={(e) => updateCoverData('universityName', e.target.value)}
                      className="mt-1"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="logoWidth" className="text-sm font-medium">Logo Width (px)</Label>
                      <Input
                        id="logoWidth"
                        type="number"
                        value={coverData.logoWidth}
                        onChange={(e) => updateCoverData('logoWidth', parseInt(e.target.value) || 120)}
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="logoHeight" className="text-sm font-medium">Logo Height (px)</Label>
                      <Input
                        id="logoHeight"
                        type="number"
                        value={coverData.logoHeight}
                        onChange={(e) => updateCoverData('logoHeight', parseInt(e.target.value) || 120)}
                        className="mt-1"
                      />
                    </div>
                  </div>

                  <div>
                    <Label className="text-sm font-medium">University Logo</Label>
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

                  <div>
                    <Label htmlFor="documentType" className="text-sm font-medium">Document Type</Label>
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
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-professional">
              <CardContent className="p-6">
                <h2 className="text-heading font-semibold text-primary mb-4">Course & Project Details</h2>
                
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="courseCode" className="text-sm font-medium">Course Code</Label>
                    <Input
                      id="courseCode"
                      value={coverData.courseCode}
                      onChange={(e) => updateCoverData('courseCode', e.target.value)}
                      className="mt-1"
                    />
                  </div>

                  <div>
                    <Label htmlFor="courseTitle" className="text-sm font-medium">Course Title</Label>
                    <Input
                      id="courseTitle"
                      value={coverData.courseTitle}
                      onChange={(e) => updateCoverData('courseTitle', e.target.value)}
                      className="mt-1"
                    />
                  </div>

                  <div>
                    <Label htmlFor="projectTitle" className="text-sm font-medium">Project Title</Label>
                    <Input
                      id="projectTitle"
                      value={coverData.projectTitle}
                      onChange={(e) => updateCoverData('projectTitle', e.target.value)}
                      className="mt-1"
                    />
                  </div>

                  <div>
                    <Label htmlFor="submissionDate" className="text-sm font-medium">Submission Date</Label>
                    <Input
                      id="submissionDate"
                      value={coverData.submissionDate}
                      onChange={(e) => updateCoverData('submissionDate', e.target.value)}
                      className="mt-1"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-professional">
              <CardContent className="p-6">
                <h2 className="text-heading font-semibold text-primary mb-4">Student & Instructor Information</h2>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold text-accent mb-3">Submitted By</h3>
                    <div className="space-y-3">
                      <div>
                        <Label className="text-xs font-medium text-muted-foreground">Name</Label>
                        <Input
                          value={coverData.submittedBy.name}
                          onChange={(e) => updateCoverData('submittedBy.name', e.target.value)}
                          className="mt-1"
                        />
                      </div>
                      <div>
                        <Label className="text-xs font-medium text-muted-foreground">Student ID</Label>
                        <Input
                          value={coverData.submittedBy.id}
                          onChange={(e) => updateCoverData('submittedBy.id', e.target.value)}
                          className="mt-1"
                        />
                      </div>
                      <div>
                        <Label className="text-xs font-medium text-muted-foreground">Section</Label>
                        <Input
                          value={coverData.submittedBy.section}
                          onChange={(e) => updateCoverData('submittedBy.section', e.target.value)}
                          className="mt-1"
                        />
                      </div>
                      <div>
                        <Label className="text-xs font-medium text-muted-foreground">Program</Label>
                        <Input
                          value={coverData.submittedBy.program}
                          onChange={(e) => updateCoverData('submittedBy.program', e.target.value)}
                          className="mt-1"
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="font-semibold text-accent mb-3">Submitted To</h3>
                    <div className="space-y-3">
                      <div>
                        <Label className="text-xs font-medium text-muted-foreground">Name</Label>
                        <Input
                          value={coverData.submittedTo.name}
                          onChange={(e) => updateCoverData('submittedTo.name', e.target.value)}
                          className="mt-1"
                        />
                      </div>
                      <div>
                        <Label className="text-xs font-medium text-muted-foreground">Designation</Label>
                        <Input
                          value={coverData.submittedTo.designation}
                          onChange={(e) => updateCoverData('submittedTo.designation', e.target.value)}
                          className="mt-1"
                        />
                      </div>
                      <div>
                        <Label className="text-xs font-medium text-muted-foreground">Department</Label>
                        <Input
                          value={coverData.submittedTo.department}
                          onChange={(e) => updateCoverData('submittedTo.department', e.target.value)}
                          className="mt-1"
                        />
                      </div>
                      <div>
                        <Label className="text-xs font-medium text-muted-foreground">University</Label>
                        <Input
                          value={coverData.submittedTo.university}
                          onChange={(e) => updateCoverData('submittedTo.university', e.target.value)}
                          className="mt-1"
                        />
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
                        <h1 className={`${coverData.styles.fontSize.title} font-bold ${coverData.styles.primaryColor} tracking-wide`}>
                          {coverData.universityName}
                        </h1>
                        
                        {coverData.logoUrl && (
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

                      <div className="border-b-2 border-primary/20 pb-4">
                        <h2 className={`${coverData.styles.fontSize.heading} font-semibold ${coverData.styles.accentColor} uppercase tracking-wider`}>
                          {coverData.documentType}
                        </h2>
                      </div>
                    </div>

                    {/* Middle Section */}
                    <div className="space-y-8 flex-1 flex flex-col justify-center">
                      <div className="text-center space-y-4">
                        <div>
                          <p className={`${coverData.styles.fontSize.body} text-muted-foreground font-medium`}>
                            Course Code: <span className="text-foreground font-semibold">{coverData.courseCode}</span>
                          </p>
                          <p className={`${coverData.styles.fontSize.body} text-muted-foreground font-medium mt-1`}>
                            Course Title: <span className="text-foreground font-semibold">{coverData.courseTitle}</span>
                          </p>
                        </div>
                        
                        <div className="py-6">
                          <h3 className={`${coverData.styles.fontSize.heading} font-bold ${coverData.styles.primaryColor} leading-tight`}>
                            {coverData.projectTitle}
                          </h3>
                        </div>
                      </div>

                      <Separator className="my-8" />

                      {/* Two-column layout for submission info */}
                      <div className="grid grid-cols-2 gap-8">
                        <div className="text-left">
                          <h4 className={`${coverData.styles.fontSize.body} font-bold ${coverData.styles.accentColor} mb-3 pb-1 border-b border-primary/30`}>
                            Submitted By:
                          </h4>
                          <div className="space-y-1">
                            <p className={`${coverData.styles.fontSize.body} font-semibold text-foreground`}>
                              {coverData.submittedBy.name}
                            </p>
                            <p className="text-sm text-muted-foreground">
                              ID: {coverData.submittedBy.id}
                            </p>
                            <p className="text-sm text-muted-foreground">
                              Section: {coverData.submittedBy.section}
                            </p>
                            <p className="text-sm text-muted-foreground">
                              {coverData.submittedBy.program}
                            </p>
                          </div>
                        </div>

                        <div className="text-left">
                          <h4 className={`${coverData.styles.fontSize.body} font-bold ${coverData.styles.accentColor} mb-3 pb-1 border-b border-primary/30`}>
                            Submitted To:
                          </h4>
                          <div className="space-y-1">
                            <p className={`${coverData.styles.fontSize.body} font-semibold text-foreground`}>
                              {coverData.submittedTo.name}
                            </p>
                            <p className="text-sm text-muted-foreground">
                              {coverData.submittedTo.designation}
                            </p>
                            <p className="text-sm text-muted-foreground">
                              {coverData.submittedTo.department}
                            </p>
                            <p className="text-sm text-muted-foreground">
                              {coverData.submittedTo.university}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Footer Section */}
                    <div className="text-center pt-8 border-t border-primary/20">
                      <p className={`${coverData.styles.fontSize.body} font-semibold ${coverData.styles.primaryColor}`}>
                        Submission Date: {coverData.submissionDate}
                      </p>
                    </div>
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