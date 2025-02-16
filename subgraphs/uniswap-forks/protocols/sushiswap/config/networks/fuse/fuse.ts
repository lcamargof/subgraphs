import { Address, BigDecimal, BigInt } from "@graphprotocol/graph-ts";
import { Factory } from "../../../../../generated/Factory/Factory";
import {
  BIGINT_ZERO,
  FeeSwitch,
  MINIMUM_LIQUIDITY_ONE_HUNDRED_THOUSAND,
  Network,
  PROTOCOL_SCHEMA_VERSION,
  RewardIntervalType,
} from "../../../../../src/common/constants";
import { Configurations } from "../../../../../configurations/configurations/interface";
import {
  PROTOCOL_SUBGRAPH_VERSION,
  PROTOCOL_METHODOLOGY_VERSION,
  PROTOCOL_NAME,
  PROTOCOL_SLUG,
} from "../../../src/common/constants";
import {
  toLowerCase,
  toLowerCaseList,
} from "../../../../../src/common/utils/utils";

export class SushiswapFuseConfigurations implements Configurations {
  getNetwork(): string {
    return Network.FUSE;
  }
  getSchemaVersion(): string {
    return PROTOCOL_SCHEMA_VERSION;
  }
  getSubgraphVersion(): string {
    return PROTOCOL_SUBGRAPH_VERSION;
  }
  getMethodologyVersion(): string {
    return PROTOCOL_METHODOLOGY_VERSION;
  }
  getProtocolName(): string {
    return PROTOCOL_NAME;
  }
  getProtocolSlug(): string {
    return PROTOCOL_SLUG;
  }
  getFactoryAddress(): string {
    return toLowerCase("0x43eA90e2b786728520e4f930d2A71a477BF2737C");
  }
  getFactoryContract(): Factory {
    return Factory.bind(
      Address.fromString(
        toLowerCase("0x43eA90e2b786728520e4f930d2A71a477BF2737C")
      )
    );
  }
  getTradeFee(): BigDecimal {
    return BigDecimal.fromString("3");
  }
  getProtocolFeeToOn(): BigDecimal {
    return BigDecimal.fromString("0.5");
  }
  getLPFeeToOn(): BigDecimal {
    return BigDecimal.fromString("2.5");
  }
  getProtocolFeeToOff(): BigDecimal {
    return BigDecimal.fromString("0");
  }
  getLPFeeToOff(): BigDecimal {
    return BigDecimal.fromString("3");
  }
  getFeeOnOff(): string {
    return FeeSwitch.ON;
  }
  getRewardIntervalType(): string {
    return RewardIntervalType.TIMESTAMP;
  }
  getRewardTokenRate(): BigInt {
    return BIGINT_ZERO;
  }
  getReferenceToken(): string {
    return toLowerCase("0xa722c13135930332Eb3d749B2F0906559D2C5b99");
  }
  getRewardToken(): string {
    return toLowerCase("0x90708b20ccC1eb95a4FA7C8b18Fd2C22a0Ff9E78");
  }
  getWhitelistTokens(): string[] {
    return toLowerCaseList([
      "0x0be9e53fd7edac9f859882afdda116645287c629", // wFUSE
      "0xa722c13135930332eb3d749b2f0906559d2c5b99", // wETH
      "0x33284f95ccb7b948d9d352e1439561cf83d8d00d", // wBTC
      "0x620fd5fa44be6af63715ef4e65ddfa0387ad13f5", // USDC
      "0x94ba7a27c7a95863d1bdc7645ac2951e0cca06ba", // DAI
      "0xfadbbf8ce7d5b7041be672561bba99f79c532e10", // USDT
      "0x249be57637d8b013ad64785404b24aebae9b098b", // fUSD
    ]);
  }
  getStableCoins(): string[] {
    return toLowerCaseList([
      "0x620fd5fa44BE6af63715Ef4E65DDFA0387aD13F5", // USDC
      "0x94Ba7A27c7A95863d1bdC7645AC2951E0cca06bA", // DAI
      "0xFaDbBF8Ce7D5b7041bE672561bbA99f79c532e10", // USDT
      "0x249be57637d8b013ad64785404b24aebae9b098b", // fUSD
    ]);
  }
  getStableOraclePools(): string[] {
    return toLowerCaseList([
      "0xba9ca720e314f42e17e80991c1d0affe47387108", // wETH/USDC
      "0xadf3924f44d0ae0242333cde32d75309b30a0fcc", // wETH/USDT
      "0x44f5b873d6b2a2ee8309927e22f3359c7f23d428", // wETH/DAI
    ]);
  }
  getUntrackedPairs(): string[] {
    return toLowerCaseList([]);
  }
  getUntrackedTokens(): string[] {
    return [];
  }
  getMinimumLiquidityThreshold(): BigDecimal {
    return MINIMUM_LIQUIDITY_ONE_HUNDRED_THOUSAND;
  }
}
