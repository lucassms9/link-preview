import styled from 'styled-components'

export const ContainerImage = styled.div`
  margin: 10px 0px;
  position: absolute;
  bottom: 20px;
  left: 0px; 
  width: 250px;
`;

export const Content = styled.div`
  position: relative;
  margin: 20px 0px;
`;

export const ContentImage = styled.div<{ showImage: boolean }>`
  transition: opacity 0.3s;
  opacity: ${({ showImage }) => (showImage ? 1 : 0)};
`;

export const Link = styled.a`
  position: relative;
  &:after {
    content: "";
    width: 0;
    height: 4px;
    background: #aa3ced;
    position: absolute;
    bottom: -4px;
    left: 0;
    -webkit-transition: width 0.2s ease;
    transition: width 0.2s ease;
  }
  &:hover::after {
    width: 100%;
  }
`;

