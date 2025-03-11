```mermaid
flowchart LR

%% states
projectile@{ shape: stadium, label: "projectile" }
projectileb@{ shape: stadium, label: "projectile but farther" }
freeze@{ shape: stadium, label: "on freeze" }
innerfire@{ shape: stadium, label: "innerfire" }

%% transitions
freeze -..->|crystal blade| projectile
freeze -........->|crystal blade| projectileb
```
