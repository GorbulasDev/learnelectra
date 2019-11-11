---
id: qt_safety
title: Staying Crypto Safe
---

# General Tips

Created by a Electra owner UnderTow, UnderTow has created a medium article to help in these tips. Link as follows: [QT Wallet Safety Tips](https://medium.com/electraproject/electra-safety-tips-dfd7fb4c9bfc)

## Staking Explained: A Few Answers to Questions About Staking Electra

_Disclaimer: This guide is used for informational purposes only. The Electra (ECA) Team is not responsible for what you do with your wallet. Please ask for help if you have any questions in this process._

## What is POS (Proof of Stake) as compared to POW (Proof of Work)?

The first Cryptocurrencies, notably Bitcoin, use Proof of Work (POW) as method to define who (which “miner”) can add the next block. That is, potential miners need to solve additional mathematical problems. This is called “difficulty” – the aim is to make the threshold for mining high enough so that not too many blocks are mined. Increasing difficulty off expensive coins leads to extreme waste of resources, notably electricity.

Proof of Stake tries to avoid the cost of solving mathematical puzzles by letting potential miners (here called stakers) leave a certain amount of coins “unspent” – that is not moved – in their wallet. Thus the name – they have to put their coins “at stake” – while they are staking, they can’t be sent.

## What is staking?

Staking is an automatic process of confirming transactions with already owned coins and the system rewards that by allocating a certain percentage of coins for leaving your coins in the wallet as a process of confirming transactions. You can learn more about staking visiting this link: [Update Staking Explained Guide](https://medium.com/electrafoundation/electras-proof-of-stake-v3-0e-explained-2400f5681731)

## My wallet is fully synced, but it still says – “Not staking because you don’t have mature coins”, what is going on?

For staking Electra, coins need to rest (not be moved) for a minimum of 12 hours. If all your coins are new in the wallet, have recently been moved to another address, or the one and only block has just staked, there are no coins “mature” in your wallet. You will not be staking then. You will need to wait 12 hours for your coins to mature again to start to stake. You can check the Wallet Info section to see if the wallet is staking or not.

This means that the coins in the wallet are still immature. Maturity for Electra requires 12 hours to start accumulating weight. After 12 hours, you are then staking. However, this process is reset once an input has been rewarded. This is shown by hovering your cursor over the information circle at the top left of the application.

## How long will it take until I get reward / stake?

This depends on how many coins you stake, and on how many other coins are staked by someone else. You get a reward every time you verify a block.

## What are the staking percentages? What’s my return on investment?

POS Rewards

*   year 1 (2018) —> 2.5%
*   year 2 —> 1.25%
*   year 3 —> 0.63%
*   year 4 —> 0.31%
*   year 5 —> 0.16%
*   year 6 —> 0.08%
*   year 7 —> 0.04%
*   year 8 —> 0.02%

## What does “Your Weight” mean (near the staking arrow)?

This is the total of CoinDays staking (All mature coins in your wallet – from one or more addresses – multiplied with their respective age) (This number + the number of coins in your wallet / 365 gives the pending reward).

In short, your weight is the combined number of inputs that are staking. Each input is like a “lottery” ticket to earn a reward. So, in theory, the bigger the input the better the “lottery” ticket is. If you have lots of small inputs (deposits) into an address you can combine them all by sending your coins back to the same address. This consolidates them into one input.

Keep in mind, transferring ECA, including combining inputs, resets your weight to zero.

Your weight will accumulate over a 30 day period, and once at 30 days, it’ll be at it’s maximum. Meaning, this will be the weight until your wallet stakes. To see when your next reward will be, please hover your mouse over the world icon if using the Desktop wallet. If using the QT wallet check the lower right-hand corner.

## What does "Network Weight" mean?

This is the accumulated weight of all the wallets on the network that are actually online (staking coins x age).

## What does “expected time” mean, how is it calculated, and is it reliable?

It’s an estimation on how much time might be needed until your wallet might stake next. The formula is (network weight / your weight = number of blocks until your weight would be sufficient / by number of expected blocks per day)

It’s not reliable – if you just started staking, the value will be to high. But even if your staking for quite some time, change in the network weight (wallets that have been offline coming online again – or vice versa) will influence it. If you have only relatively few coins in your wallet, it might effectively take significantly longer than shown, as much larger wallets will push ahead with their many coins – and if you have few very large blocks, it might actually take significantly shorter.

## Will I get the full reward even if I only get a block after quite some time?

Yes, reward is always calculated for the full CoinDays of the input that gets reward. I might, however, miss out on compound interest. (Staking reward for coins staked earlier).

## Do I need to have my computer running and online 24/7?

**YES.** While a high number of online full nodes (staking wallets) is essential for the smooth operation of the network, occasional downtimes do not affect your expected reward. Please note, you can only get reward when your wallet is open and running.

Disclaimer: This guide is used for informational purposes only. The Electra (ECA) Team is not responsible for what you do with your wallet. Please ask for help if you have any questions in this process. **Always backup your mnemonic phrase, passphrase, and wallet.dat.**
