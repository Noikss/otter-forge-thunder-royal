import { memo, useEffect, useRef, useState } from "react";

const LOADER_HTML = `<div class="ld-brand">RUS<b>ST</b></div>
<div class="ld-scene" aria-hidden="true">
<div class="ld-layer ld-sky"></div>
<div class="ld-layer ld-lamps"></div>
<div class="ld-road"><div class="ld-dash"></div><div class="ld-edge"></div></div>
<div class="ld-car">
<svg viewBox="0 0 260 92">
<defs>
<linearGradient id="cb" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#3a4552"/><stop offset=".55" stop-color="#1d242c"/><stop offset="1" stop-color="#10151a"/></linearGradient>
<linearGradient id="cg" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#7e98ad"/><stop offset="1" stop-color="#27323d"/></linearGradient>
<linearGradient id="bm" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#f4ffc0" stop-opacity=".85"/><stop offset="1" stop-color="#d9ff3f" stop-opacity="0"/></linearGradient>
<radialGradient id="ug"><stop offset="0" stop-color="#d9ff3f" stop-opacity=".5"/><stop offset="1" stop-color="#d9ff3f" stop-opacity="0"/></radialGradient>
</defs>
<ellipse cx="130" cy="88" rx="125" ry="9" fill="url(#ug)"/>
<g stroke="#d9ff3f" stroke-width="2" stroke-linecap="round" opacity=".7"><line class="sl" x1="-10" y1="40" x2="-40" y2="40"/><line class="sl" x1="-6" y1="56" x2="-50" y2="56"/><line class="sl" x1="-12" y1="70" x2="-38" y2="70"/></g>
<polygon class="beam" points="250,56 470,28 470,92 250,66" fill="url(#bm)"/>
<path d="M8 66 L12 52 Q14 45 25 43 L60 39 Q80 17 114 15 L152 15 Q178 17 196 38 L232 43 Q252 47 254 60 L254 68 Q254 72 249 72 L12 72 Q8 72 8 68Z" fill="url(#cb)"/>
<path d="M72 38 Q88 22 113 21 L125 21 L125 38Z M133 21 L152 21 Q171 23 185 38 L133 38Z" fill="url(#cg)"/>
<path d="M14 54 L248 54" stroke="#d9ff3f" stroke-width="2.2" stroke-linecap="round" opacity=".95"/>
<path d="M129 21 L129 62" stroke="#0c1014" stroke-width="1.5"/>
<rect x="144" y="46" width="14" height="3" rx="1.5" fill="#0c1014"/>
<path d="M6 46 L22 44 L22 49 L6 52Z" fill="#161c22"/>
<rect x="5" y="55" width="7" height="7" rx="2" fill="#ff4a3d"/><rect x="5" y="55" width="7" height="7" rx="2" fill="#ff4a3d" opacity=".5" transform="translate(-3 0)"/>
<path d="M240 52 L254 56 L254 62 L242 62Z" fill="#f4ffc0"/>
<circle cx="64" cy="72" r="22" fill="#090b0e"/><circle cx="198" cy="72" r="22" fill="#090b0e"/>
<g class="wh"><circle cx="64" cy="72" r="18" fill="#0b0e12" stroke="#2c353f" stroke-width="2"/><circle cx="64" cy="72" r="11" fill="#1a2027" stroke="#d9ff3f" stroke-width="2"/><path d="M64 63V81M55 72H73M57.6 65.6 70.4 78.4M70.4 65.6 57.6 78.4" stroke="#d9ff3f" stroke-width="1.6" stroke-linecap="round"/><circle cx="64" cy="72" r="2.5" fill="#d9ff3f"/></g>
<g class="wh"><circle cx="198" cy="72" r="18" fill="#0b0e12" stroke="#2c353f" stroke-width="2"/><circle cx="198" cy="72" r="11" fill="#1a2027" stroke="#d9ff3f" stroke-width="2"/><path d="M198 63V81M189 72H207M191.6 65.6 204.4 78.4M204.4 65.6 191.6 78.4" stroke="#d9ff3f" stroke-width="1.6" stroke-linecap="round"/><circle cx="198" cy="72" r="2.5" fill="#d9ff3f"/></g>
</svg>
</div>
</div>
<div class="ld-bar"><div class="ld-row"><span id="ldText">Заводим мотор</span><strong id="ldPct">0%</strong></div><div class="ld-track"><div class="ld-fill" id="ldFill"></div></div></div>`;

export const SiteLoader = memo(function SiteLoader() {
  const ref = useRef<HTMLDivElement>(null);
  const [gone, setGone] = useState(false);

  useEffect(() => {
    const L = ref.current;
    if (!L) return;
    const fill = L.querySelector<HTMLElement>("#ldFill");
    const pct = L.querySelector<HTMLElement>("#ldPct");
    const txt = L.querySelector<HTMLElement>("#ldText");
    if (!fill || !pct || !txt) return;

    document.body.classList.add("ld-lock");
    const reduce = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches ?? false;
    const start = Date.now();
    const MIN = reduce ? 300 : 2400;
    let loaded = document.readyState === "complete";
    let p = 0;
    let finished = false;
    const msgs: [number, string][] = [
      [0, "Заводим мотор"],
      [30, "Выезжаем на трассу"],
      [65, "Набираем скорость"],
      [92, "Почти на месте"],
    ];
    const onLoad = () => {
      loaded = true;
    };
    window.addEventListener("load", onLoad);

    const set = (v: number) => {
      p = v;
      const r = Math.round(v);
      fill.style.width = r + "%";
      pct.textContent = r + "%";
      for (let i = msgs.length - 1; i >= 0; i--) {
        if (r >= msgs[i][0]) {
          txt.textContent = msgs[i][1];
          break;
        }
      }
    };

    const timers: number[] = [];
    const finish = () => {
      if (finished) return;
      finished = true;
      set(100);
      txt.textContent = "Приехали!";
      L.classList.add("go");
      timers.push(
        window.setTimeout(() => {
          L.classList.add("done");
          document.body.classList.remove("ld-lock");
        }, reduce ? 0 : 750),
      );
      timers.push(window.setTimeout(() => setGone(true), 2200));
    };

    const iv = window.setInterval(() => {
      const t = Date.now() - start;
      const target = Math.min((t / MIN) * 90, 90);
      if (loaded && t >= MIN) {
        window.clearInterval(iv);
        finish();
        return;
      }
      if (target > p) {
        const step = p + (target - p) * 0.25 + 0.2;
        set(step > target ? target : step);
      }
      if (t > 9000) {
        window.clearInterval(iv);
        finish();
      }
    }, 60);

    return () => {
      window.removeEventListener("load", onLoad);
      window.clearInterval(iv);
      timers.forEach((id) => window.clearTimeout(id));
      document.body.classList.remove("ld-lock");
    };
  }, []);

  if (gone) return null;

  return (
    <div
      ref={ref}
      className="ld"
      id="loader"
      role="status"
      aria-live="polite"
      aria-label="Загрузка сайта"
      dangerouslySetInnerHTML={{ __html: LOADER_HTML }}
    />
  );
});
