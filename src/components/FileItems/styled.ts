import styled from "styled-components"

export const FileItemsContainer = styled.div`
  margin: auto;
  width: 1200px;
  height: 325px;
  background: #eaebec;
  border: 5px solid #dddddd;
  box-sizing: border-box;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  img,
  canvas {
    max-height: 144px !important;
    max-width: 136px !important;
  }
`

export const Test = styled.span`
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: bold;
  font-size: 32px;
  line-height: 44px;
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  color: #49494a;
  margin-top: 32px;
  margin-bottom: 40px;
`