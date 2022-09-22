/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  IsolationModeLogic,
  IsolationModeLogicInterface,
} from "../IsolationModeLogic";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "asset",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "totalDebt",
        type: "uint256",
      },
    ],
    name: "IsolationModeTotalDebtUpdated",
    type: "event",
  },
];

const _bytecode =
  "0x60566037600b82828239805160001a607314602a57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600080fdfea26469706673582212208bccfe6ccf9cdcb183b1db9110486fd8068a99e0ebe0ea15e4054fe41c5ad80564736f6c634300080a0033";

export class IsolationModeLogic__factory extends ContractFactory {
  constructor(
    ...args: [signer: Signer] | ConstructorParameters<typeof ContractFactory>
  ) {
    if (args.length === 1) {
      super(_abi, _bytecode, args[0]);
    } else {
      super(...args);
    }
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<IsolationModeLogic> {
    return super.deploy(overrides || {}) as Promise<IsolationModeLogic>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): IsolationModeLogic {
    return super.attach(address) as IsolationModeLogic;
  }
  connect(signer: Signer): IsolationModeLogic__factory {
    return super.connect(signer) as IsolationModeLogic__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): IsolationModeLogicInterface {
    return new utils.Interface(_abi) as IsolationModeLogicInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IsolationModeLogic {
    return new Contract(address, _abi, signerOrProvider) as IsolationModeLogic;
  }
}