# Malerfirmaet NS — redigerbar hjemmeside

Komplet dansk hjemmeside med hvidt/sort design, originale projektbilleder, original video, kildebelagte anmeldelser og UI-detaljer fra Aceternity UI, Magic UI og shadcn/ui.

Dette er den selvstændige Next.js-eksport. Den kræver ingen Sites-/ChatGPT-konto og ingen database. Den medfølgende hostingguide forklarer upload og domæneopsætning.

## Kom i gang

Node.js 22.13 eller nyere:

```bash
npx --yes pnpm@11.25.0 install --frozen-lockfile
npm run dev
```

## Byg de færdige filer

```bash
npm run build
npm run preview
```

Upload indholdet af `out/` til roden af et statisk webhotel eller Cloudflare Pages. Der skal ikke køre en Node.js-server på webhotellet. Brug HTTP-preview eller hosting til at åbne siden; dobbeltklik på en lokal HTML-fil er ikke en fuld preview.

Kopier `.env.example` til `.env.local`, hvis du vil ændre domænet før bygning. Standard: `https://malerfirmaet-ns.dk`.

## Indhold

- `app/`: syv sider, 404, CSS, sitemap og robots.
- `components/`: navigation, formular, galleri, anmeldelser og animationer.
- `lib/ns-data.ts`: firmaoplysninger, ydelser og projektgalleri.
- `lib/reviews.json`: 41 tilgængelige, kildebelagte individuelle anmeldelser.
- `public/`: originale billeder og video.
- `docs/`: kilder, licensnoter og designændringer.
- `scripts/preview.mjs`: lokal HTTP-preview af de byggede filer.

Kontaktformularen klargør en e-mail, som kunden selv sender. Der er ingen automatisk mailafsendelse. Anmeldelser og platformstal opdateres manuelt fra deres kilder.

De nuværende billeder og video hører til virksomhedens indhold. Se `docs/asset-sources.json`. UI-kilder er dokumenteret i `docs/ui-components.md`, `docs/white-redesign.md` og `docs/final-polish.md`; bevarede licensnoter ligger under `docs/licenses/`.
