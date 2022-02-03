import { format, parseISO } from 'date-fns';
import React from 'react';

type Props = {
  date: Date;
};

export const Timestamp: React.FC<Props> = ({ date }) => {
  return <p>{format(date, "do MMMM yyyy 'at' HH:mm")}</p>;
};
