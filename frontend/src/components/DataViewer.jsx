import React from 'react';

export default function DataViewer({ data }) {
  return (
    <pre>
        {JSON.stringify(data, null, 2)}
    </pre>
  );
}
