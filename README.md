# Stamboken – legacy-frontend

Den gamla React-frontenden till [Stamboken](https://github.com/gotlandskaninen/stamboken),
Föreningen Gotlandskaninens digitala stambok. Den körs mot Stambokens API tills
den avvecklas och ersätts helt av den nya frontenden.

Repot är en fork av NBIS-projektet
[NBISweden/theherdbook](https://github.com/NBISweden/theherdbook) och innehåller
bara det som behövs för att bygga frontenden (`frontend/`). API, R-tjänst och
övrig infrastruktur från originalet finns kvar i forkens historik och upstream.

## Brancher

- `production` – byggs till `legacy-frontend-prod` (stamboken-vhosten)
- `test-prod` – byggs till `legacy-frontend-test` (testmiljön)

Stamboken bygger en låst commit från respektive branch
(`.github/workflows/build-and-publish.yml` i Stamboken-repot). En ändring här
når produktion först när den SHA:n bumpas där.

## Bygga

```console
cd frontend
npm ci --ignore-scripts
sh build.sh
```

## Licens

AGPL-3.0, se [LICENSE](LICENSE).
