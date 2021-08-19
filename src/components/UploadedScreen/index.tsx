import { FC } from 'react'
import styled from 'styled-components'
import FileItems from '../FileItems'

const UploadedContainer = styled.div``
interface UploadedScreenProps {
  files: File[]
}
const UploadedScreen: FC<UploadedScreenProps> = ({ files }) => {
  return (
    <UploadedContainer>
      <FileItems files={files} />
    </UploadedContainer>
  )
}
export default UploadedScreen
