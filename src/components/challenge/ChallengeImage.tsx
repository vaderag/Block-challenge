import { useState, useEffect, useRef, useMemo } from 'react';
import { fetchBlockImage } from '../../services/unsplashService';
import { getLegoImageUrl } from '../../services/pollinationsService';
import { getCuratedBlockImageCandidates } from '../../data/curatedImages';

interface Props {
  imageUrl: string | null;
  imageLoading: boolean;
  imageError: boolean;
  challengeId: string;
  challengeName: string;
}

function PlaceholderImage({ name }: { name: string }) {
  return (
    <div
      className="w-full h-full flex flex-col items-center justify-center gap-3 rounded-xl"
      style={{ backgroundImage: 'url(/brick-pattern.svg)', backgroundRepeat: 'repeat', backgroundSize: '60px 30px', backgroundColor: '#e8e0d0' }}
    >
      <div className="text-5xl">🧱</div>
      <p className="font-black text-lg text-center px-4" style={{ color: '#1A1A1A' }}>{name}</p>
    </div>
  );
}

function Spinner() {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <div
        className="w-12 h-12 rounded-sm animate-spin-slow"
        style={{ backgroundColor: '#FFD700', boxShadow: '4px 4px 0 #CC0000, -4px -4px 0 #0057A8' }}
      />
    </div>
  );
}

function GeneratedImage({ curatedCandidates, pollinationsUrl, challengeName }: {
  curatedCandidates: string[];
  pollinationsUrl: string;
  challengeName: string;
}) {
  const [displayUrl, setDisplayUrl] = useState(curatedCandidates[0]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const loadedRef = useRef(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const phaseRef = useRef<'curated' | 'pollinations'>('curated');
  const candidateIndexRef = useRef(0);

  useEffect(() => {
    setDisplayUrl(curatedCandidates[0]);
    setLoading(true);
    setError(false);
    loadedRef.current = false;
    phaseRef.current = 'curated';
    candidateIndexRef.current = 0;
    return () => { if (timeoutRef.current) clearTimeout(timeoutRef.current); };
  }, [curatedCandidates, pollinationsUrl]);

  function startPollinationsFallback() {
    timeoutRef.current = setTimeout(async () => {
      if (loadedRef.current) return;
      try {
        const fallback = await fetchBlockImage(`lego ${challengeName}`);
        setDisplayUrl(fallback);
        setLoading(true);
      } catch {
        setError(true);
        setLoading(false);
      }
    }, 2000);
  }

  function handleError() {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    if (phaseRef.current === 'curated') {
      const nextIndex = candidateIndexRef.current + 1;
      if (nextIndex < curatedCandidates.length) {
        candidateIndexRef.current = nextIndex;
        setDisplayUrl(curatedCandidates[nextIndex]);
        setLoading(true);
      } else {
        phaseRef.current = 'pollinations';
        setDisplayUrl(pollinationsUrl);
        setLoading(true);
        startPollinationsFallback();
      }
    } else {
      setError(true);
      setLoading(false);
    }
  }

  return (
    <div
      className="w-full rounded-xl overflow-hidden"
      style={{ aspectRatio: '4/3', border: '4px solid #1A1A1A', boxShadow: '6px 6px 0 rgba(0,0,0,0.25)' }}
    >
      {loading && !error && <Spinner />}
      {!loading && error && <PlaceholderImage name={challengeName} />}
      <img
        src={displayUrl}
        alt={`Block style: ${challengeName}`}
        className="w-full h-full object-cover"
        style={{ display: loading || error ? 'none' : 'block' }}
        onLoad={() => {
          loadedRef.current = true;
          setLoading(false);
          if (timeoutRef.current) clearTimeout(timeoutRef.current);
        }}
        onError={handleError}
      />
    </div>
  );
}

export function ChallengeImage({ imageUrl, imageLoading, imageError, challengeId, challengeName }: Props) {
  const [showGenerated, setShowGenerated] = useState(false);

  const curatedCandidates = useMemo(() => getCuratedBlockImageCandidates(challengeId), [challengeId]);
  const pollinationsUrl = useMemo(() => getLegoImageUrl(challengeName), [challengeName]);

  useEffect(() => {
    setShowGenerated(false);
  }, [challengeId]);

  return (
    <div className="w-full flex flex-col gap-3">
      {/* Real world reference image */}
      <div
        className="w-full rounded-xl overflow-hidden"
        style={{ aspectRatio: '4/3', border: '4px solid #1A1A1A', boxShadow: '6px 6px 0 rgba(0,0,0,0.25)' }}
      >
        {imageLoading && <Spinner />}
        {!imageLoading && (imageError || !imageUrl) && <PlaceholderImage name={challengeName} />}
        {!imageLoading && imageUrl && !imageError && (
          <img
            src={imageUrl}
            alt={`Build idea: ${challengeName}`}
            className="w-full h-full object-cover"
            onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
          />
        )}
      </div>

      {/* Generate block idea button / generated image */}
      {!showGenerated && (
        <button
          onClick={() => setShowGenerated(true)}
          className="text-sm font-bold underline underline-offset-2 opacity-60 hover:opacity-100 transition-opacity text-center"
          style={{ color: '#1A1A1A' }}
        >
          🧱 Generate a block style idea
        </button>
      )}

      {showGenerated && (
        <div className="flex flex-col gap-1">
          <p className="text-xs font-black uppercase tracking-wider text-center opacity-50" style={{ color: '#1A1A1A' }}>
            Block Style
          </p>
          <GeneratedImage curatedCandidates={curatedCandidates} pollinationsUrl={pollinationsUrl} challengeName={challengeName} />
        </div>
      )}
    </div>
  );
}
