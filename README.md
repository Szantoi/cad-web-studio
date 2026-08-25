# CAD Web Studio

The independent web CAD application. It will own the document model, command execution, geometry, rendering and persistence.

`cad-cui-system` remains a separate repository and reusable UI catalogue. This repository consumes it through an adapter instead of embedding the catalogue's source code.

## Local development

```powershell
npm install
npm run dev
```

The starter intentionally has no CAD engine yet. Its `CadEngineAdapter` boundary keeps rendering and geometry choices independent from the UI system.

## Bringing in the UI catalogue

While both repositories live next to each other, install the local package when a real integration begins:

```powershell
npm install ../cad-cui-system
```

After publishing the package to a registry or GitHub Packages, replace the local dependency with a released version.

See [the architecture notes](docs/ARCHITECTURE.md) for the ownership boundaries.
