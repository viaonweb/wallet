import { TonConnectButton } from "@tonconnect/ui-react";
import { useCounterContract } from "../hooks/useCounterContract";
import { useTonConnect } from "../hooks/useTonConnect";

import {
  Card,
  FlexBoxCol,
  FlexBoxRow,
  Ellipsis,
  Button,
} from "./styled/styled";

export function Counter() {
  const { connected } = useTonConnect();
  const { value, address, sendIncrement } = useCounterContract();
  const handleBtn = () => {
    //@ts-ignore
    window.Telegram.WebApp.openLink('https://telegram.org/faq');
  };
  const handleX = () => {
    //@ts-ignore
    window.Telegram.WebApp.openLink('http://x.getbeebot.com/login');
  }
  return (
    <div className="Container">
      <TonConnectButton />
        <h5 onClick={handleBtn}>btn</h5>
        <h4 onClick={handleX}>twitter</h4>
      <Card>
        <FlexBoxCol>
          <h3>账户信息</h3>
          <FlexBoxRow>
            <b>地址: </b>
            <Ellipsis>{address}</Ellipsis>
          </FlexBoxRow>
          <FlexBoxRow>
            <b>数量: </b>
            <div>{value ?? "Loading..."}</div>
          </FlexBoxRow>
          <Button
            disabled={!connected}
            className={`Button ${connected ? "Active" : "Disabled"}`}
            onClick={() => {
              sendIncrement();
            }}
          >
            充值
          </Button>
        </FlexBoxCol>
      </Card>
    </div>
  );
}
