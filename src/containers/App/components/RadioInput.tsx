import { createSignal } from 'solid-js';
import Radio, { RadioGroup } from '../../../components/Radio'


const RenderInputFields = () => {
  const [selected, setSelected] = createSignal('1');
  return (
    <div>
      <div className="item--radio">
        <Radio label="Selected" checked />
      </div>
      <div className="item--radio">
        <Radio label="Disabled" disabled />
      </div>

      <div className="item--radio">
        <h3 style={{ color: '#fcfcfc' }}>Radio Group</h3>
        <RadioGroup
          selected={selected()}
          onChange={(value: any) => setSelected(value)}
        >
          <Radio label="Option one" value="1" />
          <Radio label="Option one" value="2" />
          <Radio label="Option three" value="3" />
        </RadioGroup>
      </div>

      <div className="item--radio">
        <h3 style={{ color: '#fcfcfc' }}>Radio Group Inline</h3>
        <RadioGroup
          selected={selected()}
          onChange={(value: any) => setSelected(value)}
          inline
        >
          <Radio label="Option one" value="1" />
          <Radio label="Option two" value="2" />
          <Radio label="Option three" value="3" disabled />
        </RadioGroup>
      </div>
    </div>
  )
}

export default RenderInputFields;
