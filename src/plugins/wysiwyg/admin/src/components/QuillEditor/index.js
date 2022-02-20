import React from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import styled from 'styled-components';
import { Box } from '@strapi/design-system/Box';

const Wrapper = styled(Box)`
  * {
    font: revert;
    line-height: 139%;
  }
`;

const Editor = ({ onChange, name, value }) => {
  const modules = {
    toolbar: [
      [{ header: '1' }, { header: '2' }],
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      [
        { list: 'ordered' },
        { list: 'bullet' },
        { indent: '-1' },
        { indent: '+1' },
      ],
      ['link', 'image'],
    ],
  };

  return (
    <Wrapper>
      <ReactQuill
        theme="snow"
        value={value}
        modules={modules}
        onChange={(content, event, editor) => {
          onChange({ target: { name, value: content } });
        }}
      />
    </Wrapper>
  );
};

export default Editor;