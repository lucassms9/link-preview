import styled from "styled-components";

export const Image = styled.img`
  width: 300px;
  height: 150px;
  border-radius: 8px;
`;
export const ContainerImage = styled.div`
  margin: 10px 0px;
  position: absolute;
  bottom: 20px;
  left: 0px;
  border-radius: 8px;
  background-color: #aa3ced;
`;

export const Content = styled.div`
  position: relative;
  margin: 20px 0px;
`;

export const ContentImage = styled.div<{ showImage: boolean }>`
  transition: opacity 0.3s;
  opacity: ${({ showImage }) => (showImage ? 1 : 0)};
  padding: 8px;
`;

export const Link = styled.a`
  position: relative;
  &:after {
    content: "";
    width: 0;
    height: 2px;
    background: #aa3ced;
    position: absolute;
    bottom: -4px;
    left: 0;
    transition: width 0.4s ease;
  }
  &:hover::after {
    width: 100%;
  }
`;
