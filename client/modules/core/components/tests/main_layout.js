const {describe, it} = global;
import {expect} from 'chai';
import {shallow} from 'enzyme';
const MainLayout = require('../main_layout.coffee');
const Navigation = require('../navigation.coffee');

describe('core.components.main_layout', () => {
  it('should contain navigation', () => {
    const el = shallow(<MainLayout />);
    expect(el.contains(<Navigation />)).to.be.equal(true);
  });

  it('should render childrens', () => {
    const Comp = () => (<p>Hello</p>);
    const el = shallow(
      <MainLayout content={() => (<Comp />)}/>
    );

    expect(el.contains(<Comp />)).to.be.equal(true);
  });
});
