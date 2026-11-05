import React, { useState, useEffect, useRef } from 'react';
import FadeIn from './FadeIn';

const DISCORD_USER_ID = '1250685386666016789';

interface StatusInfo {
  label: string;
  color: string;
}

const STATUS_MAP: Record<string, StatusInfo> = {
  online: { label: 'Online', color: '#23A55A' },
  idle: { label: 'Idle', color: '#F0B232' },
  dnd: { label: 'Do not disturb', color: '#F23F43' },
  offline: { label: 'Offline', color: '#80848E' },
};

function formatAssetUrl(activity: any): string | null {
  const largeImage = activity?.assets?.large_image;
  if (!largeImage) return null;
  if (largeImage.startsWith('mp:external/')) {
    return `https://media.discordapp.net/external/${largeImage.slice(12)}`;
  }
  if (largeImage.startsWith('spotify:')) {
    return `https://i.scdn.co/image/${largeImage.slice(8)}`;
  }
  if (activity.application_id) {
    return `https://cdn.discordapp.com/app-assets/${activity.application_id}/${largeImage}.png`;
  }
  return null;
}

function formatDuration(ms: number): string {
  if (ms < 0) ms = 0;
  const totalSeconds = Math.floor(ms / 1000);
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;
  const pad = (n: number) => String(n).padStart(2, '0');
  return hours > 0 ? `${hours}:${pad(minutes)}:${pad(seconds)}` : `${minutes}:${pad(seconds)}`;
}

function getAvatarUrl(user: any, size = 128): string {
  if (!user) return '/portrait.jpg';
  if (!user.avatar) {
    const defaultAvatarIndex = (Number(user.discriminator) || 0) % 5;
    return `https://cdn.discordapp.com/embed/avatars/${defaultAvatarIndex}.png`;
  }
  const extension = typeof user.avatar === 'string' && user.avatar.startsWith('a_') ? 'gif' : 'png';
  return `https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}.${extension}?size=${size}`;
}

export default function Presence() {
  const [data, setData] = useState<any>(null);
  const [hasError, setHasError] = useState(false);
  const [now, setNow] = useState(() => Date.now());
  const heartbeatTimer = useRef<any>(null);

  useEffect(() => {
    if (!data?.spotify) return;
    const interval = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(interval);
  }, [Boolean(data?.spotify)]);

  useEffect(() => {
    let ws: WebSocket | null = null;
    let reconnectTimeout: any = null;
    let isCleanedUp = false;

    const fetchRest = async () => {
      try {
        const res = await fetch(`https://api.lanyard.rest/v1/users/${DISCORD_USER_ID}`);
        const json = await res.json();
        if (json?.success) {
          setData(json.data);
          setHasError(false);
        } else {
          setHasError(true);
        }
      } catch {
        setHasError(true);
      }
    };

    let retryCount = 0;
    const maxRetries = 2;

    const connectWs = () => {
      if (retryCount >= maxRetries) {
        fetchRest();
        return;
      }
      try {
        ws = new WebSocket('wss://api.lanyard.rest/socket');
      } catch {
        fetchRest();
        return;
      }

      ws.onopen = () => {
        retryCount = 0;
        ws?.send(
          JSON.stringify({
            op: 2,
            d: { subscribe_to_id: DISCORD_USER_ID },
          })
        );
      };

      ws.onmessage = (event) => {
        try {
          const payload = JSON.parse(event.data);
          if (payload.op === 1) {
            const interval = payload.d.heartbeat_interval;
            if (heartbeatTimer.current) clearInterval(heartbeatTimer.current);
            heartbeatTimer.current = setInterval(() => {
              ws?.send(JSON.stringify({ op: 3 }));
            }, interval);
          }
          if (
            payload.op === 0 &&
            (payload.t === 'INIT_STATE' || payload.t === 'PRESENCE_UPDATE')
          ) {
            setData(payload.d);
            setHasError(false);
          }
        } catch {}
      };

      ws.onerror = () => {
        fetchRest();
      };

      ws.onclose = () => {
        if (heartbeatTimer.current) clearInterval(heartbeatTimer.current);
        if (!isCleanedUp && retryCount < maxRetries) {
          retryCount++;
          reconnectTimeout = setTimeout(connectWs, 8000);
        }
      };
    };

    connectWs();

    return () => {
      isCleanedUp = true;
      if (heartbeatTimer.current) clearInterval(heartbeatTimer.current);
      if (reconnectTimeout) clearTimeout(reconnectTimeout);
      ws?.close();
    };
  }, []);

  const statusInfo = data ? STATUS_MAP[data.discord_status] || STATUS_MAP.offline : STATUS_MAP.offline;
  const displayName =
    data?.discord_user?.display_name ||
    data?.discord_user?.global_name ||
    data?.discord_user?.username ||
    'WarriorOG';

  const customStatus = data?.activities?.find((a: any) => a.type === 4);
  const otherActivity = data?.activities?.find(
    (a: any) => a.type !== 4 && a.name !== 'Spotify'
  );
  const spotify = data?.spotify ?? null;
  const spotifyStart = spotify?.timestamps?.start ?? 0;
  const spotifyEnd = spotify?.timestamps?.end ?? 0;

  return (
    <section id="presence" className="scroll-mt-24 py-10 sm:py-14">
      <FadeIn>
        <h2 className="section-title">Live Presence</h2>
        <div className="rule mt-2" />
      </FadeIn>

      <FadeIn delay={0.06}>
        <div className="mt-8 grid gap-5 md:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
          {/* Discord Card */}
          <div className="-rotate-1 rounded-[3px] bg-white p-4 shadow-polaroid transition-transform duration-500 hover:rotate-0 sm:p-5 border border-line/40">
            <div className="flex items-center gap-4">
              <div className="relative shrink-0">
                <img
                  src={
                    data?.discord_user
                      ? getAvatarUrl(data.discord_user)
                      : '/portrait.jpg'
                  }
                  alt={displayName}
                  width={72}
                  height={72}
                  className="h-16 w-16 rounded-2xl bg-paper2 object-cover sm:h-[72px] sm:w-[72px]"
                />
                <span
                  className="absolute -bottom-1 -right-1 h-5 w-5 rounded-full border-[3px] border-white dark:border-[#161922]"
                  style={{ backgroundColor: statusInfo.color }}
                  title={statusInfo.label}
                />
              </div>

              <div className="min-w-0">
                <p className="truncate font-hand text-2xl leading-tight text-ink">{displayName}</p>
                <p className="truncate font-mono text-[0.68rem] uppercase tracking-[0.16em] text-muted">
                  {data?.discord_user?.username ? `@${data.discord_user.username}` : '@warriorog'}
                </p>
                <p className="mt-1 font-mono text-[0.68rem] text-muted">
                  {statusInfo.label}
                  {data?.active_on_discord_mobile ? ' · mobile' : ''}
                  {data?.active_on_discord_desktop ? ' · desktop' : ''}
                  {data?.active_on_discord_web ? ' · web' : ''}
                </p>
              </div>
            </div>

            {customStatus && (
              <p className="mt-4 border-t border-line/70 pt-3 font-mono text-xs leading-relaxed text-ink/80">
                {customStatus.emoji?.name ? `${customStatus.emoji.name} ` : ''}
                {customStatus.state}
              </p>
            )}

            {hasError && !data && (
              <p className="mt-4 border-t border-line/70 pt-3 font-mono text-[0.68rem] text-muted">
                Presence unavailable. This preview blocks external requests, open the site in a browser tab to see it live.
              </p>
            )}
          </div>

          {/* Activity / Spotify Card */}
          <div className="rotate-1 rounded-[3px] bg-white p-4 shadow-polaroid transition-transform duration-500 hover:rotate-0 sm:p-5">
            {spotify ? (
              <div className="flex gap-4">
                <img
                  src={spotify.album_art_url}
                  alt={spotify.album}
                  width={80}
                  height={80}
                  className="h-20 w-20 shrink-0 rounded-lg object-cover"
                />
                <div className="min-w-0 flex-1">
                  <p className="font-mono text-[0.58rem] uppercase tracking-[0.2em] text-[#1DB954]">
                    Listening to Spotify
                  </p>
                  <p className="mt-1 truncate font-hand text-xl leading-tight">
                    {spotify.song}
                  </p>
                  <p className="truncate font-mono text-[0.68rem] text-muted">
                    {spotify.artist}
                  </p>
                  <div className="mt-3 h-1 w-full overflow-hidden rounded-full bg-line">
                    <div
                      className="h-full rounded-full bg-[#1DB954] transition-[width] duration-1000 ease-linear"
                      style={{
                        width: `${
                          spotify && spotifyEnd > spotifyStart
                            ? Math.min(
                                100,
                                Math.max(0, ((now - spotifyStart) / (spotifyEnd - spotifyStart)) * 100)
                              )
                            : 0
                        }%`,
                      }}
                    />
                  </div>
                  <div className="mt-1 flex justify-between font-mono text-[0.58rem] text-muted">
                    <span>{formatDuration(now - spotifyStart)}</span>
                    <span>{formatDuration(spotifyEnd - spotifyStart)}</span>
                  </div>
                </div>
              </div>
            ) : otherActivity ? (
              <div className="flex gap-4">
                {formatAssetUrl(otherActivity) ? (
                  <img
                    src={formatAssetUrl(otherActivity)!}
                    alt={otherActivity.name}
                    width={80}
                    height={80}
                    className="h-20 w-20 shrink-0 rounded-lg object-cover"
                  />
                ) : (
                  <div className="grid h-20 w-20 shrink-0 place-items-center rounded-lg bg-paper2 font-hand text-3xl">
                    {otherActivity.name.slice(0, 1)}
                  </div>
                )}
                <div className="min-w-0">
                  <p className="font-mono text-[0.58rem] uppercase tracking-[0.2em] text-muted">
                    Currently active
                  </p>
                  <p className="mt-1 truncate font-hand text-xl leading-tight">
                    {otherActivity.name}
                  </p>
                  {otherActivity.details && (
                    <p className="truncate font-mono text-[0.68rem] text-muted">
                      {otherActivity.details}
                    </p>
                  )}
                  {otherActivity.state && (
                    <p className="truncate font-mono text-[0.68rem] text-muted">
                      {otherActivity.state}
                    </p>
                  )}
                  {otherActivity.timestamps?.start && (
                    <p className="mt-2 font-mono text-[0.6rem] text-muted">
                      {formatDuration(now - otherActivity.timestamps.start)} elapsed
                    </p>
                  )}
                </div>
              </div>
            ) : (
              <div className="flex h-full min-h-[96px] flex-col justify-center">
                <p className="font-mono text-[0.58rem] uppercase tracking-[0.2em] text-muted">
                  Current activity
                </p>
                <p className="mt-1 font-hand text-xl text-ink/70">
                  {data ? 'Nothing playing right now' : 'Fetching presence…'}
                </p>
              </div>
            )}
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
