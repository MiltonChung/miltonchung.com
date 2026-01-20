import { StaticImageData } from 'next/image';
import {
  ConvexLogo,
  CssLogo,
  EdabitLogo,
  ExercismLogo,
  FigmaLogo,
  FrontendMentorLogo,
  GithubIcon,
  HtmlLogo,
  JavascriptLogo,
  LinkedinIcon,
  NextjsLogo,
  NodejsLogo,
  PostmanLogo,
  PythonLogo,
  ReactLogo,
  SanityLogo,
  SassLogo,
  TypescriptLogo,
  RubyLogo,
  RubyOnRailsLogo,
  HeadlessUiLogo,
  TailwindCssLogo,
  PostgresqlLogo,
  JiraLogo,
  AwsLogo,
  SendGridLogo,
  LeetCodeLogo,
  LinkedInFullLogo,
  GithubFullLogo
} from '../Icons';

export const MOBILE_WIDTH = 768;

type Logo = React.FC<React.SVGProps<SVGSVGElement>>;
type Profile = {
  link: string;
  logo: Logo | StaticImageData;
  alt: string;
  name: string;
};
type Skill = {
  logo: Logo;
  name: string;
  link: string;
};
type Social = {
  link: string;
  logo: Logo;
  title: string;
};
type Certification = {
  name: string;
  issuer: string;
  link: string;
  logo: Logo;
  date: string;
  credentialId?: string;
};

export const profiles: Profile[] = [
  {
    link: 'https://github.com/miltonchung',
    logo: GithubFullLogo,
    alt: 'github logo',
    name: 'Github'
  },
  {
    link: 'https://www.linkedin.com/in/miltonchung',
    logo: LinkedInFullLogo,
    alt: 'linkedin logo',
    name: 'LinkedIn'
  },
  {
    link: 'https://www.frontendmentor.io/profile/MiltonChung',
    logo: FrontendMentorLogo,
    alt: 'frontend mentor logo',
    name: 'Frontend Mentor'
  },
  {
    link: 'https://leetcode.com/u/mewton/',
    logo: LeetCodeLogo,
    alt: 'leetcode logo',
    name: 'LeetCode'
  },
  {
    link: 'https://edabit.com/user/CY5fcK7kzoo56Ysmr',
    logo: EdabitLogo,
    alt: 'edabit logo',
    name: 'Edabit'
  },
  {
    link: 'https://exercism.io/profiles/MiltonChung',
    logo: ExercismLogo,
    alt: 'exercism logo',
    name: 'Exercism'
  }
];

export const skills: Skill[] = [
  {
    logo: HtmlLogo,
    name: 'HTML',
    link: 'https://developer.mozilla.org/en-US/docs/Web/HTML'
  },
  {
    logo: CssLogo,
    name: 'CSS',
    link: 'https://developer.mozilla.org/en-US/docs/Web/CSS'
  },
  {
    logo: SassLogo,
    name: 'Sass',
    link: 'https://sass-lang.com/'
  },
  {
    logo: JavascriptLogo,
    name: 'JavaScript',
    link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript'
  },
  {
    logo: TypescriptLogo,
    name: 'TypeScript',
    link: 'https://www.typescriptlang.org/'
  },
  {
    logo: ReactLogo,
    name: 'React',
    link: 'https://reactjs.org/'
  },
  {
    logo: NextjsLogo,
    name: 'Next.js',
    link: 'https://nextjs.org/'
  },
  {
    logo: NodejsLogo,
    name: 'Nodejs',
    link: 'https://nodejs.org/en/'
  },
  {
    logo: PythonLogo,
    name: 'Python',
    link: 'https://www.python.org/'
  },
  {
    logo: FigmaLogo,
    name: 'Figma',
    link: 'https://www.figma.com/'
  },
  {
    logo: PostmanLogo,
    name: 'Postman',
    link: 'https://www.postman.com/'
  },
  {
    logo: ConvexLogo,
    name: 'Convex',
    link: 'https://www.convex.dev/'
  },
  {
    logo: SanityLogo,
    name: 'Sanity',
    link: 'https://www.sanity.io/'
  },
  {
    logo: RubyLogo,
    name: 'Ruby',
    link: 'https://www.ruby-lang.org/en/'
  },
  {
    logo: RubyOnRailsLogo,
    name: 'Ruby on Rails',
    link: 'https://rubyonrails.org/'
  },
  {
    logo: HeadlessUiLogo,
    name: 'Headless UI',
    link: 'https://headlessui.dev/'
  },
  {
    logo: TailwindCssLogo,
    name: 'Tailwind CSS',
    link: 'https://tailwindcss.com/'
  },
  {
    logo: PostgresqlLogo,
    name: 'PostgreSQL',
    link: 'https://www.postgresql.org/'
  },
  {
    logo: AwsLogo,
    name: 'AWS',
    link: 'https://aws.amazon.com/'
  },
  {
    logo: SendGridLogo,
    name: 'SendGrid',
    link: 'https://sendgrid.com/'
  },
  {
    logo: JiraLogo,
    name: 'Jira',
    link: 'https://www.atlassian.com/software/jira'
  },
  {
    logo: GithubIcon,
    name: 'GitHub',
    link: 'https://github.com/'
  }
];

export const footerSocials: Social[] = [
  {
    link: 'https://github.com/miltonchung',
    logo: GithubIcon,
    title: 'Github'
  },
  {
    link: 'https://www.linkedin.com/in/miltonchung',
    logo: LinkedinIcon,
    title: 'LinkedIn'
  }
];

export const certifications: Certification[] = [
  {
    name: 'AWS Certified Cloud Practitioner',
    issuer: 'Amazon Web Services',
    link: 'https://cp.certmetrics.com/amazon/en/public/verify/credential/7bd4852276e64cc9b33dff09f123fced',
    logo: AwsLogo,
    date: 'January 2026',
    credentialId: '7bd4852276e64cc9b33dff09f123fced'
  }
];
