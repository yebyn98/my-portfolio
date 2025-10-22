'use client';

import React, { useState } from 'react';
import { SegmentGroup } from '@ark-ui/react';
// import './Toggle.css';

export default function Toggle() {
   const [value, setValue] = useState('중급');
   const items = ['초급', '중급', '고급'];
   return (
      <SegmentGroup.Root value={value} onValueChange={details => setValue(details.value)} className="toggle-group">
         <SegmentGroup.Indicator className="indicator" />
         {items.map(item => (
            <SegmentGroup.Item key={item} value={item} className="item">
               <SegmentGroup.ItemText>{item}</SegmentGroup.ItemText>
               <SegmentGroup.ItemHiddenInput />
            </SegmentGroup.Item>
         ))}
      </SegmentGroup.Root>
   );
}
