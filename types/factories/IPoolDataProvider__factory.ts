/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import { Provider } from "@ethersproject/providers";
import type {
  IPoolDataProvider,
  IPoolDataProviderInterface,
} from "../IPoolDataProvider";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "asset",
        type: "address",
      },
    ],
    name: "getATokenTotalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "asset",
        type: "address",
      },
    ],
    name: "getReserveData",
    outputs: [
      {
        internalType: "uint256",
        name: "unbacked",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "accruedToTreasuryScaled",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "totalAToken",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "totalStableDebt",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "totalVariableDebt",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "liquidityRate",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "variableBorrowRate",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "stableBorrowRate",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "averageStableBorrowRate",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "liquidityIndex",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "variableBorrowIndex",
        type: "uint256",
      },
      {
        internalType: "uint40",
        name: "lastUpdateTimestamp",
        type: "uint40",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "asset",
        type: "address",
      },
    ],
    name: "getTotalDebt",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

export class IPoolDataProvider__factory {
  static readonly abi = _abi;
  static createInterface(): IPoolDataProviderInterface {
    return new utils.Interface(_abi) as IPoolDataProviderInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IPoolDataProvider {
    return new Contract(address, _abi, signerOrProvider) as IPoolDataProvider;
  }
}
