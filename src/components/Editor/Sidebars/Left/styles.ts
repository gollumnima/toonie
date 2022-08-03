import styled from "styled-components";
import { ToolButton } from "../../../../styles/common";

export const Delete = styled(ToolButton)`
  background-color: black;
`;

export const ScaleContainer = styled.div`
  padding-top: 20px;
  display: flex;
  flex-direction: column;
  position: relative;
  align-items: center;
`;

const ZoomButton = styled.button`
  width: 30px;
  height: 30px;
  background: none;
`;

export const ZoomIn = styled(ZoomButton)``;

export const ScaleDegreeLine = styled.div`
  position: relative;
  height: 130px;
  border-right: 1px solid black;
  border-left: 1px solid black;
`;

export const ZoomOut = styled(ZoomButton)``;