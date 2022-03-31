pragma solidity 0.8.3;

import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract ObscurAFinalPass is ERC721URIStorage, Ownable {

  using Counters for Counters.Counter;
  Counters.Counter private _tokenIds;
  uint private totalSupply = 3;

  constructor() ERC721("ObscurA9 NFT", "OBSA9") {

  }

  function mintNFT(string memory tokenURI, address _to) 
    public onlyOwner returns (uint) {

    require(_tokenIds.current() <= totalSupply, "Max NFT minted");
    _tokenIds.increment();
    uint256 newItemId = _tokenIds.current();

    _mint(_to, newItemId);
    _setTokenURI(newItemId, tokenURI);

    return newItemId;
  }

}