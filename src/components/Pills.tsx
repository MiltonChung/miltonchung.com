import * as React from 'react';
import { FComponent } from '../types/commons';

type PillsProps = {
  pills: string[];
  color?: string;
};

const Pills: FComponent<PillsProps> = ({ pills, color }) => {
  return (
    <div className="pills-container">
      {pills.map(pill => (
        <span
          className="pill"
          key={pill}
          style={{
            backgroundColor: color
          }}>
          {pill}
        </span>
      ))}
    </div>
  );
};

export { Pills };
