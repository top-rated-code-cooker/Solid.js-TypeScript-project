import { Component, createSignal, For, Switch } from "solid-js";
import { headers, data } from "./data";
import Table from "../../components/Table";
import RenderButton from '../RenderButtons';
import { Tab, Tabs } from '../../components/Tabs';
import Scrollbar from '../../components/Scrollbar';
import Icon from '../../components/Icons';
import Button from '../../components/ButtonNew';
import RenderInputFields from './components/InputFields';
import RadioInput from './components/RadioInput';
import SwitchDemo from './components/SwitchDemo'
import Wrapper from "./styles";
import Checkbox from './components/Chekbox';
import Upload from './components/Upload';
import Grid from './components/Grid';

const App: Component = () => {
  const [isActive, setIsActive] = createSignal(7);
  const buttons = ['Extra Large', 'Large', 'Medium', 'Small', 'Extra Small'];

  return (
    <Wrapper>
      <div className="app__content">
        <Tabs activeTab={isActive} onChange={setIsActive}>
          <Tab label="Buttons">
            <Scrollbar style={{ 'max-height': `${window.innerHeight - 150}px` }}>
              <h5 style={{ color: '#fff' }}>Buttons Demo</h5>
              <hr />
              <div className="btn-group">
                <For each={buttons}>
                  {(item) => (
                    <div style={{ flex: 1 }}>
                      <h4>{item}</h4>
                    </div>
                  )}
                </For>
              </div>
              <RenderButton title="Default" />
              <RenderButton title="Primary" variant="primary" />
              <RenderButton title="Danger" variant="danger" />
              <RenderButton title="Ghost" variant="ghost" />
              <RenderButton title="Primary" variant="ghost-primary" />
              <RenderButton title="Danger" variant="ghost-danger" />
              <RenderButton title="Disabled" variant="disabled" />

              <h4 className="sub--heading" style={{ "font-size": '24px' }}>Button w/left icons</h4>

              <RenderButton title="Default" variant="default" iconBefore={<Icon color="#E9E9E9" />} />
              <RenderButton title="Primary" variant="primary" iconBefore={<Icon color="#E9E9E9" />} />
              <RenderButton title="Ghost" variant="ghost" iconBefore={<Icon color="#E9E9E9" />} />
              <RenderButton title="Primary" variant="ghost-primary" iconBefore={<Icon color="#0095F8" />} />

              <h4 className="sub--heading" style={{ "font-size": '24px' }}>Button w/right icons</h4>

              <RenderButton title="Default" variant="default" iconAfter={<Icon color="#E9E9E9" />} />
              <RenderButton title="Primary" variant="primary" iconAfter={<Icon color="#E9E9E9" />} />
              <RenderButton title="Ghost" variant="ghost" iconAfter={<Icon color="#E9E9E9" />} />
              <RenderButton title="Primary" variant="ghost-primary" iconAfter={<Icon color="#0095F8" />} />

              <h4 className="sub--heading" style={{ "font-size": '24px' }}>Loading button</h4>
              <RenderButton title="Loading" loading />

              <h4 className="sub--heading" style={{ "font-size": '24px', "margin-bottom": '20px' }}>Block button</h4>
              <div className="btn---demo">
                <Button block={true}>Block</Button>
                <Button variant="primary" block={true}>Block</Button>
                <Button variant="ghost" block={true}>Block</Button>
                <Button variant="ghost-primary" block={true}>Block</Button>
                <Button variant="ghost-danger" block={true}>Block</Button>
              </div>
            </Scrollbar>
          </Tab>
          <Tab label="Table">
            <h2 style={{ color: "#fff" }}>Table Demo</h2>
            <Table headers={headers} data={data} />
          </Tab>
          <Tab label="Input">
            <h2 style={{ color: "#fff" }}>Input Demo</h2>
            <RenderInputFields />
          </Tab>
          <Tab label="Radio">
            <h2 style={{ color: "#fff" }}>Radio Input Demo</h2>
            <RadioInput />
          </Tab>
          <Tab label="Switch">
            <h2 style={{ color: "#fff" }}>Switch Demo</h2>
            <SwitchDemo/>
          </Tab>
          <Tab label="Checkbox">
            <h2 style={{ color: "#fff" }}>Checkbox Demo</h2>
            <Checkbox />
          </Tab>
          <Tab label="Upload">
            <h2 style={{ color: "#fff" }}>Upload Demo</h2>
            <Upload />
          </Tab>
          <Tab label="Grid">
            <h2 style={{ color: "#fff" }} className="pt-7">Grid Demo</h2>
            <Grid />
          </Tab>
        </Tabs>
      </div>
    </Wrapper>
  );
};

export default App;
