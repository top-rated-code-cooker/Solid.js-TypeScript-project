import { Component, For } from 'solid-js';
import Button from '../components/ButtonNew';

const RenderButton: Component<any> = (props) => {
  const buttonSizes = ['xl', 'lg', 'md', 'sm', 'xs'];
  return (
    <div>
      <div>
        <div className="btn-group">
          <For each={buttonSizes}>
            {(size: string) => (
              <div
                style={{
                  flex: 1,
                  "padding-bottom": '20px'
                }}
              >
                <Button
                  variant={props.variant}
                  size={size}
                  iconBefore={props.iconBefore}
                  iconAfter={props.iconAfter}
                  loading={props.loading}
                >
                  {props.title}
                </Button>
              </div>
            )}
          </For>
        </div>
      </div>
    </div>
  )
}

export default RenderButton;
