// @ts-nocheck
import "./App.css";
import { WalletPay } from "wallet-pay";
import { TonConnectButton } from "@tonconnect/ui-react";
import { Counter } from "./components/Counter";
import { Jetton } from "./components/Jetton";
import { TransferTon } from "./components/TransferTon";
import styled from "styled-components";
import { Button, FlexBoxCol, FlexBoxRow } from "./components/styled/styled";
import { useTonConnect } from "./hooks/useTonConnect";
import { CHAIN } from "@tonconnect/protocol";
import "@twa-dev/sdk";

const StyledApp = styled.div`
  background-color: #e8e8e8;
  color: black;

  @media (prefers-color-scheme: dark) {
    background-color: #222;
    color: white;
  }
  min-height: 100vh;
  padding: 20px 20px;
`;

const AppContainer = styled.div`
  max-width: 900px;
  margin: 0 auto;
`;

function App() {
  const { network } = useTonConnect();
  const handlePay = () => {
    const wallet = new WalletPay("Store token");

    return wallet.createOrder({
      amount: {
        currencyCode: "USD",
        amount: "1.00",
      },
      description: "bee bot seller test lee",
      // returnUrl: "https://t.me/wallet",
      // failReturnUrl: "https://t.me/wallet",
      customData: "client_ref=4E89",
      externalId: "ORD-5023-4E89",
      timeoutSeconds: 10800,
      customerTelegramUserId: 0,
    });
  };
  return (
    <StyledApp>
      <AppContainer>
        <FlexBoxCol>
          <FlexBoxRow>
            <TonConnectButton />
            <Button>
              {network
                ? network === CHAIN.MAINNET
                  ? "正式"
                  : "测试"
                : "未连接"}
            </Button>
          </FlexBoxRow>
          <Counter />
          <TransferTon />
          <button onClick={handlePay}>
              wallet pay
          </button>
          {/* <Jetton /> */}
        </FlexBoxCol>
      </AppContainer>
    </StyledApp>
  );
}

export default App;
