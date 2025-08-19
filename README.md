# 🎓 Uni Cover Craft - University Cover Page Generator

A professional, dynamic React application for generating university project cover pages with PDF and image export capabilities.

## ✨ Features

### 📝 Dynamic Content Management
- **University Information**: Editable university name and logo upload
- **Document Types**: Support for Project Reports, Assignments, Lab Reports, Thesis, and Dissertations
- **Course Details**: Dynamic course code, title, and project title fields
- **Student & Instructor Information**: Complete submission details with dual-column layout

### 🎨 Professional Design
- **Academic Color Scheme**: Professional blue and gold theme
- **Responsive Layout**: Works perfectly on desktop, tablet, and mobile devices
- **Real-time Preview**: Live preview of cover page as you edit
- **Clean Typography**: Professional serif fonts with proper hierarchy

### 📥 Export Options
- **PDF Export**: High-quality PDF generation using jsPDF
- **Image Formats**: Export as PNG, JPG, or WebP
- **High Resolution**: 2x scale for crisp, professional output
- **Automatic Naming**: Files named based on project title

### 🎯 Customization
- **Logo Sizing**: Adjustable logo dimensions
- **Dynamic Styling**: Professional design system with consistent theming
- **Form Validation**: Real-time input handling and updates

## 🚀 Getting Started

### Prerequisites
- Node.js (version 18 or later)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <YOUR_GIT_URL>
   cd uni-cover-craft
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:8080` to start creating cover pages!

## 🛠️ Technology Stack

- **Frontend Framework**: React 18 with TypeScript
- **Build Tool**: Vite for fast development and building
- **Styling**: Tailwind CSS with custom design system
- **UI Components**: Radix UI components with shadcn/ui
- **PDF Generation**: jsPDF for high-quality PDF export
- **Image Processing**: html2canvas for image export
- **Icons**: Lucide React for modern icons

## 📋 Usage Guide

1. **Basic Information**
   - Enter your university name
   - Upload or adjust the university logo
   - Set logo dimensions (width/height in pixels)
   - Select document type from dropdown

2. **Course & Project Details**
   - Fill in course code and title
   - Enter your project title
   - Set submission date

3. **Student Information**
   - Enter student name, ID, section, and program
   - Fill in instructor details (name, designation, department)

4. **Generate & Download**
   - Preview updates in real-time on the right panel
   - Click download buttons to export as PDF or images
   - Files are automatically named based on your project title

## 🎨 Design System

The application uses a professional academic design system with:
- **Primary Colors**: Deep academic blue (#1e40af)
- **Accent Colors**: Academic gold (#eab308)
- **Typography**: Serif fonts for professional appearance
- **Spacing**: Consistent spacing and layout grid system
- **Shadows**: Professional drop shadows and effects

## 📁 Project Structure

```
src/
├── components/
│   ├── ui/              # Reusable UI components
│   └── CoverPage.tsx    # Main cover page generator component
├── pages/
│   ├── Index.tsx        # Main page
│   └── NotFound.tsx     # 404 page
├── assets/
│   └── university-logo.png  # Default university logo
├── lib/
│   └── utils.ts         # Utility functions
└── styles/
    └── index.css        # Global styles and design system
```

## 📝 Component API

### CoverPageData Interface

```typescript
interface CoverPageData {
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
```

## 🎯 Key Features Explained

### Real-time Preview
The application provides a live preview of the cover page that updates as you type, allowing you to see exactly how your cover page will look before downloading.

### Professional Layout
The cover page follows academic standards with:
- University name and logo at the top
- Document type prominently displayed
- Course information in the center
- Two-column layout for student and instructor details
- Professional typography hierarchy

### Export Quality
- **PDF Export**: Vector-based output for perfect print quality
- **Image Export**: High-resolution raster images for digital use
- **Automatic Scaling**: 2x resolution for crisp output on all devices

## 🔧 Customization

### Modifying the Design System
Edit `src/index.css` to customize:
- Color schemes
- Font families
- Spacing and sizing
- Shadows and effects

### Adding New Document Types
Update the Select component in `CoverPage.tsx`:
```typescript
<SelectItem value="New Type">New Type</SelectItem>
```

## 📜 License

This project is built with React, Vite, and Tailwind CSS. All components are MIT licensed.

## 🙏 Acknowledgments

- Built with modern React patterns and TypeScript
- UI components powered by Radix UI and shadcn/ui
- Professional design inspired by academic document standards
- Icons provided by Lucide React

---

**Start creating professional cover pages for your university projects today!** 🎓