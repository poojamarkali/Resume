import React, { useState } from 'react';
import { 
  Printer, 
  Edit3, 
  Eye, 
  Copy, 
  RotateCcw, 
  Check, 
  ExternalLink,
  Code2,
  Plus,
  Trash2,
  Type,
  Phone,
  Mail,
  Github,
  Linkedin
} from 'lucide-react';

interface ExperienceItem {
  id: string;
  title: string;
  company: string;
  dates: string;
  location: string;
  bullets: string[];
}

interface ProjectItem {
  id: string;
  title: string;
  technologies: string;
  link?: string;
  dates: string;
  bullets: string[];
}

interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  dates: string;
  gpa: string;
  details: string;
}

interface SkillCategory {
  label: string;
  value: string;
}

interface CertificateItem {
  id: string;
  name: string;
  issuer: string;
  date: string;
}

export default function App() {
  // Candidate Contact Details
  const [candidateName, setCandidateName] = useState('Pooja Markali');
  const [phone, setPhone] = useState('9834456757');
  const [email, setEmail] = useState('markalipooja@gmail.com');
  const githubUrl = 'https://github.com/poojamarkali';
  const linkedinUrl = 'https://linkedin.com/in/pooja-markali-374307209';

  // Section 1: EXPERIENCE
  const [experienceList, setExperienceList] = useState<ExperienceItem[]>([
    {
      id: 'exp-1',
      title: 'Head of Department-Statistics',
      company: 'Maharaja Jivajirao Shinde Mahavidyalay (Rayat Shikshan Sanstha)',
      dates: '25/07/2019 – 31/03/2020',
      location: 'Shrigonda',
      bullets: [
        'Led and coordinated the activities of the Statistics Department.',
        'Planned and delivered Statistics lectures and practical sessions.',
        'Developed course materials, assessments, and academic activities.',
        'Guided students in statistical analysis, research methods, and interpretation of data.',
        'Supervised examinations, student projects, and departmental academic activities.',
        'Mentored students and collaborated with faculty to improve teaching and learning outcomes.'
      ]
    }
  ]);

  // Section 2: PROJECTS
  const [projectList, setProjectList] = useState<ProjectItem[]>([
    {
      id: 'proj-1',
      title: 'Telco Customer Churn Prediction',
      technologies: 'Machine Learning',
      link: 'https://github.com/poojamarkali',
      dates: '',
      bullets: [
        'Developed a customer churn prediction model using Random Forest Classifier and XGBoost.',
        'Performed data preprocessing, EDA, feature engineering, model training, and evaluation using accuracy, precision, recall, F1-score, and confusion matrix.',
        'Used Python, Pandas, NumPy, Matplotlib, Seaborn, and Scikit-learn.'
      ]
    }
  ]);

  // Section 3: EDUCATION
  const [educationList, setEducationList] = useState<EducationItem[]>([
    {
      id: 'edu-1',
      degree: 'M.Sc. in Statistics',
      institution: 'Savitribai Phule Pune University',
      dates: '2019',
      gpa: '',
      details: 'Relevant Areas: Statistical Analysis, Probability, Regression, Research Methods'
    },
    {
      id: 'edu-2',
      degree: 'B.Sc. in Statistics',
      institution: 'Savitribai Phule Pune University',
      dates: '2017',
      gpa: '',
      details: 'Relevant Areas: Statistics, Mathematics, Data Analysis'
    }
  ]);

  // Section 4: SKILLS
  const [skillsList, setSkillsList] = useState<SkillCategory[]>([
    { label: 'Languages', value: 'Python, SQL, Familiar with R' },
    { label: 'Technologies', value: 'Machine Learning, Generative AI, RAG, NLP, Data Analysis, Data Visualization' },
    { label: 'Tools', value: 'Git, GitHub, VS Code, Claude, ChatGPT, Google AI Studio, Jupyter Notebook' }
  ]);

  // Section 5: CERTIFICATIONS
  const [certificateList, setCertificateList] = useState<CertificateItem[]>([
    {
      id: 'cert-1',
      name: 'Diploma in Python',
      issuer: 'FirstBit Solutions',
      date: 'Aug-2021'
    },
    {
      id: 'cert-2',
      name: 'Applied Machine Learning Course',
      issuer: 'Applied Course',
      date: 'May-2023'
    },
    {
      id: 'cert-3',
      name: 'GEN-AI',
      issuer: 'AIs Solutions',
      date: '[Date Issued]'
    }
  ]);

  // Section 6: PROFESSIONAL SUMMARY
  const [professionalSummary, setProfessionalSummary] = useState(
    'Statistics professional with experience in statistical analysis, data interpretation, and academic leadership, transitioning into AI/ML and Data Science. Skilled in Python, SQL, Machine Learning, Generative AI, RAG, and data analysis, with hands-on experience building a Telco Customer Churn Prediction model using Random Forest and XGBoost. Strong analytical and problem-solving abilities with a foundation in statistics and practical machine learning.'
  );

  // App UI State
  const [isEditing, setIsEditing] = useState(false);
  const [fontStyle, setFontStyle] = useState<'serif' | 'sans'>('serif');
  const [copiedLatex, setCopiedLatex] = useState(false);
  const [showLatexModal, setShowLatexModal] = useState(false);

  // Print Handler
  const handlePrint = () => {
    window.print();
  };

  // Reset to Default Template
  const handleReset = () => {
    if (confirm('Are you sure you want to reset all resume contents to the default template placeholders?')) {
      setCandidateName('Pooja Markali');
      setPhone('9834456757');
      setEmail('markalipooja@gmail.com');
      setExperienceList([
        {
          id: 'exp-1',
          title: 'Head of Department-Statistics',
          company: 'Maharaja Jivajirao Shinde Mahavidyalay (Rayat Shikshan Sanstha)',
          dates: '25/07/2019 – 31/03/2020',
          location: 'Shrigonda',
          bullets: [
            'Led and coordinated the activities of the Statistics Department.',
            'Planned and delivered Statistics lectures and practical sessions.',
            'Developed course materials, assessments, and academic activities.',
            'Guided students in statistical analysis, research methods, and interpretation of data.',
            'Supervised examinations, student projects, and departmental academic activities.',
            'Mentored students and collaborated with faculty to improve teaching and learning outcomes.'
          ]
        }
      ]);
      setProjectList([
        {
          id: 'proj-1',
          title: 'Telco Customer Churn Prediction',
          technologies: 'Machine Learning',
          link: 'https://github.com/poojamarkali',
          dates: '',
          bullets: [
            'Developed a customer churn prediction model using Random Forest Classifier and XGBoost.',
            'Performed data preprocessing, EDA, feature engineering, model training, and evaluation using accuracy, precision, recall, F1-score, and confusion matrix.',
            'Used Python, Pandas, NumPy, Matplotlib, Seaborn, and Scikit-learn.'
          ]
        }
      ]);
      setEducationList([
        {
          id: 'edu-1',
          degree: 'M.Sc. in Statistics',
          institution: 'Savitribai Phule Pune University',
          dates: '2019',
          gpa: '',
          details: 'Relevant Areas: Statistical Analysis, Probability, Regression, Research Methods'
        },
        {
          id: 'edu-2',
          degree: 'B.Sc. in Statistics',
          institution: 'Savitribai Phule Pune University',
          dates: '2017',
          gpa: '',
          details: 'Relevant Areas: Statistics, Mathematics, Data Analysis'
        }
      ]);
      setSkillsList([
        { label: 'Languages', value: 'Python, SQL, Familiar with R' },
        { label: 'Technologies', value: 'Machine Learning, Generative AI, RAG, NLP, Data Analysis, Data Visualization' },
        { label: 'Tools', value: 'Git, GitHub, VS Code, Claude, ChatGPT, Google AI Studio, Jupyter Notebook' }
      ]);
      setCertificateList([
        {
          id: 'cert-1',
          name: 'Diploma in Python',
          issuer: 'FirstBit Solutions',
          date: 'Aug-2021'
        },
        {
          id: 'cert-2',
          name: 'Applied Machine Learning Course',
          issuer: 'Applied Course',
          date: 'May-2023'
        },
        {
          id: 'cert-3',
          name: 'GEN-AI',
          issuer: 'AIs Solutions',
          date: '[Date Issued]'
        }
      ]);
      setProfessionalSummary(
        'Statistics professional with experience in statistical analysis, data interpretation, and academic leadership, transitioning into AI/ML and Data Science. Skilled in Python, SQL, Machine Learning, Generative AI, RAG, and data analysis, with hands-on experience building a Telco Customer Churn Prediction model using Random Forest and XGBoost. Strong analytical and problem-solving abilities with a foundation in statistics and practical machine learning.'
      );
    }
  };

  // Generate valid Overleaf LaTeX string
  const generateLatex = () => {
    let latex = `\\documentclass[letterpaper,11pt]{article}

\\usepackage{latexsym}
\\usepackage[empty]{fullpage}
\\usepackage{titlesec}
\\usepackage{marvosym}
\\usepackage[usenames,dvipsnames]{color}
\\usepackage{verbatim}
\\usepackage{enumitem}
\\usepackage[hidelinks]{hyperref}
\\usepackage{fancyhdr}
\\usepackage[english]{babel}
\\usepackage{tabularx}

\\pagestyle{fancy}
\\fancyhf{} 
\\fancyfoot{}
\\renewcommand{\\headrulewidth}{0pt}
\\renewcommand{\\footrulewidth}{0pt}

\\addtolength{\\oddsidemargin}{-0.5in}
\\addtolength{\\evensidemargin}{-0.5in}
\\addtolength{\\textwidth}{1in}
\\addtolength{\\topmargin}{-.5in}
\\addtolength{\\textheight}{1.0in}

\\urlstyle{same}

\\raggedbottom
\\raggedright
\\setlength{\\tabcolsep}{0in}

\\titleformat{\\section}{
  \\vspace{-4pt}\\scshape\\raggedright\\large
}{}{0em}{}[\\color{black}\\vline height 0.5pt width \\linewidth\\vspace{-5pt}]

\\newcommand{\\resumeItem}[1]{
  \\item\\small{
    {#1 \\vspace{-2pt}}
  }
}

\\newcommand{\\resumeSubheading}[4]{
  \\vspace{-1pt}\\item
    \\begin{tabular*}{0.97\\textwidth}[t]{l@{\\extracolsep{\\fill}}r}
      \\textbf{#1} & #2 \\\\
      \\textit{\\small#3} & \\textit{\\small #4} \\\\
    \\end{tabular*}\\vspace{-5pt}
}

\\newcommand{\\resumeProjectHeading}[2]{
    \\vspace{-1pt}\\item
    \\begin{tabular*}{0.97\\textwidth}{l@{\\extracolsep{\\fill}}r}
      \\small#1 & #2 \\\\
    \\end{tabular*}\\vspace{-5pt}
}

\\renewcommand\\labelitemii{$\\vcenter{\\hbox{\\tiny$\\bullet$}}$}

\\newcommand{\\resumeSubHeadingListStart}{\\begin{itemize}[leftmargin=0.15in, label={}]}
\\newcommand{\\resumeSubHeadingListEnd}{\\end{itemize}}
\\newcommand{\\resumeItemListStart}{\\begin{itemize}}
\\newcommand{\\resumeItemListEnd}{\\end{itemize}\\vspace{-5pt}}

\\begin{document}

%----------HEADING----------
\\begin{center}
    \\textbf{\\Huge \\scshape ${candidateName}} \\\\ \\vspace{4pt}
    \\small ${phone} $|$ \\href{mailto:${email}}{${email}} $|$ 
    \\href{${githubUrl}}{GitHub} $|$
    \\href{${linkedinUrl}}{LinkedIn}
\\end{center}

%-----------1. EXPERIENCE-----------
\\section{Experience}
  \\resumeSubHeadingListStart
`;

    experienceList.forEach(exp => {
      latex += `    \\resumeSubheading
      {${exp.title}}{${exp.dates}}
      {${exp.company}}{${exp.location}}
      \\resumeItemListStart
`;
      exp.bullets.forEach(bullet => {
        latex += `        \\resumeItem{${bullet}}\n`;
      });
      latex += `      \\resumeItemListEnd\n\n`;
    });

    latex += `  \\resumeSubHeadingListEnd

%-----------2. PROJECTS-----------
\\section{Projects}
    \\resumeSubHeadingListStart
`;

    projectList.forEach(proj => {
      let techAndLink = proj.technologies ? `\\emph{${proj.technologies}}` : '';
      if (proj.link) {
        techAndLink += techAndLink ? ` $|$ \\href{${proj.link}}{GitHub}` : `\\href{${proj.link}}{GitHub}`;
      }
      const headerTech = techAndLink ? ` $|$ ${techAndLink}` : '';
      latex += `      \\resumeProjectHeading
          {\\textbf{${proj.title}}${headerTech}}{${proj.dates}}
          \\resumeItemListStart
`;
      proj.bullets.forEach(bullet => {
        latex += `            \\resumeItem{${bullet}}\n`;
      });
      latex += `          \\resumeItemListEnd\n\n`;
    });

    latex += `    \\resumeSubHeadingListEnd

%-----------3. EDUCATION-----------
\\section{Education}
  \\resumeSubHeadingListStart
`;

    educationList.forEach(edu => {
      latex += `    \\resumeSubheading
      {${edu.degree}}{${edu.dates}}
      {${edu.institution}}{${edu.gpa}}
`;
      if (edu.details) {
        latex += `      \\resumeItemListStart\n        \\resumeItem{${edu.details}}\n      \\resumeItemListEnd\n`;
      }
    });

    latex += `  \\resumeSubHeadingListEnd

%-----------4. SKILLS-----------
\\section{Skills}
 \\begin{itemize}[leftmargin=0.15in, label={}]
    \\small{\\item{
`;

    skillsList.forEach(skill => {
      latex += `     \\textbf{${skill.label}}{: ${skill.value}} \\\\\n`;
    });

    latex += `    }}
 \\end{itemize}

%-----------5. CERTIFICATIONS-----------
\\section{Certifications}
  \\begin{itemize}[leftmargin=0.15in, label={}]
    \\small{\\item{
`;

    certificateList.forEach(cert => {
      latex += `      \\emph{${cert.name}} -- ${cert.issuer} \\hfill {\\small ${cert.date}} \\\\\n`;
    });

    latex += `    }}
  \\end{itemize}

%-----------6. PROFESSIONAL SUMMARY-----------
\\section{Professional Summary}
  \\begin{itemize}[leftmargin=0.15in, label={}]
    \\small{\\item{
      ${professionalSummary}
    }}
  \\end{itemize}

\\end{document}
`;
    return latex;
  };

  const handleCopyLatex = () => {
    navigator.clipboard.writeText(generateLatex());
    setCopiedLatex(true);
    setTimeout(() => setCopiedLatex(false), 2000);
  };

  // Helper functions for adding/removing array items
  const addExperience = () => {
    setExperienceList([
      ...experienceList,
      {
        id: `exp-${Date.now()}`,
        title: '[Job Title]',
        company: '[Company Name]',
        dates: '[Dates]',
        location: '[Location]',
        bullets: ['[Bullet Point description of key achievements]']
      }
    ]);
  };

  const removeExperience = (id: string) => {
    setExperienceList(experienceList.filter(e => e.id !== id));
  };

  const addExpBullet = (expId: string) => {
    setExperienceList(
      experienceList.map(exp =>
        exp.id === expId ? { ...exp, bullets: [...exp.bullets, '[New bullet point description]'] } : exp
      )
    );
  };

  const removeExpBullet = (expId: string, index: number) => {
    setExperienceList(
      experienceList.map(exp =>
        exp.id === expId ? { ...exp, bullets: exp.bullets.filter((_, i) => i !== index) } : exp
      )
    );
  };

  const addProject = () => {
    setProjectList([
      ...projectList,
      {
        id: `proj-${Date.now()}`,
        title: '[Project Title]',
        technologies: '[Technologies]',
        dates: '[Dates]',
        bullets: ['[Project contribution or key metric]']
      }
    ]);
  };

  const removeProject = (id: string) => {
    setProjectList(projectList.filter(p => p.id !== id));
  };

  const addProjBullet = (projId: string) => {
    setProjectList(
      projectList.map(proj =>
        proj.id === projId ? { ...proj, bullets: [...proj.bullets, '[New project detail bullet]'] } : proj
      )
    );
  };

  const removeProjBullet = (projId: string, index: number) => {
    setProjectList(
      projectList.map(proj =>
        proj.id === projId ? { ...proj, bullets: proj.bullets.filter((_, i) => i !== index) } : proj
      )
    );
  };

  const addEducation = () => {
    setEducationList([
      ...educationList,
      {
        id: `edu-${Date.now()}`,
        degree: '[Degree Placeholder]',
        institution: '[University Name Placeholder]',
        dates: '[Graduation Date]',
        gpa: '',
        details: 'Relevant Areas: [Relevant Areas / Coursework Placeholder]'
      }
    ]);
  };

  const removeEducation = (id: string) => {
    setEducationList(educationList.filter(e => e.id !== id));
  };

  const addCertificate = () => {
    setCertificateList([
      ...certificateList,
      {
        id: `cert-${Date.now()}`,
        name: '[Certification Name]',
        issuer: '[Organization]',
        date: '[Date]'
      }
    ]);
  };

  const removeCertificate = (id: string) => {
    setCertificateList(certificateList.filter(c => c.id !== id));
  };

  return (
    <div className="min-h-screen bg-slate-100 flex flex-col items-center py-6 px-4 selection:bg-slate-300">
      
      {/* Top Action & Control Bar (Hidden when printing) */}
      <header className="no-print w-full max-w-[850px] bg-white border border-slate-200 rounded-lg shadow-sm p-4 mb-6 flex flex-wrap items-center justify-between gap-4">
        <div>
          <h1 className="text-xl font-bold text-slate-900 tracking-tight flex items-center gap-2">
            Pooja Markali <span className="text-xs font-normal px-2 py-0.5 bg-slate-100 text-slate-700 border border-slate-200 rounded">Overleaf Resume Template</span>
          </h1>
          <p className="text-xs text-slate-500 mt-0.5">
            Classic LaTeX layout • PDF Ready • Live Edit
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          {/* Toggle Edit / Preview */}
          <button
            onClick={() => setIsEditing(!isEditing)}
            className={`inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded transition-colors ${
              isEditing 
                ? 'bg-amber-600 text-white hover:bg-amber-700' 
                : 'bg-slate-800 text-white hover:bg-slate-900'
            }`}
            title="Toggle inline edit controls"
          >
            {isEditing ? <Eye className="w-3.5 h-3.5" /> : <Edit3 className="w-3.5 h-3.5" />}
            {isEditing ? 'Preview Mode' : 'Edit Mode'}
          </button>

          {/* Toggle Font */}
          <button
            onClick={() => setFontStyle(fontStyle === 'serif' ? 'sans' : 'serif')}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium bg-slate-100 text-slate-700 hover:bg-slate-200 border border-slate-200 rounded transition-colors"
            title="Switch font family (Serif vs Sans)"
          >
            <Type className="w-3.5 h-3.5" />
            Font: {fontStyle === 'serif' ? 'LaTeX Serif' : 'Clean Sans'}
          </button>

          {/* View / Copy LaTeX Code */}
          <button
            onClick={() => setShowLatexModal(true)}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium bg-slate-100 text-slate-700 hover:bg-slate-200 border border-slate-200 rounded transition-colors"
            title="Get LaTeX code for Overleaf"
          >
            <Code2 className="w-3.5 h-3.5" />
            LaTeX Code
          </button>

          {/* Print / Save PDF */}
          <button
            onClick={handlePrint}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-medium bg-emerald-700 text-white hover:bg-emerald-800 rounded transition-colors shadow-sm"
            title="Print or Save as PDF"
          >
            <Printer className="w-3.5 h-3.5" />
            Print / Save PDF
          </button>

          {/* Reset button */}
          <button
            onClick={handleReset}
            className="p-1.5 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded transition-colors"
            title="Reset to initial template placeholders"
          >
            <RotateCcw className="w-3.5 h-3.5" />
          </button>
        </div>
      </header>

      {/* Main Resume Paper Sheet */}
      <main 
        className={`resume-paper w-full max-w-[850px] bg-white text-[#111111] shadow-xl rounded-none p-10 md:p-12 border-t-[6px] border-black transition-all ${
          fontStyle === 'serif' ? 'font-serif-latex' : 'font-sans-clean'
        }`}
        style={{ minHeight: '11in' }}
      >
        {/* CANDIDATE HEADER */}
        <header className="text-center mb-5">
          {isEditing ? (
            <input
              type="text"
              value={candidateName}
              onChange={(e) => setCandidateName(e.target.value)}
              className="text-3xl font-bold tracking-tight text-center w-full border-b border-dashed border-slate-300 focus:outline-none focus:border-black uppercase mb-1"
            />
          ) : (
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight uppercase mb-1 text-black">
              {candidateName}
            </h1>
          )}

          {/* Contact Line: Phone | Email | GitHub | LinkedIn */}
          <div className="flex flex-wrap justify-center items-center gap-x-2 gap-y-1 text-[13px] text-gray-800 tracking-normal">
            {/* Phone */}
            {isEditing ? (
              <div className="inline-flex items-center gap-1">
                <Phone className="w-3.5 h-3.5 text-slate-700 shrink-0" />
                <input
                  type="text"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="border-b border-dashed border-slate-300 text-center text-[13px] focus:outline-none px-1"
                />
              </div>
            ) : (
              <span className="inline-flex items-center gap-1">
                <Phone className="w-3.5 h-3.5 text-slate-800 shrink-0" />
                <span>{phone}</span>
              </span>
            )}

            <span className="text-gray-400 select-none">|</span>

            {/* Email */}
            {isEditing ? (
              <div className="inline-flex items-center gap-1">
                <Mail className="w-3.5 h-3.5 text-slate-700 shrink-0" />
                <input
                  type="text"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="border-b border-dashed border-slate-300 text-center text-[13px] focus:outline-none px-1"
                />
              </div>
            ) : (
              <a href={`mailto:${email}`} className="text-gray-900 hover:underline inline-flex items-center gap-1">
                <Mail className="w-3.5 h-3.5 text-slate-800 shrink-0" />
                <span>{email}</span>
              </a>
            )}

            <span className="text-gray-400 select-none">|</span>

            {/* GitHub - Hyperlink */}
            <a 
              href={githubUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-900 hover:underline font-medium inline-flex items-center gap-1"
            >
              <Github className="w-3.5 h-3.5 shrink-0" />
              <span>GitHub</span>
              <ExternalLink className="w-2.5 h-2.5 opacity-60 no-print" />
            </a>

            <span className="text-gray-400 select-none">|</span>

            {/* LinkedIn - Hyperlink */}
            <a 
              href={`https://${linkedinUrl.replace('https://', '')}`} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-900 hover:underline font-medium inline-flex items-center gap-1"
            >
              <Linkedin className="w-3.5 h-3.5 shrink-0" />
              <span>LinkedIn</span>
              <ExternalLink className="w-2.5 h-2.5 opacity-60 no-print" />
            </a>
          </div>
        </header>

        {/* SECTION 1: EXPERIENCE */}
        <section className="mb-5">
          <div className="flex justify-between items-center border-b border-black pb-0.5 mb-2.5">
            <h2 className="text-[15px] font-bold tracking-wide uppercase text-black">
              EXPERIENCE
            </h2>
            {isEditing && (
              <button
                onClick={addExperience}
                className="no-print text-xs text-emerald-700 hover:text-emerald-800 font-sans font-medium inline-flex items-center gap-1"
              >
                <Plus className="w-3 h-3" /> Add Role
              </button>
            )}
          </div>

          <div className="space-y-3">
            {experienceList.map((exp) => (
              <div key={exp.id} className="group relative">
                {isEditing && (
                  <button
                    onClick={() => removeExperience(exp.id)}
                    className="no-print absolute -left-7 top-0 text-red-500 hover:text-red-700 p-0.5"
                    title="Remove Role"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                )}

                <div className="flex justify-between items-baseline text-[13.5px]">
                  {isEditing ? (
                    <input
                      type="text"
                      value={exp.title}
                      onChange={(e) =>
                        setExperienceList(
                          experienceList.map((item) =>
                            item.id === exp.id ? { ...item, title: e.target.value } : item
                          )
                        )
                      }
                      className="font-bold border-b border-dashed border-slate-300 focus:outline-none w-1/2"
                    />
                  ) : (
                    <span className="font-bold text-black">{exp.title}</span>
                  )}

                  {isEditing ? (
                    <input
                      type="text"
                      value={exp.dates}
                      onChange={(e) =>
                        setExperienceList(
                          experienceList.map((item) =>
                            item.id === exp.id ? { ...item, dates: e.target.value } : item
                          )
                        )
                      }
                      className="text-[12.5px] text-right border-b border-dashed border-slate-300 focus:outline-none"
                    />
                  ) : (
                    <span className="text-[12.5px] text-gray-800">{exp.dates}</span>
                  )}
                </div>

                <div className="flex justify-between italic text-[12.5px] text-gray-700 mb-1">
                  {isEditing ? (
                    <input
                      type="text"
                      value={exp.company}
                      onChange={(e) =>
                        setExperienceList(
                          experienceList.map((item) =>
                            item.id === exp.id ? { ...item, company: e.target.value } : item
                          )
                        )
                      }
                      className="border-b border-dashed border-slate-300 focus:outline-none w-1/2"
                    />
                  ) : (
                    <span>{exp.company}</span>
                  )}

                  {isEditing ? (
                    <input
                      type="text"
                      value={exp.location}
                      onChange={(e) =>
                        setExperienceList(
                          experienceList.map((item) =>
                            item.id === exp.id ? { ...item, location: e.target.value } : item
                          )
                        )
                      }
                      className="text-right border-b border-dashed border-slate-300 focus:outline-none"
                    />
                  ) : (
                    <span>{exp.location}</span>
                  )}
                </div>

                <ul className="list-disc ml-5 text-[12.5px] leading-tight space-y-1 text-gray-900">
                  {exp.bullets.map((bullet, idx) => (
                    <li key={idx} className="relative group/bullet">
                      {isEditing ? (
                        <div className="flex items-center gap-2">
                          <input
                            type="text"
                            value={bullet}
                            onChange={(e) => {
                              const newBullets = [...exp.bullets];
                              newBullets[idx] = e.target.value;
                              setExperienceList(
                                experienceList.map((item) =>
                                  item.id === exp.id ? { ...item, bullets: newBullets } : item
                                )
                              );
                            }}
                            className="w-full border-b border-dashed border-slate-300 focus:outline-none text-[12.5px]"
                          />
                          <button
                            onClick={() => removeExpBullet(exp.id, idx)}
                            className="no-print text-red-400 hover:text-red-600"
                            title="Remove bullet"
                          >
                            <Trash2 className="w-3 h-3" />
                          </button>
                        </div>
                      ) : (
                        <span>{bullet}</span>
                      )}
                    </li>
                  ))}
                </ul>

                {isEditing && (
                  <button
                    onClick={() => addExpBullet(exp.id)}
                    className="no-print text-[11px] text-blue-700 hover:underline font-sans mt-1 ml-5 block"
                  >
                    + Add Bullet Point
                  </button>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 2: PROJECTS */}
        <section className="mb-5">
          <div className="flex justify-between items-center border-b border-black pb-0.5 mb-2.5">
            <h2 className="text-[15px] font-bold tracking-wide uppercase text-black">
              PROJECTS
            </h2>
            {isEditing && (
              <button
                onClick={addProject}
                className="no-print text-xs text-emerald-700 hover:text-emerald-800 font-sans font-medium inline-flex items-center gap-1"
              >
                <Plus className="w-3 h-3" /> Add Project
              </button>
            )}
          </div>

          <div className="space-y-3">
            {projectList.map((proj) => (
              <div key={proj.id} className="group relative">
                {isEditing && (
                  <button
                    onClick={() => removeProject(proj.id)}
                    className="no-print absolute -left-7 top-0 text-red-500 hover:text-red-700 p-0.5"
                    title="Remove Project"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                )}

                <div className="flex justify-between items-baseline text-[13.5px] mb-1">
                  <div className="flex-1 flex items-baseline gap-1 pr-2">
                    {isEditing ? (
                      <>
                        <input
                          type="text"
                          value={proj.title}
                          onChange={(e) =>
                            setProjectList(
                              projectList.map((item) =>
                                item.id === proj.id ? { ...item, title: e.target.value } : item
                              )
                            )
                          }
                          className="font-bold border-b border-dashed border-slate-300 focus:outline-none w-1/3"
                          placeholder="Project Title"
                        />
                        <span className="text-gray-400">|</span>
                        <input
                          type="text"
                          value={proj.technologies}
                          onChange={(e) =>
                            setProjectList(
                              projectList.map((item) =>
                                item.id === proj.id ? { ...item, technologies: e.target.value } : item
                              )
                            )
                          }
                          className="italic text-[12.5px] border-b border-dashed border-slate-300 focus:outline-none flex-1"
                          placeholder="Technologies Used"
                        />
                        <span className="text-gray-400">|</span>
                        <input
                          type="text"
                          value={proj.link || ''}
                          onChange={(e) =>
                            setProjectList(
                              projectList.map((item) =>
                                item.id === proj.id ? { ...item, link: e.target.value } : item
                              )
                            )
                          }
                          className="text-[12.5px] border-b border-dashed border-slate-300 focus:outline-none w-1/4"
                          placeholder="GitHub Link (optional)"
                        />
                      </>
                    ) : (
                      <span className="font-bold text-black">
                        {proj.title}{' '}
                        {proj.technologies && (
                          <span className="font-normal italic text-[12.5px] text-gray-800">
                            | {proj.technologies}
                          </span>
                        )}
                        {proj.link && (
                          <span className="font-normal text-[12.5px] text-gray-800">
                            {' '}|{' '}
                            <a
                              href={proj.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-black hover:text-blue-700 underline"
                            >
                              GitHub
                            </a>
                          </span>
                        )}
                      </span>
                    )}
                  </div>

                  {isEditing ? (
                    <input
                      type="text"
                      value={proj.dates}
                      onChange={(e) =>
                        setProjectList(
                          projectList.map((item) =>
                            item.id === proj.id ? { ...item, dates: e.target.value } : item
                          )
                        )
                      }
                      className="text-[12.5px] text-right border-b border-dashed border-slate-300 focus:outline-none"
                    />
                  ) : (
                    <span className="text-[12.5px] text-gray-800">{proj.dates}</span>
                  )}
                </div>

                <ul className="list-disc ml-5 text-[12.5px] leading-tight space-y-1 text-gray-900">
                  {proj.bullets.map((bullet, idx) => (
                    <li key={idx}>
                      {isEditing ? (
                        <div className="flex items-center gap-2">
                          <input
                            type="text"
                            value={bullet}
                            onChange={(e) => {
                              const newBullets = [...proj.bullets];
                              newBullets[idx] = e.target.value;
                              setProjectList(
                                projectList.map((item) =>
                                  item.id === proj.id ? { ...item, bullets: newBullets } : item
                                )
                              );
                            }}
                            className="w-full border-b border-dashed border-slate-300 focus:outline-none text-[12.5px]"
                          />
                          <button
                            onClick={() => removeProjBullet(proj.id, idx)}
                            className="no-print text-red-400 hover:text-red-600"
                            title="Remove bullet"
                          >
                            <Trash2 className="w-3 h-3" />
                          </button>
                        </div>
                      ) : (
                        <span>{bullet}</span>
                      )}
                    </li>
                  ))}
                </ul>

                {isEditing && (
                  <button
                    onClick={() => addProjBullet(proj.id)}
                    className="no-print text-[11px] text-blue-700 hover:underline font-sans mt-1 ml-5 block"
                  >
                    + Add Bullet Point
                  </button>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 3: EDUCATION */}
        <section className="mb-5">
          <div className="flex justify-between items-center border-b border-black pb-0.5 mb-2.5">
            <h2 className="text-[15px] font-bold tracking-wide uppercase text-black">
              EDUCATION
            </h2>
            {isEditing && (
              <button
                onClick={addEducation}
                className="no-print text-xs text-emerald-700 hover:text-emerald-800 font-sans font-medium inline-flex items-center gap-1"
              >
                <Plus className="w-3 h-3" /> Add Institution
              </button>
            )}
          </div>

          <div className="space-y-3">
            {educationList.map((edu) => (
              <div key={edu.id} className="group relative">
                {isEditing && (
                  <button
                    onClick={() => removeEducation(edu.id)}
                    className="no-print absolute -left-7 top-0 text-red-500 hover:text-red-700 p-0.5"
                    title="Remove Education"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                )}

                <div className="flex justify-between items-baseline text-[13.5px]">
                  {isEditing ? (
                    <input
                      type="text"
                      value={edu.degree}
                      onChange={(e) =>
                        setEducationList(
                          educationList.map((item) =>
                            item.id === edu.id ? { ...item, degree: e.target.value } : item
                          )
                        )
                      }
                      className="font-bold border-b border-dashed border-slate-300 focus:outline-none w-1/2"
                      placeholder="Degree"
                    />
                  ) : (
                    <span className="font-bold text-black">{edu.degree}</span>
                  )}

                  {isEditing ? (
                    <input
                      type="text"
                      value={edu.dates}
                      onChange={(e) =>
                        setEducationList(
                          educationList.map((item) =>
                            item.id === edu.id ? { ...item, dates: e.target.value } : item
                          )
                        )
                      }
                      className="text-[12.5px] text-right border-b border-dashed border-slate-300 focus:outline-none"
                      placeholder="Dates"
                    />
                  ) : (
                    <span className="text-[12.5px] text-gray-800">{edu.dates}</span>
                  )}
                </div>

                <div className="flex justify-between text-[12.5px] text-gray-800">
                  {isEditing ? (
                    <input
                      type="text"
                      value={edu.institution}
                      onChange={(e) =>
                        setEducationList(
                          educationList.map((item) =>
                            item.id === edu.id ? { ...item, institution: e.target.value } : item
                          )
                        )
                      }
                      className="italic border-b border-dashed border-slate-300 focus:outline-none w-1/2"
                      placeholder="University Name"
                    />
                  ) : (
                    <span className="italic">{edu.institution}</span>
                  )}

                  {isEditing ? (
                    <input
                      type="text"
                      value={edu.gpa}
                      onChange={(e) =>
                        setEducationList(
                          educationList.map((item) =>
                            item.id === edu.id ? { ...item, gpa: e.target.value } : item
                          )
                        )
                      }
                      className="text-right border-b border-dashed border-slate-300 focus:outline-none"
                      placeholder="GPA (optional)"
                    />
                  ) : (
                    <span>{edu.gpa}</span>
                  )}
                </div>

                {edu.details && (
                  <div className="text-[12px] text-gray-700 mt-0.5">
                    {isEditing ? (
                      <input
                        type="text"
                        value={edu.details}
                        onChange={(e) =>
                          setEducationList(
                            educationList.map((item) =>
                              item.id === edu.id ? { ...item, details: e.target.value } : item
                            )
                          )
                        }
                        className="w-full border-b border-dashed border-slate-300 focus:outline-none text-[12px]"
                      />
                    ) : (
                      <span>{edu.details}</span>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 4: SKILLS */}
        <section className="mb-5">
          <div className="flex justify-between items-center border-b border-black pb-0.5 mb-2.5">
            <h2 className="text-[15px] font-bold tracking-wide uppercase text-black">
              SKILLS
            </h2>
          </div>

          <div className="text-[12.5px] leading-relaxed space-y-1 text-gray-900">
            {skillsList.map((skill, idx) => (
              <div key={idx} className="flex items-baseline gap-1">
                {isEditing ? (
                  <>
                    <input
                      type="text"
                      value={skill.label}
                      onChange={(e) => {
                        const newSkills = [...skillsList];
                        newSkills[idx].label = e.target.value;
                        setSkillsList(newSkills);
                      }}
                      className="font-bold border-b border-dashed border-slate-300 focus:outline-none w-1/4"
                    />
                    <span>:</span>
                    <input
                      type="text"
                      value={skill.value}
                      onChange={(e) => {
                        const newSkills = [...skillsList];
                        newSkills[idx].value = e.target.value;
                        setSkillsList(newSkills);
                      }}
                      className="border-b border-dashed border-slate-300 focus:outline-none flex-1"
                    />
                  </>
                ) : (
                  <p>
                    <span className="font-bold text-black">{skill.label}:</span>{' '}
                    <span>{skill.value}</span>
                  </p>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 5: CERTIFICATIONS */}
        <section className="mb-5">
          <div className="flex justify-between items-center border-b border-black pb-0.5 mb-2.5">
            <h2 className="text-[15px] font-bold tracking-wide uppercase text-black">
              CERTIFICATIONS
            </h2>
            {isEditing && (
              <button
                onClick={addCertificate}
                className="no-print text-xs text-emerald-700 hover:text-emerald-800 font-sans font-medium inline-flex items-center gap-1"
              >
                <Plus className="w-3 h-3" /> Add Certification
              </button>
            )}
          </div>

          <div className="space-y-1.5">
            {certificateList.map((cert) => (
              <div key={cert.id} className="group relative flex justify-between items-baseline text-[12.5px]">
                {isEditing && (
                  <button
                    onClick={() => removeCertificate(cert.id)}
                    className="no-print absolute -left-7 top-0 text-red-500 hover:text-red-700 p-0.5"
                    title="Remove Certification"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                )}

                <div className="flex-1 pr-2">
                  {isEditing ? (
                    <div className="flex gap-2">
                      <input
                        type="text"
                        value={cert.name}
                        onChange={(e) =>
                          setCertificateList(
                            certificateList.map((item) =>
                              item.id === cert.id ? { ...item, name: e.target.value } : item
                            )
                          )
                        }
                        className="italic border-b border-dashed border-slate-300 focus:outline-none w-1/2"
                        placeholder="Certification Name"
                      />
                      <span>–</span>
                      <input
                        type="text"
                        value={cert.issuer}
                        onChange={(e) =>
                          setCertificateList(
                            certificateList.map((item) =>
                              item.id === cert.id ? { ...item, issuer: e.target.value } : item
                            )
                          )
                        }
                        className="border-b border-dashed border-slate-300 focus:outline-none w-1/2"
                        placeholder="Issuer"
                      />
                    </div>
                  ) : (
                    <span>
                      <span className="italic font-medium">{cert.name}</span> – {cert.issuer}
                    </span>
                  )}
                </div>

                {isEditing ? (
                  <input
                    type="text"
                    value={cert.date}
                    onChange={(e) =>
                      setCertificateList(
                        certificateList.map((item) =>
                          item.id === cert.id ? { ...item, date: e.target.value } : item
                        )
                      )
                    }
                    className="text-[12.5px] text-right border-b border-dashed border-slate-300 focus:outline-none"
                  />
                ) : (
                  <span className="text-[12.5px] text-gray-800">{cert.date}</span>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 6: PROFESSIONAL SUMMARY */}
        <section className="mb-2">
          <div className="border-b border-black pb-0.5 mb-2">
            <h2 className="text-[15px] font-bold tracking-wide uppercase text-black">
              PROFESSIONAL SUMMARY
            </h2>
          </div>

          {isEditing ? (
            <textarea
              value={professionalSummary}
              onChange={(e) => setProfessionalSummary(e.target.value)}
              rows={3}
              className="w-full text-[12.5px] leading-relaxed border border-dashed border-slate-300 p-2 focus:outline-none font-serif-latex"
            />
          ) : (
            <p className="text-[12.5px] leading-relaxed text-gray-900 text-justify">
              {professionalSummary}
            </p>
          )}
        </section>
      </main>

      {/* OVERLEAF LATEX MODAL */}
      {showLatexModal && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 no-print">
          <div className="bg-white rounded-lg shadow-2xl max-w-2xl w-full max-h-[85vh] flex flex-col overflow-hidden border border-slate-200">
            <div className="p-4 bg-slate-900 text-white flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Code2 className="w-5 h-5 text-emerald-400" />
                <h3 className="font-bold text-base">Overleaf LaTeX Source Code</h3>
              </div>
              <button
                onClick={() => setShowLatexModal(false)}
                className="text-slate-400 hover:text-white text-lg font-bold px-2"
              >
                ✕
              </button>
            </div>

            <div className="p-4 bg-slate-950 flex-1 overflow-y-auto">
              <pre className="text-xs font-mono text-emerald-300 whitespace-pre-wrap leading-relaxed select-all">
                {generateLatex()}
              </pre>
            </div>

            <div className="p-4 bg-slate-100 border-t border-slate-200 flex justify-between items-center">
              <p className="text-xs text-slate-600">
                Copy and paste this code directly into <a href="https://www.overleaf.com" target="_blank" rel="noreferrer" className="text-blue-600 underline">Overleaf.com</a>
              </p>
              <div className="flex gap-2">
                <button
                  onClick={handleCopyLatex}
                  className="inline-flex items-center gap-1.5 px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white text-xs font-medium rounded transition-colors"
                >
                  {copiedLatex ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  {copiedLatex ? 'Copied LaTeX Code!' : 'Copy LaTeX Code'}
                </button>
                <button
                  onClick={() => setShowLatexModal(false)}
                  className="px-3 py-2 bg-slate-200 hover:bg-slate-300 text-slate-700 text-xs font-medium rounded transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <footer className="no-print mt-6 text-center text-xs text-slate-500">
        Pooja Markali Resume • Overleaf LaTeX Visual Design • Prepared for Export & Printing
      </footer>
    </div>
  );
}
