type InterlockNetworkArgs = {
  params: {
    initialOwner: `0x${string}`
  }
  proxyAdminOwner?: `0x${string}`
}

const contractsArgs: Record<
  string,
  {
    InterlockNetwork: InterlockNetworkArgs
  }
> = {
  sepolia: {
    InterlockNetwork: {
      params: {
        initialOwner: '0x4599Bb9B14e1bea536C175206cf878fe07dE390F'
      },
      proxyAdminOwner: '0x4599Bb9B14e1bea536C175206cf878fe07dE390F'
    }
  },
  arbitrumSepolia: {
    InterlockNetwork: {
      params: {
        initialOwner: '0xf0Da5D820b6d0B9383Bb8e3ED7D3144b32B1349F'
      },
      proxyAdminOwner: '0xf0Da5D820b6d0B9383Bb8e3ED7D3144b32B1349F'
    }
  },
  baseSepolia: {
    InterlockNetwork: {
      params: {
        initialOwner: '0x7F0bc15E7D1e5c0a59a68d6F23F02933a051E7B4'
      },
      proxyAdminOwner: '0x7F0bc15E7D1e5c0a59a68d6F23F02933a051E7B4'
    }
  }
}

export default contractsArgs
