 @@ script infofile_;_ZIP::ssf6.xml_;_
SystemUtil.Run "C:\Program Files\Google\Chrome\Application\chrome.exe","https://agqa-gtu-dvv.dvsys.dv.be/QIS/Logon"
wait 3
Browser("Keylane Axon").Page("Keylane Axon_4").WebEdit("userId").Set "D030335" @@ script infofile_;_ZIP::ssf7.xml_;_
wait 3
Browser("Keylane Axon").Page("Keylane Axon_4").WebEdit("password").SetSecure "62ebbf2a5d8c990597ba648a2856" @@ script infofile_;_ZIP::ssf8.xml_;_
wait 3
Browser("Keylane Axon").Page("Keylane Axon_4").WebButton("Aanmelden").Click @@ script infofile_;_ZIP::ssf9.xml_;_
wait 3
Browser("Keylane Axon").Page("Keylane Axon_5").Link("Polis").Click @@ script infofile_;_ZIP::ssf10.xml_;_
wait 3
Browser("Keylane Axon").Page("Keylane Axon_6").WebEdit("_SelectPolicyView_policyExtId").Set "9000150214" @@ script infofile_;_ZIP::ssf11.xml_;_
wait 5
Browser("Keylane Axon").Page("Keylane Axon_6").WebButton("_SelectPolicyView_null").Click @@ script infofile_;_ZIP::ssf12.xml_;_
wait 8
Browser("Keylane Axon").Page("Keylane Axon_7").Link("Details").Click @@ script infofile_;_ZIP::ssf13.xml_;_
