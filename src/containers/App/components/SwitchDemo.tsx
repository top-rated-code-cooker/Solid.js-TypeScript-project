import { Component, createSignal } from 'solid-js';
import { styled } from 'solid-styled-components';
import SwitchDemo from '../../../components/Switch';

const Wrapper = styled('div')`
  max-width: 1024px;

  h4 {
    padding-top: 40px;
  }
`;

const Switch: Component<any> = (props) => {
  const [isActive, setActive] = createSignal(true);
  const [isAcitve1, setIsActive1] = createSignal(false);
  const [isAcitve2, setIsActive2] = createSignal(true);
  const [isAcitve3, setIsActive3] = createSignal(false);
  const [isAcitve4, setIsActive4] = createSignal(true);
  
  return (
    <Wrapper>
      <h5 style={{ color: '#fff'}}>Switch All</h5>
      <SwitchDemo onChange={(e: any) => setActive(!isActive())} checked={isActive()} />
      <div style={{ display: 'flex', "justify-content": 'space-between' }}>
        <div>
          <h5 style={{ color: '#fff', "margin-top": '40px' }}>Large</h5>
          <SwitchDemo checked={isActive()} size="lg"/>
        </div>
        <div>
          <h5 style={{ color: '#fff', "margin-top": '40px' }}>Medium</h5>
          <SwitchDemo checked={isActive()} size="md"/>
        </div>
        <div>
          <h5 style={{ color: '#fff', "margin-top": '40px' }}>Small</h5>
          <SwitchDemo checked={isActive()} size="sm"/>
        </div>
        <div>
          <h5 style={{ color: '#fff', "margin-top": '40px' }}>Extra small</h5>
          <SwitchDemo checked={isActive()} size="xs"/>
        </div>
      </div>
      <h4 style={{ color: '#fff' }}>Switch with Labels</h4>
      <div style={{ display: 'flex', "justify-content": 'space-between'}}>
        <SwitchDemo
          size="lg"
          checkedLabel="Yes"
          unCheckedLabel="No"
          style={{ 'margin-right': '25px' }}
          checked={isAcitve1()}
          onChange={() => setIsActive1(!isAcitve1())}
        />
        <SwitchDemo
          size="md"
          checkedLabel="Yes"
          unCheckedLabel="No"
          style={{ 'margin-right': '25px' }}
          checked={isAcitve4()}
          onChange={() => setIsActive4(!isAcitve4())}
          />
        <SwitchDemo
          size="sm"
          checkedLabel="Yes"
          unCheckedLabel="No"
          style={{ 'margin-right': '25px' }}
          checked={isAcitve2()}
          onChange={() => setIsActive2(!isAcitve2())}
        />

        <SwitchDemo
          size="xs"
          checkedLabel="Yes"
          unCheckedLabel="No"
          checked={isAcitve3()}
          onChange={() => setIsActive3(!isAcitve3())}
        />
      </div>
      <div>
        <h4 style={{ color: '#fff', }}>Disabled</h4>
        <SwitchDemo
          checked={isActive()}
          size="sm"
          disabled
        />
      </div>
    </Wrapper>
  )
}


export default Switch;
