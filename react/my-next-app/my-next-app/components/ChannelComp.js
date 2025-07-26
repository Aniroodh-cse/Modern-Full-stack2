'use client';
import { useRouter, useParams, useSearchParams, usePathname } from 'next/navigation';

const ChannelComp = () => {
  const router = useRouter();
  const params = useParams();
  const searchparams = useSearchParams();
  const path=usePathname();
  const country = searchparams.get("country");

  return (
    <>
      <h1>My Params are {params.channel}</h1>
      <p>My path is {path}</p>
      <p>My country is {country}</p>
      <button
        onClick={() => {
          router.push("/Myyoutubechannel?country=ind");
        }}
      >
        Click Name to go that page
      </button>
      <h1>The country name is :{country}</h1>
    </>
  );
};

export default ChannelComp;