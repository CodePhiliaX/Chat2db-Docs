import React from 'react';

const githubUsernames = [
  'shanhexi',
  'fanjinyu-fjy',
  'jipengfei-jpf',
  'zhuangjiaju',
  'chenxian01',
];

export default function CommunitySection() {
  return (
    <section className="no-underline-links">
      <div className="mx-auto flex w-full flex-col items-center justify-center bg-gradient-to-b from-[#262626] to-black px-4 py-16  text-white dark:from-zinc-200/90 dark:to-white dark:text-zinc-700">
        <h2 className="text-3xl">
          联系 <span className="text-primary-100">我们</span>
        </h2>
        <p className="mb-10 text-zinc-500" align="center">
          <a><img src="https://github.com/chat2db/Chat2DB/assets/22975773/e4239d29-1426-4361-bf57-f1b0b67d1281" width="20%"/></a>
          <br/>
          微信：yxccw132 钉钉：9135032392
        </p>
        <div className="mx-auto  flex flex-wrap -space-x-1.5">
          {githubUsernames.map((username) => (
            <img
              key={username}
              src={`https://github.com/${username}.png?size=80`}
              alt={`User ${username}`}
              loading="lazy"
              className="h-6 w-6 rounded-full border-2 border-solid border-white transition hover:-translate-y-2 hover:scale-150 lg:h-12 lg:w-12"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
