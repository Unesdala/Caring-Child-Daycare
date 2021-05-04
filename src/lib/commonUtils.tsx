const setTitleAndScroll = (pageTitle: string, width?: number): void => {
  if (pageTitle !== '') pageTitle += ' | ';// eslint-disable-line no-param-reassign
  document.title = `${pageTitle}Caring Child Daycare`;
  let getClass = 'page-content';
  if (width !== undefined && width < 1004) getClass = 'navbar';
  const top = document.getElementsByClassName(getClass)[0];
  if (top !== undefined && typeof top.scrollIntoView === 'function') top.scrollIntoView();
};

export default { setTitleAndScroll };
