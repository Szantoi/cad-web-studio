export type CadCommand = {
  id: string;
  input: string;
};

export type CadEngineStatus = "unavailable" | "loading" | "ready" | "error";

/**
 * The application talks to geometry/rendering through this small adapter.
 * UI components remain in cad-cui-system and never depend on an engine.
 */
export interface CadEngineAdapter {
  readonly status: CadEngineStatus;
  execute(command: CadCommand): Promise<void>;
}

export const unavailableEngine: CadEngineAdapter = {
  status: "unavailable",
  async execute() {
    throw new Error("No CAD engine is connected yet.");
  },
};
