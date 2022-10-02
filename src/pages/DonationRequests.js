
import React from 'react'
import { useEffect, useState } from 'react'
import { loadBlockchain } from '../components/BlockchainLoad';
import LoadingSpinner from '../components/LoadingSpinner';
import '../App.css'
import { SemanticClassificationFormat } from 'typescript';
import DonationList from '../components/DonationList';


const DonationRequests = () => {

    useEffect(() => {

        setIsLoading(true)

        async function fetchData() {
            const { accounts, donation } = await loadBlockchain()
            const donationids = await pronft.methods.usertonft(accounts[0]).call();
            console.log(donationids)
            const prod = [];
            for (let i = 0; i < donationids.length; i++) {
                const donationret = await donation.methods.idtoNFT(donationids[i]).call();
                const donationdata = JSON.parse(donationret);
                prod.push(donationdata)
            }
            setdonationsreq(prod)
        }
        try {
            fetchData()
        }
        catch (e) {
            alert(' error occured', e)
        }

        console.log(products)
        setIsLoading(false)

    }, [])

    const [isLoading, setIsLoading] = useState(true);
    const [donationsreq, setdonationsreq] = useState([])

    return (
        <>
            {isLoading ? <LoadingSpinner /> :
                <div >
                    <h3 >Pending Reqests For Donation</h3>
                    <DonationList donationsreq={donationsreq} />
                </div>}
        </>
    )
}

export default DonationRequests