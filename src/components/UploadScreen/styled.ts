import styled from "styled-components"

export const UploadScreenContainer = styled.div`
  background: #ffffff;
  border: 8px solid #ededed;
  box-sizing: border-box;
  border-radius: 10px;
  width: 1200px;
  height: 333px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto;
`
export const UploadButton = styled.label`
  width: 306px;
  height: 78px;
  font-family: 'Open Sans';
  font-size: 30px;
  font-style: normal;
  font-weight: 600;
  line-height: 41px;
  letter-spacing: 0em;
  font-family: 'Open Sans';
  color: white;
  text-align: center;
  line-height: 78px;
`
export const HiddenButton = styled.input`
  width: 0.1px;
  height: 0.1px;
  opacity: 0;
  overflow: hidden;
  position: absolute;
  z-index: -1;
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
  margin: 32px 0;
`
export const ButtonContainer = styled.div`
  background: #87d534;
  width: 306px;
  height: 78px;
  display: flex;
  align-items: center;
  &:hover {
    background: #7ab63a;
  }
`