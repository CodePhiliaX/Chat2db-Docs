import React from 'react';
import Layout from '@theme/Layout';

import HeroSection from '../components/homepage/HeroSection';
import SDKsSection from '../components/homepage/SDKsSection';
import APIReferenceSection from '../components/homepage/APIReferenceSection';
import CommunitySection from '../components/homepage/CommunitySection';
import HomeFooter from '../components/homepage/HomeFooter';
import ResourcesSection from '../components/homepage/ResourcesSection';
import HelpSection from '../components/homepage/HelpSection';
import Head from '@docusaurus/Head';

export default function Homepage() {
  return (
    <Layout
      description="测试测试测试🚀智能的通用数据库工具和SQL客户端（General-purpose database tools and SQL clients with AI (ChatGPT)）,支持MySQL、PostgreSQL、Oracle、SQLServer、ClickHouse、OceanBase、H2、SQLite等等 "
      wrapperClassName="homepage flex flex-col"
      noFooter
    >
      <Head>
        <link rel="prefetch" href="/assets/css/elements.min.css" />
      </Head>
      <HeroSection />
      <SDKsSection />

      <div className="relative">
        <APIReferenceSection />
        <div className="absolute top-1/2 bottom-0 -z-10 w-full bg-secondary-800 dark:bg-secondary-900"></div>
        <div className="absolute top-0 bottom-1/2 -z-10 w-full bg-secondary-1000"></div>
      </div>

      {/*<div className="z-0 bg-secondary-800 dark:bg-secondary-900">*/}
      {/*  <ResourcesSection />*/}
      {/*  <HelpSection className="-mb-48" />*/}
      {/*</div>*/}

      <CommunitySection />

      <HomeFooter />
    </Layout>
  );
}
