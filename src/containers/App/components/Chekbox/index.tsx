import { createSignal } from 'solid-js';
import { styled } from 'solid-styled-components';
import Button from '../../../../components/ButtonNew';
import Checkbox, { CheckboxGroup } from '../../../../components/Checkbox';

const Wrapper = styled('div')`
  max-width: 1024px;
  
  .items {
    display: flex;
    justify-content: space-between;

  }

  h5 {
    color: ${(props) => props.theme.colors.primaryText};
  }
`;

const RenderCheckboxes = () => {
  const [values, setValue] = createSignal([]),
  [options] = createSignal([
    {
      label: 'Option 1',
      value: 1,
      disabled: true
    },
    {
      label: 'Option 2',
      value: 2,
      disabled: true
    },
    {
      label: 'Option 3',
      value: 3,
      disabled: true,
    }
  ]);

  const checkedAll = () => {
    const items: any[] = options().map((item: any) => item.value);
    // @ts-ignore
    setValue(values().length ? [] : items);
  }

  

  return (
    <Wrapper>
      <div className="items">
        <div>
          <h5>Normal</h5>
          <Checkbox label="Option 11" />
        </div>
        <div>
          <h5>Checked</h5>
          <Checkbox checked label="Option 2"/>
        </div>
        <div>
          <h5>disabled</h5>
          <Checkbox disabled label="Option 3"/>
        </div>
      </div>

      <h5>Checkbox Group</h5>
      <Checkbox
        label="Check All"
        onChange={() => checkedAll()}
        checked={values().length ? true : false}
      />

      
      <CheckboxGroup
        values={values()}
        onChange={(e: any) => console.log('working')}
        options={options()}
        inline

      />

      <CheckboxGroup
        values={values()}
        options={options().map((item: any) => ({ ...item, disabled: false }))}
        inline
      />
      <h5>Checkbox without label</h5>
      <Checkbox />
      <Checkbox checked  />
      <Checkbox disabled />

      <h5>Inline Checkbox without label</h5>
      <Checkbox inline />
      <Checkbox checked inline  />
      <Checkbox disabled inline />

    </Wrapper>
  )
};

export default RenderCheckboxes;
