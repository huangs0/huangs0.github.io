import * as AvatarPrimitive from "@radix-ui/react-avatar"
import { LuGithub, LuLinkedin, LuMail  } from "react-icons/lu";
import Markdown  from "react-markdown";
import { basicInfo, summaryInfo } from "./config";
import Image from "next/image";
import AvatarImage from './avatar.jpg'

function AvatarPanel () {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center">
      {/* Avatar Image */}
      <AvatarPrimitive.Root data-slot="avatar"
        className="relative flex size-8 shrink-0 overflow-hidden rounded-full size-20 ring-2 sm:size-40"
      >
        <Image src={AvatarImage} alt="avatar" fill priority />
        {/* <AvatarImage asChild src="avatar_1000x1000.webp">
          <Image src={avatarImg} alt="avatar" fill priority />
        </AvatarImage>
        <AvatarFallback>LH</AvatarFallback> */}
      </AvatarPrimitive.Root>
      {/* Name and link section */}
      <div className="mt-4 flex flex-col items-center justify-center">
        <h1 className="text-2xl font-bold">{basicInfo.name}</h1>
        <p className="text-xl">{basicInfo.localName}</p>
        <p className="text-gray-700 font-mono">{basicInfo.rawEmail}</p>

        {/* Social media links */}
        <div className="mt-2 flex w-1/2 items-center justify-around">
          <a href={basicInfo.githubUrl} target="_blank" rel="noreferrer noopener">
            <LuGithub className="text-xl" />
          </a>
          <a href={basicInfo.linkedinUrl} target="_blank" rel="noreferrer noopener">
            <LuLinkedin className="text-xl" />
          </a>
          <a href={`mailto:${basicInfo.email}`}> 
            <LuMail className="text-xl" /> 
          </a>
          <a href={`${basicInfo.resumeUrl}`}> 
            <p className="text-xl">CV</p>
          </a>
        </div>
      </div>
    </div>
  );
};

function SummaryPanel () {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center lg:py-8 md:border-l-2">
      <div className="lg:mx-6 flex flex-col justify-between">
        <Markdown components={{
          p: ({ ...props }) => <p className="mt-4 max-w-prose" {...props} />,
          a: ({ ...props }) => <a className="underline text-blue-500" {...props} />
        }}>
          {summaryInfo}
        </Markdown>
      </div>
    </div>
  );
};

export function Info () {
  return (
    <div className="flex h-full w-full flex-1 flex-col items-center justify-center gap-4 sm:flex-row ">
      <div>
        <AvatarPanel />
      </div>

      <div>
        <SummaryPanel />
      </div>
    </div>
  );
};