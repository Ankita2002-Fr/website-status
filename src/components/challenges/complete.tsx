import { FC } from 'react';
import Card from '@/components/Card/index';
import details from '@/components/challenges/details';
import participantsDetails from '@/components/challenges/participants';

type CompleteProps = {
  content: {
    id: number;
    title: string;
    level: string;
    start_date: string;
    end_date: string;
    participants: {
      user_id: string;
      first_name: string;
      last_name: string;
      yoe: number;
      company: string;
      designation: string;
      img: string;
      github_id: string;
      linkedin_id: string;
      twitter_id: string;
      instagram_id: string;
      is_member: number;
      rds_member_id: string;
    }[];
    is_active: number;
    is_user_subscribed: number;
  };
};

const Complete: FC<CompleteProps> = ({ content }) => (
  <Card
    title={{ text: content.title }}
    data={details(content)}
    participants={participantsDetails(content)}
    key={content.title}
  />
);

export default Complete;
