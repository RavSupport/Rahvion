import React, { useEffect, useMemo, useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import {
  ArrowDownToLine,
  BookOpenCheck,
  Check,
  GraduationCap,
  Headphones,
  HelpCircle,
  ListChecks,
  Mail,
  MonitorPlay,
  PlayCircle,
  RefreshCcw,
  Search,
  ShieldCheck,
  Sparkles
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import MathGridBackground from '@/components/MathGridBackground';
import PageTransition from '@/components/PageTransition';

const guideUrl = '/GoHighLevel_Complete_Training_Guide.pdf';
const membershipUrl = 'https://buy.stripe.com/4gMdR9eooaGYgEwa7d6kg00';
const requestEmail = 'helpdesk@rahvion.com';
const progressStorageKey = 'rahvion-highlevel-training-progress';

const trainingModules = [
  {
    id: 'crm-foundations',
    title: 'HighLevel CRM Foundations',
    level: 'Start Here',
    updatedAt: '2026-06-04',
    summary: 'Learn the layout, core vocabulary, and how contacts, opportunities, conversations, calendars, and automations fit together.',
    steps: [
      'Open the guide and skim the CRM overview.',
      'Identify where contacts, opportunities, and conversations live.',
      'Write down the one workflow you want HighLevel to simplify first.'
    ]
  },
  {
    id: 'contacts-pipelines',
    title: 'Contacts And Pipelines',
    level: 'Core Skill',
    updatedAt: '2026-06-04',
    summary: 'Understand how to organize people, track progress, and keep follow-up work visible without losing context.',
    steps: [
      'Create or review your contact fields.',
      'Map each pipeline stage to a real business step.',
      'Check whether every open opportunity has a next action.'
    ]
  },
  {
    id: 'conversations',
    title: 'Conversations And Follow-Up',
    level: 'Daily Use',
    updatedAt: '2026-06-04',
    summary: 'Use conversations to centralize email, text, and customer replies so follow-up feels structured instead of scattered.',
    steps: [
      'Review the conversation inbox.',
      'Practice finding a customer thread.',
      'Draft a short follow-up template for a common situation.'
    ]
  },
  {
    id: 'workflow-automations',
    title: 'Workflow Automation Basics',
    level: 'Interactive',
    updatedAt: '2026-06-04',
    summary: 'Plan simple automations with triggers, actions, delays, and safety checks before building more complicated flows.',
    steps: [
      'Choose one repeatable task.',
      'Define the trigger that starts the automation.',
      'Add one safety check before a message or status change happens.'
    ]
  },
  {
    id: 'appointments-calendars',
    title: 'Calendars And Appointments',
    level: 'Setup',
    updatedAt: '2026-06-04',
    summary: 'Use calendar settings and appointment workflows to reduce manual scheduling and missed follow-ups.',
    steps: [
      'Confirm calendar availability.',
      'Review appointment notifications.',
      'Test the booking flow as a customer.'
    ]
  },
  {
    id: 'support-session',
    title: 'Bring A Question To Rahvion',
    level: 'Member Support',
    updatedAt: '2026-06-04',
    summary: 'Turn a stuck point into a guided support request so Rahvion can help you learn the exact action you need.',
    steps: [
      'Describe what you are trying to do.',
      'Include where you got stuck.',
      'Send the request form below or join as a Rahvion member for ongoing help.'
    ]
  }
];

const getDefaultRequest = () => ({
  name: '',
  email: '',
  topic: '',
  goal: '',
  urgency: 'I am learning and planning ahead'
});

const HighLevelTrainingPage = () => {
  const [selectedModuleId, setSelectedModuleId] = useState(trainingModules[0].id);
  const [completedLessons, setCompletedLessons] = useState({});
  const [request, setRequest] = useState(getDefaultRequest);

  const memberBenefits = [
    'Software training for HighLevel CRM and everyday business tools',
    'Support services when setup, workflows, automations, or technical questions get stuck',
    'Plain-language guidance so you can use the software with confidence',
    'Remote help from Rahvion instead of trying to figure everything out alone'
  ];

  const selectedModule = useMemo(
    () => trainingModules.find((module) => module.id === selectedModuleId) || trainingModules[0],
    [selectedModuleId]
  );

  const completedCount = Object.values(completedLessons).filter(Boolean).length;
  const progressPercent = Math.round((completedCount / trainingModules.length) * 100);
  const latestUpdate = trainingModules
    .map((module) => module.updatedAt)
    .sort()
    .at(-1);

  useEffect(() => {
    const savedProgress = window.localStorage.getItem(progressStorageKey);
    if (savedProgress) {
      setCompletedLessons(JSON.parse(savedProgress));
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem(progressStorageKey, JSON.stringify(completedLessons));
  }, [completedLessons]);

  const toggleLesson = (lessonId) => {
    setCompletedLessons((current) => ({
      ...current,
      [lessonId]: !current[lessonId]
    }));
  };

  const updateRequest = (field, value) => {
    setRequest((current) => ({
      ...current,
      [field]: value
    }));
  };

  const resetRequest = () => {
    setRequest(getDefaultRequest());
  };

  const requestBody = [
    'HighLevel CRM Training Request',
    '',
    `Name: ${request.name || 'Not provided'}`,
    `Email: ${request.email || 'Not provided'}`,
    `Topic: ${request.topic || 'Not provided'}`,
    `Urgency: ${request.urgency}`,
    '',
    'What I want to learn or how I want to do it:',
    request.goal || 'Not provided'
  ].join('\n');

  const requestHref = `mailto:${requestEmail}?subject=${encodeURIComponent('HighLevel CRM Training Request')}&body=${encodeURIComponent(requestBody)}`;

  return (
    <PageTransition>
      <Helmet>
        <title>Free HighLevel CRM Training Guide | Rahvion</title>
        <meta
          name="description"
          content="Download Rahvion's free HighLevel CRM training guide. Join Rahvion Core for $25 per month to receive software training and support services."
        />
        <meta
          name="keywords"
          content="HighLevel CRM training, GoHighLevel guide, free CRM training guide, Rahvion membership, software training support"
        />
      </Helmet>

      <section className="py-24 relative bg-[#0B0B0D] overflow-hidden">
        <MathGridBackground />
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-[1.08fr_0.92fr] gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="font-serif text-4xl md:text-6xl font-bold mb-6 text-[#F5F5F5] leading-tight">
                HighLevel CRM Training Guide
              </h1>
              <p className="text-xl md:text-2xl text-[#D4AF37] font-semibold mb-5">
                Free download from Rahvion.
              </p>
              <p className="text-lg text-[#A0A0A0] leading-relaxed max-w-2xl font-light mb-8">
                Use this training guide and interactive lesson hub to get more comfortable with HighLevel CRM, understand the core tools, and start building cleaner systems for contacts, conversations, pipelines, and automations.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <a href={guideUrl} download>
                  <Button className="w-full sm:w-auto bg-[#D4AF37] hover:bg-[#F5F5F5] text-[#0B0B0D] font-bold text-base px-8 py-6 rounded-full shadow-lg">
                    <ArrowDownToLine size={20} className="mr-2" />
                    Download Free Guide
                  </Button>
                </a>
                <a href={guideUrl} target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" className="w-full sm:w-auto border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37]/10 hover:text-[#F5F5F5] font-bold text-base px-8 py-6 rounded-full">
                    <BookOpenCheck size={20} className="mr-2" />
                    Preview PDF
                  </Button>
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-[#111827]/90 border border-[#3A3F47] rounded-xl p-8 shadow-2xl shadow-black/30"
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="h-14 w-14 rounded-xl bg-[#D4AF37]/10 border border-[#D4AF37]/30 flex items-center justify-center flex-shrink-0">
                  <GraduationCap className="text-[#D4AF37]" size={30} />
                </div>
                <div>
                  <h2 className="font-serif text-2xl font-bold text-[#F5F5F5] mb-2">
                    Want help putting it into practice?
                  </h2>
                  <p className="text-[#A0A0A0] leading-relaxed font-light">
                    The guide is free. Rahvion membership gives you ongoing software training and support services for $25 per month.
                  </p>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {memberBenefits.map((benefit) => (
                  <li key={benefit} className="flex items-start gap-3 text-[#D7D7D7]">
                    <Check className="text-[#D4AF37] mt-0.5 flex-shrink-0" size={18} />
                    <span className="font-light leading-relaxed">{benefit}</span>
                  </li>
                ))}
              </ul>

              <a href={membershipUrl} target="_blank" rel="noopener noreferrer">
                <Button className="w-full bg-[#D4AF37] hover:bg-[#F5F5F5] text-[#0B0B0D] font-bold text-lg py-6 rounded-xl">
                  Become a Rahvion Member
                </Button>
              </a>
              <p className="text-xs text-[#A0A0A0] mt-4 text-center">
                  Core membership is $24.99 per month plus applicable tax.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#0f1422] border-y border-[#3A3F47]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-[0.85fr_1.15fr] gap-8 max-w-7xl mx-auto items-start">
            <div>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#F5F5F5] mb-4">
                Interactive training classroom
              </h2>
              <p className="text-[#A0A0A0] leading-relaxed font-light">
                Lessons can be updated as Rahvion adds new training. Visitors can work through modules, mark progress, and come back later on the same device.
              </p>
              <div className="mt-8 bg-[#0B0B0D] border border-[#3A3F47] rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <RefreshCcw className="text-[#D4AF37]" size={24} />
                  <h3 className="font-serif text-xl font-bold text-[#F5F5F5]">Training updates</h3>
                </div>
                <p className="text-sm text-[#A0A0A0] leading-relaxed font-light mb-4">
                  Current training library updated: {latestUpdate}. New lessons can be added here as Rahvion expands the HighLevel curriculum.
                </p>
                <div className="h-3 w-full rounded-full bg-[#1F2937] overflow-hidden">
                  <div
                    className="h-full bg-[#D4AF37] transition-all"
                    style={{ width: `${progressPercent}%` }}
                  />
                </div>
                <p className="text-xs text-[#A0A0A0] mt-3">
                  {completedCount} of {trainingModules.length} lessons marked complete.
                </p>
              </div>
            </div>

            <div className="bg-[#0B0B0D] border border-[#3A3F47] rounded-xl overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-[0.72fr_1.28fr]">
                <div className="border-b md:border-b-0 md:border-r border-[#3A3F47] p-4 space-y-3">
                  {trainingModules.map((module) => (
                    <button
                      key={module.id}
                      type="button"
                      onClick={() => setSelectedModuleId(module.id)}
                      className={`w-full text-left rounded-lg border p-4 transition-colors ${
                        selectedModule.id === module.id
                          ? 'border-[#D4AF37] bg-[#D4AF37]/10'
                          : 'border-[#3A3F47] bg-[#111827] hover:border-[#D4AF37]/50'
                      }`}
                    >
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <p className="text-xs uppercase text-[#D4AF37] font-bold tracking-wide">{module.level}</p>
                          <h3 className="text-base font-bold text-[#F5F5F5] mt-1">{module.title}</h3>
                        </div>
                        {completedLessons[module.id] && (
                          <Check className="text-[#D4AF37] flex-shrink-0" size={18} />
                        )}
                      </div>
                    </button>
                  ))}
                </div>

                <div className="p-6 md:p-8">
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-6">
                    <div>
                      <div className="flex items-center gap-3 text-[#D4AF37] mb-3">
                        <PlayCircle size={24} />
                        <span className="text-sm font-bold uppercase tracking-wide">{selectedModule.level}</span>
                      </div>
                      <h3 className="font-serif text-3xl font-bold text-[#F5F5F5] mb-3">
                        {selectedModule.title}
                      </h3>
                      <p className="text-[#A0A0A0] leading-relaxed font-light">
                        {selectedModule.summary}
                      </p>
                    </div>
                    <button
                      type="button"
                      onClick={() => toggleLesson(selectedModule.id)}
                      className={`rounded-full px-5 py-3 text-sm font-bold transition-colors ${
                        completedLessons[selectedModule.id]
                          ? 'bg-[#D4AF37] text-[#0B0B0D]'
                          : 'border border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37]/10'
                      }`}
                    >
                      {completedLessons[selectedModule.id] ? 'Completed' : 'Mark Complete'}
                    </button>
                  </div>

                  <div className="space-y-4">
                    {selectedModule.steps.map((step, index) => (
                      <div key={step} className="flex items-start gap-4 rounded-lg bg-[#111827] border border-[#3A3F47] p-4">
                        <div className="h-8 w-8 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/30 text-[#D4AF37] flex items-center justify-center text-sm font-bold flex-shrink-0">
                          {index + 1}
                        </div>
                        <p className="text-[#D7D7D7] leading-relaxed font-light">{step}</p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-8 flex flex-col sm:flex-row gap-4">
                    <a href={guideUrl} target="_blank" rel="noopener noreferrer">
                      <Button className="w-full sm:w-auto bg-[#111827] border border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37]/10">
                        <MonitorPlay size={18} className="mr-2" />
                        Use With The Guide
                      </Button>
                    </a>
                    <a href="#training-request">
                      <Button className="w-full sm:w-auto bg-[#D4AF37] hover:bg-[#F5F5F5] text-[#0B0B0D] font-bold">
                        <HelpCircle size={18} className="mr-2" />
                        Ask For A Lesson
                      </Button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="training-request" className="py-20 bg-[#0B0B0D] border-b border-[#3A3F47]">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-10 items-start">
            <div>
              <div className="flex items-center gap-3 mb-5">
                <Search className="text-[#D4AF37]" size={30} />
                <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#F5F5F5]">
                  Tell us what you want to learn
                </h2>
              </div>
              <p className="text-[#A0A0A0] leading-relaxed font-light mb-6">
                Users can ask for a new lesson, a walkthrough, or help with a specific “how do I do this?” HighLevel task. Rahvion can use these requests to decide what training to add next.
              </p>
              <div className="bg-[#111827] border border-[#3A3F47] rounded-xl p-6">
                <Sparkles className="text-[#D4AF37] mb-4" size={28} />
                <h3 className="font-serif text-xl font-bold text-[#F5F5F5] mb-2">
                  Teachable-style support
                </h3>
                <p className="text-sm text-[#A0A0A0] leading-relaxed font-light">
                  The free hub gives them structure. Rahvion membership gives them the human support layer: software training, guided troubleshooting, and help applying the lessons.
                </p>
              </div>
            </div>

            <div className="bg-[#111827] border border-[#3A3F47] rounded-xl p-6 md:p-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
                <label className="block">
                  <span className="block text-sm font-bold text-[#F5F5F5] mb-2">Name</span>
                  <input
                    type="text"
                    value={request.name}
                    onChange={(event) => updateRequest('name', event.target.value)}
                    className="w-full rounded-lg bg-[#0B0B0D] border border-[#3A3F47] px-4 py-3 text-[#F5F5F5] outline-none focus:border-[#D4AF37]"
                    placeholder="Your name"
                  />
                </label>
                <label className="block">
                  <span className="block text-sm font-bold text-[#F5F5F5] mb-2">Email</span>
                  <input
                    type="email"
                    value={request.email}
                    onChange={(event) => updateRequest('email', event.target.value)}
                    className="w-full rounded-lg bg-[#0B0B0D] border border-[#3A3F47] px-4 py-3 text-[#F5F5F5] outline-none focus:border-[#D4AF37]"
                    placeholder="you@example.com"
                  />
                </label>
              </div>

              <label className="block mb-5">
                <span className="block text-sm font-bold text-[#F5F5F5] mb-2">What do you want to learn?</span>
                <input
                  type="text"
                  value={request.topic}
                  onChange={(event) => updateRequest('topic', event.target.value)}
                  className="w-full rounded-lg bg-[#0B0B0D] border border-[#3A3F47] px-4 py-3 text-[#F5F5F5] outline-none focus:border-[#D4AF37]"
                  placeholder="Example: How do I build a workflow for missed calls?"
                />
              </label>

              <label className="block mb-5">
                <span className="block text-sm font-bold text-[#F5F5F5] mb-2">What are you trying to do?</span>
                <textarea
                  value={request.goal}
                  onChange={(event) => updateRequest('goal', event.target.value)}
                  className="w-full min-h-36 rounded-lg bg-[#0B0B0D] border border-[#3A3F47] px-4 py-3 text-[#F5F5F5] outline-none focus:border-[#D4AF37] resize-y"
                  placeholder="Tell us the result you want, what you already tried, and where you got stuck."
                />
              </label>

              <label className="block mb-6">
                <span className="block text-sm font-bold text-[#F5F5F5] mb-2">How soon do you need help?</span>
                <select
                  value={request.urgency}
                  onChange={(event) => updateRequest('urgency', event.target.value)}
                  className="w-full rounded-lg bg-[#0B0B0D] border border-[#3A3F47] px-4 py-3 text-[#F5F5F5] outline-none focus:border-[#D4AF37]"
                >
                  <option>I am learning and planning ahead</option>
                  <option>I need this for an active setup</option>
                  <option>I am stuck and need support soon</option>
                </select>
              </label>

              <div className="flex flex-col sm:flex-row gap-4">
                <a href={requestHref} className="flex-1">
                  <Button className="w-full bg-[#D4AF37] hover:bg-[#F5F5F5] text-[#0B0B0D] font-bold text-base py-6 rounded-xl">
                    <Mail size={20} className="mr-2" />
                    Send Training Request
                  </Button>
                </a>
                <Button
                  type="button"
                  onClick={resetRequest}
                  className="bg-[#0B0B0D] border border-[#3A3F47] text-[#F5F5F5] hover:bg-[#D4AF37]/10 hover:text-[#D4AF37] font-bold py-6 rounded-xl"
                >
                  Clear
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#0B0B0D]">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-[#111827] border border-[#3A3F47] rounded-xl p-8">
              <ListChecks className="text-[#D4AF37] mb-5" size={34} />
              <h2 className="font-serif text-2xl font-bold text-[#F5F5F5] mb-3">
                A hub that can keep growing
              </h2>
              <p className="text-[#A0A0A0] leading-relaxed font-light">
                Rahvion can add new lessons, update module dates, and expand the classroom as people ask for new HighLevel walkthroughs.
              </p>
            </div>
            <div className="bg-[#111827] border border-[#3A3F47] rounded-xl p-8">
              <Headphones className="text-[#D4AF37] mb-5" size={34} />
              <h2 className="font-serif text-2xl font-bold text-[#F5F5F5] mb-3">
                Training plus support
              </h2>
              <p className="text-[#A0A0A0] leading-relaxed font-light">
                Membership is for people who want more than a PDF. Rahvion helps you understand the software, troubleshoot issues, and keep moving when the tool becomes confusing.
              </p>
            </div>
          </div>
          <div className="max-w-5xl mx-auto mt-8 bg-[#111827] border border-[#3A3F47] rounded-xl p-8">
            <ShieldCheck className="text-[#D4AF37] mb-5" size={34} />
            <h2 className="font-serif text-2xl font-bold text-[#F5F5F5] mb-3">
              Practical, patient guidance
            </h2>
            <p className="text-[#A0A0A0] leading-relaxed font-light">
              Rahvion supports software learning with plain-language explanations, remote help, and a steady monthly relationship for $25 per month.
            </p>
          </div>
        </div>
      </section>
    </PageTransition>
  );
};

export default HighLevelTrainingPage;
