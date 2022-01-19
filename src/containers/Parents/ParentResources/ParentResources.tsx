import { Component } from 'react';
import commonUtils from '../../../components/lib/commonUtils';
import DefaultParentResourcesContent from './ParentResourcesContent';

export class ParentResources extends Component {
  commonUtils: { setTitleAndScroll: (pageTitle: string, width: number) => void };

  constructor(props: Record<string, unknown>) {
    super(props);
    this.commonUtils = commonUtils;
  }

  componentDidMount(): void { this.commonUtils.setTitleAndScroll('Parent Resources', window.screen.width); }

  render(): JSX.Element {
    return (
      <>
        <div className="page-content">
          <DefaultParentResourcesContent />
        </div>
      </>
    );
  }
}

export default ParentResources;
