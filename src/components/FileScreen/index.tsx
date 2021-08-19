import { useState } from 'react'
import ErrorScreen from '../ErrorScreen'
import UploadedScreen from '../UploadedScreen'
import UploadScreen from '../UploadScreen'

const FileScreen = () => {
  const [showUpload, setShowUpload] = useState(true)
  const [error, setError] = useState(false)
  const [files, setFiles] = useState<File[]>([])
  return (
    <div>
      {showUpload ? (
        <UploadScreen
          setFiles={setFiles}
          setError={setError}
          setShow={setShowUpload}
        />
      ) : error ? (
        <ErrorScreen setError={setError} setShow={setShowUpload} />
      ) : (
        <UploadedScreen files={files} />
      )}
    </div>
  )
}
export default FileScreen
