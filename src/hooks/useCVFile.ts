import { useState, useEffect } from 'react';

const CANDIDATE_CV_PATHS = [
  '/cv.pdf',
  '/Laverne_Rollison_CV.pdf',
  '/Laverne%20Rollison%20.pdf',
  '/Laverne-Rollison-CV.pdf',
  '/CV.pdf',
  '/assets/cv.pdf',
  '/assets/Laverne_Rollison_CV.pdf'
];

export interface CVFileInfo {
  url: string;
  filename: string;
  isAvailable: boolean;
  isLoading: boolean;
  setCustomFile: (file: File) => void;
}

export function useCVFile(): CVFileInfo {
  const [url, setUrl] = useState<string>('/cv.pdf');
  const [filename, setFilename] = useState<string>('Laverne_Rollison_CV.pdf');
  const [isAvailable, setIsAvailable] = useState<boolean>(true);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    let isMounted = true;

    async function checkCVFiles() {
      for (const path of CANDIDATE_CV_PATHS) {
        try {
          const res = await fetch(path, { method: 'HEAD' });
          const contentType = res.headers.get('content-type') || '';
          if (res.ok && (contentType.includes('application/pdf') || contentType.includes('binary') || contentType.includes('octet-stream'))) {
            if (isMounted) {
              setUrl(path);
              const namePart = path.split('/').pop() || 'Laverne_Rollison_CV.pdf';
              setFilename(decodeURIComponent(namePart));
              setIsAvailable(true);
            }
            return;
          }
        } catch {
          // ignore
        }
      }

      if (isMounted) {
        setUrl('/cv.pdf');
        setFilename('Laverne_Rollison_CV.pdf');
        setIsAvailable(true);
      }
    }

    checkCVFiles();

    return () => {
      isMounted = false;
    };
  }, []);

  const setCustomFile = (file: File) => {
    const objectUrl = URL.createObjectURL(file);
    setUrl(objectUrl);
    setFilename(file.name || 'Laverne_Rollison_CV.pdf');
    setIsAvailable(true);
  };

  return {
    url,
    filename,
    isAvailable,
    isLoading,
    setCustomFile
  };
}
