import { FC, useState } from 'react';
import { Switch } from '@headlessui/react';
import cn from 'classnames';

type ToggleProps = {
  onChange: () => void;
  size?: 'small' | 'medium' | 'large';
};

const Toggle: FC<ToggleProps> = ({ onChange, size = 'medium' }) => {
  const [enabled, setEnabled] = useState(false);

  const handleChange = () => {
    setEnabled((prevValue) => !prevValue);
    onChange();
  };

  return (
    <Switch
      checked={enabled}
      onChange={handleChange}
      className={cn(
        'relative inline-flex shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75',
        {
          'bg-secondary': enabled,
          'bg-secondary/70': !enabled,
          'h-5 w-9': size === 'small',
          'h-6 w-11': size === 'medium',
          'h-8 w-14': size === 'large',
        },
      )}
    >
      <span className="sr-only">Use setting</span>
      <span
        aria-hidden="true"
        className={cn(
          'pointer-events-none inline-block transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out',
          {
            'translate-x-4': enabled && size === 'small',
            'translate-x-5': enabled && size === 'medium',
            'translate-x-6': enabled && size === 'large',
            'translate-x-0': !enabled,
            'h-4 w-4': size === 'small',
            'h-5 w-5': size === 'medium',
            'h-7 w-7': size === 'large',
          },
        )}
      />
    </Switch>
  );
};

export default Toggle;
