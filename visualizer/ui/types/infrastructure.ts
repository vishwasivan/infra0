export interface Infra0Resource {
  type: string
  config: Record<string, any>
  dependsOn?: string[]
}

export interface Infra0Node {
  id: string
  label: string
  parent?: string
  group?: string
  type: "network" | "compute" | "database" | "storage" | "security"
}

export enum Infra0EdgeType {
  ConnectsTo = "connectsTo",
}

export interface Infra0Edge {
  from: string
  to: string
  type: Infra0EdgeType
}

export interface Infra0Diagram {
  nodes: Infra0Node[]
  edges: Infra0Edge[]
}

export interface Infra0 {
  resources: Record<string, Infra0Resource>
  diagram: Infra0Diagram
}

export interface InfrastructureResponse {
  intro?: string
  pulumiCode?: string
  outro?: string
  infra0Schema?: string
}


export enum ResponseSection {
  INTRO = 'intro_json',
  PULUMI_CODE = 'pulumi_code',
  OUTRO = 'outro_json',
  INFRA0_SCHEMA = 'infra0_schema'
}

export interface ParsedResponseState {
  sections: InfrastructureResponse
}

export interface WorkflowStep {
  id: string
  title: string
  description: string
  status: "pending" | "active" | "completed"
}
