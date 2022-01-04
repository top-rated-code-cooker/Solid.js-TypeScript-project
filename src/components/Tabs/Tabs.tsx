import {
  Component,
  Suspense,
  Switch,
  Match,
  For,
} from "solid-js";
import { parseTabList } from "./helper";
import { TabPane, TabContent } from "./styles";

interface IProps {
  activeTab: any;
  onChange: any;
  children: any;
}

const Tabs: Component<IProps> = (props) => {
  const tabs: any[] = parseTabList(props.children);
  return (
    <>
      <TabPane>
        <For each={tabs}>
          {(item: any, index: any) => (
            <li
              classList={{ selected: props.activeTab() === index() }}
              onClick={() => props.onChange(index())}
            >
              {item.label}
            </li>
          )}
        </For>
      </TabPane>
      <TabContent>
        <Suspense fallback={() => "Loading Data..."}>
          <Switch>
            <For each={tabs}>
              {(item: any, index: any) => (
                <Match when={props.activeTab() === index()}>
                  {item.content}
                </Match>
              )}
            </For>
          </Switch>
        </Suspense>
      </TabContent>
    </>
  );
};

export default Tabs;
