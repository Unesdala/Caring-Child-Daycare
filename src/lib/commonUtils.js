const setTitleAndScroll = (pageTitle) => {
  if (pageTitle !== '') pageTitle += ' | ';// eslint-disable-line no-param-reassign
  document.title = `${pageTitle}Caring Child Daycare`;
  const top = document.getElementsByClassName('menu')[0];
  if (top !== undefined && top.scrollIntoView === 'function') top.scrollIntoView();
};

export default { setTitleAndScroll };
