import { FC, useCallback, useState } from 'react'
import { useDrop } from 'react-dnd'
import update from 'immutability-helper'
import FileItem from '../FileItem'
import { FileItemsContainer, Test } from './styled'

interface UploadedScreenProps {
  files: File[]
}
export const ItemTypes = {
  FILE: 'file',
}

export interface ContainerState {
  cards: any[]
}

const FileItems: FC<UploadedScreenProps> = ({ files }) => {
  const ITEMS = files.map((file, i) => {
    return { id: i + 1, file: file }
  })
  const [fileCards, setFileCards] = useState(ITEMS)
  const findFile = useCallback(
    (id: string) => {
      const note = fileCards!.filter((n) => `${n.id}` === id)[0]
      return {
        note,
        index: fileCards!.indexOf(note),
      }
    },
    [fileCards]
  )

  const moveFile = useCallback(
    (id: string, atIndex: number) => {
      const { note, index } = findFile(id)
      setFileCards(
        update(fileCards, {
          $splice: [
            [index, 1],
            [atIndex, 0, note],
          ],
        })
      )
    },
    [findFile, fileCards, setFileCards]
  )
  const [, drop] = useDrop(() => ({ accept: ItemTypes.FILE }))
  return (
    <>
      <Test>Test</Test>
      <FileItemsContainer ref={drop}>
        {fileCards.map((fileCard, i) => (
          <FileItem
            file={fileCard.file}
            key={i}
            id={`${fileCard.id}`}
            moveFile={moveFile}
            findFile={findFile}
          />
        ))}
      </FileItemsContainer>
    </>
  )
}
export default FileItems
