 {
  /jade.html: "{\"tests\":{\"/user/cmp\":\"passed 6355914068755da4ec97aef09bff0249 d41d8cd98f00b204e9800998ecf8427e 506585.61296859157\"},\"state\":{\"/user/untitled\":{\"properties\":{\"name\":{\"edit\":\"yes\",\"type\":\"name\",\"value\":\"\",\"label\":\"Name\"}},\"test\":[[\"test\",\"\"]]},\"/user/cmp\":{\"properties\":{\"name\":{\"edit\":\"yes\",\"type\":\"name\",\"value\":\"\",\"label\":\"Name\"}},\"schematic\":[[\"port\",[-72,24,0],{\"signal\":\"Z\"}],[\"port\",[-72,-32,0],{\"signal\":\"N\"}],[\"port\",[-72,-16,0],{\"signal\":\"V\"}],[\"jumper\",[64,144,0]],[\"wire\",[64,144,0,-8,0],{\"signal\":\"0'31\"}],[\"port\",[72,144,2],{\"signal\":\"Y[31:1]\",\"direction\":\"out\"}],[\"port\",[24,48,0],{\"signal\":\"CFN[1]\"}],[\"jumper\",[152,24,0]],[\"port\",[160,24,2],{\"signal\":\"Y[0]\",\"direction\":\"out\"}],[\"/gates/xor2\",[-72,-32,0]],[\"wire\",[-24,-24,0,24,0]],[\"/gates/mux2\",[56,8,0]],[\"wire\",[0,-24,0,0,24]],[\"wire\",[48,8,0,8,0]],[\"wire\",[-72,24,0,128,0]],[\"/gates/or2\",[0,0,0]],[\"wire\",[-72,24,0,72,-8]],[\"wire\",[24,48,0,40,0]],[\"wire\",[64,40,0,0,8]],[\"/gates/mux2\",[88,16,0]],[\"wire\",[72,16,0,16,0]],[\"wire\",[152,24,0,-48,0]],[\"port\",[96,64,0],{\"signal\":\"CFN[0]\"}],[\"wire\",[96,48,0,0,16]],[\"wire\",[0,-24,0,80,0]],[\"wire\",[80,-24,0,0,56]],[\"wire\",[80,32,0,8,0]]],\"test\":[[\"test\",\".power Vdd=1\\n.thresholds Vol=0 Vil=0.1 Vih=0.9 Voh=1\\n\\n.group inputs CFN[1:0] Z V N\\n.group outputs Y[31:0]\\n\\n.mode gate\\n\\n.cycle assert inputs tran 99n sample outputs tran 1n\\n\\n01 000 LLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLL //  1: cfn=CMPEQ, z=0, v=0, n=0, y=0\\n10 000 LLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLL //  2: cfn=CMPLT, z=0, v=0, n=0, y=0\\n11 000 LLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLL //  3: cfn=CMPLE, z=0, v=0, n=0, y=0\\n01 001 LLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLL //  4: cfn=CMPEQ, z=0, v=0, n=1, y=0\\n10 001 LLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLH //  5: cfn=CMPLT, z=0, v=0, n=1, y=1\\n11 001 LLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLH //  6: cfn=CMPLE, z=0, v=0, n=1, y=1\\n01 010 LLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLL //  7: cfn=CMPEQ, z=0, v=1, n=0, y=0\\n10 010 LLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLH //  8: cfn=CMPLT, z=0, v=1, n=0, y=1\\n11 010 LLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLH //  9: cfn=CMPLE, z=0, v=1, n=0, y=1\\n01 011 LLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLL // 10: cfn=CMPEQ, z=0, v=1, n=1, y=0\\n10 011 LLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLL // 11: cfn=CMPLT, z=0, v=1, n=1, y=0\\n11 011 LLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLL // 12: cfn=CMPLE, z=0, v=1, n=1, y=0\\n01 100 LLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLH // 13: cfn=CMPEQ, z=1, v=0, n=0, y=1\\n10 100 LLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLL // 14: cfn=CMPLT, z=1, v=0, n=0, y=0\\n11 100 LLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLH // 15: cfn=CMPLE, z=1, v=0, n=0, y=1\\n01 101 LLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLH // 16: cfn=CMPEQ, z=1, v=0, n=1, y=1\\n10 101 LLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLH // 17: fn=CMPLT, z=1, v=0, n=1, y=1\\n11 101 LLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLH // 18: fn=CMPLE, z=1, v=0, n=1, y=1\\n01 110 LLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLH // 19: fn=CMPEQ, z=1, v=1, n=0, y=1\\n10 110 LLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLH // 20: fn=CMPLT, z=1, v=1, n=0, y=1\\n11 110 LLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLH // 21: fn=CMPLE, z=1, v=1, n=0, y=1\\n      \\n.plot X(CFN[1:0])\\n.plot Z\\n.plot V\\n.plot N\\n.plot X(Y[31:0])\\n\"]]}},\"last_saved\":1727499312320}
}