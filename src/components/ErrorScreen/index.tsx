import { FC } from 'react'
import { ErrorScreenContainer, OkButton, Text, Error } from './styled'

interface ErrorScreenProps {
  setShow: React.Dispatch<React.SetStateAction<boolean>>
  setError: React.Dispatch<React.SetStateAction<boolean>>
}
const ErrorScreen: FC<ErrorScreenProps> = ({ setShow, setError }) => {
  function clickHandler() {
    setError(false)
    setShow(true)
  }
  return (
    <ErrorScreenContainer>
      <Error>Error</Error>
      <Text>Please add not less than 2 and not more than 5 files.</Text>
      <OkButton onClick={clickHandler}>OK</OkButton>
    </ErrorScreenContainer>
  )
}
export default ErrorScreen
