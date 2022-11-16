import React from 'react'
import { Table, Image } from 'antd';
import { useDispatch, useSelector } from "react-redux";
import { getChartData } from '../../redux/reducer/charts';

function RecentOrders() {
    const { charts: { table } } = useSelector(state => state);

    const key = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    const columns = [
        { title: '№', render: () => (<>{`#${key[parseInt(Math.random() * 10)]}${key[parseInt(Math.random() * 10)]}${key[parseInt(Math.random() * 10)]}${key[parseInt(Math.random() * 10)]}${key[parseInt(Math.random() * 10)]}${key[parseInt(Math.random() * 10)]}`}</>) },
        {
            title: 'Product', render: (e) => (<>
                {
                    e.at(-1)?.product?.imageId ? <Image.PreviewGroup>
                        <Image style={{ borderRadius: '10px' }} width={50} src={`https://store-management-backend-app.herokuapp.com/api/v1/attachment/${e.at(-1)?.product?.imageId}`} />
                    </Image.PreviewGroup> : <img width={50} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSu4wPmtkbNqp2aKis3pgfC2azM9OHL7AdFSg&usqp=CAU' />
                }
                <span style={{ margin: '0 5px' }} className='product'>{e?.at(-1)?.product?.productName}</span>
            </>)
        },
        { title: 'Date', render: (e) => (<div className='created'>{e.at(-1)?.product?.createdAt ? e.at(-1)?.product?.createdAt?.substring(0, 10) : '####-##-##'}</div>) },
        { title: 'Price', render: (e) => (<div className='price'>$ {e?.at(-1)?.product?.price}</div>) },
        {
            title: 'Status', render: () => (<div className='status'>Pending</div>)
        },
    ];

    return (<div style={{ height: '90%' }}>
        <h2 className='padding'>Recent Orders</h2>
        <Table pagination={false} columns={columns} dataSource={table?.map(item => item.productList.map(e => e))} />
    </div>)
}
export default RecentOrders;