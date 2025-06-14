export interface VitaeProps {
  orgName: string;
  positionTitle: string;
  timespan: string;
  description: string;
  right: boolean;
}

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

export const summaryInfo = `I am a MPhil student in [HKU AIoT Lab](https://aiot.hku.hk) supervised by [Prof. Wu Chenshu](https://www.cswu.me) and [Prof. Wu Chuan](https://i.cs.hku.hk/~cwu/). 
Before that, I got my Bachelor of Engineering in Computer Science from the University of Hong Kong with First Class Honours. 
I also obtain several extensive industrial experience in NVIDIA, miHoYo, etc.

My current research interest spans across GPU-Related Operating and Networking System, especially the intra-gpu-kernel level performance engineering.
Previously I was also interested in mobile computing, human-computer interaction, web development, computer vision, etc.`

export const newsInfo: string[] = [
  `[Mar 2025] 🥳🥳 [**NEUTRINO: Fine-grained GPU Kernel Profiling via Programmable Probing**](https://www.usenix.org/conference/osdi25/presentation/huang-songlin) is **ACCEPTED** at **OSDI'25**!!! This is my first accepted research paper 🥹🥹 after six years' study of computer science.`,
  `[Sep 2023] 🎉🎉 My first official tutorship for the course COMP3230 Principles of Operating System`,
  `[July 2023] 🥳🥳 Join miHoYo as a research intern on digital avatar and gaze estimation~`,
  `[Jun 2023] 🎉🎉 I graduate from HKU as a B.Eng. in Computer Science with First Class Honor!`,
  `[May 2023] 🎉🎉 I'll give a [**Young Scholar TechTalk**](https://innowings.engg.hku.hk/hand-over-face-gesture/) on May 23 in [HKU InnoWing II](https://innowings.engg.hku.hk/innowing2/), and this is the very first one by undergraduates in the [TechTalk series](https://innowings.engg.hku.hk/innowing2/techtalk/) for PhDs and Professors!`
]

export const awardsInfo: string[] = [
  `[2023] Postgraduate Scholarship, HKU`,
  `[2022, 2021, 2020] Dean's Honors List, HKU`
]

export const vitaeInfo: VitaeProps[] = [
  {
    orgName: "miHoYo",
    positionTitle: "Research Intern",
    timespan: "Jun - Aug 2023",
    description: "Manager: Mr. Wenping Zhao",
    right: false,
  }, 
  {
    orgName: "HKU",
    positionTitle: "M.Phil. in Computer Science",
    timespan: "2023 - 2025",
    description: "Supervisor: Dr. Chenshu Wu",
    right: true,
  }, 
  {
    orgName: "HKU",
    positionTitle: "Research Assistant",
    timespan: "Oct 2022 - Apr 2023",
    description: "Supervisor: Dr. Chenshu Wu",
    right: false,
  }, 
  {
    orgName: "NVIDIA",
    positionTitle: "Machine Learning Platform Architect Intern",
    timespan: "Jun - Aug 2022",
    description: "Manager: Mr. Xiaowei Li",
    right: false,
  }, 
  {
    orgName: "HKU",
    positionTitle: "Teaching Assistant",
    timespan: "Sep - Dec 2021",
    description: "Instructor: Dr. Tak Wing CHING",
    right: false,
  }, 
  {
    orgName: "HKU",
    positionTitle: "Research Assistant",
    timespan: "Jun - Aug 2021",
    description: "Supervisor: Prof. Chuan Wu",
    right: false,
  }, 
  {
    orgName: "HKU",
    positionTitle: "B.Eng. in Computer Science",
    timespan: "2019 - 2023",
    description: "First Class Honours",
    right: true,
  }, 
]
