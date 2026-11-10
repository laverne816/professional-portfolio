import React, { useEffect } from 'react';
import { Certificate } from '../types.ts';
import { X, Download, ExternalLink } from 'lucide-react';

interface CertificateModalProps {
  certificate: Certificate | null;
  onClose: () => void;
}

export const CertificateModal: React.FC<CertificateModalProps> = ({ certificate, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!certificate) return null;

  const certAssetUrl = certificate.previewImage || `/certificates/${certificate.id}.svg`;
  const pdfDownloadUrl = certificate.pdfUrl || `/certificates/${certificate.id}.pdf`;
  const downloadFileName = certificate.downloadName || `Laverne_Rollison_${certificate.title.replace(/\s+/g, '_')}.pdf`;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-[#161513]/70 dark:bg-[#0E0D0C]/80 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl max-h-[92vh] flex flex-col bg-[#FFFFFF] dark:bg-[#1E1C19] text-[#161513] dark:text-[#F5F2EC] border border-[#E2DDD5] dark:border-[#36332E] shadow-2xl rounded-sm overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Bar */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-[#E2DDD5] dark:border-[#36332E] bg-[#F3EFEA] dark:bg-[#19090C]">
          <div>
            <span className="font-mono text-[10px] text-[#C28864] dark:text-[#C28864] tracking-[0.2em] uppercase font-bold block">
              {certificate.issuer}
            </span>
            <h3 className="font-serif text-lg sm:text-xl text-[#161513] dark:text-[#F5F2EC] font-normal line-clamp-1">
              {certificate.title}
            </h3>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-1.5 text-[#706A62] dark:text-[#A0988E] hover:text-[#161513] dark:hover:text-[#F5F2EC] transition-colors rounded-sm hover:bg-[#EAE4DA] dark:hover:bg-[#24221E]"
            aria-label="Close certificate viewer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Certificate Display Area: Large, High-Resolution, Readable */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 bg-[#FAF8F5] dark:bg-[#161513] flex items-center justify-center">
          <div className="w-full max-w-3xl bg-[#FAF8F5] p-2 sm:p-4 rounded-sm shadow-xl border border-[#DDD6CA]">
            <img
              src={certAssetUrl}
              alt={`${certificate.title} Certificate`}
              className="w-full h-auto object-contain select-none"
            />
          </div>
        </div>

        {/* Modal Footer Actions */}
        <div className="px-5 py-4 bg-[#F3EFEA] dark:bg-[#19090C] border-t border-[#E2DDD5] dark:border-[#36332E] flex flex-wrap items-center justify-between gap-3">
          <div className="font-mono text-xs text-[#706A62] dark:text-[#A0988E]">
            <span>COMPLETED: </span>
            <span className="text-[#161513] dark:text-[#F5F2EC] font-semibold">{certificate.date}</span>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={pdfDownloadUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-mono text-[#C28864] dark:text-[#A0988E] hover:text-[#161513] dark:hover:text-[#F5F2EC] border border-[#A0988E] dark:border-[#36332E] hover:border-[#C28864] dark:hover:border-[#C28864] transition-colors uppercase tracking-wider rounded-sm"
              title="Open full document in new tab"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span>VIEW FULL</span>
            </a>

            <a
              href={pdfDownloadUrl}
              download={downloadFileName}
              className="inline-flex items-center gap-2 px-4 py-2 bg-[#C28864] hover:bg-[#C28864] text-[#FAF8F5] dark:bg-[#C28864] dark:hover:bg-[#F5F2EC] dark:text-[#161513] font-mono text-xs font-bold tracking-wider uppercase transition-colors shadow-sm rounded-sm active:scale-95"
              title="Download original certificate document"
            >
              <Download className="w-3.5 h-3.5" />
              <span>DOWNLOAD CERTIFICATE</span>
            </a>

            <button
              type="button"
              onClick={onClose}
              className="px-3.5 py-2 text-xs font-mono text-[#706A62] dark:text-[#A0988E] hover:text-[#161513] dark:hover:text-[#F5F2EC] uppercase tracking-wider transition-colors"
            >
              CLOSE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
