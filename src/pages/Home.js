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

    const services_order1 = data.filter((data) => data.service_order % 2 === 0);
    const services_order2 = data.filter((data) => data.service_order % 2 === 1);


    // const [services_order1] = data && data?.filter(data => data.service_order === 1)
    // const [services_order2] = data && data?.filter(data => data.service_order === 2)
    // const [services_order3] = data && data?.filter(data => data.service_order === 3)
    // const [services_order4] = data && data?.filter(data => data.service_order === 4)
    // const [services_order5] = data && data?.filter(data => data.service_order === 5)
    // const [services_order6] = data && data?.filter(data => data.service_order === 6)
    // const [services_order7] = data && data?.filter(data => data.service_order === 7)

    // console.log(services_order1)

    return (
        <div className='container'>
            <Header title={data} />
            <div>
                {
                    data.map((data) => {
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