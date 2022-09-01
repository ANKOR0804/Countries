import React, {FC} from 'react';
import styled from 'styled-components';

const Loader:FC = () => {
    return (
        <LoaderWheel>

        </LoaderWheel>
    );
};

export default Loader;

const LoaderWheel = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  border: 3px dashed rgba(43, 57, 69, 1);
  animation: rotate 5s infinite linear;
  
  @keyframes rotate {
    from {
      transform: rotate(0deg) scale(1);
    }
    to {
      transform: rotate(360deg) scale(1.5);
    }
  }
`