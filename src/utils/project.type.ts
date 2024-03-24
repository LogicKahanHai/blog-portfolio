export type ProjectDay = {
  _id: string;
  date: string;
  dayContent: ProjectDayContent[] | [];
};

export type ProjectDayContent = {
  _id: string;
  markdown: string;
  dateTime: string;
};

export type Project = {
  id: string;
  title: string;
  teaser: string;
  content: ProjectDay[] | [];
  dateTime: string;
  tags: string[];
};
