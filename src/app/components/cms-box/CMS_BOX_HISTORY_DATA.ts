export const CMS_BOX_HISTORY_DATA: CmsBoxHistory[] = [
  {
    date: '2022-06-15',
    author: 'Jim Lindberg',
    data: '<p>Starting text</p>',
  },
];

type CmsBoxHistory = {
  date: string;
  author: string;
  data: string;
};
