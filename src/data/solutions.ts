import { Briefcase, GraduationCap, Gauge, Hammer, HeartHandshake, School, type LucideIcon } from 'lucide-react';

export interface Solution {
    slug: string; // Anchor id on /solutions
    name: string;
    tagline: string;
    description: string;
    highlights: string[];
    icon: LucideIcon;
    video?: string; // 20–25s clip under /public/videos; rendered only when SHOW_SOLUTION_VIDEOS is on
    onePager?: string; // PDF under /public/one-pagers
    externalUrl?: string;
}

// Flip to true once every solution video is uploaded, so the page looks uniform
export const SHOW_SOLUTION_VIDEOS = false;

export const UPLLYFT_URL = 'https://upllyft.com';

export const solutions: Solution[] = [
    {
        slug: 'hireops',
        name: 'HireOps',
        tagline: 'AI-run recruiting operations, from intake to offer.',
        description:
            'HireOps gives recruiting teams one pipeline to triage applicants, track every requisition and see where hiring slows down, with AI doing the first pass so recruiters spend their time on the right candidates.',
        highlights: ['AI-assisted candidate triage', 'Live pipeline and requisition metrics', 'Recruiter workload visibility'],
        icon: Briefcase,
        video: '/videos/hireops.mp4',
    },
    {
        slug: 'skill2scale',
        name: 'Skill2Scale',
        tagline: 'See the skills you have. Build the ones you will need.',
        description:
            'Skill2Scale reads job descriptions and CVs into a live skill map, works out what every role needs over the planning horizon, and turns the difference into learning. Every figure is computed from your own people, never an industry average.',
        highlights: ['Live skill map from JDs and CVs', 'Role requirements by seniority', 'Gap-driven learning paths'],
        icon: GraduationCap,
        video: '/videos/skill2scale.mp4',
    },
    {
        slug: 'clearpoint',
        name: 'ClearPoint',
        tagline: 'AI readiness assessments with a traceable evidence chain.',
        description:
            'ClearPoint runs structured AI readiness assessments across business domains, scores maturity, detects patterns and root causes, and produces a sequenced roadmap and business case where every recommendation traces back to the answers given.',
        highlights: ['Domain-by-domain maturity scoring', 'Root-cause pattern detection', 'Sequenced roadmap and business case'],
        icon: Gauge,
        video: '/videos/clearpoint.mp4',
    },
    {
        slug: 'forge',
        name: 'Forge',
        tagline: 'Enterprise no-code AI app builder that runs inside your own cloud.',
        description:
            'Forge lets teams build AI applications without code while code generation, storage, previews and production all stay in your own cloud tenant. No code, prompts or data leave your environment, and every action is audited.',
        highlights: ['Runs in your AWS, Azure or GCP tenant', 'Zero content egress', 'Your Git as the system of record'],
        icon: Hammer,
        video: '/videos/forge.mp4',
    },
    {
        slug: 'educore',
        name: 'EduCore',
        tagline: 'An AI-native student information system for schools.',
        description:
            'EduCore brings students, staff and day-to-day school operations together on one dashboard. Built and delivered end to end by MindsSparc, it gives school leaders a single, unified view of their institution.',
        highlights: ['One dashboard for school administration', 'Unified student records', 'Built and delivered end to end by MindsSparc'],
        icon: School,
        video: '/videos/educore.mp4',
    },
    {
        slug: 'upllyft',
        name: 'Upllyft',
        tagline: 'Guidance, community and connected support for neurodivergent people and families.',
        description:
            'Upllyft is an initiative of MindsSparc. Compass brings neurodivergent people and families guidance and community; PracticeOS helps clinics, therapists and support teams keep enquiries, appointments, care plans and session notes together.',
        highlights: ['Compass: guidance and community', 'PracticeOS: tools for running a practice', 'Families kept informed'],
        icon: HeartHandshake,
        video: '/videos/upllyft.mp4',
        externalUrl: UPLLYFT_URL,
    },
];
