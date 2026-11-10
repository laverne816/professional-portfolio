import React, { useState } from 'react';
import { Certificate } from '../types.ts';
import { CERTIFICATES_DATA } from '../data/portfolioData.ts';
import { Eye, Download, ExternalLink, Award, CheckCircle2 } from 'lucide-react';

interface CertificatesSectionProps {
  onSelectCertificate?: (cert: Certificate) => void;
}

export const CertificatesSection: React.FC<CertificatesSectionProps> = ({ onSelectCertificate }) => {
  const [activeFilter, setActiveFilter] = useState<'ALL' | 'WEB' | 'AI'>('ALL');

  const filteredCerts = CERTIFICATES_DATA.filter((cert) => {
    if (activeFilter === 'ALL') return true;
    if (activeFilter === 'WEB') {
      return cert.category === 'Web Development' || cert.issuer === 'Meta' || cert.issuer === 'University of Michigan';
    }
    if (activeFilter === 'AI') {
      return cert.category !== 'Web Development' && cert.issuer !== 'Meta' && cert.issuer !== 'University of Michigan';
    }
    return true;
  });

  const webCount = CERTIFICATES_DATA.filter(
    (c) => c.category === 'Web Development' || c.issuer === 'Meta' || c.issuer === 'University of Michigan'
  ).length;
  const aiCount = CERTIFICATES_DATA.length - webCount;

  return (
    <section
      id="certificates"
      className="py-24 sm:py-32 px-4 sm:px-6 lg:px-12 transition-colors duration-500 relative"
      style={{
        backgroundColor: 'var(--c-bg-subtle)',
        color: 'var(--c-text)',
      }}
    >
      <div className="max-w-7xl mx-auto space-y-12 sm:space-y-16">
        {/* Section Header */}
        <div
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b"
          style={{ borderColor: 'var(--c-card-border)' }}
        >
          <div>
            <span
              className="font-mono text-xs tracking-[0.28em] uppercase font-bold block mb-3"
              style={{ color: 'var(--c-accent)' }}
            >
              06 &middot; CONTINUOUS LEARNING
            </span>
            <h2
              className="font-heading text-6xl sm:text-7xl md:text-8xl tracking-tight leading-none"
              style={{ color: 'var(--c-text)' }}
            >
              VERIFIED CREDENTIALS
            </h2>
            <p
              className="mt-3 font-sans text-xs sm:text-sm max-w-xl"
              style={{ color: 'var(--c-text-muted)' }}
            >
              16 verified credentials from Meta, University of Michigan, Stanford Online, DeepLearning.AI, IBM, AWS &amp; Google Cloud.
            </p>
          </div>

          {/* Interactive Filter Pills */}
          <div className="flex flex-wrap items-center gap-2">
            <button
              type="button"
              onClick={() => setActiveFilter('ALL')}
              className="px-4 sm:px-5 py-2 rounded-full font-heading text-xs sm:text-sm tracking-wider uppercase transition-all duration-200 cursor-pointer border"
              style={{
                backgroundColor: activeFilter === 'ALL' ? 'var(--c-text)' : 'var(--c-card)',
                color: activeFilter === 'ALL' ? 'var(--c-bg)' : 'var(--c-text)',
                borderColor: 'var(--c-card-border)',
              }}
            >
              ALL ({CERTIFICATES_DATA.length})
            </button>
            <button
              type="button"
              onClick={() => setActiveFilter('WEB')}
              className="px-4 sm:px-5 py-2 rounded-full font-heading text-xs sm:text-sm tracking-wider uppercase transition-all duration-200 cursor-pointer border"
              style={{
                backgroundColor: activeFilter === 'WEB' ? 'var(--c-text)' : 'var(--c-card)',
                color: activeFilter === 'WEB' ? 'var(--c-bg)' : 'var(--c-text)',
                borderColor: 'var(--c-card-border)',
              }}
            >
              WEB &amp; FRONT-END ({webCount})
            </button>
            <button
              type="button"
              onClick={() => setActiveFilter('AI')}
              className="px-4 sm:px-5 py-2 rounded-full font-heading text-xs sm:text-sm tracking-wider uppercase transition-all duration-200 cursor-pointer border"
              style={{
                backgroundColor: activeFilter === 'AI' ? 'var(--c-text)' : 'var(--c-card)',
                color: activeFilter === 'AI' ? 'var(--c-bg)' : 'var(--c-text)',
                borderColor: 'var(--c-card-border)',
              }}
            >
              AI &amp; DATA SCIENCE ({aiCount})
            </button>
          </div>
        </div>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
          {filteredCerts.map((cert) => (
            <div
              key={cert.id}
              className="group rounded-3xl border hover:border-[var(--c-accent)] flex flex-col justify-between transition-all duration-300 shadow-sm hover:shadow-xl overflow-hidden cursor-pointer"
              style={{
                backgroundColor: 'var(--c-card)',
                borderColor: 'var(--c-card-border)',
              }}
              onClick={() => onSelectCertificate?.(cert)}
            >
              {/* Certificate Preview / Thumbnail with Actual Certificate Image */}
              <div
                className="relative aspect-[16/11] w-full bg-neutral-900 border-b overflow-hidden flex items-center justify-center p-3"
                style={{ borderColor: 'var(--c-card-border)' }}
              >
                <img
                  src={cert.previewImage || `/certificates/${cert.id}.svg`}
                  alt={`${cert.title} preview`}
                  loading="lazy"
                  className="w-full h-full object-contain drop-shadow-sm transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[2px]">
                  <span className="inline-flex items-center gap-1.5 font-heading text-xs tracking-wider uppercase text-white bg-black/80 px-4 py-2 rounded-full border border-white/20 shadow-md">
                    <Eye className="w-3.5 h-3.5" style={{ color: 'var(--c-accent)' }} />
                    VIEW CREDENTIAL
                  </span>
                </div>
              </div>

              {/* Certificate Info: Name, Issuing Organisation, Date */}
              <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <div
                    className="flex items-center justify-between text-[11px] font-mono mb-1"
                    style={{ color: 'var(--c-text-muted)' }}
                  >
                    <span
                      className="font-semibold"
                      style={{ color: 'var(--c-text)' }}
                    >
                      {cert.issuer}
                    </span>
                    <span>{cert.date}</span>
                  </div>

                  <h3
                    className="font-heading text-xl sm:text-2xl group-hover:text-[var(--c-accent)] transition-colors leading-tight line-clamp-2"
                    style={{ color: 'var(--c-text)' }}
                    title={cert.title}
                  >
                    {cert.title}
                  </h3>
                </div>

                {/* Bottom Action Bar: VIEW CERTIFICATE & DOWNLOAD */}
                <div
                  className="pt-3 border-t flex items-center justify-between gap-2"
                  style={{ borderColor: 'var(--c-card-border)' }}
                >
                  <span
                    className="font-heading text-xs font-bold tracking-wider uppercase flex items-center gap-1"
                    style={{ color: 'var(--c-accent)' }}
                  >
                    <Eye className="w-3.5 h-3.5" />
                    <span>VIEW</span>
                  </span>

                  <a
                    href={cert.pdfUrl || cert.previewImage || `/certificates/${cert.id}.pdf`}
                    download={cert.downloadName || `${cert.title.replace(/\s+/g, '_')}.pdf`}
                    className="inline-flex items-center gap-1 font-mono text-[10px] font-semibold p-1 transition-colors hover:scale-105"
                    style={{ color: 'var(--c-text-muted)' }}
                    title="Download certificate PDF"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <Download className="w-3.5 h-3.5" style={{ color: 'var(--c-accent)' }} />
                    <span>DOWNLOAD</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
