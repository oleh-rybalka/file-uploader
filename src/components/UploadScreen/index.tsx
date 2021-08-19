import { FC } from 'react'
import styled from 'styled-components'

const UploadScreenContainer = styled.div`
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
const UploadButton = styled.label`
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
const HiddenButton = styled.input`
  width: 0.1px;
  height: 0.1px;
  opacity: 0;
  overflow: hidden;
  position: absolute;
  z-index: -1;
`
const Test = styled.span`
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
const ButtonContainer = styled.div`
  background: #87d534;
  width: 306px;
  height: 78px;
  display: flex;
  align-items: center;
  &:hover {
    background: #7ab63a;
  }
`
// interface FileProps {
//   FileList: {
//     lastModified: number
//     lastModifiedDate: Date
//     name: string
//     size: number
//     type: string
//   }
// }
interface UploadScreenProps {
  setShow: React.Dispatch<React.SetStateAction<boolean>>
  setError: React.Dispatch<React.SetStateAction<boolean>>
  setFiles: React.Dispatch<React.SetStateAction<File[]>>
}
const UploadScreen: FC<UploadScreenProps> = ({
  setShow,
  setError,
  setFiles,
}) => {
  function fileHandler(e: React.ChangeEvent<HTMLInputElement>) {
    if (!e.target.files) return
    if (e.target.files.length < 2 || e.target.files.length > 5) {
      setError(true)
    }
    let files = e.target.files
    setFiles(Array.from(files))
    setShow(false)
  }
  return (
    <>
      <Test>Test</Test>
      <UploadScreenContainer>
        <HiddenButton
          multiple={true}
          onChange={(e) => fileHandler(e)}
          type='file'
          id='file'
          name='file'
        />
        <ButtonContainer>
          <UploadButton htmlFor='file'>Add file</UploadButton>
        </ButtonContainer>
      </UploadScreenContainer>
    </>
  )
}
export default UploadScreen
