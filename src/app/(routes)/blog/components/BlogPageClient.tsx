'use client';

import React, { useState } from 'react';
import { BlogHeroSection } from './BlogHeroSection';
import { BlogTopicsFilterSection, TopicType } from './BlogTopicsFilterSection';
import { BlogArticlesGridSection } from './BlogArticlesGridSection';
import { BlogAuthorBioSection } from './BlogAuthorBioSection';
import { BlogFinalCTASection } from './BlogFinalCTASection';

export const BlogPageClient: React.FC = () => {
  const [selectedTopic, setSelectedTopic] = useState<TopicType>('All');

  return (
    <div className="w-full flex-1 flex flex-col overflow-x-clip bg-[#0A111F]">
      {/* 1. Blog Hero & Featured Article Card (Screenshot 1) */}
      <BlogHeroSection />

      {/* 2. Topic Filter Pills (Screenshot 3) */}
      <BlogTopicsFilterSection
        selectedTopic={selectedTopic}
        onSelectTopic={setSelectedTopic}
      />

      {/* 3. All Articles 3-Column Grid (Screenshot 2) */}
      <BlogArticlesGridSection selectedTopic={selectedTopic} />

      {/* 4. Written By Author Bio Card (Screenshot 4) */}
      <BlogAuthorBioSection />

      {/* 5. Need Security, Not Just Information? Final CTA (Screenshot 5) */}
      <BlogFinalCTASection />
    </div>
  );
};

export default BlogPageClient;
