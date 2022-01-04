import PlusIcon from '../../../components/Icons';
import Input from '../../../components/input';
import Wrapper from './inputStyles';

const RenderInputFields = () => {
  return (
    <Wrapper>
      <div>
        <Input placeholder="Input large" size='lg' />
      </div>
      <div>
        <Input placeholder="Input medium" size='md' />
      </div>
      <div>
        <Input placeholder="Input small" size='sm' />
      </div>
      <div>
        <Input placeholder="Input extra small" size='xs' />
      </div>
      <h3 style={{ color: '#fff'}}>Input with Label</h3>
      <div>
        <Input placeholder="Name" size='lg' label="Name" />
      </div>
      <div>
        <Input placeholder="Email" size='md' label="Email" />
      </div>
      <div>
        <Input placeholder="Address" size='sm' label="Address" />
      </div>
      <div>
        <Input placeholder="Website" size='xs' label="Website" />
      </div>

      <h3 style={{ color: '#fff'}}>Input with left icons</h3>
      <div>
        <Input placeholder="Name" size='lg' iconLeft={<PlusIcon color="#fff"/>} />
      </div>
      <div>
        <Input placeholder="Email" size='md' iconLeft={<PlusIcon color="#fff" />} />
      </div>
      <div>
        <Input placeholder="Address" size='sm' iconLeft={<PlusIcon color="#fff" />} />
      </div>
      <div>
        <Input placeholder="Website" size='xs' iconLeft={<PlusIcon color="#fff" />} />
      </div>

      <h3 style={{ color: '#fff'}}>Input with right icons</h3>
      <div>
        <Input placeholder="Name" size='lg' />
      </div>
      <div>
        <Input placeholder="Email" size='md' iconRight={<PlusIcon color="#fff" />} />
      </div>
      <div>
        <Input placeholder="Address" size='sm' iconRight={<PlusIcon color="#fff" />} />
      </div>
      <div>
        <Input placeholder="Website" size='xs' iconRight={<PlusIcon color="#fff" />} />
      </div>

      <h3 style={{ color: '#fff'}}>Disabled</h3>
      <div>
        <Input placeholder="Name" size='lg' disabled />
      </div>
      <div>
        <Input placeholder="Email" size='md' disabled />
      </div>
      <div>
        <Input placeholder="Address" size='sm' disabled />
      </div>
      <div>
        <Input placeholder="Website" size='xs' disabled />
      </div>
    </Wrapper>
  )
}

export default RenderInputFields;