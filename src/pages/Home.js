import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { dataList } from '../redux/dataAction';
import { useSelector } from 'react-redux'
import Header from '../components/Header';

const Home = () => {
    const dispatch = useDispatch();
    let data = useSelector((state) => state?.servicesData);
    console.log(data)

    useEffect(() => {
        dispatch(dataList())
    }, [dispatch])


    const servicesData = data.sort((a, b) => {
        return a.service_order - b.service_order;
    });


    return (
        <div className='container'>
            <Header title={data} />
            <div>
                {
                    servicesData.map((data) => {
                        if (data.service_order % 2 === 1) {
                            return <div key={data.id} className={`services_order ${data.service_order}`}>
                                <div className='services_order_img'>
                                    <img src={data.icon} alt="" />
                                </div>
                                <div className='services_order_info'>
                                    <img src={data.photo} alt="" />
                                    <h1>{data.title}</h1>
                                    <p>{data.description1.replace(/<\/?[^>]+(>|$)/g, "")}</p>
                                    <p>{data.description2.replace(/<\/?[^>]+(>|$)/g, "")}</p>
                                </div>
                            </div>
                        } else {
                            return <div key={data.id} className={`services_order ${data.service_order}`}>
                            <div className='services_order_info'>
                                <img src={data.photo} alt="" />
                                <h1>{data.title}</h1>
                                <p>{data.description1.replace(/<\/?[^>]+(>|$)/g, "")}</p>
                                <p>{data.description2.replace(/<\/?[^>]+(>|$)/g, "")}</p>
                            </div>
                            <div className='services_order_img'>
                                <img src={data.icon} alt="" />
                            </div>
                        </div>
                        }
                    })
                }

            </div>
        </div>
    )
}

export default Home