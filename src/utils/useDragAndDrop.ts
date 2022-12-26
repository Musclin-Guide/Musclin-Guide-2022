import { useState, useEffect, useCallback } from 'react';

interface DragAndDropProps {
  DropFileHandler: (e: DragEvent) => void;
  inputLabelRef: React.MutableRefObject<HTMLLabelElement | null>;
}

// 드롭다운 hooks
export const useDragAndDrop = ({
  DropFileHandler,
  inputLabelRef,
}: DragAndDropProps) => {
  const [isDragging, setIsDragging] = useState(false);
  const handleDragIn = useCallback((e: DragEvent) => {
    // 브라우저 기본 이벤트 생성 방지
    e.preventDefault();
    e.stopPropagation();
  }, []);

  const handleDragOut = useCallback((e: DragEvent) => {
    e.preventDefault();
    e.stopPropagation();

    setIsDragging(false);
  }, []);

  const handleDragOver = useCallback((e: DragEvent) => {
    e.preventDefault();
    e.stopPropagation();

    const dataTransfer = e.dataTransfer as DataTransfer;

    if (dataTransfer.files) {
      setIsDragging(true);
    }
  }, []);

  const handleDrop = useCallback(
    (e: DragEvent) => {
      e.preventDefault();
      e.stopPropagation();
      DropFileHandler(e);
      setIsDragging(false);
    },
    [DropFileHandler]
  );

  // RefLabel에 드롭다운 이벤트 적용
  const initDragEvents = useCallback(() => {
    if (inputLabelRef.current !== null) {
      inputLabelRef.current.addEventListener('dragenter', handleDragIn);
      inputLabelRef.current.addEventListener('dragleave', handleDragOut);
      inputLabelRef.current.addEventListener('dragover', handleDragOver);
      inputLabelRef.current.addEventListener('drop', handleDrop);
    }
  }, [inputLabelRef, handleDragIn, handleDragOut, handleDragOver, handleDrop]);

  const resetDragEvents = useCallback(() => {
    if (inputLabelRef.current !== null) {
      inputLabelRef.current.removeEventListener('dragenter', handleDragIn);
      inputLabelRef.current.removeEventListener('dragleave', handleDragOut);
      inputLabelRef.current.removeEventListener('dragover', handleDragOver);
      inputLabelRef.current.removeEventListener('drop', handleDrop);
    }
  }, [inputLabelRef, handleDragIn, handleDragOut, handleDragOver, handleDrop]);

  useEffect(() => {
    initDragEvents();
    return () => resetDragEvents();
  }, [initDragEvents, resetDragEvents]);
  return isDragging;
};
