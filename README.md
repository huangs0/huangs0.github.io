# Songlin's Personal Page

Simple, Configurable, and Acamdemic-oriented. 

## Getting Started

First clone the repo and you can find the source code in `/src` folder.

Then you can start the development server by:

```bash
npm install
# development server
npx next dev
# build and upload, output in `/out`
npx next build
```

## How to Configure

First please open `package.json` and change the project title.

Nearly everything is configurable in the `/src/app/config.ts`:

```ts
// the upper info
export const basicInfo = {
  name: "Songlin Huang",
  localName: "黄松霖",

  linkedinUrl: "https://www.linkedin.com/in/huang-songlin/",
  githubUrl: "https://github.com/huangs0",
  email: "huangs0@connect.hku.hk",
  rawEmail: "huangs0 [at] hku [dot] hk",
  blogUrl: "https://huangs0.github.io",
  resumeUrl: "/resume.pdf",
};

// the summary, Markdown Supported!
export const summaryInfo = `I am a MPhil student in [HKU AIoT Lab](https://aiot.hku.hk) ...`

// the news and awards, also in Markdown
export const newsInfo: string[] = [
  `[Mar 2025] 🥳🥳 [**NEUTRINO: Fine-grained GPU Kernel Profiling via Programmable Probing**](https://www.usenix.org/conference/osdi25/presentation/huang-songlin) is **ACCEPTED** at **OSDI'25**!!! This is my first accepted research paper 🥹🥹 after six years' study of computer science.`,
]

export const awardsInfo: string[] = [
  `[2023] Postgraduate Scholarship, HKU`,
]

// the vitae timeline, Noted that `right` controls whether the item will be placed left or right
export const vitaeInfo: VitaeProps[] = [
  {
    orgName: "miHoYo",
    positionTitle: "Research Intern",
    timespan: "Jun - Aug 2023",
    description: "Manager: Mr. Wenping Zhao",
    right: false,
  },
]
```
