import { Document, Page, pdfjs } from 'react-pdf'
import { truncateText } from '../../utils'
import { FC } from 'react'
import { useDrag, useDrop } from 'react-dnd'
import { ItemTypes } from '../FileItems'
import { FileName, ImageContainer, ItemContainer } from './styled'
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`

interface FileItemProps {
  file: File
  id: string
  moveFile: (id: string, to: number) => void
  findFile: (id: string) => { index: number }
}
interface Item {
  id: string
  originalIndex: number
}

const FileItem: FC<FileItemProps> = ({ file, id, moveFile, findFile }) => {
  function createFileSrc(file: File) {
    const fileSrc = URL.createObjectURL(file)
    return fileSrc
  }

  const originalIndex = findFile(id).index
  const [{ isDragging }, drag] = useDrag(
    () => ({
      type: ItemTypes.FILE,
      item: { id, originalIndex },
      collect: (monitor) => ({
        isDragging: monitor.isDragging(),
      }),
      end: (item, monitor) => {
        const { id: droppedId, originalIndex } = item

        const didDrop = monitor.didDrop()
        if (!didDrop) {
          moveFile(droppedId, originalIndex)
        }
      },
    }),
    [id, originalIndex, moveFile]
  )

  const [, drop] = useDrop(
    () => ({
      accept: ItemTypes.FILE,
      canDrop: () => false,
      hover({ id: draggedId }: Item) {
        if (draggedId !== id) {
          const { index: overIndex } = findFile(id)
          moveFile(draggedId, overIndex)
        }
      },
    }),
    [findFile, moveFile]
  )

  const opacity = isDragging ? 0.5 : 1
  return (
    <ItemContainer
      ref={(node) => drag(drop(node))}
      style={{ opacity }}
      draggable='true'
    >
      <ImageContainer>
        {file.type === 'application/pdf' ? (
          <Document file={createFileSrc(file)}>
            <Page height={144} width={136} pageNumber={1} />
          </Document>
        ) : (
          <img src={createFileSrc(file)} alt='img' />
        )}
      </ImageContainer>
      <FileName>{truncateText(file.name)}</FileName>
    </ItemContainer>
  )
}
export default FileItem
