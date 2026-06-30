import axios from 'axios'
import React, { useEffect,useState } from 'react'


function Morning() {

    useEffect(() => {
        fetch();
    }, []);

    const [data, setData] = useState([]);

    const fetch = async () => {
        const res = await axios.get(`https://jsonplaceholder.typicode.com/photos`);
        //console.log(res.data);
        setData(res.data)
    }

    return (
        <div className="row">
            <div className="col-md-12">
                {/*   Kitchen Sink */}
                <div className="panel panel-default">
                    <div className="panel-body">
                        <h1>Morning .... </h1>
                        <div className="row">
                            {
                                data.map((value, index) => {
                                    return (
                                        <div value={index} className="col-md-3">
                                            <div className="card" style={{ width: '100%' }}>
                                                <img className="card-img-top" src={value.url} alt="Card image" style={{ width: '100%' }} />
                                                <div className="card-body">
                                                    <p className="card-text">{value.title}</p>
                                                    <a href="#" className="btn btn-primary">See Profile</a>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
                {/* End  Kitchen Sink */}
            </div>
        </div>
    )
}

export default Morning