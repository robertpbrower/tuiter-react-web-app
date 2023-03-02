import React from 'react';
import ConditionalOutputIfElse
  from './conditional-output-if-else';
import ConditionalOutputInline
  from './conditional-output-inline';

function ConditionalOutput() {
  return (
    <>
      <ConditionalOutputIfElse />
      <ConditionalOutputInline />
    </>
  );
}
export default ConditionalOutput;
