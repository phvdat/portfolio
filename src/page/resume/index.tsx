/** @jsxImportSource @emotion/react */

import { useState } from 'react';
import { listCardStyle, resumeStyle } from './indexStyle';
import { horizontalLine } from 'style/common';
import { EDUCATION_LIST, EducationType } from 'constants/resume';

interface ListCardProps {
  data: EducationType[];
}

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

const Card = (props: EducationType) => {
  const { title, subTitle, content } = props;
  return (
    <div css={listCardStyle.card}>
      <h2>{title}</h2>
      <span>{subTitle}</span>
      <div css={horizontalLine}></div>
      <p>{content}</p>
    </div>
  );
};

const ListCard = ({ data }: ListCardProps) => {
  return (
    <ul css={listCardStyle.self}>
      {data.map((item, index) => (
        <li key={index}>
          <Card {...item} />
        </li>
      ))}
    </ul>
  );
};
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

      <div css={resumeStyle.container}>
        <ListCard data={EDUCATION_LIST} />
      </div>
    </div>
  );
};

export default Resume;
