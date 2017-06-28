:: Beginning of hub batch file
set SERVER_VERSION=3.4.0
set HUB_PORT=5558
set REGISTER_IP=localhost:4445
set CHROME_DRIVER=.\webdriver\chromedriver.exe
set GECKO_DRIVER=.\webdriver\geckodriver.exe
set IE_DRIVER=.\webdriver\IEDriverServer.exe
set NODE_CONFIG=se-node_1-config.json

java -Dwebdriver.chrome.driver=%CHROME_DRIVER% -jar selenium-server-standalone-%SERVER_VERSION%.jar -role node -hub http://%REGISTER_IP%/grid/register -browser "browserName=chrome,version=59,maxinstance=5,platform=WINDOWS" -port %HUB_PORT% -nodeConfig %NODE_CONFIG%
:: End of hub batch file
pause