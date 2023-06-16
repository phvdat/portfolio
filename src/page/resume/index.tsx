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
  const { title, subTitle, content, score } = props;
  return (
    <div css={listCardStyle.card}>
      <div css={listCardStyle.header}>
        <div>
          <h2 css={listCardStyle.titleCard}>{title}</h2>
          <span css={listCardStyle.subTitle}>{subTitle}</span>
        </div>
        <div css={listCardStyle.score}>
          <span>{score}</span>
        </div>
      </div>
      <div css={horizontalLine}></div>
      <p css={listCardStyle.content}>{content}</p>
    </div>
  );
};

const ListCard = ({ data }: ListCardProps) => {
  return (
    <ul css={listCardStyle.self}>
      {data.map((item, index) => (
        <li key={index} css={listCardStyle.item}>
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
        <div>
          <h2 css={resumeStyle.subTitle}>Education Quality</h2>
          <ListCard data={EDUCATION_LIST} />
        </div>
        <div>
          <h2 css={resumeStyle.subTitle}>Education Quality</h2>
          <ListCard data={EDUCATION_LIST} />
        </div>
      </div>
    </div>
  );
};

export default Resume;
