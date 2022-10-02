import '../App.css'
import React from 'react';
import { loadBlockchain } from '../components/BlockchainLoad';
import { useState, useEffect } from 'react';
import LoadingSpinner from '../components/LoadingSpinner';
import { useLocation } from 'react-router-dom';
import DonationData from '../components/DonationData';

const Donate = () => {
    //  const location = useLocation();

    // useEffect(() => {
    //     setIsLoading(true)
    //     async function fetchData() {
    //         const { accounts, donation } = await loadBlockchain()
    //         const donationret = await donation.methods.idtoNFT(location.state.data).call();
    //         const donationdata = JSON.parse(donationret.ddetails);

    //         const donationdet = {
    //             id: donationret.id,
    //             name: donationdata.name,
    //             address: donationdata.address,
    //             discription: donationdata.discription,
    //             walletac: donationret.account,
    //             time: donationret.time
    //         }

    //         setddata(donationdet)
    //     }
    //     try {
    //         fetchData()
    //     }
    //     catch (e) {
    //         alert(' error occured', e)
    //     }
    //     setIsLoading(false)
    // }, [])

    const [isLoading, setIsLoading] = useState(false);
    const [ddata, setddata] = useState({ id: '12', name: 'hefihfj', address: 'fjfjf jfnj fjnsdj djndjngjd gnjd', discription: 'gjofigjdfiojihjifhojijdh gndjgo kgng          kgkgn             gk', walletac: '124688999999', time: '2nd march 2022' })

    return (
        <>
            {isLoading ? <LoadingSpinner /> :
                <div className='foot'>
                    <DonationData ddata={ddata} />
                    <p>Donation Money: $5</p>
                    <button>Donate</button>
                </div>
            }
        </>
    )
}
export default Donate