
import React from 'react'
import { useEffect, useState } from 'react'
import { loadBlockchain } from '../components/BlockchainLoad';
import LoadingSpinner from '../components/LoadingSpinner';
import '../App.css'
import { SemanticClassificationFormat } from 'typescript';
import DonationList from '../components/DonationList';


const AllDonations = () => {

    // useEffect(() => {

    //     setIsLoading(true)

    //     async function fetchData() {
    //         const { accounts, donation } = await loadBlockchain()
    //         const donationids = await pronft.methods.usertonft(accounts[0]).call();
    //         console.log(donationids)
    //         const prod = [];
    //         for (let i = 0; i < donationids.length; i++) {
    //             const donationret = await donation.methods.idtoNFT(donationids[i]).call();
    //             const donationdata = JSON.parse(donationret);
    //             prod.push(donationdata)
    //         }
    //         setdonationsreq(prod)
    //     }
    //     try {
    //         fetchData()
    //     }
    //     catch (e) {
    //         alert(' error occured', e)
    //     }

    //     console.log(products)
    //     setIsLoading(false)

    // }, [])

    const [isLoading, setIsLoading] = useState(false);
    // const [donationsreq, setdonationsreq] = useState([])

    const [donationsreq, setdonationsreq] = useState([
        {
            id: 1, name: 'alex henari'
        }
        ,
        {
            id: 2, name: 'alex henari'
        },
        {
            id: 3, name: 'alex henari'
        },
        {
            id: 4, name: 'alex henari'
        },
        {
            id: 5, name: 'alex henari'
        }
    ])

    return (
        <>
            {isLoading ? <LoadingSpinner /> :
                <div className='donatel' >
                    <h3 >Donate On Followings</h3>
                    <DonationList donationsreq={donationsreq} />
                </div>}
        </>
    )
}

export default AllDonations