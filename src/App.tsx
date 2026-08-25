import { unavailableEngine } from "./cad/engine";

const nextSteps = [
  "Connect the shared CAD UI components",
  "Add a document model and command dispatcher",
  "Choose a rendering and geometry engine",
];

export function App() {
  return (
    <main className="studio-shell">
      <header className="topbar">
        <div className="brand">
          <span className="brand-mark" aria-hidden="true">⌗</span>
          <span>CAD WEB STUDIO</span>
        </div>
        <span className="status">ENGINE: {unavailableEngine.status.toUpperCase()}</span>
      </header>

      <section className="workspace" aria-label="CAD application foundation">
        <aside className="sidebar">
          <span className="eyebrow">APPLICATION</span>
          <h1>Engine-ready shell</h1>
          <p>
            The app owns documents, geometry and rendering. The reusable UI catalogue stays in
            <code> cad-cui-system</code>.
          </p>
        </aside>

        <div className="viewport-placeholder">
          <div className="grid" aria-hidden="true" />
          <div className="viewport-copy">
            <span className="eyebrow">MODEL SPACE</span>
            <strong>Viewport adapter pending</strong>
            <span>Start with a renderer without coupling it to the UI library.</span>
          </div>
        </div>

        <aside className="next-panel">
          <span className="eyebrow">NEXT</span>
          <ol>
            {nextSteps.map((step) => <li key={step}>{step}</li>)}
          </ol>
        </aside>
      </section>
    </main>
  );
}
