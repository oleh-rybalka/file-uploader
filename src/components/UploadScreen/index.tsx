import { FC } from 'react'
import {
  Test,
  UploadScreenContainer,
  HiddenButton,
  ButtonContainer,
  UploadButton,
} from './styled'

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
          accept='image/jpeg,image/png,application/pdf'
        />
        <ButtonContainer>
          <UploadButton htmlFor='file'>Add file</UploadButton>
        </ButtonContainer>
      </UploadScreenContainer>
    </>
  )
}
export default UploadScreen
