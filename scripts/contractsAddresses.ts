const contractsAddresses: Record<
  string,
  {
    InterlockNetwork: `0x${string}`
  }
> = {
  sepolia: {
    InterlockNetwork: '0x4B4Ee17F14dFcA4d09fF3312f5733360134EA34D'
  },
  arbitrumSepolia: {
    InterlockNetwork: '0xdA942D8df10fdC9Ec2Ca7c65Cb909E656947428a'
  },
  baseSepolia: {
    InterlockNetwork: '0xb6D6D322Ce6a444deA76B354231CC8cFf30DE801'
  }
}

export default contractsAddresses
