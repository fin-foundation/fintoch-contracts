/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
  BaseContract,
  ContractTransaction,
  Overrides,
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import type { TypedEventFilter, TypedEvent, TypedListener } from "./common";

interface MockFlashLoanSimpleReceiverInterface extends ethers.utils.Interface {
  functions: {
    "ADDRESSES_PROVIDER()": FunctionFragment;
    "POOL()": FunctionFragment;
    "executeOperation(address,uint256,uint256,address,bytes)": FunctionFragment;
    "getAmountToApprove()": FunctionFragment;
    "setAmountToApprove(uint256)": FunctionFragment;
    "setFailExecutionTransfer(bool)": FunctionFragment;
    "setSimulateEOA(bool)": FunctionFragment;
    "simulateEOA()": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "ADDRESSES_PROVIDER",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "POOL", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "executeOperation",
    values: [string, BigNumberish, BigNumberish, string, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "getAmountToApprove",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "setAmountToApprove",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setFailExecutionTransfer",
    values: [boolean]
  ): string;
  encodeFunctionData(
    functionFragment: "setSimulateEOA",
    values: [boolean]
  ): string;
  encodeFunctionData(
    functionFragment: "simulateEOA",
    values?: undefined
  ): string;

  decodeFunctionResult(
    functionFragment: "ADDRESSES_PROVIDER",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "POOL", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "executeOperation",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getAmountToApprove",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setAmountToApprove",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setFailExecutionTransfer",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setSimulateEOA",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "simulateEOA",
    data: BytesLike
  ): Result;

  events: {
    "ExecutedWithFail(address,uint256,uint256)": EventFragment;
    "ExecutedWithSuccess(address,uint256,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "ExecutedWithFail"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ExecutedWithSuccess"): EventFragment;
}

export type ExecutedWithFailEvent = TypedEvent<
  [string, BigNumber, BigNumber] & {
    asset: string;
    amount: BigNumber;
    premium: BigNumber;
  }
>;

export type ExecutedWithSuccessEvent = TypedEvent<
  [string, BigNumber, BigNumber] & {
    asset: string;
    amount: BigNumber;
    premium: BigNumber;
  }
>;

export class MockFlashLoanSimpleReceiver extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  listeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter?: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): Array<TypedListener<EventArgsArray, EventArgsObject>>;
  off<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  on<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  once<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeListener<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeAllListeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): this;

  listeners(eventName?: string): Array<Listener>;
  off(eventName: string, listener: Listener): this;
  on(eventName: string, listener: Listener): this;
  once(eventName: string, listener: Listener): this;
  removeListener(eventName: string, listener: Listener): this;
  removeAllListeners(eventName?: string): this;

  queryFilter<EventArgsArray extends Array<any>, EventArgsObject>(
    event: TypedEventFilter<EventArgsArray, EventArgsObject>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEvent<EventArgsArray & EventArgsObject>>>;

  interface: MockFlashLoanSimpleReceiverInterface;

  functions: {
    ADDRESSES_PROVIDER(overrides?: CallOverrides): Promise<[string]>;

    POOL(overrides?: CallOverrides): Promise<[string]>;

    executeOperation(
      asset: string,
      amount: BigNumberish,
      premium: BigNumberish,
      arg3: string,
      arg4: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    getAmountToApprove(overrides?: CallOverrides): Promise<[BigNumber]>;

    setAmountToApprove(
      amountToApprove: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setFailExecutionTransfer(
      fail: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setSimulateEOA(
      flag: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    simulateEOA(overrides?: CallOverrides): Promise<[boolean]>;
  };

  ADDRESSES_PROVIDER(overrides?: CallOverrides): Promise<string>;

  POOL(overrides?: CallOverrides): Promise<string>;

  executeOperation(
    asset: string,
    amount: BigNumberish,
    premium: BigNumberish,
    arg3: string,
    arg4: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  getAmountToApprove(overrides?: CallOverrides): Promise<BigNumber>;

  setAmountToApprove(
    amountToApprove: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setFailExecutionTransfer(
    fail: boolean,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setSimulateEOA(
    flag: boolean,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  simulateEOA(overrides?: CallOverrides): Promise<boolean>;

  callStatic: {
    ADDRESSES_PROVIDER(overrides?: CallOverrides): Promise<string>;

    POOL(overrides?: CallOverrides): Promise<string>;

    executeOperation(
      asset: string,
      amount: BigNumberish,
      premium: BigNumberish,
      arg3: string,
      arg4: BytesLike,
      overrides?: CallOverrides
    ): Promise<boolean>;

    getAmountToApprove(overrides?: CallOverrides): Promise<BigNumber>;

    setAmountToApprove(
      amountToApprove: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    setFailExecutionTransfer(
      fail: boolean,
      overrides?: CallOverrides
    ): Promise<void>;

    setSimulateEOA(flag: boolean, overrides?: CallOverrides): Promise<void>;

    simulateEOA(overrides?: CallOverrides): Promise<boolean>;
  };

  filters: {
    "ExecutedWithFail(address,uint256,uint256)"(
      asset?: null,
      amount?: null,
      premium?: null
    ): TypedEventFilter<
      [string, BigNumber, BigNumber],
      { asset: string; amount: BigNumber; premium: BigNumber }
    >;

    ExecutedWithFail(
      asset?: null,
      amount?: null,
      premium?: null
    ): TypedEventFilter<
      [string, BigNumber, BigNumber],
      { asset: string; amount: BigNumber; premium: BigNumber }
    >;

    "ExecutedWithSuccess(address,uint256,uint256)"(
      asset?: null,
      amount?: null,
      premium?: null
    ): TypedEventFilter<
      [string, BigNumber, BigNumber],
      { asset: string; amount: BigNumber; premium: BigNumber }
    >;

    ExecutedWithSuccess(
      asset?: null,
      amount?: null,
      premium?: null
    ): TypedEventFilter<
      [string, BigNumber, BigNumber],
      { asset: string; amount: BigNumber; premium: BigNumber }
    >;
  };

  estimateGas: {
    ADDRESSES_PROVIDER(overrides?: CallOverrides): Promise<BigNumber>;

    POOL(overrides?: CallOverrides): Promise<BigNumber>;

    executeOperation(
      asset: string,
      amount: BigNumberish,
      premium: BigNumberish,
      arg3: string,
      arg4: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    getAmountToApprove(overrides?: CallOverrides): Promise<BigNumber>;

    setAmountToApprove(
      amountToApprove: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setFailExecutionTransfer(
      fail: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setSimulateEOA(
      flag: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    simulateEOA(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    ADDRESSES_PROVIDER(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    POOL(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    executeOperation(
      asset: string,
      amount: BigNumberish,
      premium: BigNumberish,
      arg3: string,
      arg4: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    getAmountToApprove(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    setAmountToApprove(
      amountToApprove: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setFailExecutionTransfer(
      fail: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setSimulateEOA(
      flag: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    simulateEOA(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
