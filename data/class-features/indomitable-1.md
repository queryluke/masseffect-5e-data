---
level: 9
klass: soldier
mechanics:
  uses:
    method: byLevel
    params:
      - soldier
      - - level: 9
          uses: 1
        - level: 13
          uses: 2
        - level: 13
          uses: 3
  recharge: short
---
