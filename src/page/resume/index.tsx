/** @jsxImportSource @emotion/react */

import { useState } from 'react';
import { resumeStyle } from './indexStyle';

enum Tab {
  Education = 1,
  ProfessionalSkills = 2,
  Experience = 3
}
const tab = [
  {
    label: 'Education',
    value: Tab.Education
  },
  {
    label: 'Professional Skills',
    value: Tab.ProfessionalSkills
  },
  {
    label: 'Experience',
    value: Tab.Experience
  }
];

const Resume = () => {
  const [activeTab, setActiveTab] = useState<Tab>(Tab.Education);
  return (
    <div css={resumeStyle.self}>
      <h1 css={resumeStyle.title}>My Resume</h1>
      <ul css={resumeStyle.tab}>
        {tab.map((item, index) => (
          <li
            data-active-tab={activeTab === item.value}
            key={index}
            onClick={() => setActiveTab(item.value)}
          >
            {item.label}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Resume;
