import { useEffect, useState } from 'react';
import { ethers } from 'ethers';
// import { useRouter } from 'next/router'
import axios from 'axios';
import Web3Modal from 'web3modal';
import { useParams, useSearchParams, useNavigate } from 'react-router-dom';

import { marketplaceAddress } from '../../config';

import NFTMarketplace from '../../NFTMarketplace.json';
import { Card } from 'react-bootstrap';

export default function ResellNFT() {
  const [formInput, updateFormInput] = useState({ price: '', image: '' });
  const navigate = useNavigate();

  const [searchParams] = useSearchParams();
  const id = searchParams.get('id');
  const tokenURI = searchParams.get('tokenURI');

  const { image, price } = formInput;

  useEffect(() => {
    fetchNFT();
  }, [id]);

  async function fetchNFT() {
    if (!tokenURI) return;
    const meta = await axios.get(tokenURI);
    updateFormInput((state) => ({ ...state, image: meta.data.image }));
  }

  async function listNFTForSale() {
    if (!price) return;
    const web3Modal = new Web3Modal();
    const connection = await web3Modal.connect();
    const provider = new ethers.providers.Web3Provider(connection);
    const signer = provider.getSigner();

    const priceFormatted = ethers.utils.parseUnits(formInput.price, 'ether');
    let contract = new ethers.Contract(
      marketplaceAddress,
      NFTMarketplace.abi,
      signer,
    );
    let listingPrice = await contract.getListingPrice();

    listingPrice = listingPrice.toString();
    let transaction = await contract.resellToken(id, priceFormatted, {
      value: listingPrice,
    });
    await transaction.wait();

    navigate('/homeNFT');
  }

  return (
    <Card className=''>
      <Card.Body className=''>
        <input
          placeholder='Asset Price in Eth'
          className='mt-2 border rounded p-4'
          onChange={(e) =>
            updateFormInput({ ...formInput, price: e.target.value })
          }
        />
        {image && (
          <img
            className='rounded mt-4'
            width='350'
            src={image}
            alt='kartinka'
          />
        )}
        <button
          onClick={listNFTForSale}
          className='font-bold mt-4 bg-pink-500 text-white rounded p-4 shadow-lg'
        >
          List NFT
        </button>
      </Card.Body>
    </Card>
  );
}
