 {
  /jade.html: "{\"tests\":{\"/user/shift\":\"passed 5d334e9aa8f331b3e2b87f0497c8219a d41d8cd98f00b204e9800998ecf8427e 1571.3264352102808\"},\"state\":{\"/user/untitled\":{\"properties\":{\"name\":{\"edit\":\"yes\",\"type\":\"name\",\"value\":\"\",\"label\":\"Name\"}},\"test\":[[\"test\",\"\"]]},\"/user/shift\":{\"properties\":{\"name\":{\"edit\":\"yes\",\"type\":\"name\",\"value\":\"\",\"label\":\"Name\"}},\"schematic\":[[\"port\",[-32,-16,0],{\"signal\":\"A[31:0]\"}],[\"port\",[-32,0,0],{\"signal\":\"B[4:0]\"}],[\"port\",[-32,16,0],{\"signal\":\"SFN[1:0]\"}],[\"jumper\",[32,0,0]],[\"wire\",[32,0,0,-8,0],{\"signal\":\"Out[31:0]\"}],[\"port\",[40,0,2],{\"signal\":\"Y[31:0]\",\"direction\":\"out\"}],[\"/gates/mux2\",[-144,-144,0]],[\"/gates/mux2\",[-152,48,0]],[\"wire\",[-152,64,0,-8,0],{\"signal\":\"A[31:0]\"}],[\"wire\",[-152,48,0,-8,0],{\"signal\":\"A[0:31]\"}],[\"wire\",[-144,80,0,0,8],{\"signal\":\"SFN[0]\"}],[\"wire\",[-136,56,0,8,0],{\"signal\":\"AP[31:0]\"}],[\"wire\",[-144,-144,0,-8,0],{\"signal\":\"AP[15:0],G#16\"}],[\"wire\",[-144,-128,0,-8,0],{\"signal\":\"AP[31:0]\"}],[\"wire\",[-136,-112,0,0,8],{\"signal\":\"B[4]\"}],[\"wire\",[-128,-136,0,8,0],{\"signal\":\"Q[31:0]\"}],[\"/gates/mux2\",[-64,-144,0]],[\"wire\",[-64,-144,0,-8,0],{\"signal\":\"Q[23:0],G#8\"}],[\"wire\",[-64,-128,0,-8,0],{\"signal\":\"Q[31:0]\"}],[\"wire\",[-56,-112,0,0,8],{\"signal\":\"B[3]\"}],[\"wire\",[-48,-136,0,8,0],{\"signal\":\"R[31:0]\"}],[\"/gates/mux2\",[32,-144,0]],[\"wire\",[32,-144,0,-8,0],{\"signal\":\"R[27:0],G#4\"}],[\"wire\",[32,-128,0,-8,0],{\"signal\":\"R[31:0]\"}],[\"wire\",[40,-112,0,0,8],{\"signal\":\"B[2]\"}],[\"wire\",[48,-136,0,8,0],{\"signal\":\"S[31:0]\"}],[\"/gates/mux2\",[-88,-80,0]],[\"wire\",[-88,-80,0,-8,0],{\"signal\":\"S[29:0],G#2\"}],[\"wire\",[-88,-64,0,-8,0],{\"signal\":\"S[31:0]\"}],[\"wire\",[-80,-48,0,0,8],{\"signal\":\"B[1]\"}],[\"wire\",[-72,-72,0,8,0],{\"signal\":\"T[31:0]\"}],[\"/gates/mux2\",[16,-80,0]],[\"wire\",[16,-80,0,-8,0],{\"signal\":\"T[30:0],G\"}],[\"wire\",[16,-64,0,-8,0],{\"signal\":\"T[31:0]\"}],[\"wire\",[24,-48,0,0,8],{\"signal\":\"B[0]\"}],[\"wire\",[32,-72,0,8,0],{\"signal\":\"U[31:0]\"}],[\"/gates/mux2\",[8,48,0]],[\"wire\",[8,64,0,-8,0],{\"signal\":\"U[31:0]\"}],[\"wire\",[8,48,0,-8,0],{\"signal\":\"U[0:31]\"}],[\"wire\",[16,80,0,0,8],{\"signal\":\"SFN[0]\"}],[\"wire\",[24,56,0,8,0],{\"signal\":\"Out[31:0]\"}],[\"/gates/and2\",[-80,112,0]],[\"wire\",[-80,112,0,-8,0],{\"signal\":\"A[31]\"}],[\"wire\",[-80,128,0,-8,0],{\"signal\":\"SFN[1]\"}],[\"wire\",[-32,120,0,8,0],{\"signal\":\"G\"}]],\"test\":[[\"test\",\".power Vdd=1\\n.thresholds Vol=0 Vil=0.1 Vih=0.9 Voh=1\\n\\n.group inputs SFN[1:0] A[31:0] B[4:0]\\n.group outputs Y[31:0]\\n\\n.mode gate\\n\\n.cycle assert inputs tran 99n sample outputs tran 1n\\n\\n00 00000000000000000000000000000000 00000 LLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLL //   1: fn=SHL, a=0X00000000, b= 0, y=0X00000000\\n01 00000000000000000000000000000000 00000 LLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLL //   2: fn=SHR, a=0X00000000, b= 0, y=0X00000000\\n11 00000000000000000000000000000000 00000 LLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLL //   3: fn=SRA, a=0X00000000, b= 0, y=0X00000000\\n00 00000000000000000000000000000000 00001 LLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLL //   4: fn=SHL, a=0X00000000, b= 1, y=0X00000000\\n01 00000000000000000000000000000000 00001 LLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLL //   5: fn=SHR, a=0X00000000, b= 1, y=0X00000000\\n11 00000000000000000000000000000000 00001 LLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLL //   6: fn=SRA, a=0X00000000, b= 1, y=0X00000000\\n00 00000000000000000000000000000000 00010 LLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLL //   7: fn=SHL, a=0X00000000, b= 2, y=0X00000000\\n01 00000000000000000000000000000000 00010 LLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLL //   8: fn=SHR, a=0X00000000, b= 2, y=0X00000000\\n11 00000000000000000000000000000000 00010 LLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLL //   9: fn=SRA, a=0X00000000, b= 2, y=0X00000000\\n00 00000000000000000000000000000000 00100 LLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLL //  10: fn=SHL, a=0X00000000, b= 4, y=0X00000000\\n01 00000000000000000000000000000000 00100 LLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLL //  11: fn=SHR, a=0X00000000, b= 4, y=0X00000000\\n11 00000000000000000000000000000000 00100 LLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLL //  12: fn=SRA, a=0X00000000, b= 4, y=0X00000000\\n00 00000000000000000000000000000000 01000 LLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLL //  13: fn=SHL, a=0X00000000, b= 8, y=0X00000000\\n01 00000000000000000000000000000000 01000 LLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLL //  14: fn=SHR, a=0X00000000, b= 8, y=0X00000000\\n11 00000000000000000000000000000000 01000 LLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLL //  15: fn=SRA, a=0X00000000, b= 8, y=0X00000000\\n00 00000000000000000000000000000000 10000 LLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLL //  16: fn=SHL, a=0X00000000, b=16, y=0X00000000\\n01 00000000000000000000000000000000 10000 LLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLL //  17: fn=SHR, a=0X00000000, b=16, y=0X00000000\\n11 00000000000000000000000000000000 10000 LLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLL //  18: fn=SRA, a=0X00000000, b=16, y=0X00000000\\n00 00000000000000000000000000000000 11111 LLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLL //  19: fn=SHL, a=0X00000000, b=31, y=0X00000000\\n01 00000000000000000000000000000000 11111 LLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLL //  20: fn=SHR, a=0X00000000, b=31, y=0X00000000\\n11 00000000000000000000000000000000 11111 LLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLL //  21: fn=SRA, a=0X00000000, b=31, y=0X00000000\\n00 00000000000000000000000000000001 00000 LLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLH //  22: fn=SHL, a=0X00000001, b= 0, y=0X00000001\\n01 00000000000000000000000000000001 00000 LLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLH //  23: fn=SHR, a=0X00000001, b= 0, y=0X00000001\\n11 00000000000000000000000000000001 00000 LLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLH //  24: fn=SRA, a=0X00000001, b= 0, y=0X00000001\\n00 00000000000000000000000000000001 00001 LLLLLLLLLLLLLLLLLLLLLLLLLLLLLLHL //  25: fn=SHL, a=0X00000001, b= 1, y=0X00000002\\n01 00000000000000000000000000000001 00001 LLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLL //  26: fn=SHR, a=0X00000001, b= 1, y=0X00000000\\n11 00000000000000000000000000000001 00001 LLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLL //  27: fn=SRA, a=0X00000001, b= 1, y=0X00000000\\n00 00000000000000000000000000000001 00010 LLLLLLLLLLLLLLLLLLLLLLLLLLLLLHLL //  28: fn=SHL, a=0X00000001, b= 2, y=0X00000004\\n01 00000000000000000000000000000001 00010 LLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLL //  29: fn=SHR, a=0X00000001, b= 2, y=0X00000000\\n11 00000000000000000000000000000001 00010 LLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLL //  30: fn=SRA, a=0X00000001, b= 2, y=0X00000000\\n00 00000000000000000000000000000001 00100 LLLLLLLLLLLLLLLLLLLLLLLLLLLHLLLL //  31: fn=SHL, a=0X00000001, b= 4, y=0X00000010\\n01 00000000000000000000000000000001 00100 LLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLL //  32: fn=SHR, a=0X00000001, b= 4, y=0X00000000\\n11 00000000000000000000000000000001 00100 LLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLL //  33: fn=SRA, a=0X00000001, b= 4, y=0X00000000\\n00 00000000000000000000000000000001 01000 LLLLLLLLLLLLLLLLLLLLLLLHLLLLLLLL //  34: fn=SHL, a=0X00000001, b= 8, y=0X00000100\\n01 00000000000000000000000000000001 01000 LLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLL //  35: fn=SHR, a=0X00000001, b= 8, y=0X00000000\\n11 00000000000000000000000000000001 01000 LLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLL //  36: fn=SRA, a=0X00000001, b= 8, y=0X00000000\\n00 00000000000000000000000000000001 10000 LLLLLLLLLLLLLLLHLLLLLLLLLLLLLLLL //  37: fn=SHL, a=0X00000001, b=16, y=0X00010000\\n01 00000000000000000000000000000001 10000 LLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLL //  38: fn=SHR, a=0X00000001, b=16, y=0X00000000\\n11 00000000000000000000000000000001 10000 LLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLL //  39: fn=SRA, a=0X00000001, b=16, y=0X00000000\\n00 00000000000000000000000000000001 11111 HLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLL //  40: fn=SHL, a=0X00000001, b=31, y=0X80000000\\n01 00000000000000000000000000000001 11111 LLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLL //  41: fn=SHR, a=0X00000001, b=31, y=0X00000000\\n11 00000000000000000000000000000001 11111 LLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLL //  42: fn=SRA, a=0X00000001, b=31, y=0X00000000\\n00 11111111111111111111111111111111 00000 HHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH //  43: fn=SHL, a=0XFFFFFFFF, b= 0, y=0XFFFFFFFF\\n01 11111111111111111111111111111111 00000 HHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH //  44: fn=SHR, a=0XFFFFFFFF, b= 0, y=0XFFFFFFFF\\n11 11111111111111111111111111111111 00000 HHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH //  45: fn=SRA, a=0XFFFFFFFF, b= 0, y=0XFFFFFFFF\\n00 11111111111111111111111111111111 00001 HHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHL //  46: fn=SHL, a=0XFFFFFFFF, b= 1, y=0XFFFFFFFE\\n01 11111111111111111111111111111111 00001 LHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH //  47: fn=SHR, a=0XFFFFFFFF, b= 1, y=0X7FFFFFFF\\n11 11111111111111111111111111111111 00001 HHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH //  48: fn=SRA, a=0XFFFFFFFF, b= 1, y=0XFFFFFFFF\\n00 11111111111111111111111111111111 00010 HHHHHHHHHHHHHHHHHHHHHHHHHHHHHHLL //  49: fn=SHL, a=0XFFFFFFFF, b= 2, y=0XFFFFFFFC\\n01 11111111111111111111111111111111 00010 LLHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH //  50: fn=SHR, a=0XFFFFFFFF, b= 2, y=0X3FFFFFFF\\n11 11111111111111111111111111111111 00010 HHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH //  51: fn=SRA, a=0XFFFFFFFF, b= 2, y=0XFFFFFFFF\\n00 11111111111111111111111111111111 00100 HHHHHHHHHHHHHHHHHHHHHHHHHHHHLLLL //  52: fn=SHL, a=0XFFFFFFFF, b= 4, y=0XFFFFFFF0\\n01 11111111111111111111111111111111 00100 LLLLHHHHHHHHHHHHHHHHHHHHHHHHHHHH //  53: fn=SHR, a=0XFFFFFFFF, b= 4, y=0X0FFFFFFF\\n11 11111111111111111111111111111111 00100 HHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH //  54: fn=SRA, a=0XFFFFFFFF, b= 4, y=0XFFFFFFFF\\n00 11111111111111111111111111111111 01000 HHHHHHHHHHHHHHHHHHHHHHHHLLLLLLLL //  55: fn=SHL, a=0XFFFFFFFF, b= 8, y=0XFFFFFF00\\n01 11111111111111111111111111111111 01000 LLLLLLLLHHHHHHHHHHHHHHHHHHHHHHHH //  56: fn=SHR, a=0XFFFFFFFF, b= 8, y=0X00FFFFFF\\n11 11111111111111111111111111111111 01000 HHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH //  57: fn=SRA, a=0XFFFFFFFF, b= 8, y=0XFFFFFFFF\\n00 11111111111111111111111111111111 10000 HHHHHHHHHHHHHHHHLLLLLLLLLLLLLLLL //  58: fn=SHL, a=0XFFFFFFFF, b=16, y=0XFFFF0000\\n01 11111111111111111111111111111111 10000 LLLLLLLLLLLLLLLLHHHHHHHHHHHHHHHH //  59: fn=SHR, a=0XFFFFFFFF, b=16, y=0X0000FFFF\\n11 11111111111111111111111111111111 10000 HHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH //  60: fn=SRA, a=0XFFFFFFFF, b=16, y=0XFFFFFFFF\\n00 11111111111111111111111111111111 11111 HLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLL //  61: fn=SHL, a=0XFFFFFFFF, b=31, y=0X80000000\\n01 11111111111111111111111111111111 11111 LLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLH //  62: fn=SHR, a=0XFFFFFFFF, b=31, y=0X00000001\\n11 11111111111111111111111111111111 11111 HHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH //  63: fn=SRA, a=0XFFFFFFFF, b=31, y=0XFFFFFFFF\\n00 00010010001101000101011001111000 00000 LLLHLLHLLLHHLHLLLHLHLHHLLHHHHLLL //  64: fn=SHL, a=0X12345678, b= 0, y=0X12345678\\n01 00010010001101000101011001111000 00000 LLLHLLHLLLHHLHLLLHLHLHHLLHHHHLLL //  65: fn=SHR, a=0X12345678, b= 0, y=0X12345678\\n11 00010010001101000101011001111000 00000 LLLHLLHLLLHHLHLLLHLHLHHLLHHHHLLL //  66: fn=SRA, a=0X12345678, b= 0, y=0X12345678\\n00 00010010001101000101011001111000 00001 LLHLLHLLLHHLHLLLHLHLHHLLHHHHLLLL //  67: fn=SHL, a=0X12345678, b= 1, y=0X2468ACF0\\n01 00010010001101000101011001111000 00001 LLLLHLLHLLLHHLHLLLHLHLHHLLHHHHLL //  68: fn=SHR, a=0X12345678, b= 1, y=0X091A2B3C\\n11 00010010001101000101011001111000 00001 LLLLHLLHLLLHHLHLLLHLHLHHLLHHHHLL //  69: fn=SRA, a=0X12345678, b= 1, y=0X091A2B3C\\n00 00010010001101000101011001111000 00010 LHLLHLLLHHLHLLLHLHLHHLLHHHHLLLLL //  70: fn=SHL, a=0X12345678, b= 2, y=0X48D159E0\\n01 00010010001101000101011001111000 00010 LLLLLHLLHLLLHHLHLLLHLHLHHLLHHHHL //  71: fn=SHR, a=0X12345678, b= 2, y=0X048D159E\\n11 00010010001101000101011001111000 00010 LLLLLHLLHLLLHHLHLLLHLHLHHLLHHHHL //  72: fn=SRA, a=0X12345678, b= 2, y=0X048D159E\\n00 00010010001101000101011001111000 00100 LLHLLLHHLHLLLHLHLHHLLHHHHLLLLLLL //  73: fn=SHL, a=0X12345678, b= 4, y=0X23456780\\n01 00010010001101000101011001111000 00100 LLLLLLLHLLHLLLHHLHLLLHLHLHHLLHHH //  74: fn=SHR, a=0X12345678, b= 4, y=0X01234567\\n11 00010010001101000101011001111000 00100 LLLLLLLHLLHLLLHHLHLLLHLHLHHLLHHH //  75: fn=SRA, a=0X12345678, b= 4, y=0X01234567\\n00 00010010001101000101011001111000 01000 LLHHLHLLLHLHLHHLLHHHHLLLLLLLLLLL //  76: fn=SHL, a=0X12345678, b= 8, y=0X34567800\\n01 00010010001101000101011001111000 01000 LLLLLLLLLLLHLLHLLLHHLHLLLHLHLHHL //  77: fn=SHR, a=0X12345678, b= 8, y=0X00123456\\n11 00010010001101000101011001111000 01000 LLLLLLLLLLLHLLHLLLHHLHLLLHLHLHHL //  78: fn=SRA, a=0X12345678, b= 8, y=0X00123456\\n00 00010010001101000101011001111000 10000 LHLHLHHLLHHHHLLLLLLLLLLLLLLLLLLL //  79: fn=SHL, a=0X12345678, b=16, y=0X56780000\\n01 00010010001101000101011001111000 10000 LLLLLLLLLLLLLLLLLLLHLLHLLLHHLHLL //  80: fn=SHR, a=0X12345678, b=16, y=0X00001234\\n11 00010010001101000101011001111000 10000 LLLLLLLLLLLLLLLLLLLHLLHLLLHHLHLL //  81: fn=SRA, a=0X12345678, b=16, y=0X00001234\\n00 00010010001101000101011001111000 11111 LLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLL //  82: fn=SHL, a=0X12345678, b=31, y=0X00000000\\n01 00010010001101000101011001111000 11111 LLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLL //  83: fn=SHR, a=0X12345678, b=31, y=0X00000000\\n11 00010010001101000101011001111000 11111 LLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLL //  84: fn=SRA, a=0X12345678, b=31, y=0X00000000\\n00 11111110110111001011101010011000 00000 HHHHHHHLHHLHHHLLHLHHHLHLHLLHHLLL //  85: fn=SHL, a=0XFEDCBA98, b= 0, y=0XFEDCBA98\\n01 11111110110111001011101010011000 00000 HHHHHHHLHHLHHHLLHLHHHLHLHLLHHLLL //  86: fn=SHR, a=0XFEDCBA98, b= 0, y=0XFEDCBA98\\n11 11111110110111001011101010011000 00000 HHHHHHHLHHLHHHLLHLHHHLHLHLLHHLLL //  87: fn=SRA, a=0XFEDCBA98, b= 0, y=0XFEDCBA98\\n00 11111110110111001011101010011000 00001 HHHHHHLHHLHHHLLHLHHHLHLHLLHHLLLL //  88: fn=SHL, a=0XFEDCBA98, b= 1, y=0XFDB97530\\n01 11111110110111001011101010011000 00001 LHHHHHHHLHHLHHHLLHLHHHLHLHLLHHLL //  89: fn=SHR, a=0XFEDCBA98, b= 1, y=0X7F6E5D4C\\n11 11111110110111001011101010011000 00001 HHHHHHHHLHHLHHHLLHLHHHLHLHLLHHLL //  90: fn=SRA, a=0XFEDCBA98, b= 1, y=0XFF6E5D4C\\n00 11111110110111001011101010011000 00010 HHHHHLHHLHHHLLHLHHHLHLHLLHHLLLLL //  91: fn=SHL, a=0XFEDCBA98, b= 2, y=0XFB72EA60\\n01 11111110110111001011101010011000 00010 LLHHHHHHHLHHLHHHLLHLHHHLHLHLLHHL //  92: fn=SHR, a=0XFEDCBA98, b= 2, y=0X3FB72EA6\\n11 11111110110111001011101010011000 00010 HHHHHHHHHLHHLHHHLLHLHHHLHLHLLHHL //  93: fn=SRA, a=0XFEDCBA98, b= 2, y=0XFFB72EA6\\n00 11111110110111001011101010011000 00100 HHHLHHLHHHLLHLHHHLHLHLLHHLLLLLLL //  94: fn=SHL, a=0XFEDCBA98, b= 4, y=0XEDCBA980\\n01 11111110110111001011101010011000 00100 LLLLHHHHHHHLHHLHHHLLHLHHHLHLHLLH //  95: fn=SHR, a=0XFEDCBA98, b= 4, y=0X0FEDCBA9\\n11 11111110110111001011101010011000 00100 HHHHHHHHHHHLHHLHHHLLHLHHHLHLHLLH //  96: fn=SRA, a=0XFEDCBA98, b= 4, y=0XFFEDCBA9\\n00 11111110110111001011101010011000 01000 HHLHHHLLHLHHHLHLHLLHHLLLLLLLLLLL //  97: fn=SHL, a=0XFEDCBA98, b= 8, y=0XDCBA9800\\n01 11111110110111001011101010011000 01000 LLLLLLLLHHHHHHHLHHLHHHLLHLHHHLHL //  98: fn=SHR, a=0XFEDCBA98, b= 8, y=0X00FEDCBA\\n11 11111110110111001011101010011000 01000 HHHHHHHHHHHHHHHLHHLHHHLLHLHHHLHL //  99: fn=SRA, a=0XFEDCBA98, b= 8, y=0XFFFEDCBA\\n00 11111110110111001011101010011000 10000 HLHHHLHLHLLHHLLLLLLLLLLLLLLLLLLL // 100: fn=SHL, a=0XFEDCBA98, b=16, y=0XBA980000\\n01 11111110110111001011101010011000 10000 LLLLLLLLLLLLLLLLHHHHHHHLHHLHHHLL // 101: fn=SHR, a=0XFEDCBA98, b=16, y=0X0000FEDC\\n11 11111110110111001011101010011000 10000 HHHHHHHHHHHHHHHHHHHHHHHLHHLHHHLL // 102: fn=SRA, a=0XFEDCBA98, b=16, y=0XFFFFFEDC\\n00 11111110110111001011101010011000 11111 LLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLL // 103: fn=SHL, a=0XFEDCBA98, b=31, y=0X00000000\\n01 11111110110111001011101010011000 11111 LLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLH // 104: fn=SHR, a=0XFEDCBA98, b=31, y=0X00000001\\n11 11111110110111001011101010011000 11111 HHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH // 105: fn=SRA, a=0XFEDCBA98, b=31, y=0XFFFFFFFF\\n\\n.plot X(SFN[1:0])\\n.plot X(A[31:0])\\n.plot X(B[4:0])\\n.plot X(Y[31:0])\"]]}},\"last_saved\":1727499324071}
}