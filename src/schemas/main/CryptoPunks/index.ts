import axios from 'axios';
import * as Web3 from 'web3';

import {
  EventInputKind,
  FunctionInputKind,
  FunctionOutputKind,
  Schema,
  StateMutability,
} from '../../../types';

export type CryptoPunksType = string;

export const CryptoPunksSchema: Schema<CryptoPunksType> = {
  version: 1,
  deploymentBlock: 3914495,
  name: 'CryptoPunks',
  description: '10,000 unique collectible characters with proof of ownership stored on the Ethereum blockchain.',
  thumbnail: 'https://www.larvalabs.com/cryptopunks/cryptopunk2838.png',
  website: 'https://www.larvalabs.com/cryptopunks',
  fields: [
    {name: 'ID', type: 'uint256', description: 'CryptoPunk number.'},
  ],
  assetFromFields: (fields: any) => fields.ID,
  assetToFields: asset => ({ID: asset}),
  formatter:
    async asset => {
      return {
        thumbnail: 'https://www.larvalabs.com/cryptopunks/cryptopunk' + asset + '.png',
        title: 'CryptoPunk #' + asset,
        description: '',
        url: 'https://www.larvalabs.com/cryptopunks/details/' + asset,
        properties: [],
      };
  },
  functions: {
    transfer: asset => ({
      type: Web3.AbiType.Function,
      name: 'transferPunk',
      payable: false,
      constant: false,
      stateMutability: StateMutability.Nonpayable,
      target: '0xb47e3cd837ddf8e4c57f05d70ab865de6e193bbb',
      inputs: [
        {kind: FunctionInputKind.Replaceable, name: 'to', type: 'address'},
        {kind: FunctionInputKind.Asset, name: 'punkIndex', type: 'uint256', value: asset},
      ],
      outputs: [],
    }),
    ownerOf: asset => ({
      type: Web3.AbiType.Function,
      name: 'punkIndexToAddress',
      payable: false,
      constant: true,
      stateMutability: StateMutability.View,
      target: '0xb47e3cd837ddf8e4c57f05d70ab865de6e193bbb',
      inputs: [
        {kind: FunctionInputKind.Asset, name: '', type: 'uint256', value: asset},
      ],
      outputs: [
        {kind: FunctionOutputKind.Owner, name: '', type: 'address'},
      ],
    }),
  },
  events: {
    transfer: {
      type: Web3.AbiType.Event,
      name: 'PunkTransfer',
      target: '0xb47e3cd837ddf8e4c57f05d70ab865de6e193bbb',
      anonymous: false,
      inputs: [
        {kind: EventInputKind.Source, indexed: true, name: 'from', type: 'address'},
        {kind: EventInputKind.Destination, indexed: true, name: 'to', type: 'address'},
        {kind: EventInputKind.Asset, indexed: false, name: 'punkIndex', type: 'uint256'},
      ],
      assetFromInputs: (inputs: any) => inputs.punkIndex,
    },
  },
  hash: a => a,
};
