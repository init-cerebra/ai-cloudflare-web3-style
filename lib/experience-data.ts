import { Cloud, Activity, Database, Lock } from "lucide-react"
import type { LucideIcon } from "lucide-react"

export interface ProofData {
  type: "log_stream" | "data_transfer" | "canvas_graph" | "kernel_boot"
  title: string
  content: string[]
}

export interface ExperienceItem {
  id: string
  title: string
  period: string
  icon: LucideIcon
  description: string
  tags: string[]
  stats: Record<string, string>
  color: "cyan" | "purple"
  proof: ProofData
  tools: ToolDetail[]
}

export interface ToolDetail {
  name: string
  description: string
  proofType: "log_stream" | "data_transfer" | "canvas_graph" | "kernel_boot"
  proofContent: string[]
}

export const experienceData: ExperienceItem[] = [
  {
    id: "k8s",
    title: "K8S ORCHESTRATION LEAD",
    period: "2022 - Present",
    icon: Cloud,
    description:
      "Orchestration of clusters with 542 nodes. Implementation of GitOps (FluxCD) and transition to Talos OS for building DeCloud infrastructure.",
    tags: ["Kubernetes", "FluxCD", "Helm", "Talos OS", "Cilium"],
    stats: { Nodes: "542", Uptime: "99.99%" },
    color: "cyan",
    proof: {
      type: "log_stream",
      title: "GITOPS_SYNC_LOG",
      content: [
        "> [08:00:01] FluxCD reconciliation started...",
        "> [08:00:03] Source: git@github.com:krailo/infra-manifests.git",
        "> [08:00:04] Kustomization: cluster-apps READY",
        "> [08:00:06] HelmRelease: nginx-ingress v4.8.3 SYNCED",
        "> [08:00:07] HelmRelease: cert-manager v1.13.2 SYNCED",
        "> [08:00:09] All 542 nodes reconciled. Drift: 0",
        "> [08:00:10] SYNC_STATUS: COMPLETE // 0 errors",
      ],
    },
    tools: [
      {
        name: "FluxCD",
        description: "GitOps continuous delivery for Kubernetes",
        proofType: "log_stream",
        proofContent: [
          "> [FLUX] Watching git@github.com:krailo/k8s-fleet.git",
          "> [FLUX] Detected 3 new manifests in /clusters/prod",
          "> [FLUX] Applying HelmRelease: monitoring-stack...",
          "> [FLUX] Kustomization: base-infra reconciled in 2.1s",
          "> [FLUX] All sources synced. Health: PASSING",
          "> [FLUX] Next reconciliation in 60s",
        ],
      },
      {
        name: "Talos OS",
        description: "Immutable & Security-focused OS for Kubernetes",
        proofType: "kernel_boot",
        proofContent: [
          "> [TALOS] Booting kernel 6.6.13-talos...",
          "> [TALOS] Verifying TPM2 secure boot chain...",
          "> [TALOS] dm-verity: root filesystem integrity VERIFIED",
          "> [TALOS] Loading containerd runtime...",
          "> [TALOS] Kubelet started. Node: ua-frank-w01",
          "> [TALOS] etcd member joined cluster. Peers: 5",
          "> [TALOS] API server healthy. Certificates rotated.",
          "> [TALOS] BOOT_STATUS: SECURE // Immutable rootfs active",
        ],
      },
      {
        name: "Helm",
        description: "Kubernetes package manager for complex deployments",
        proofType: "log_stream",
        proofContent: [
          "> [HELM] Installing chart: victoria-metrics/vmcluster",
          "> [HELM] Rendering 47 templates...",
          "> [HELM] Creating ServiceAccount, ClusterRole, Deployment...",
          "> [HELM] Release 'monitoring' deployed to namespace: obs",
          "> [HELM] STATUS: deployed // REVISION: 14",
        ],
      },
      {
        name: "Cilium",
        description: "eBPF-based networking, security & observability",
        proofType: "canvas_graph",
        proofContent: [
          "> [CILIUM] eBPF programs loaded: 24",
          "> [CILIUM] Network policies enforced: 156",
          "> [CILIUM] Hubble flows/sec: 12,847",
          "> [CILIUM] Encryption: WireGuard (node-to-node)",
          "> [CILIUM] Service mesh: enabled (sidecar-free)",
        ],
      },
    ],
  },
  {
    id: "mig",
    title: "CLOUD MIGRATION (AUTODOC CASE)",
    period: "2024 - 2026",
    icon: Activity,
    description:
      "Key Autodoc project: migration of 54TB+ critical data to GCP with zero downtime. Full automation with Terraform & Ansible.",
    tags: ["GCP", "Terraform", "Python", "Cloud Migrate", "Ansible"],
    stats: { Data: "54TB+", Downtime: "0s" },
    color: "purple",
    proof: {
      type: "data_transfer",
      title: "DATA_TRANSFER_VISUALIZATION",
      content: [
        "> [08:42:01] Initiating 54TB data shift...",
        "> [08:45:12] Autodoc cluster: GCP bucket sync 32%...",
        "> [09:12:44] Autodoc cluster: GCP bucket sync 67%...",
        "> [09:38:19] Autodoc cluster: GCP bucket sync 100%",
        "> [09:40:00] Verifying data integrity: SHA-256 checksums...",
        "> [09:42:33] All 2.4M objects verified. 0 corrupted.",
        "> [09:45:00] DNS cutover initiated...",
        "> [09:45:02] Zero-downtime switch: SUCCESS",
        "> [09:45:03] MIGRATION_STATUS: COMPLETE // 0 data loss",
      ],
    },
    tools: [
      {
        name: "Terraform",
        description: "Infrastructure as Code for GCP resource provisioning",
        proofType: "log_stream",
        proofContent: [
          "> [TF] terraform plan -var-file=prod.tfvars",
          "> [TF] Plan: 247 to add, 12 to change, 0 to destroy",
          "> [TF] google_compute_instance.migrate[0]: Creating...",
          "> [TF] google_storage_bucket.autodoc-data: Created",
          "> [TF] Apply complete! Resources: 247 added, 12 changed",
        ],
      },
      {
        name: "Autodoc Case",
        description: "Enterprise 54TB+ zero-downtime data migration",
        proofType: "data_transfer",
        proofContent: [
          "> [AUTODOC] Source: on-prem PostgreSQL cluster (12 nodes)",
          "> [AUTODOC] Target: GCP Cloud SQL + Cloud Storage",
          "> [AUTODOC] Streaming replication lag: 0.3s",
          "> [AUTODOC] Transferred: 54.2TB / 54.2TB (100%)",
          "> [AUTODOC] Rollback plan: tested & verified",
          "> [AUTODOC] CUTOVER: SUCCESS // Zero downtime achieved",
        ],
      },
    ],
  },
  {
    id: "db",
    title: "HIGH-LOAD DATA PERSISTENCE",
    period: "2020 - 2022",
    icon: Database,
    description:
      "Management of 112 database replicas. Optimization of ElasticSearch and ClickHouse for terabyte-scale log processing.",
    tags: ["ElasticSearch", "ClickHouse", "MongoDB", "Redis"],
    stats: { Replicas: "112", Scale: "TB-Level" },
    color: "cyan",
    proof: {
      type: "canvas_graph",
      title: "CLUSTER_METRICS_REALTIME",
      content: [
        "> [VICTORIA] Scraping 112 endpoints...",
        "> [VICTORIA] Ingestion rate: 2.4M samples/sec",
        "> [VICTORIA] Query latency p99: 12ms",
        "> [VICTORIA] Storage: 4.2TB compressed (14:1 ratio)",
        "> [VICTORIA] Active series: 18.7M",
      ],
    },
    tools: [
      {
        name: "ClickHouse",
        description: "Column-oriented DBMS for real-time analytics",
        proofType: "canvas_graph",
        proofContent: [
          "> [CH] Cluster: 8 shards x 3 replicas",
          "> [CH] Insert rate: 1.2M rows/sec",
          "> [CH] Query: SELECT count() FROM logs WHERE ts > now()-1h",
          "> [CH] Result: 847,293,441 rows in 0.043s",
          "> [CH] Compression: LZ4 (12:1 ratio)",
        ],
      },
      {
        name: "Victoria-Metrics",
        description: "High-performance time-series database & monitoring",
        proofType: "canvas_graph",
        proofContent: [
          "> [VM] vmselect: 4 instances, vminsert: 4 instances",
          "> [VM] Active time series: 18.7M",
          "> [VM] Ingestion: 2.4M samples/sec",
          "> [VM] Disk usage: 4.2TB (compressed)",
          "> [VM] Query p99 latency: 12ms",
        ],
      },
      {
        name: "ElasticSearch",
        description: "Distributed search and analytics engine",
        proofType: "log_stream",
        proofContent: [
          "> [ES] Cluster health: GREEN (24 nodes)",
          "> [ES] Indices: 847 (lifecycle: hot/warm/cold)",
          "> [ES] Indexing rate: 45K docs/sec",
          "> [ES] Search latency p95: 8ms",
          "> [ES] Snapshot: s3://backups/daily-2026-02-25 COMPLETE",
        ],
      },
    ],
  },
  {
    id: "sec",
    title: "SECURITY & eBPF ARCHITECT",
    period: "2023 - Present",
    icon: Lock,
    description:
      "Implementation of Zero-trust architecture. Using eBPF for deep traffic analysis and kernel-level protection.",
    tags: ["Cilium", "eBPF", "Vault", "Trivy"],
    stats: { TrustLevel: "L5", Security: "Kernel" },
    color: "purple",
    proof: {
      type: "kernel_boot",
      title: "eBPF_SECURITY_SCAN",
      content: [
        "> [eBPF] Loading XDP program: packet_filter.o",
        "> [eBPF] Attaching to eth0 (driver mode)...",
        "> [eBPF] Tracepoint: syscalls/sys_enter_execve attached",
        "> [eBPF] Policy: DROP all non-mTLS traffic",
        "> [eBPF] Detected anomaly: port scan from 10.0.3.47",
        "> [eBPF] Action: QUARANTINE pod (ns: default)",
        "> [eBPF] SECURITY_STATUS: ENFORCING // 0 breaches",
      ],
    },
    tools: [
      {
        name: "eBPF",
        description: "Extended Berkeley Packet Filter for kernel-level ops",
        proofType: "kernel_boot",
        proofContent: [
          "> [eBPF] Programs loaded: 24 (XDP: 4, TC: 8, Tracepoint: 12)",
          "> [eBPF] Maps allocated: 156KB",
          "> [eBPF] Packets processed: 2.1M/sec",
          "> [eBPF] Threats blocked: 847 (last 24h)",
          "> [eBPF] Kernel version: 6.6.13 (BTF enabled)",
        ],
      },
      {
        name: "Vault",
        description: "HashiCorp Vault for secrets management",
        proofType: "log_stream",
        proofContent: [
          "> [VAULT] Seal status: unsealed (shamir, threshold: 3/5)",
          "> [VAULT] Auth methods: kubernetes, approle, oidc",
          "> [VAULT] Secrets engines: kv-v2, pki, transit",
          "> [VAULT] Active leases: 4,291",
          "> [VAULT] Cert rotation: automated (TTL: 24h)",
        ],
      },
      {
        name: "Trivy",
        description: "Container vulnerability scanner",
        proofType: "log_stream",
        proofContent: [
          "> [TRIVY] Scanning 847 container images...",
          "> [TRIVY] Critical: 0, High: 3, Medium: 12, Low: 47",
          "> [TRIVY] Policy: BLOCK on Critical/High",
          "> [TRIVY] 3 High vulns auto-patched via Renovate",
          "> [TRIVY] SCAN_STATUS: PASS // Pipeline unblocked",
        ],
      },
    ],
  },
]

export const currentInfra = {
  nodeName: "UA-FRANKIVSK-NODE-01",
  uptime: "99.9% (Stable)",
  techStack: [
    {
      name: "Talos OS",
      description: "Immutable & Security-focused OS for K8s",
      status: "ACTIVE",
    },
    {
      name: "Cilium",
      description: "eBPF-based networking & observability",
      status: "ENFORCING",
    },
    {
      name: "Sidero",
      description: "Bare-metal provisioning for DeCloud",
      status: "PROVISIONING",
    },
  ],
  securityState: "Active Anonymity (Tails OS based access protocols)",
  metrics: {
    Encryption: "AES-256",
    Network: "Zero-Trust (Cilium)",
    OS: "Talos (Immutable)",
    Kernel: "6.6.13-talos",
  },
}
