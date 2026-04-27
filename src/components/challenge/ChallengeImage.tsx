import { useState, useEffect } from 'react';

interface Props {
  imageUrl: string | null;
  imageLoading: boolean;
  imageError: boolean;
  generatedImageUrl: string | null;
  challengeName: string;
}

function PlaceholderImage({ name }: { name: string }) {
  return (
    <div
      className="w-full h-full flex flex-col items-center justify-center gap-2 rounded-xl"
      style={{ backgroundImage: 'url(/brick-pattern.svg)', backgroundRepeat: 'repeat', backgroundSize: '60px 30px', backgroundColor: '#e8e0d0' }}
    >
      <div className="text-3xl">🧱</div>
      <p className="font-black text-xs text-center px-2" style={{ color: '#1A1A1A' }}>{name}</p>
    </div>
  );
}

function Spinner() {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <div
        className="w-8 h-8 rounded-sm animate-spin-slow"
        style={{ backgroundColor: '#FFD700', boxShadow: '3px 3px 0 #CC0000, -3px -3px 0 #0057A8' }}
      />
    </div>
  );
}

function ImagePanel({ url, externalLoading, externalError, label, name }: {
  url: string | null;
  externalLoading?: boolean;
  externalError?: boolean;
  label: string;
  name: string;
}) {
  const [imgLoading, setImgLoading] = useState(true);
  const [imgError, setImgError] = useState(false);

  useEffect(() => {
    setImgLoading(true);
    setImgError(false);
  }, [url]);

  const isLoading = externalLoading || (!!url && imgLoading && !imgError);
  const isError = externalError || imgError || (!externalLoading && !url);

  return (
    <div className="flex flex-col gap-1">
      <p className="text-xs font-black uppercase tracking-wider text-center opacity-50" style={{ color: '#1A1A1A' }}>
        {label}
      </p>
      <div
        className="w-full rounded-xl overflow-hidden"
        style={{ aspectRatio: '1/1', border: '3px solid #1A1A1A', boxShadow: '4px 4px 0 rgba(0,0,0,0.2)' }}
      >
        {isLoading && !isError && <Spinner />}
        {!isLoading && isError && <PlaceholderImage name={name} />}
        {url && !isError && (
          <img
            src={url}
            alt={`${label}: ${name}`}
            className="w-full h-full object-cover"
            style={{ display: imgLoading ? 'none' : 'block' }}
            onLoad={() => setImgLoading(false)}
            onError={() => { setImgLoading(false); setImgError(true); }}
          />
        )}
      </div>
    </div>
  );
}

export function ChallengeImage({ imageUrl, imageLoading, imageError, generatedImageUrl, challengeName }: Props) {
  return (
    <div className="w-full grid grid-cols-2 gap-3">
      <ImagePanel
        url={imageUrl}
        externalLoading={imageLoading}
        externalError={imageError}
        label="Real World"
        name={challengeName}
      />
      <ImagePanel
        url={generatedImageUrl}
        label="Block Style"
        name={challengeName}
      />
    </div>
  );
}
