import React from 'react';
import { shallow } from 'enzyme';
import { ParentResources } from '../../../src/containers/Parents/ParentResources/ParentResources';
import ParentResourcesContent from '../../../src/containers/Parents/ParentResources/ParentResourcesContent';

describe('About', () => {
  it('Renders the Parent Resources Page', () => {
    const wrapper = shallow(<ParentResources />);
    expect(wrapper.find(ParentResourcesContent).exists()).toBe(true);
    expect(wrapper.find(ParentResourcesContent).dive().find('main.parent-resources').exists()).toBe(true);
  });
});
