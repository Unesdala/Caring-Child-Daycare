import CommonUtils from '../../src/lib/commonUtils';

describe('commonUtils', () => {
  it('calls scrollIntoView', () => {
    const scrollIntoViewMock = jest.fn();
    window.HTMLElement.prototype.scrollIntoView = scrollIntoViewMock;
    document.body.innerHTML = '<div class="page-content"></div>';
    CommonUtils.setTitleAndScroll('home', 1200);
    expect(scrollIntoViewMock).toHaveBeenCalled();
  });
});
