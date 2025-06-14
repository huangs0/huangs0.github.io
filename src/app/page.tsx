import { Info } from './info'
import { ListPanel } from './list';
import { VitaePanel } from './vitae';
import { newsInfo, awardsInfo } from './config';

export default function Home() {
  return (
    <main className="container mx-auto my-auto flex flex-col items-center">
      <section className="flex flex-col items-center justify-center px-4 mt-8 w-[96%] md:w-[84%] lg:w-[60%]">
        <Info />
      </section>
      <section className="flex flex-col items-center justify-center px-4 mt-8 w-[96%] md:w-[84%] lg:w-[60%]">
        <ListPanel name="News" components={newsInfo} />
      </section>
      <section className="flex flex-col items-center justify-center px-4 mt-8 w-[96%] md:w-[84%] lg:w-[60%]">
        <VitaePanel/>
      </section>
      <section className="flex flex-col items-center justify-center px-4 mt-8 w-[96%] md:w-[84%] lg:w-[60%]">
        <ListPanel name="Awards" components={awardsInfo} />
      </section>
      <footer className="flex flex-col items-center justify-center px-4 mt-8 mb-8 w-[96%] md:w-[84%] lg:w-[60%]">
        <div className="w-full mb-4 ">
          <h3 className="text-xl font-semibold w-full border-b-2 border-black pb-1">About the Page</h3>
          <p className='mt-6'>
            This page is built upon <a className="underline text-blue-500" href='https://nextjs.org'>Next.js</a>, 
            as inspired by my friend <a className="underline text-blue-500" href='https://me.louishhy.com'>{`Haoyu's homepage`}</a>. 
            You can find the source code of the page <a className="underline text-blue-500" href='https://github.com/huangs0/huangs0.github.io'>here</a>. 
           </p>
        </div>
      </footer>
    </main>
  );
}
