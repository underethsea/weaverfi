
// Imports:
import weaver from './index';
import { minABI } from './ABIs';
import { chains } from './chains';
import { defaultAddress } from './functions';

// Type Imports:
import type { Address } from './types';

// Initializations:
const wallet: Address = '0x5f5b35611f822a83578347e41fee3ca13a7a6436';

/* ========================================================================================================================================================================= */

// Tests Function:
const tests = async () => {

  // Project Test:
  // let projectBalance = await weaver.AVAX.getProjectBalance(wallet, 'lostworlds');
  // console.log('🕷️ ~ projectBalance', projectBalance);

  /* ================================================== */

  // Chain-Specific Tests:
  // let allProjectBalances = await weaver.ETH.getAllProjectBalances(wallet);
  // console.log('🕷️ ~ allProjectBalances', allProjectBalances);
  // let walletBalance = await weaver.ETH.getWalletBalance(wallet);
  // console.log('🕷️ ~ walletBalance', walletBalance);
  // let nftBalance = await weaver.ETH.getNFTBalance(wallet);
  // console.log('🕷️ ~ nftBalance', nftBalance);
  // let walletCheck = weaver.ETH.isAddress(wallet);
  // console.log('🕷️ ~ walletCheck', walletCheck);
  // let txCount = await weaver.ETH.getTXCount(wallet);
  // console.log('🕷️ ~ txCount', txCount);
  // let projects = weaver.ETH.getProjects();
  // console.log('🕷️ ~ projects', projects);
  // let tokens = weaver.ETH.getTokens();
  // console.log('🕷️ ~ tokens', tokens);
  // let queryResult = parseInt(await weaver.ETH.query(chains['eth'].usdc, minABI, 'balanceOf', [wallet]));
  // console.log('🕷️ ~ queryResult', queryResult);
  // let gasResult = await weaver.ETH.getGasEstimates();
  // console.log('🕷️ ~ gasResult', gasResult);

  /* ================================================== */

  // Generic Tests:
  // let allChains = weaver.getAllChains();
  // console.log('🕷️ ~ allChains', allChains);
  // let allChainInfo = weaver.getAllChainInfo();
  // console.log('🕷️ ~ allChainInfo', allChainInfo);
  // let allProjects = weaver.getAllProjects();
  // console.log('🕷️ ~ allProjects', allProjects);
  // let allTokens = weaver.getAllTokens();
  // console.log('🕷️ ~ allTokens', allTokens);
  // let allBalances = await weaver.getAllBalances(wallet);
  // console.log('🕷️ ~ allBalances', allBalances);

  /* ================================================== */

  // Domain Name Tests:
  // let ensAddress = await weaver.ETH.resolveENS('ncookie.eth');
  // console.log('🕷️ ~ ensAddress', ensAddress);
  // let ensDomain = await weaver.ETH.lookupENS(wallet);
  // console.log('🕷️ ~ ensDomain', ensDomain);
  // let ensAvatar = await weaver.ETH.fetchAvatarENS('ncookie.eth');
  // console.log('🕷️ ~ ensAvatar', ensAvatar);

  /* ================================================== */

  // Token Pricing Tests:
  // let allTokenPrices = await weaver.getAllTokenPrices();
  // console.log('🕷️ ~ allTokenPrices', allTokenPrices);
  // let nativeTokenPrices = await weaver.getNativeTokenPrices();
  // console.log('🕷️ ~ nativeTokenPrices', nativeTokenPrices);
  // let prices = weaver.fetchPrices();
  // console.log('🕷️ ~ prices', prices);
  // let chainPrices = weaver.ETH.fetchPrices();
  // console.log('🕷️ ~ chainPrices', chainPrices);
  // let tokenPrices = await weaver.ETH.getTokenPrices();
  // console.log('🕷️ ~ tokenPrices', tokenPrices);
  // let tokenPrice = await weaver.ETH.getTokenPrice(defaultAddress, 18);
  // console.log('🕷️ ~ tokenPrice', tokenPrice);

}

/* ========================================================================================================================================================================= */

// Running Tests:
tests();