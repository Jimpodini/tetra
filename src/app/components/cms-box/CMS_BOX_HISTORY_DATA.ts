export const CMS_BOX_HISTORY_DATA: CmsBoxHistory[] = [
  {
    date: '2022-06-15',
    author: 'Jim Lindberg',
    from: '<h1>hej</h1>',
    to: '<h1>Hejsan</h1>',
  },
];

type CmsBoxHistory = {
  date: string;
  author: string;
  from: string;
  to: string;
};
