import { BackedBy } from "./backed-by";
import { Banner } from "./banner";
import { CurrentStats } from "./current-stats";
import { PartnersBy } from "./partners-by";
import { SupportedChains } from "./supported-chains";
import { TradeDerivatives } from "./trade-derivatives";

export default function Home() {
  return (
    <main>
      <Banner />
      <CurrentStats />
      <SupportedChains />
      <TradeDerivatives />
      <BackedBy />
      <PartnersBy />
    </main>
  );
}
