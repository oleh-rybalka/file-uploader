import styled from "styled-components"

export const ImageContainer = styled.div`
  img{
    max-height: 144px;
    max-width: 136px;
  }
`
export const ItemContainer = styled.div`
  width: 175px;
  height: 205.11px;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  border-radius: 10px;
  margin: 0 10px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  transition: 0.2s;
  &:hover {
    background: #dfdfdf;
  }
`
export const FileName = styled.span`
  font-family: 'Open Sans';
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 19px;
  letter-spacing: 0em;
  text-align: center;
  color: #49494a;
  margin-top: 15px;
`