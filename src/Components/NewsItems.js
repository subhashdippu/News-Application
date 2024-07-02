import React from 'react'

const NewsItems = (props) => {
    return (
        <div >
            <div className="card" style={{ width: "25rem" }}>
                <img src={!props.image ? "https://plus.unsplash.com/premium_photo-1688561384438-bfa9273e2c00?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bmV3c3xlbnwwfHwwfHx8MA%3D%3D" : props.image} className="card-img-top" alt="..." />
                <span style={{ zIndex: "1" }}
                    class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                    {props.source}
                    <span class="visually-hidden">unread messages</span>
                </span>
                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text">{props.desc}</p>
                    <p className="card-text"><small className="text-body-secondary">{new Date(props.date).toGMTString()}</small></p>
                    <a href={props.url} target="_blanck" className="btn btn-primary">Read more</a>
                </div>
            </div>
        </div>
    )
}

export default NewsItems