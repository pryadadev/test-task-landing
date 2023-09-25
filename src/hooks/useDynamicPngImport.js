import { useEffect, useRef, useState } from "react";

export const useDynamicPngImport = (imageName) => {
  const importedImageRef = useRef();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();

  useEffect(() => {
    setLoading(true);

    const importPngImage = async () => {

      try {
        importedImageRef.current = (
          await import(`@assets/${imageName}.png`)
        ).ReactComponent;
      } catch (err) {
        setError(err);
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    importPngImage();
  }, [imageName]);

  return { error, loading, PngImage: importedImageRef.current };
};
