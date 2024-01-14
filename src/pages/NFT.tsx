import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Button } from "@mui/material";
interface Nft {
  parsedMetadata: {
    image: string;
    name: string;
    description: string;
    owner: string;
  };
}
export default function NFT() {
  const { id } = useParams();
  const [nft, setNft] = useState<Nft | undefined>();
  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_ENDPOINT}/nft/${id}`)
      .then((response) => {
        console.log(response.data);
        setNft(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  return (
    <div className="flex flex-row justify-center items-center gap-3 p-3 w-full">
      <div className="border border-gray-800 flex justify-center">
        <img className="w-2/4" src={nft?.parsedMetadata?.image} />
      </div>
      <div className="w-1/3 border border-gray-800">
        <p>{nft?.parsedMetadata?.name}</p>
        <p>{nft?.parsedMetadata?.description}</p>
        <p>owner: {nft?.parsedMetadata?.owner}</p>
        <Button>buy now</Button>
      </div>
    </div>
  );
}
