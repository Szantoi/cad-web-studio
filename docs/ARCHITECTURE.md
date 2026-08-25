# Architecture boundary

## `cad-cui-system`

- CAD-specific React components, layouts, dock behaviour and visual tokens.
- The demo remains the UI catalogue and interaction sandbox.
- No geometry kernel, document persistence or renderer ownership.

## `cad-web-studio`

- CAD document and command model.
- Geometry, constraints, selection and renderer adapters.
- Application-specific workflows, persistence and backend integrations.
- Composition of the shared UI package around the active document and engine.

## Integration rule

The application passes state and callbacks into the CUI components. The CUI package must not import the engine or application document types. The `CadEngineAdapter` is the first explicit seam for that rule.
