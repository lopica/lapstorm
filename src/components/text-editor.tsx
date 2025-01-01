'use client';
import { useState } from 'react';

export default function TextEditor() {
  const [content, setContent] = useState('Start editing here...');

  const handleInput = (e: React.FormEvent<HTMLParagraphElement>) => {
    setContent(e.currentTarget.textContent ?? '');
  };

  return (
    <p
      contentEditable
      onInput={handleInput}
      dangerouslySetInnerHTML={{ __html: content }}
    />
  );
}
