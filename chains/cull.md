```mermaid
stateDiagram
direction LR

time --> passive
passive --> damage_dealt
passive --> mana
passive --> heal_self
ultimate_hit --> vulnerable_enemy: death grip (ultimate)
passive --> vulnerable_enemy: countdown (trait)
normal_attack_hit --> passive: candlelight (trait)
```
