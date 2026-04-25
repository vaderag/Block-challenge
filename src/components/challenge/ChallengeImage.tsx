interface Props {
  imageUrl: string | null;
  imageLoading: boolean;
  imageError: boolean;
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

export function ChallengeImage({ imageUrl, imageLoading, imageError, challengeName }: Props) {
  return (
    <div
      className="w-full rounded-xl overflow-hidden"
      style={{ aspectRatio: '4/3', border: '4px solid #1A1A1A', boxShadow: '6px 6px 0 rgba(0,0,0,0.25)' }}
    >
      {imageLoading && <Spinner />}
      {!imageLoading && (imageError || !imageUrl) && <PlaceholderImage name={challengeName} />}
      {!imageLoading && imageUrl && !imageError && (
        <img
          src={imageUrl}
          alt={`Block build idea: ${challengeName}`}
          className="w-full h-full object-cover"
          onError={(e) => {
            (e.target as HTMLImageElement).style.display = 'none';
          }}
        />
      )}
    </div>
  );
}
