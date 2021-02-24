# cfx-subgraph

## Thegraph deployment

```console
$ npm install npm yarn

$ node_modules/.bin/npm install @graphprotocol/graph-cli

$ node_modules/.bin/graph init
...
$ node_modules/.bin/graph codegen

$ node_modules/.bin/graph build

$ node_modules/.bin/graph auth https://thegraph.com/explorer/subgraph/samuelhbne/cfx3 xxxxxxxxxxxxxxxx

npx graph auth https://api.thegraph.com/deploy/

node_modules/.bin/graph auth https://thegraph.com/explorer/subgraph/nicktaras/cfx 081908015d3f4761853da44752298503

$ node_modules/.bin/graph deploy --node https://api.thegraph.com/deploy/ --ipfs https://api.thegraph.com/ipfs/ samuelhbne/Cfx

// https://thegraph.com/explorer/subgraph/nicktaras/cfx

node_modules/.bin/graph deploy --node https://api.thegraph.com/deploy/ --ipfs https://api.thegraph.com/ipfs/ nicktaras/Cfx

```

```console
sam@horizons450s:~/sam/eth/cfx-subgraph$ ./node_modules/.bin/graph init
✔️ Subgraph name · samuelhbne/Cfx
✔️ Directory to create the subgraph in · Cfx
✔️ Ethereum network · mainnet
✔️ Contract address · 0x94F36FAa6bB4f74009637292b09C355CcD3e80Eb
✔️ Fetching ABI from Etherscan
———
  Generate subgraph from ABI
  Write subgraph to directory
✔️ Create subgraph scaffold
✔️ Initialize subgraph repository
✔️ Install dependencies with npm install
✔️ Generate ABI and schema types with npm run codegen

Subgraph samuelhbne/Cfx created in Cfx

Next steps:

  1. Run graph auth 
  https://api.thegraph.com/deploy/ <access-token>
     to authenticate with the hosted service. You can get the access token from
     https://thegraph.com/explorer/dashboard/.

  2. Type cd Cfx to enter the subgraph.

  3. Run npm run deploy to deploy the subgraph to
     https://thegraph.com/explorer/subgraph/samuelhbne/Cfx.

Make sure to visit the documentation on https://thegraph.com/docs/ for further information.
sam@horizons450s:~/sam/eth/cfx-subgraph$ ./node_modules/.bin/graph auth https://api.thegraph.com/deploy/ b27f599cc41a471ea69df4a2571ee80d
Access token set for https://api.thegraph.com/deploy/
sam@horizons450s:~/sam/eth/cfx-subgraph$ ./node_modules/.bin/npm run deploy

> cfx@0.1.0 deploy /home/sam/sam/eth/cfx-subgraph
> graph deploy samuelhbne/Cfx --ipfs https://api.thegraph.com/ipfs/ --node https://api.thegraph.com/deploy/

  Skip migration: Bump mapping apiVersion from 0.0.1 to 0.0.2
  Skip migration: Bump mapping apiVersion from 0.0.2 to 0.0.3
  Skip migration: Bump mapping apiVersion from 0.0.3 to 0.0.4
  Skip migration: Bump mapping specVersion from 0.0.1 to 0.0.2
✔️ Apply migrations
✔️ Load subgraph from subgraph.yaml
  Compile data source: Cfx => build/Cfx/Cfx.wasm
✔️ Compile subgraph
  Copy subgraph file build/schema.graphql
  Write subgraph file build/Cfx/abis/nest3price.json
  Write subgraph manifest build/subgraph.yaml
✔️ Write compiled subgraph to build/
  Add file to IPFS build/schema.graphql
                .. Qmcyq6NtNsFQpDMBGGfw1MJgVwVLFoUSfzRoAD8cfgiwBN
  Add file to IPFS build/Cfx/abis/nest3price.json
                .. QmZrs8QsXz1QYkJam5zGr2wKg8ndk7LPHdb8pem7PprFUU
  Add file to IPFS build/Cfx/Cfx.wasm
                .. QmbdGk98yK27roFWifKVk1gaQuAPmTE4Wv7zSJsEk3GhbD
✔️ Upload subgraph to IPFS

Build completed: QmRGp9BH45zTrRSm2trM3tsYMFMRCRWqJRx1uYyocykJoL

Deployed to https://thegraph.com/explorer/subgraph/samuelhbne/Cfx

Subgraph endpoints:
Queries (HTTP):     https://api.thegraph.com/subgraphs/name/samuelhbne/cfx
Subscriptions (WS): wss://api.thegraph.com/subgraphs/name/samuelhbne/cfx

sam@horizons450s
```

## Thegraph query

```console
{
  tokenPrices(first: 5) {
    id
    ethAmount
    erc20Amount
  }
}
```

## Local deployment

```console
sam@horizons450s:~/sam/eth/cfx-subgraph$ ./node_modules/.bin/graph create cfx --node http://127.0.0.1:8020
Created subgraph: cfx
sam@horizons450s:~/sam/eth/cfx-subgraph$ ./node_modules/.bin/graph deploy cfx --ipfs http://localhost:5001 --node http://127.0.0.1:8020
  Skip migration: Bump mapping apiVersion from 0.0.1 to 0.0.2
  Skip migration: Bump mapping apiVersion from 0.0.2 to 0.0.3
  Skip migration: Bump mapping apiVersion from 0.0.3 to 0.0.4
  Skip migration: Bump mapping specVersion from 0.0.1 to 0.0.2
✔️ Apply migrations
✔️ Load subgraph from subgraph.yaml
  Compile data source: Cfx => build/Cfx/Cfx.wasm
✔️ Compile subgraph
  Copy subgraph file build/schema.graphql
  Write subgraph file build/Cfx/abis/nest3price.json
  Write subgraph manifest build/subgraph.yaml
✔️ Write compiled subgraph to build/
  Add file to IPFS build/schema.graphql
                .. Qmcyq6NtNsFQpDMBGGfw1MJgVwVLFoUSfzRoAD8cfgiwBN
  Add file to IPFS build/Cfx/abis/nest3price.json
                .. QmZrs8QsXz1QYkJam5zGr2wKg8ndk7LPHdb8pem7PprFUU
  Add file to IPFS build/Cfx/Cfx.wasm
                .. QmbdGk98yK27roFWifKVk1gaQuAPmTE4Wv7zSJsEk3GhbD
✔️ Upload subgraph to IPFS

Build completed: QmRGp9BH45zTrRSm2trM3tsYMFMRCRWqJRx1uYyocykJoL

Deployed to http://127.0.0.1:8000/subgraphs/name/cfx/graphql

Subgraph endpoints:
Queries (HTTP):     http://127.0.0.1:8000/subgraphs/name/cfx
Subscriptions (WS): http://127.0.0.1:8001/subgraphs/name/cfx

sam@horizons450s:~/sam/eth/cfx-subgraph$
```
