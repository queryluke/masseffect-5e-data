---
level: 2
klass: soldier
mechanics:
  uses:
    method: byLevel
    params:
      - soldier
      - - level: 2
          uses: 1
        - level: 17
          uses: 2
  recharge: short
---
