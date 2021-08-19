import styled from 'styled-components'
import { Document, Page, pdfjs } from 'react-pdf'
import { truncateText } from '../../utils'
import { FC } from 'react'
import { useDrag, useDrop } from 'react-dnd'
import { ItemTypes } from '../FileItems'
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`
const ImageContainer = styled.div`
  img,
  canvas {
    max-height: 144px !important;
    max-width: 136px !important;
  }
`
const ItemContainer = styled.div`
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
const FileName = styled.span`
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
            <Page pageNumber={1} />
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
